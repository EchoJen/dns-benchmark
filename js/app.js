// ============ DNS 服务器数据库 ============
const DNS_SERVERS = [
    // === 全球公共 DNS ===
    { name: 'Cloudflare', ip: '1.1.1.1', ipv6: '2606:4700:4700::1111', doh: 'https://cloudflare-dns.com/dns-query', provider: 'Cloudflare', region: '全球' },
    { name: 'Cloudflare (备用)', ip: '1.0.0.1', ipv6: '2606:4700:4700::1001', doh: 'https://cloudflare-dns.com/dns-query', provider: 'Cloudflare', region: '全球' },
    { name: 'Google DNS', ip: '8.8.8.8', ipv6: '2001:4860:4860::8888', doh: 'https://dns.google/dns-query', provider: 'Google', region: '全球' },
    { name: 'Google DNS (备用)', ip: '8.8.4.4', ipv6: '2001:4860:4860::8844', doh: 'https://dns.google/dns-query', provider: 'Google', region: '全球' },
    { name: 'Quad9', ip: '9.9.9.9', ipv6: '2620:fe::fe', doh: 'https://dns.quad9.net/dns-query', provider: 'Quad9', region: '全球' },
    { name: 'Quad9 (备用)', ip: '149.112.112.112', ipv6: '2620:fe::9', doh: 'https://dns.quad9.net/dns-query', provider: 'Quad9', region: '全球' },
    { name: 'OpenDNS', ip: '208.67.222.222', ipv6: '2620:119:35::35', doh: 'https://doh.opendns.com/dns-query', provider: 'Cisco', region: '北美' },
    { name: 'OpenDNS (备用)', ip: '208.67.220.220', ipv6: '2620:119:53::53', doh: 'https://doh.opendns.com/dns-query', provider: 'Cisco', region: '北美' },
    { name: 'AdGuard DNS', ip: '94.140.14.14', ipv6: '2a10:50c0::ad1:ff', doh: 'https://dns.adguard-dns.com/dns-query', provider: 'AdGuard', region: '欧洲' },
    { name: 'AdGuard DNS (备用)', ip: '94.140.15.15', ipv6: '2a10:50c0::ad2:ff', doh: 'https://dns.adguard-dns.com/dns-query', provider: 'AdGuard', region: '欧洲' },
    { name: 'AdGuard (家庭保护)', ip: '94.140.14.15', ipv6: '2a10:50c0::bad1:ff', doh: 'https://dns-family.adguard-dns.com/dns-query', provider: 'AdGuard', region: '欧洲' },
    { name: 'Mullvad DNS', ip: '194.242.2.2', ipv6: '2a07:e340::2', doh: 'https://dns.mullvad.net/dns-query', provider: 'Mullvad', region: '欧洲' },
    { name: 'Comodo Secure', ip: '8.26.56.26', doh: 'https://dns.aa.net.uk/dns-query', provider: 'Comodo', region: '全球' },
    { name: 'UncensoredDNS', ip: '91.239.100.100', ipv6: '2001:67c:28a4::', doh: 'https://unicast.censurfridns.dk/dns-query', provider: 'UncensoredDNS', region: '欧洲' },
    { name: 'DNS.SB', ip: '185.222.222.222', ipv6: '2a09::', doh: 'https://doh.dns.sb/dns-query', provider: 'DNS.SB', region: '全球' },
    { name: 'DNS.SB (备用)', ip: '45.11.45.11', doh: 'https://doh.dns.sb/dns-query', provider: 'DNS.SB', region: '全球' },
    { name: 'CleanBrowsing (安全)', ip: '185.228.168.9', ipv6: '2a0d:2a00:1::2', doh: 'https://doh.cleanbrowsing.org/doh/security-filter/', provider: 'CleanBrowsing', region: '北美' },
    { name: 'CleanBrowsing (成人过滤)', ip: '185.228.168.10', ipv6: '2a0d:2a00:1::3', doh: 'https://doh.cleanbrowsing.org/doh/adult-filter/', provider: 'CleanBrowsing', region: '北美' },
    { name: 'CleanBrowsing (家庭)', ip: '185.228.168.168', ipv6: '2a0d:2a00:1::1', doh: 'https://doh.cleanbrowsing.org/doh/family-filter/', provider: 'CleanBrowsing', region: '北美' },
    { name: 'NextDNS', ip: '45.90.28.190', ipv6: '2a07:a8c0::c5:65e', doh: 'https://dns.nextdns.io/c565e0', provider: 'NextDNS', region: '北美' },
    { name: 'Yandex DNS', ip: '77.88.8.8', ipv6: '2a02:6b8::feed:0ff', doh: 'https://common.dot.dns.yandex.net/dns-query', provider: 'Yandex', region: '欧洲' },
    { name: 'Yandex DNS (备用)', ip: '77.88.8.1', ipv6: '2a02:6b8:0:1::feed:0ff', provider: 'Yandex', region: '欧洲' },
    { name: 'Verisign', ip: '64.6.64.6', ipv6: '2620:74:1b::1:1', doh: 'https://doh.verisign.com/dns-query', provider: 'Verisign', region: '北美' },
    { name: 'Bahnhof', ip: '194.17.185.100', ipv6: '2a03:5bc0:1:d00::100', provider: 'Bahnhof', region: '欧洲' },
    { name: 'DNSWatch', ip: '84.200.69.80', ipv6: '2001:1608:10:25::1c04:b12f', doh: 'https://dns.dns-over-https.com/dns-query', provider: 'DNSWatch', region: '欧洲' },

    // === 中国 DNS ===
    { name: '阿里 DNS', ip: '223.5.5.5', ipv6: '2400:3200::1', doh: 'https://dns.alidns.com/dns-query', provider: '阿里巴巴', region: '中国' },
    { name: '阿里 DNS (备用)', ip: '223.6.6.6', ipv6: '2400:3200:baba::1', doh: 'https://dns.alidns.com/dns-query', provider: '阿里巴巴', region: '中国' },
    { name: 'DNSPod (腾讯)', ip: '119.29.29.29', doh: 'https://doh.pub/dns-query', provider: '腾讯 DNSPod', region: '中国' },
    { name: '114DNS', ip: '114.114.114.114', ipv6: '2400:da00::6666', provider: '114DNS', region: '中国' },
    { name: '114DNS (备用)', ip: '114.114.115.115', provider: '114DNS', region: '中国' },
    { name: '百度 DNS', ip: '180.76.76.76', provider: '百度', region: '中国' },
    { name: '360 DNS (DNSPod)', ip: '101.226.4.6', provider: '360 / DNSPod', region: '中国' },
    { name: 'OneDNS', ip: '117.50.10.10', ipv6: '2402:4e00:1::1', doh: 'https://doh.onedns.net/dns-query', provider: 'OneDNS', region: '中国' },
    { name: 'OneDNS (备用)', ip: '52.80.52.52', provider: 'OneDNS', region: '中国' },
    { name: '中国电信 DNS', ip: '202.96.209.133', provider: '中国电信', region: '中国' },
    { name: '中国联通 DNS', ip: '210.22.84.3', provider: '中国联通', region: '中国' },
    { name: '中国移动 DNS', ip: '211.136.112.50', provider: '中国移动', region: '中国' },

    // === 北美 DNS ===
    { name: 'Comodo (主)', ip: '8.26.56.26', provider: 'Comodo', region: '北美' },
    { name: 'Comodo (辅)', ip: '8.20.247.20', provider: 'Comodo', region: '北美' },
    { name: 'Hurricane Electric', ip: '74.82.42.42', ipv6: '2001:470:20::2', provider: 'Hurricane Electric', region: '北美' },
    { name: 'CenturyLink', ip: '205.171.3.65', ipv6: '2001:1890:1c::1', provider: 'CenturyLink', region: '北美' },
    { name: 'Norton ConnectSafe', ip: '199.85.126.10', provider: 'Norton', region: '北美' },
    { name: 'Level3', ip: '209.244.0.3', provider: 'Level3 (CenturyLink)', region: '北美' },
    { name: 'Level3 (备用)', ip: '209.244.0.4', provider: 'Level3 (CenturyLink)', region: '北美' },
    { name: 'Cisco OpenDNS (安全)', ip: '208.67.222.123', doh: 'https://doh.opendns.com/dns-query', provider: 'Cisco', region: '北美' },
    { name: 'Cox Communications', ip: '68.105.28.11', provider: 'Cox', region: '北美' },
    { name: 'SafeDNS', ip: '195.46.39.39', provider: 'SafeDNS', region: '北美' },

    // === 欧洲 DNS ===
    { name: 'CZ.NIC', ip: '193.17.47.1', ipv6: '2001:148f:ffff::1', doh: 'https://dns.odvr.nic.cz/dns-query', provider: 'CZ.NIC', region: '欧洲' },
    { name: 'SWITCH', ip: '130.59.31.248', ipv6: '2001:620:0:ff::2', provider: 'SWITCH', region: '欧洲' },
    { name: 'Freenom World', ip: '80.80.80.80', ipv6: '2a00:5a60::ad1:0ff', provider: 'Freenom', region: '欧洲' },
    { name: 'GreenTeam', ip: '81.218.119.11', ipv6: '2001:4d88:1:1:0:1:0:1', provider: 'GreenTeam', region: '欧洲' },
    { name: 'Digitale Gesellschaft', ip: '185.95.218.42', ipv6: '2a05:fc84::42', doh: 'https://dns.digitale-gesellschaft.ch/dns-query', provider: 'Digitale Gesellschaft', region: '欧洲' },
    { name: 'Digitalcourage', ip: '46.182.19.48', ipv6: '2a02:2970:1000::19:48', doh: 'https://dns.digitalcourage.eu/dns-query', provider: 'Digitalcourage', region: '欧洲' },
    { name: 'Fundacio puntCAT', ip: '109.69.8.51', provider: 'puntCAT', region: '欧洲' },
    { name: 'DNS.WATCH', ip: '84.200.69.80', ipv6: '2001:1608:10:25::1c04:b12f', provider: 'DNS.WATCH', region: '欧洲' },

    // === 亚洲 / 其他地区 DNS ===
    { name: 'Singapore (SG)', ip: '165.21.83.88', provider: 'SingNet', region: '亚洲' },
    { name: 'HKUST DNS', ip: '143.89.80.10', provider: 'HKUST', region: '亚洲' },
    { name: '韩国 DNS (KT)', ip: '168.126.63.1', provider: 'KT Korea', region: '亚洲' },
    { name: '韩国 DNS (备用)', ip: '168.126.63.2', provider: 'KT Korea', region: '亚洲' },
    { name: '日本 DNS (IIJ)', ip: '203.154.192.7', provider: 'IIJ Japan', region: '亚洲' },
    { name: '日本 DNS (备用)', ip: '210.138.175.1', provider: 'IIJ Japan', region: '亚洲' },
    { name: '台湾 DNS (HiNet)', ip: '168.95.1.1', provider: 'HiNet', region: '亚洲' },
    { name: '台湾 DNS (备用)', ip: '168.95.192.1', provider: 'HiNet', region: '亚洲' },
    { name: '印度 DNS (BBNL)', ip: '218.248.255.242', provider: 'BBNL India', region: '亚洲' },
    { name: '澳大利亚 DNS', ip: '139.130.4.4', provider: 'Telstra', region: '亚洲' },
    { name: '新西兰 DNS', ip: '210.55.5.1', provider: 'Spark NZ', region: '亚洲' },
];

