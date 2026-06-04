# DNS 服务器分类参考

> 本项目收录的所有 DNS 服务器，按协议类型分类整理。
> 更新日期：2026-06-04

---

## 📡 协议说明

| 协议 | 全称 | 端口 | 说明 |
|------|------|------|------|
| **DoH** | DNS-over-HTTPS | 443 | 通过 HTTPS 加密 DNS 查询，支持浏览器测试 |
| **DoT** | DNS-over-TLS | 853 | 通过 TLS 加密 DNS 查询 |
| **DoQ** | DNS-over-QUIC | 853 / 784 | 通过 QUIC 协议加密 DNS 查询，更低延迟 |
| **UDP** | 传统 DNS | 53 | 传统非加密 DNS，浏览器无法测试 |

---

## 🏆 DoH + DoT + DoQ 全协议支持

| 名称 | IP 地址 | IPv6 | DoH 端点 | DoT 端点 | DoQ 端点 | 提供商 | 地区 |
|------|---------|------|----------|----------|----------|--------|------|
| Cloudflare | 1.1.1.1 | 2606:4700:4700::1111 | https://cloudflare-dns.com/dns-query | 1.1.1.1:853 | 1.1.1.1:853 | Cloudflare | 全球 |
| Cloudflare (备用) | 1.0.0.1 | 2606:4700:4700::1001 | https://cloudflare-dns.com/dns-query | 1.0.0.1:853 | 1.0.0.1:853 | Cloudflare | 全球 |
| Quad9 | 9.9.9.9 | 2620:fe::fe | https://dns.quad9.net/dns-query | 9.9.9.9:853 | 9.9.9.9:853 | Quad9 | 全球 |
| Quad9 (备用) | 149.112.112.112 | 2620:fe::9 | https://dns.quad9.net/dns-query | 149.112.112.112:853 | 149.112.112.112:853 | Quad9 | 全球 |
| AdGuard DNS | 94.140.14.14 | 2a10:50c0::ad1:ff | https://dns.adguard-dns.com/dns-query | 94.140.14.14:853 | 94.140.14.14:784 | AdGuard | 欧洲 |
| AdGuard DNS (备用) | 94.140.15.15 | 2a10:50c0::ad2:ff | https://dns.adguard-dns.com/dns-query | 94.140.15.15:853 | 94.140.15.15:784 | AdGuard | 欧洲 |
| NextDNS | 45.90.28.190 | 2a07:a8c0::c5:65e | https://dns.nextdns.io/c565e0 | 45.90.28.190:853 | 45.90.28.190:853 | NextDNS | 北美 |
| DNS.SB | 185.222.222.222 | 2a09:: | https://doh.dns.sb/dns-query | dot.sb:853 | 185.222.222.222:853 | DNS.SB | 全球 |
| DNS.SB (备用) | 45.11.45.11 | — | https://doh.dns.sb/dns-query | dot.sb:853 | 185.222.222.222:853 | DNS.SB | 全球 |

> **共 9 台服务器** 支持全部三种加密协议

---

## 🔵 DoH + DoT 支持

