const Koa = require("koa");
const path = require("path");
const resource = require("koa-static");

import conditional from "koa-conditional-get";
import etag from "koa-etag";

//静态资源中间件
const app = new Koa();
const host = "localhost";
const port = 3000;

app.use(async (ctx, next) => {
  // 设置响应头Cache-Control 设置资源有效期为300秒
  ctx.set({
    "Cache-Control": "max-age=10",
  });
  await next();
});

app.use(conditional());
app.use(etag());

app.use(resource(path.join(__dirname, "./static")));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});
