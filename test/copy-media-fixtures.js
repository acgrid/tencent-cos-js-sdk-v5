#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var posix = path.posix;

require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH || path.resolve(process.cwd(), '.env'),
});

var NODE_SDK_PATH = process.env.COS_NODEJS_SDK_PATH || path.resolve(__dirname, '../../tencent-cos-nodejs-sdk-v5');
var COS = require(NODE_SDK_PATH);

var config = {
  SecretId: process.env.SecretId,
  SecretKey: process.env.SecretKey,
  Bucket: process.env.COS_MEDIA_TARGET_BUCKET || process.env.ReplicationBucket || process.env.Bucket,
  Region: process.env.COS_MEDIA_TARGET_REGION || process.env.ReplicationRegion || process.env.Region,
};

var fixtureDir = path.resolve(process.env.COS_MEDIA_FIXTURE_DIR || '/tmp/cos-media-fixtures');
var mp4Key = process.env.COS_RAW_BODY_MP4_KEY || '2221333test.mp4';
var m3u8Key = process.env.COS_RAW_BODY_M3U8_KEY || '2视频/peachtest.mp4.m3u8';

function assertConfig() {
  var missing = Object.keys(config).filter(function (key) {
    return !config[key];
  });
  if (missing.length) {
    throw new Error('Missing env: ' + missing.join(', '));
  }
  if (!fs.existsSync(fixtureDir)) {
    throw new Error('Fixture dir not found: ' + fixtureDir);
  }
}

function getContentType(filePath) {
  var ext = path.extname(filePath).toLowerCase();
  if (ext === '.mp4') return 'video/mp4';
  if (ext === '.m3u8') return 'application/vnd.apple.mpegurl';
  if (ext === '.ts') return 'video/mp2t';
  return 'application/octet-stream';
}

function parseM3u8Segments(filePath, key) {
  var dir = posix.dirname(key);
  return fs
    .readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map(function (line) {
      return line.trim();
    })
    .filter(function (line) {
      return line && line[0] !== '#' && !/^https?:\/\//i.test(line);
    })
    .map(function (line) {
      return {
        filePath: path.join(fixtureDir, line),
        key: dir === '.' ? line : posix.join(dir, line),
      };
    });
}

function getFixtures() {
  var m3u8Path = path.join(fixtureDir, path.basename(m3u8Key));
  var fixtures = [
    {
      filePath: path.join(fixtureDir, path.basename(mp4Key)),
      key: mp4Key,
    },
    {
      filePath: m3u8Path,
      key: m3u8Key,
    },
  ].concat(parseM3u8Segments(m3u8Path, m3u8Key));

  var seen = {};
  return fixtures.filter(function (item) {
    var id = item.key + '\n' + item.filePath;
    if (seen[id]) return false;
    seen[id] = true;
    if (!fs.existsSync(item.filePath)) {
      throw new Error('Fixture file not found: ' + item.filePath);
    }
    return true;
  });
}

function putObject(cos, item) {
  var stat = fs.statSync(item.filePath);
  return new Promise(function (resolve, reject) {
    cos.putObject(
      {
        Bucket: config.Bucket,
        Region: config.Region,
        Key: item.key,
        Body: fs.createReadStream(item.filePath),
        ContentLength: stat.size,
        ContentType: getContentType(item.filePath),
      },
      function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve({
            key: item.key,
            size: stat.size,
            etag: data && data.ETag,
          });
        }
      },
    );
  });
}

async function main() {
  assertConfig();
  var cos = new COS({
    SecretId: config.SecretId,
    SecretKey: config.SecretKey,
  });
  var fixtures = getFixtures();

  console.log('Uploading media fixtures');
  console.log('  sdk:', NODE_SDK_PATH);
  console.log('  dir:', fixtureDir);
  console.log('  target:', config.Bucket + ' / ' + config.Region);

  for (var i = 0; i < fixtures.length; i++) {
    var result = await putObject(cos, fixtures[i]);
    console.log('  ok:', result.key, '(' + result.size + ' bytes)');
  }
}

main().catch(function (err) {
  console.error(err && err.stack ? err.stack : err);
  process.exitCode = 1;
});