| 名称 | IP 地址 | IPv6 | DoH 端点 | DoT 端点 | 提供商 | 地区 |
|------|---------|------|----------|----------|--------|------|
| Google DNS | 8.8.8.8 | 2001:4860:4860::8888 | https://dns.google/dns-query | dns.google:853 | Google | 全球 |
| Google DNS (备用) | 8.8.4.4 | 2001:4860:4860::8844 | https://dns.google/dns-query | dns.google:853 | Google | 全球 |
| OpenDNS | 208.67.222.222 | 2620:119:35::35 | https://doh.opendns.com/dns-query | 208.67.222.222:853 | Cisco | 北美 |
| OpenDNS (备用) | 208.67.220.220 | 2620:119:53::53 | https://doh.opendns.com/dns-query | 208.67.220.220:853 | Cisco | 北美 |
| AdGuard (家庭保护) | 94.140.14.15 | 2a10:50c0::bad1:ff | https://dns-family.adguard-dns.com/dns-query | 94.140.14.15:853 | AdGuard | 欧洲 |
| Mullvad DNS | 194.242.2.2 | 2a07:e340::2 | https://dns.mullvad.net/dns-query | 194.242.2.2:853 | Mullvad | 欧洲 |
| UncensoredDNS | 91.239.100.100 | 2001:67c:28a4:: | https://unicast.censurfridns.dk/dns-query | 91.239.100.100:853 | UncensoredDNS | 欧洲 |
| CleanBrowsing (安全) | 185.228.168.9 | 2a0d:2a00:1::2 | https://doh.cleanbrowsing.org/doh/security-filter/ | 185.228.168.9:853 | CleanBrowsing | 北美 |
| CleanBrowsing (成人过滤) | 185.228.168.10 | 2a0d:2a00:1::3 | https://doh.cleanbrowsing.org/doh/adult-filter/ | 185.228.168.10:853 | CleanBrowsing | 北美 |
| CleanBrowsing (家庭) | 185.228.168.168 | 2a0d:2a00:1::1 | https://doh.cleanbrowsing.org/doh/family-filter/ | 185.228.168.168:853 | CleanBrowsing | 北美 |
| Verisign | 64.6.64.6 | 2620:74:1b::1:1 | https://doh.verisign.com/dns-query | 64.6.64.6:853 | Verisign | 北美 |
| DNSWatch | 84.200.69.80 | 2001:1608:10:25::1c04:b12f | https://dns.dns-over-https.com/dns-query | 84.200.69.80:853 | DNSWatch | 欧洲 |
| Comodo Secure | 8.26.56.26 | — | https://dns.aa.net.uk/dns-query | 8.26.56.26:853 | Comodo | 全球 |
| CZ.NIC | 193.17.47.1 | 2001:148f:ffff::1 | https://dns.odvr.nic.cz/dns-query | 193.17.47.1:853 | CZ.NIC | 欧洲 |
| Digitale Gesellschaft | 185.95.218.42 | 2a05:fc84::42 | https://dns.digitale-gesellschaft.ch/dns-query | 185.95.218.42:853 | Digitale Gesellschaft | 欧洲 |
| Digitalcourage | 46.182.19.48 | 2a02:2970:1000::19:48 | https://dns.digitalcourage.eu/dns-query | 46.182.19.48:853 | Digitalcourage | 欧洲 |
| 阿里 DNS | 223.5.5.5 | 2400:3200::1 | https://dns.alidns.com/dns-query | dns.alidns.com:853 | 阿里巴巴 | 中国 |
| 阿里 DNS (备用) | 223.6.6.6 | 2400:3200:baba::1 | https://dns.alidns.com/dns-query | dns.alidns.com:853 | 阿里巴巴 | 中国 |
| OneDNS | 117.50.10.10 | 2402:4e00:1::1 | https://doh.onedns.net/dns-query | 117.50.10.10:853 | OneDNS | 中国 |

> **共 19 台服务器** 支持 DoH + DoT

---

## 🟢 DoH 仅支持

| 名称 | IP 地址 | IPv6 | DoH 端点 | 提供商 | 地区 |
|------|---------|------|----------|--------|------|
| Yandex DNS | 77.88.8.8 | 2a02:6b8::feed:0ff | https://common.dot.dns.yandex.net/dns-query | Yandex | 欧洲 |
| DNSPod (腾讯) | 119.29.29.29 | — | https://doh.pub/dns-query | 腾讯 DNSPod | 中国 |

> **共 2 台服务器** 支持 DoH，暂未确认 DoT/DoQ 支持

---

## 🟣 DoT 仅支持

| 名称 | IP 地址 | IPv6 | DoT 端点 | 提供商 | 地区 |
|------|---------|------|----------|--------|------|
| 114DNS | 114.114.114.114 | 2400:da00::6666 | 114.114.114.114:853 | 114DNS | 中国 |
| 114DNS (备用) | 114.114.115.115 | — | 114.114.115.115:853 | 114DNS | 中国 |
| 百度 DNS | 180.76.76.76 | — | 180.76.76.76:853 | 百度 | 中国 |

> **共 3 台服务器** 仅支持 DoT（无 DoH 端点，无法在浏览器测速）

---

## ⚪ 传统 UDP DNS（仅参考，无法在浏览器测试）

