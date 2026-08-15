import assert from "node:assert/strict";
import worker from "../dist/server/index.js";

const response = await worker.fetch(new Request("https://example.test/"), {}, {});
const html = await response.text();

assert.equal(response.headers.get("content-type"), "text/html; charset=utf-8");
assert.match(html, /<html lang="zh-CN">/);
assert.match(html, /--cjk-font:/);
assert.match(html, /PingFang SC/);
assert.match(html, /Microsoft YaHei/);
assert.ok(html.includes("Agent 创意系统"));
assert.ok(!html.includes("�"));

console.log("CJK rendering contract passed");
