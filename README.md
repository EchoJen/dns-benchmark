# DNS 全球测速

🌐 基于 DNS-over-HTTPS (DoH) 的 DNS 服务器延迟测试工具。

## 功能

- 测试全球 30+ 个公共 DNS 服务器的延迟
- 支持 IPv4 / IPv6 DNS 服务器
- 使用 DNS-over-HTTPS (DoH) 测量真实解析延迟
- 自动缓存结果，每 24 小时刷新
- 支持按名称、IP、延迟、提供商排序
- 支持按地区筛选（全球 / 中国 / 北美 / 欧洲 / 亚洲）
- 支持搜索过滤
- 纯前端，无需后端服务器

## 使用方法

直接用浏览器打开 `index.html` 即可使用，或部署到任何静态托管服务。

### 在线使用

直接访问 GitHub Pages: `https://<你的用户名>.github.io/dns-benchmark/`

### 本地使用

```bash
# 克隆仓库
git clone https://github.com/<你的用户名>/dns-benchmark.git

# 直接用浏览器打开 index.html
open index.html
```

## 技术原理

- 使用 `fetch()` 向 DNS-over-HTTPS (DoH) 端点发送 DNS 查询请求
- 测量请求往返时间 (RTT) 作为延迟指标
- 使用 `localStorage` 缓存测速结果
- 纯前端实现，无后端依赖

## 贡献

欢迎提交 Issue 或 PR 来添加更多 DNS 服务器或改进功能。
