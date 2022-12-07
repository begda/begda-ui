---
title: UFO简介
language:
    - js

categories:
    - UFO
    - lib

tags:
    - UFO
    - lib

description: 处理url地址的JS库。
---

[[toc]]

### 简介

这是一个专门处理 url 的库

### 安装

```shell
npm i ufo
```

### 导入

```js
// CommonJS
const { normalizeURL, joinURL } = require('ufo');

// ESM
import { normalizeURL, joinURL } from 'ufo';

// Deno
import { parseURL } from 'https://unpkg.com/ufo/dist/index.mjs';
```

### 使用

### `normalizeURL`

-   确保网址正确编码
-   确保路径名以斜杠开头
-   保留协议/主机（如果提供）

```ts
// Result: test?query=123%20123#hash,%20test
normalizeURL('test?query=123 123#hash, test');

// Result: http://localhost:3000/
normalizeURL('http://localhost:3000');
```

### `joinURL`

```ts
// Result: a/b/c
joinURL('a', '/b', '/c');
```

### `resolveURL`

```ts
// Result: http://foo.com/foo/bar/baz?test=123#token
resolveURL('http://foo.com/foo?test=123#token', 'bar', 'baz');
```

### `parseURL`

```ts
// Result: { protocol: 'http:', auth: '', host: 'foo.com', pathname: '/foo', search: '?test=123', hash: '#token' }
parseURL('http://foo.com/foo?test=123#token');

// Result: { pathname: 'foo.com/foo', search: '?test=123', hash: '#token' }
parseURL('foo.com/foo?test=123#token');

// Result: { protocol: 'https:', auth: '', host: 'foo.com', pathname: '/foo', search: '?test=123', hash: '#token' }
parseURL('foo.com/foo?test=123#token', 'https://');
```

### `withQuery`

```ts
// Result: /foo?page=a&token=secret
withQuery('/foo?page=a', { token: 'secret' });
```

### `getQuery`

```ts
// Result: { test: '123', unicode: '好' }
getQuery('http://foo.com/foo?test=123&unicode=%E5%A5%BD');
```

### `$URL`

实现 URL 接口并进行一些改进：

-   支持无方案和无主机网址
-   支持相对网址
-   保留尾部斜杠状态
-   解码和可变类属性（“协议”、“主机”、“身份验证”、“路径名”、“查询”、“哈希”）
-   独立于环境的一致 URL 解析器
-   独立于环境的一致编码
-   对主机编码的 Punycode 支持

### `withTrailingSlash`

确保 url 以尾部斜杠结尾

```ts
// Result: /foo/
withTrailingSlash('/foo');
```

```ts
// Result: /path/?query=true
withTrailingSlash('/path?query=true', true);
```

### `withoutTrailingSlash`

确保 url 不以尾部斜杠结尾

```ts
// Result: /foo
withoutTrailingSlash('/foo/');
```

```ts
// Result: /path?query=true
withoutTrailingSlash('/path/?query=true', true);
```

### `cleanDoubleSlashes`

确保 url 没有双斜杠（协议除外）

```ts
// Result: /foo/bar/
cleanDoubleSlashes('//foo//bar//');
// Result: http://example.com/analyze/http://localhost:3000/
cleanDoubleSlashes('http://example.com/analyze//http://localhost:3000//');
```

### `isSamePath`

检查两条路径是否相等。尾部斜杠和编码在比较之前进行规范化。

```ts
// Result: true
isSamePath('/foo', '/foo/');
```

### `isRelative`

检查路径是否以 `./` or `../`. 开始

```ts
// Result: true
isRelative('./foo');
```

### `withHttp`

确保是否包含 `http`

```ts
// Result: http://example.com
withHttp('https://example.com');
```

### `withHttps`

确保是否包含 `https`

```ts
// Result: https://example.com
withHttps('http://example.com');
```

### `withProtocol`

更改作为第二个参数传递的 url 协议

```ts
// Result: ftp://example.com
withProtocol('http://example.com', 'ftp://');
```

### `withoutProtocol`

删除 http 协议头

```ts
// Result: example.com
withoutProtocol('http://example.com');
```

### `isEqual`

比较两个 URL，无论其斜杠条件或编码如何：

```ts
// Result: true
isEqual('/foo', 'foo');
isEqual('foo/', 'foo');
isEqual('/foo bar', '/foo%20bar');

// Strict compare
// Result: false
isEqual('/foo', 'foo', { leadingSlash: true });
isEqual('foo/', 'foo', { trailingSlash: true });
isEqual('/foo bar', '/foo%20bar', { encoding: true });
```