// ============ 配置 ============
const CACHE_KEY = 'dns_benchmark_results';
const CACHE_TIME_KEY = 'dns_benchmark_timestamp';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 小时
const TIMEOUT_MS = 5000; // 5 秒超时
const CONCURRENCY = 6; // 并发数

let sortField = 'latency';
let sortAsc = true;
let isTesting = false;

// ============ DoH 延迟测试 ============
function measureLatency(server) {
    return new Promise((resolve) => {
        if (!server.doh) {
            resolve({ server, latency: null, online: false, error: '无 DoH 端点' });
            return;
        }

        const dohUrl = server.doh;
        const dnsQuery = new URLSearchParams({
            name: 'example.com',
            type: 'A',
        });
        const url = dohUrl + (dohUrl.includes('?') ? '&' : '?') + dnsQuery.toString();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        const start = performance.now();

        fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/dns-json' },
            signal: controller.signal,
            mode: 'cors',
        })
            .then(res => {
                clearTimeout(timeoutId);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                const elapsed = performance.now() - start;
                resolve({ server, latency: Math.round(elapsed), online: true, error: null });
            })
            .catch(err => {
                clearTimeout(timeoutId);
                // 没有 DoH 或 CORS 失败，尝试 HTTP ping
                if (err.name === 'AbortError') {
                    resolve({ server, latency: null, online: false, error: '超时' });
                } else if (err.message.includes('CORS') || err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                    // 回退：尝试通过 IP 端口测试
                    fallbackPing(server).then(resolve);
                } else {
                    resolve({ server, latency: null, online: false, error: err.message });
                }
            });
    });
}