| 名称 | IP 地址 | 提供商 | 地区 |
|------|---------|--------|------|
| 360 DNS (DNSPod) | 101.226.4.6 | 360 / DNSPod | 中国 |
| OneDNS (备用) | 52.80.52.52 | OneDNS | 中国 |
| 中国电信 DNS | 202.96.209.133 | 中国电信 | 中国 |
| 中国联通 DNS | 210.22.84.3 | 中国联通 | 中国 |
| 中国移动 DNS | 211.136.112.50 | 中国移动 | 中国 |
| Comodo (主) | 8.26.56.26 | Comodo | 北美 |
| Comodo (辅) | 8.20.247.20 | Comodo | 北美 |
| Hurricane Electric | 74.82.42.42 | Hurricane Electric | 北美 |
| CenturyLink | 205.171.3.65 | CenturyLink | 北美 |
| Norton ConnectSafe | 199.85.126.10 | Norton | 北美 |
| Level3 | 209.244.0.3 | Level3 (CenturyLink) | 北美 |
| Level3 (备用) | 209.244.0.4 | Level3 (CenturyLink) | 北美 |
| Cox Communications | 68.105.28.11 | Cox | 北美 |
| SafeDNS | 195.46.39.39 | SafeDNS | 北美 |
| SWITCH | 130.59.31.248 | SWITCH | 欧洲 |
| Freenom World | 80.80.80.80 | Freenom | 欧洲 |
| GreenTeam | 81.218.119.11 | GreenTeam | 欧洲 |
| Fundacio puntCAT | 109.69.8.51 | puntCAT | 欧洲 |
| Bahnhof | 194.17.185.100 | Bahnhof | 欧洲 |
| Singapore (SingNet) | 165.21.83.88 | SingNet | 亚洲 |
| HKUST DNS | 143.89.80.10 | HKUST | 亚洲 |
| 韩国 KT DNS | 168.126.63.1 | KT Korea | 亚洲 |
| 韩国 KT (备用) | 168.126.63.2 | KT Korea | 亚洲 |
| 日本 IIJ DNS | 203.154.192.7 | IIJ Japan | 亚洲 |
| 日本 IIJ (备用) | 210.138.175.1 | IIJ Japan | 亚洲 |
| 台湾 HiNet DNS | 168.95.1.1 | HiNet | 亚洲 |
| 台湾 HiNet (备用) | 168.95.192.1 | HiNet | 亚洲 |
| 印度 BBNL DNS | 218.248.255.242 | BBNL India | 亚洲 |
| 澳大利亚 Telstra | 139.130.4.4 | Telstra | 亚洲 |
| 新西兰 Spark | 210.55.5.1 | Spark NZ | 亚洲 |

> **共 30 台服务器** 仅支持传统 UDP DNS（浏览器无法测试，仅供参考）

---

## 📊 统计汇总

| 类别 | 数量 |
|------|:----:|
| DoH + DoT + DoQ 全协议 | 9 |
| DoH + DoT | 19 |
| DoH 仅支持 | 2 |
| DoT 仅支持 | 3 |
| 传统 UDP（参考） | 30 |
| **合计** | **63** |

---

## 🔗 快速参考

### 常用 DoH 端点

```
# 全球
https://cloudflare-dns.com/dns-query        # Cloudflare
https://dns.google/dns-query                # Google
https://dns.quad9.net/dns-query             # Quad9
https://doh.opendns.com/dns-query           # OpenDNS
https://dns.adguard-dns.com/dns-query       # AdGuard
https://doh.dns.sb/dns-query                # DNS.SB
https://dns.nextdns.io/c565e0              # NextDNS

# 中国
https://dns.alidns.com/dns-query            # 阿里 DNS
https://doh.pub/dns-query                   # DNSPod (腾讯)
https://doh.onedns.net/dns-query            # OneDNS
```

### 常用 DoT 端点

```
1.1.1.1:853              # Cloudflare
dns.google:853           # Google
9.9.9.9:853              # Quad9
dns.alidns.com:853       # 阿里 DNS
114.114.114.114:853      # 114DNS
```

### 常用 DoQ 端点

```
1.1.1.1:853              # Cloudflare
9.9.9.9:853              # Quad9
94.140.14.14:784         # AdGuard
45.90.28.190:853         # NextDNS
```
