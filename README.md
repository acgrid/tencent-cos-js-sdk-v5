# cos-js-sdk-v5

腾讯云 COS JS SDK（[XML API](https://cloud.tencent.com/document/product/436/7751)）

[releases and changelog](https://github.com/tencentyun/cos-js-sdk-v5/releases)

## 本分支依赖迁移说明

### 迁移动机

本分支用于维护一个长期未同步上游的 fork。原 SDK 依赖的 `fast-xml-parser` 版本较旧，已经不适合继续作为浏览器端 XML 解析基础。本次迁移的目标是参考 `@acgrid/cos-nodejs-sdk-v5` 的依赖升级结果，在尽量保持原有 JS SDK API 和打包产物形态的前提下，升级 XML 解析依赖，并补齐一套可以使用私有 `.env`、自建 STS 服务和真实 COS 测试桶重复运行的验证流程。

### 主要改动

- 将运行时 XML 解析依赖升级到 `fast-xml-parser@^5.9.2`，并移除旧的 `patch-package` 补丁。
- 调整 webpack 4 构建，让 `fast-xml-parser` 及其现代语法依赖在浏览器包里经过 Babel 转译。
- 新增 `server:env`、`test:env` 和 `.env.example`，测试时可以通过私有 `.env` 提供 `SecretId`、`SecretKey`、`Bucket`、`Region`、`jssdkStsUrl` 等配置。
- 参考 NodeJS SDK 的测试 STS helper，给本地 STS 服务补齐 CORS 响应和 `OPTIONS` 预检支持。
- 修复旧式 `AppId`/短 bucket 兼容边界：当短 bucket 名本身以数字结尾时，显式传入的 `AppId` 仍会被正确拼接。
- 将依赖特殊云上资源的测试改为显式 opt-in，例如自定义域名和历史外部 retry fixture。
- 增加媒体处理测试 fixture 的环境变量配置，并修复非 `RawBody` 场景下 m3u8 文本成功返回不能合并响应元数据的问题。

### 测试手册

以下测试说明面向源码仓库 checkout，不属于安装后的 npm 包运行时功能。请使用专门的 COS 测试桶，不要使用生产桶。

```bash
cp .env.example .env.local

# 编辑 .env.local，至少填写：
# SecretId / SecretKey / Bucket / Region / ReplicationBucket / ReplicationRegion / Uin
# jssdkStsUrl=http://127.0.0.1:3300
```

如果没有现成的 STS 测试服务，可以使用本仓库 `server/sts.js`，或使用同级 NodeJS SDK 仓库里的 `test/sts-server.js`。使用 NodeJS SDK helper 时，需要让临时密钥覆盖 JS SDK 测试路径：

```bash
DOTENV_CONFIG_PATH=/path/to/tencent-cos-js-sdk-v5/.env.local \
STS_PORT=3300 \
STS_ALLOW_PREFIX=js-sdk/test/ \
node -r /path/to/tencent-cos-js-sdk-v5/node_modules/dotenv/config test/sts-server.js
```

然后在 JS SDK 仓库运行：

```bash
DOTENV_CONFIG_PATH=.env.local npm run test:env
```

可选的环境变量如下：

- `COS_RUN_BUCKET_DOMAIN_TESTS=1`：运行自定义域名测试，需要配置可用且已备案/审核通过的域名。
- `COS_BUCKET_DOMAIN_REST` / `COS_BUCKET_DOMAIN_WEBSITE`：自定义域名测试使用的真实域名。可以只配置其中一个。
- `COS_RUN_RETRY_TESTS=1`：运行历史外部 retry fixture 测试。
- `COS_RETRY_BUCKET` / `COS_RETRY_REGION`：历史 retry fixture 的桶和地域；默认值仍是上游旧测试桶。
- `COS_RAW_BODY_BUCKET` / `COS_RAW_BODY_REGION`：媒体处理 RawBody 测试使用的桶和地域；默认使用 `Bucket` / `Region`。
- `COS_RAW_BODY_MP4_KEY`：媒体处理 snapshot 测试使用的 mp4 对象，默认 `2221333test.mp4`。
- `COS_RAW_BODY_M3U8_KEY`：媒体处理 pm3u8 测试使用的 m3u8 对象，默认 `2视频/peachtest.mp4.m3u8`。
- `COS_MEDIA_FIXTURE_DIR`：本地媒体 fixture 目录，默认 `/tmp/cos-media-fixtures`。
- `COS_MEDIA_TARGET_BUCKET` / `COS_MEDIA_TARGET_REGION`：运行 `test/copy-media-fixtures.js` 时的上传目标；默认使用 `ReplicationBucket` / `ReplicationRegion`。
- `COS_NODEJS_SDK_PATH`：运行 `test/copy-media-fixtures.js` 时使用的 NodeJS SDK 路径，默认 `../tencent-cos-nodejs-sdk-v5`。

如果需要把本地生成的极小媒体 fixture 上传到测试桶，可以运行：

```bash
DOTENV_CONFIG_PATH=.env.local node test/copy-media-fixtures.js
```

### 测试结果与注意事项

本次迁移使用真实 COS 测试桶、本地 STS 服务和本地生成的无版权风险媒体 fixture 做过回归。已验证的关键结果包括：

```text
npm audit --omit=dev --json
# production dependencies: 0 vulnerabilities

npm run test:env -- --runTestsByPath test/test.js -t "putObject\\(\\) options.AppId|putObject\\(\\) BucketShortName" --coverage=false
# 2 passed

npm run test:env -- --runTestsByPath test/test.js -t "BucketDomain" --coverage=false
# 5 passed, with COS_RUN_BUCKET_DOMAIN_TESTS=1 and real domain env

npm run test:env -- --runTestsByPath test/test.js -t "RawBody error|returnBody" --coverage=false
# 8 passed

NODE_OPTIONS=--openssl-legacy-provider npm run build
# passed on the local Node.js 24 / webpack 4 environment
```

测试过程中遇到并处理了以下边界情况：`jssdkStsUrl` 可以对接 Node.js 自建 STS 服务，但浏览器/JSDOM 测试必须有 CORS 和 `OPTIONS` 预检响应；短 bucket 名如果本身以数字结尾，旧兼容逻辑会误判为完整 bucket；自定义域名测试必须使用真实、可审核通过的域名，不能继续使用上游占位域名；媒体处理测试需要真实可处理的 mp4/m3u8 对象；CI dataset 相关接口仍依赖额外数据集资源，当前只验证错误 body 解析。

基于以上验证，本分支对 `fast-xml-parser` 升级和浏览器打包兼容性有较高信心，适合继续作为本 fork 的依赖维护版本。但这不是腾讯云官方发布版本，且浏览器端业务对历史兼容行为更敏感。如果客户端代码依赖短 bucket/AppId 老写法，或业务路径依赖媒体处理、CI、私有部署域名 CSP 等能力，不建议直接将生产业务切换到本 fork；请先保留现有版本，针对真实浏览器、真实 STS、真实 bucket CORS 和业务用到的 COS/CI 接口做完整回归。

## Get started

### 一、前期准备

1. 首先，JS SDK 需要浏览器支持基本的 HTML5 特性，以便支持 ajax 上传文件和计算文件 md5 值。
2. 到 [COS对象存储控制台](https://console.cloud.tencent.com/cos) 创建存储桶，得到 Bucket（由bucketname-appid 组成，appid必须填入） 和 [Region（地域名称）](https://cloud.tencent.com/document/product/436/6224)
3. 到 [控制台密钥管理](https://console.cloud.tencent.com/capi) 获取您的项目 SecretId 和 SecretKey
4. 配置 CORS 规则，配置例子如下图：

![cors](demo/cors.png)

### 二、计算签名

由于签名计算放在前端会暴露 SecretId 和 SecretKey，我们把签名计算过程放在后端实现，前端通过 ajax 向后端获取签名结果，正式部署时请在后端加一层自己网站本身的权限检验。

这里提供 [NodeJS 的签名例子](https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/)，其他语言，请参照对应的 [XML SDK](https://cloud.tencent.com/document/product/436/6474)

### 三、上传例子

1. 创建 test.html，填入下面的代码，修改里面的 Bucket 和 Region。
2. 部署好后端的签名服务，并修改 getAuthorization 里的签名服务地址
3. 把 test.html 放在 Web 服务器下，然后在浏览器访问页面，测试文件上传

```html
<input id="file-selector" type="file">
<script src="dist/cos-js-sdk-v5.min.js"></script>
<script>
  
// 存储桶名称，由bucketname-appid 组成，appid必须填入，可以在COS控制台查看存储桶名称。 https://console.cloud.tencent.com/cos5/bucket
const Bucket = 'test-1250000000';
// 存储桶Region可以在COS控制台指定存储桶的概览页查看 https://console.cloud.tencent.com/cos5/bucket/ 
// 关于地域的详情见 https://cloud.tencent.com/document/product/436/6224
const Region = 'ap-guangzhou';

// 初始化实例，详情参考：https://cloud.tencent.com/document/product/436/11459

// 1、方式一：传入临时密钥
const cos = new COS({
  SecretId: 'your_tmpSecretId',
  SecretKey: 'your_tmpSecretKey',
  SecurityToken: 'your_sessionToken',
});

// 2、方式二：传入获取临时密钥回调
const cos = new COS({
    // getAuthorization 必选参数
    getAuthorization: function (options, callback) {
        // 初始化时不会调用，只有调用 cos 方法（例如 cos.putObject）时才会进入
        // 异步获取临时密钥
        // 服务端 JS 示例：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
        // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
        // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
        const url = 'http://example.com/server/sts'; // url 替换成您自己的后端服务
        const xhr = new XMLHttpRequest();
        let data = null;
        let credentials = null;
        xhr.open('GET', url, true);
        xhr.onload = function (e) {
            try {
               data = JSON.parse(e.target.responseText);
               credentials = data.credentials;
            } catch (e) {
            }
            if (!data || !credentials) {
              return console.error('credentials invalid:\n' + JSON.stringify(data, null, 2))
            };
            // 检查credentials格式
            console.log(credentials);
            callback({
              TmpSecretId: credentials.tmpSecretId,
              TmpSecretKey: credentials.tmpSecretKey,
              SecurityToken: credentials.sessionToken,
              // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
              StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
              ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000000
          });
        };
        xhr.send();
    }
});


var taskId;

// 监听选文件
document.getElementById('file-selector').onchange = function () {

    var file = this.files[0];
    if (!file) return;

    // 上传文件
    cos.uploadFile({
        Bucket: Bucket,
        Region: Region,
        Key: file.name,
        Body: file,
        SliceSize: 1024 * 1024, // 大于1mb才进行分块上传
        onTaskReady: function (tid) {
          taskId = tid;
        },
        onProgress: function (progressData) {
            console.log('上传中', JSON.stringify(progressData));
        },
    }, function (err, data) {
        console.log(err, data);
    });

    // 可使用队列暂停、重启任务
    // cos.pauseTask(taskId);

};
</script>
```


## webpack 引入方式

支持 webpack 打包的场景，可以用 npm 引入作为模块
```shell
npm i @acgrid/cos-js-sdk-v5 --save
```

## Start Demo
```
1. git clone tencent-cos-js-sdk-v5 至本地
2. cd cos-js-sdk-v5 进入根目录后执行：npm install
3. 修改 server 文件夹中 sts.js 或 sts.php 中的 secretId、secretKey、bucket、region 配置；注意allowPrefix和allowActions需要设置适当的权限
4. 修改 demo/index.html 中config的Bucket、Region 参数
5. npm run server # 用 node 启动服务
6. 浏览器输入 http://127.0.0.1:3000/ 即可进行 demo 演示
```

## 说明文档

[使用例子](demo/demo.js)

[快速入门](https://cloud.tencent.com/document/product/436/11459)

[接口文档](https://cloud.tencent.com/document/product/436/12260)