// 回退：HTTP ping 测试
function fallbackPing(server) {
    return new Promise((resolve) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const start = performance.now();

        fetch('http://' + server.ip, {
            method: 'HEAD',
            signal: controller.signal,
            mode: 'no-cors',
        })
            .then(() => {
                clearTimeout(timeoutId);
                const elapsed = performance.now() - start;
                resolve({ server, latency: Math.round(elapsed), online: true, error: null });
            })
            .catch(() => {
                clearTimeout(timeoutId);
                // 尝试 DNS-over-TLS 端口
                const controller2 = new AbortController();
                const timeoutId2 = setTimeout(() => controller2.abort(), 3000);
                const start2 = performance.now();
                fetch('https://' + server.ip + ':853', { method: 'HEAD', signal: controller2.signal, mode: 'no-cors' })
                    .then(() => {
                        clearTimeout(timeoutId2);
                        const elapsed = performance.now() - start2;
                        resolve({ server, latency: Math.round(elapsed), online: true, error: null });
                    })
                    .catch(() => {
                        clearTimeout(timeoutId2);
                        resolve({ server, latency: null, online: false, error: '无法连接' });
                    });
            });
    });
}

// ============ 批量测试（并发控制）============
async function runBenchmark() {
    if (isTesting) return;
    isTesting = true;

    const btn = document.getElementById('btnRefresh');
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⏳</span> 测试中…';

    const progressSection = document.getElementById('progressSection');
    progressSection.style.display = 'block';

    const results = [];
    const total = DNS_SERVERS.length;
    let completed = 0;

    updateProgress(completed, total, '准备中…');

    // 分批并发
    const queue = [...DNS_SERVERS];
    async function worker() {
        while (queue.length > 0) {
            const server = queue.shift();
            const id = server.name + ' (' + server.ip + ')';
            updateProgress(completed, total, id);
            const result = await measureLatency(server);
            results.push(result);
            completed++;
            updateProgress(completed, total, id);
        }
    }

    const workers = Array.from({ length: CONCURRENCY }, () => worker());
    await Promise.all(workers);

    // 按延迟排序
    results.sort((a, b) => {
        if (a.latency === null && b.latency === null) return 0;
        if (a.latency === null) return 1;
        if (b.latency === null) return -1;
        return a.latency - b.latency;
    });

    // 缓存结果
    const now = Date.now();
    localStorage.setItem(CACHE_KEY, JSON.stringify(results));
    localStorage.setItem(CACHE_TIME_KEY, String(now));

    progressSection.style.display = 'none';
    btn.disabled = false;
    btn.innerHTML = '<span class="btn-icon">⚡</span> 开始测速';

    isTesting = false;
    renderResults(results);
    updateSummary(results);
    updateStatus();
}

function updateProgress(completed, total, current) {
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressCount').textContent = completed + ' / ' + total;
    document.getElementById('progressCurrent').textContent = current;
}

// ============ 渲染 ============
function renderResults(results) {
    const tbody = document.getElementById('dnsTableBody');
    if (!results || results.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="7" class="empty-cell">
                    <div class="empty-state">
                        <span class="empty-icon">📡</span>
                        <p>点击 <strong>"开始测速"</strong> 测试所有 DNS 服务器延迟</p>
                        <p class="empty-hint">测试使用 DNS-over-HTTPS (DoH) 测量真实解析延迟</p>
                    </div>
                </td>
            </tr>`;
        return;
    }

    let html = '';
    const maxLatency = Math.max(...results.filter(r => r.latency !== null).map(r => r.latency), 500);

    results.forEach((r, idx) => {
        const s = r.server;
        const rank = idx + 1;
        const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';

        let latencyHtml, barHtml;
        if (r.latency !== null) {
            let colorClass;
            if (r.latency < 50) colorClass = 'latency-green';
            else if (r.latency < 150) colorClass = 'latency-yellow';
            else if (r.latency < 300) colorClass = 'latency-orange';
            else colorClass = 'latency-red';

            let barColor;
            if (r.latency < 50) barColor = 'bar-green';
            else if (r.latency < 150) barColor = 'bar-yellow';
            else if (r.latency < 300) barColor = 'bar-orange';
            else barColor = 'bar-red';

            const barWidth = Math.min(Math.round((r.latency / maxLatency) * 100), 100);
            latencyHtml = `<span class="latency-value ${colorClass}">${r.latency} ms</span>`;
            barHtml = `<div class="latency-bar-wrapper"><div class="latency-bar ${barColor}" style="width:${barWidth}%"></div></div>`;
        } else {
            latencyHtml = `<span class="latency-value latency-na">N/A</span>`;
            barHtml = '';
        }

        const statusHtml = r.online
            ? `<span class="status-badge status-online"><span class="status-dot"></span>在线</span>`
            : `<span class="status-badge status-offline"><span class="status-dot"></span>离线</span>`;

        const regionFlag = getRegionFlag(s.region);
        const providerHtml = `<span class="provider-tag">${s.provider}</span>`;

        html += `
            <tr>
                <td class="col-rank"><span class="rank-number ${rankClass}">${rank}</span></td>
                <td><span class="dns-name">${s.name}</span></td>
                <td><span class="dns-ip">${s.ip}</span></td>
                <td>
                    ${latencyHtml}
                    ${barHtml}
                </td>
                <td>${providerHtml}</td>
                <td class="col-region"><span class="region-flag">${regionFlag}</span></td>
                <td class="col-status">${statusHtml}</td>
            </tr>`;
    });

    tbody.innerHTML = html;
}

function getRegionFlag(region) {
    const flags = {
        '全球': '🌐',
        '中国': '🇨🇳',
        '北美': '🇺🇸',
        '欧洲': '🇪🇺',
        '亚洲': '🌏',
    };
    return flags[region] || '🌍';
}

// ============ 统计摘要 ============
function updateSummary(results) {
    const total = results.length;
    const online = results.filter(r => r.online).length;
    const latencies = results.filter(r => r.latency !== null).map(r => r.latency);

    document.getElementById('totalServers').textContent = total;
    document.getElementById('onlineServers').textContent = online;

    if (latencies.length > 0) {
        const fastest = Math.min(...latencies);
        document.getElementById('fastestServer').textContent = fastest + ' ms';

        const avg = Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length);
        document.getElementById('avgLatency').textContent = avg + ' ms';
    } else {
        document.getElementById('fastestServer').textContent = '—';
        document.getElementById('avgLatency').textContent = '—';
    }
}

// ============ 状态更新 ============
function updateStatus() {
    const timestamp = localStorage.getItem(CACHE_TIME_KEY);
    const statusEl = document.getElementById('updateStatus');
    const badge = document.getElementById('updateBadge');

    if (!timestamp) {
        statusEl.textContent = '尚未测试';
        badge.style.borderColor = 'var(--border-color)';
        return;
    }

    const elapsed = Date.now() - parseInt(timestamp);
    const hours = Math.floor(elapsed / (60 * 60 * 1000));
    const minutes = Math.floor((elapsed % (60 * 60 * 1000)) / (60 * 1000));

    if (elapsed < CACHE_TTL) {
        const remaining = Math.floor((CACHE_TTL - elapsed) / (60 * 60 * 1000));
        statusEl.textContent = `${hours} 小时 ${minutes} 分前更新 · ${remaining}h 后自动刷新`;
        badge.style.borderColor = 'rgba(34,197,94,0.3)';
    } else {
        statusEl.textContent = `已过期 ${hours} 小时，点击测速刷新`;
        badge.style.borderColor = 'rgba(239,68,68,0.3)';
    }
}

// ============ 排序 ============
function sortBy(field) {
    if (sortField === field) {
        sortAsc = !sortAsc;
    } else {
        sortField = field;
        sortAsc = field === 'latency';
    }

    const arrows = document.querySelectorAll('.sort-arrow');
    arrows.forEach(a => a.textContent = '⇅');

    const arrowId = 'sortArrow' + field.charAt(0).toUpperCase() + field.slice(1);
    const arrow = document.getElementById(arrowId);
    if (arrow) arrow.textContent = sortAsc ? '▲' : '▼';

    applySortAndFilter();
}

function applySortAndFilter() {
    const raw = getResults();
    if (!raw || raw.length === 0) return;

    const searchTerm = (document.getElementById('searchInput').value || '').toLowerCase().trim();
    const regionFilter = document.getElementById('regionFilter').value;

    let filtered = raw;
    if (searchTerm) {
        filtered = filtered.filter(r =>
            r.server.name.toLowerCase().includes(searchTerm) ||
            r.server.ip.includes(searchTerm) ||
            r.server.provider.toLowerCase().includes(searchTerm)
        );
    }
    if (regionFilter !== 'all') {
        filtered = filtered.filter(r => r.server.region === regionFilter);
    }

    filtered.sort((a, b) => {
        let cmp = 0;
        switch (sortField) {
            case 'name':
                cmp = a.server.name.localeCompare(b.server.name, 'zh-CN');
                break;
            case 'ip':
                cmp = a.server.ip.localeCompare(b.server.ip);
                break;
            case 'latency':
                if (a.latency === null && b.latency === null) cmp = 0;
                else if (a.latency === null) cmp = 1;
                else if (b.latency === null) cmp = -1;
                else cmp = a.latency - b.latency;
                break;
            case 'provider':
                cmp = a.server.provider.localeCompare(b.server.provider, 'zh-CN');
                break;
            default:
                cmp = 0;
        }
        return sortAsc ? cmp : -cmp;
    });

    renderResults(filtered);
    updateSummary(filtered);
}

function filterServers() {
    applySortAndFilter();
}

// 将排序后的结果（含排名）重新关联到服务器信息显示
function getResults() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        try {
            return JSON.parse(cached);
        } catch (e) {
            return null;
        }
    }
    return null;
}

// ============ 入口 ============
function startBenchmark() {
    runBenchmark();
}

function resetAndRefresh() {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIME_KEY);
    const tbody = document.getElementById('dnsTableBody');
    tbody.innerHTML = `
        <tr class="empty-row">
            <td colspan="7" class="empty-cell">
                <div class="empty-state">
                    <span class="empty-icon">📡</span>
                    <p>点击 <strong>"开始测速"</strong> 测试所有 DNS 服务器延迟</p>
                    <p class="empty-hint">测试使用 DNS-over-HTTPS (DoH) 测量真实解析延迟</p>
                </div>
            </td>
        </tr>`;
    document.getElementById('totalServers').textContent = '0';
    document.getElementById('onlineServers').textContent = '0';
    document.getElementById('fastestServer').textContent = '—';
    document.getElementById('avgLatency').textContent = '—';
    updateStatus();
    runBenchmark();
}

// ============ 初始化 ============
(function init() {
    // 检查缓存
    const cached = getResults();
    const timestamp = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && timestamp) {
        const elapsed = Date.now() - parseInt(timestamp);
        if (elapsed < CACHE_TTL) {
            // 缓存有效，直接显示
            const sorted = [...cached].sort((a, b) => {
                if (a.latency === null && b.latency === null) return 0;
                if (a.latency === null) return 1;
                if (b.latency === null) return -1;
                return a.latency - b.latency;
            });
            renderResults(sorted);
            updateSummary(sorted);
            updateStatus();
            return;
        }
    }

    // 无缓存或已过期，自动开始测速
    updateStatus();
    runBenchmark();
})();
