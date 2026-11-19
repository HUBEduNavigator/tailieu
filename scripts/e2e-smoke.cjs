/**
 * Kiểm thử khói bằng trình duyệt (Playwright) cho bản dựng tĩnh.
 * Cách chạy (cần Playwright sẵn có, KHÔNG phải dependency của dự án):
 *   NEXT_PUBLIC_BASE_PATH=/tailieu npm run build
 *   mkdir -p /tmp/site && ln -sfn "$PWD/out" /tmp/site/tailieu
 *   (cd /tmp/site && python3 -m http.server 4173 &)
 *   NODE_PATH=$(npm root -g) node scripts/e2e-smoke.cjs
 * Kết quả P0: 57/57 đạt (xem HANDOFF.md). Số kỳ vọng (5 đơn vị…) phải cập nhật khi thêm học liệu.
 */
const { chromium } = require('playwright');
const BASE = 'http://localhost:4173/tailieu';
const SHOTS = require('os').tmpdir();
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
const results = [];
const ok = (name, cond, extra='') => { results.push({name, pass: !!cond, extra}); console.log((cond?'PASS ':'FAIL ')+name+(extra?'  -> '+extra:'')); };

(async () => {
  const browser = await chromium.launch({ executablePath });
  try {
    // --- 1. Crawl all links ---
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const consoleErrors = []; const failed = [];
    page.on('console', m => { if (m.type()==='error') consoleErrors.push(m.text()); });
    page.on('pageerror', e => consoleErrors.push('pageerror: '+e.message));
    page.on('response', r => { if (r.status()>=400) failed.push(r.status()+' '+r.url()); });
    page.on('requestfailed', r => failed.push(r.failure().errorText+' '+r.url()));

    const seen = new Set(); const queue = [BASE + '/']; const bad = [];
    while (queue.length) {
      const url = queue.shift(); const key = url.split('#')[0].split('?')[0];
      if (seen.has(key)) continue; seen.add(key);
      const resp = await page.goto(url, { waitUntil: 'networkidle' });
      if (!resp || resp.status() !== 200) { bad.push(url+' '+(resp&&resp.status())); continue; }
      const links = await page.$$eval('a[href]', as => as.map(a => a.href));
      for (const l of links) {
        if (l.startsWith('http://localhost:4173')) {
          if (!l.startsWith(BASE+'/') && l !== BASE) bad.push('NGOÀI /tailieu: '+l+' (từ '+url+')');
          else queue.push(l);
        }
      }
    }
    ok('Crawl: mọi liên kết nội bộ trả 200 và nằm dưới /tailieu', bad.length===0, `${seen.size} trang; lỗi: ${bad.join(' | ')}`);
    ok('Không lỗi console / request thất bại', consoleErrors.length===0 && failed.length===0, [...consoleErrors, ...failed].join(' | '));
    console.log('Pages:', [...seen].map(s=>s.replace(BASE,'')).join(', '));

    // --- 2. Mobile overflow + raw LaTeX + fonts ---
    const mctx = await browser.newContext({ viewport: { width: 375, height: 800 }, deviceScaleFactor: 1 });
    const m = await mctx.newPage();
    const pages = [...seen];
    for (const u of pages) {
      await m.goto(u, { waitUntil: 'networkidle' });
      const o = await m.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, bsw: document.body.scrollWidth }));
      ok(`375px không tràn ngang: ${u.replace(BASE,'')||'/'}`, o.sw <= o.iw+1 && o.bsw <= o.iw+1, `scrollWidth=${o.sw}/${o.iw}`);
    }
    for (const slug of ['toan-09-ptb2-001','toan-12-cuctri-001','van-12-nlxh-001','anh-06-pron-001','anh-12-notice-001']) {
      for (const [label, pg] of [['desktop', page], ['mobile', m]]) {
        await pg.goto(`${BASE}/bai/${slug}/`, { waitUntil: 'networkidle' });
        const info = await pg.evaluate(() => {
          const clone = document.querySelector('main').cloneNode(true);
          clone.querySelectorAll('.katex-mathml, annotation, script, style').forEach(n => n.remove());
          const t = clone.innerText || clone.textContent;
          return { dollars: (t.match(/\$/g)||[]).length, backslash: (t.match(/\\[a-zA-Z]+/g)||[]).slice(0,5), katex: document.querySelectorAll('.katex').length, katexErr: document.querySelectorAll('.katex-error').length };
        });
        ok(`${slug} (${label}): không lộ LaTeX/$ thô`, info.dollars===0 && info.backslash.length===0 && info.katexErr===0, `katex=${info.katex} $=${info.dollars} bs=${info.backslash}`);
      }
    }
    // KaTeX fonts thực sự nạp
    await page.goto(`${BASE}/bai/toan-12-cuctri-001/`, { waitUntil: 'networkidle' });
    const kf = await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+' '+f.weight); });
    ok('KaTeX font đã nạp (bundle cục bộ)', kf.some(x=>x.includes('KaTeX')), kf.slice(0,4).join(', '));
    // Bảng biến thiên cuộn ngang trên mobile
    await m.goto(`${BASE}/bai/toan-12-cuctri-001/`, { waitUntil: 'networkidle' });
    const blk = await m.evaluate(() => { const b=[...document.querySelectorAll('.math-block')].map(e=>({sw:e.scrollWidth,cw:e.clientWidth,ox:getComputedStyle(e).overflowX})); return b.filter(x=>x.sw>x.cw); });
    ok('Công thức khối dài có cuộn ngang trên 375px (hoặc vừa khung)', blk.every(b=>b.ox==='auto'), JSON.stringify(blk));

    // IPA font
    await page.goto(`${BASE}/bai/anh-06-pron-001/`, { waitUntil: 'networkidle' });
    const ipa = await page.evaluate(async () => { await document.fonts.ready; const el=document.querySelector('.ipa'); const ff=getComputedStyle(el).fontFamily; const loaded=[...document.fonts].filter(f=>f.status==='loaded'&&f.family.includes('Noto Sans')).map(f=>f.family+' '+f.weight+' '+f.unicodeRange.slice(0,40)); const chars=['ɪ','ʃ','ː','ˈ','ə','θ','ð','ŋ','ɚ','ɡ','ɒ']; const chk=chars.map(c=>document.fonts.check('16px "Noto Sans"', c)); return { ff, loaded: loaded.length, chk: chars.map((c,i)=>c+':'+chk[i]).join(' ') }; });
    ok('Font IPA (Noto Sans) nạp và có đủ ký tự', ipa.loaded>0, JSON.stringify(ipa));
    await page.screenshot({ path: SHOTS+'/anh-ipa-desktop.png', fullPage: false });
    await page.locator('#ipa').scrollIntoViewIfNeeded();
    await page.locator('#ipa').screenshot({ path: SHOTS+'/anh-ipa-section.png' });
    await m.goto(`${BASE}/bai/anh-06-pron-001/`, { waitUntil: 'networkidle' });
    await m.locator('#ipa').scrollIntoViewIfNeeded(); await m.locator('#ipa').screenshot({ path: SHOTS+'/anh-ipa-mobile.png' });
    await m.goto(`${BASE}/bai/van-12-nlxh-001/`, { waitUntil: 'networkidle' });
    await m.locator('#dan-chung').scrollIntoViewIfNeeded(); await m.locator('#dan-chung').screenshot({ path: SHOTS+'/van-dan-chung-mobile.png' });
    await page.goto(`${BASE}/bai/toan-12-cuctri-001/`, { waitUntil: 'networkidle' });
    await page.locator('#vi-du').screenshot({ path: SHOTS+'/toan12-vidu-desktop.png' });
    await m.goto(`${BASE}/bai/toan-12-cuctri-001/`, { waitUntil: 'networkidle' });
    await m.screenshot({ path: SHOTS+'/toan12-mobile-top.png' });
    await m.locator('#vi-du').screenshot({ path: SHOTS+'/toan12-vidu-mobile.png' });

    // --- 3. Tìm kiếm có dấu / không dấu ---
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    const searchTests = [['cực trị','TOAN-12-CUCTRI-001'],['cuc tri','TOAN-12-CUCTRI-001'],['VIETE','TOAN-09-PTB2-001'],['Viète','TOAN-09-PTB2-001'],['phát âm','ANH-06-PRON-001'],['phat am','ANH-06-PRON-001'],['ANH-12','ANH-12-NOTICE-001'],['thong bao','ANH-12-NOTICE-001'],['tài tâm','VAN-12-NLXH-001'],['tai tam','VAN-12-NLXH-001'],['nghị luận','VAN-12-NLXH-001'],['đạo hàm','TOAN-12-CUCTRI-001'],['dao ham','TOAN-12-CUCTRI-001']];
    for (const [q, expect] of searchTests) {
      await page.fill('#home-q', q); await page.waitForTimeout(80);
      const txt = await page.locator('[aria-live=polite] ul li').first().innerText();
      const first = await page.locator('[aria-live=polite] ul li a').first().getAttribute('href');
      ok(`Tìm trang chủ "${q}" → kết quả đầu là ${expect}`, first.endsWith('/'+expect.toLowerCase()+'/'), txt.slice(0,80).replace(/\n/g,' | '));
    }
    await page.fill('#home-q', 'zzzxxx'); await page.waitForTimeout(80);
    ok('Tìm không có kết quả hiện thông báo minh bạch', (await page.locator('[aria-live=polite]').first().innerText()).includes('cập nhật theo lộ trình'));

    await page.fill('#home-q', 'cuc tri');
    await page.keyboard.press('Escape');
    ok('Escape đóng gợi ý tìm kiếm', (await page.locator('.search-results').count())===0);
    await page.press('#home-q', 'Enter');
    await page.waitForURL(url => url.pathname.endsWith('/hoc-lieu/') && url.searchParams.get('q')==='cuc tri');
    await page.waitForSelector('#q');
    ok('Enter mở danh mục với từ khóa tìm kiếm', (await page.inputValue('#q'))==='cuc tri');
    await page.getByRole('navigation', { name: 'Menu chính' }).getByRole('link', { name: 'Danh mục' }).click();
    await page.waitForURL(url => url.pathname.endsWith('/hoc-lieu/') && !url.search);
    ok('Menu Danh mục xóa truy vấn cũ', (await page.inputValue('#q'))==='');

    // --- 4. Bộ lọc đa chiều ---
    await page.goto(`${BASE}/hoc-lieu/`, { waitUntil: 'networkidle' });
    const count = async () => (await page.locator('section[aria-label="Kết quả"] a.card').count());
    ok('Catalog: 5 kết quả ban đầu', (await count())===5, String(await count()));
    await page.getByRole('button', { name: 'Toán học', exact: true }).click(); ok('Lọc Toán → 2', (await count())===2);
    await page.getByRole('button', { name: '12', exact: true }).click(); ok('Toán + Lớp 12 → 1', (await count())===1);
    await page.getByRole('button', { name: 'Tuyển sinh lớp 10' }).click(); ok('Toán + 12 + TS10 → 0 và báo "Đang cập nhật theo lộ trình"', (await count())===0 && (await page.locator('section[aria-label="Kết quả"]').innerText()).includes('Đang cập nhật theo lộ trình'));
    await page.getByRole('button', { name: 'Xóa bộ lọc' }).first().click(); ok('Xóa bộ lọc → 5', (await count())===5);
    await page.getByRole('button', { name: 'Tốt nghiệp THPT' }).click(); ok('Nhóm TN THPT → 3 (Toán12, Văn12, Anh12)', (await count())===3, String(await count()));
    await page.getByRole('button', { name: 'Vận dụng', exact: true }).click(); ok('TN THPT + Vận dụng → 3', (await count())===3);
    await page.getByRole('button', { name: 'Xóa bộ lọc' }).first().click();
    await page.selectOption('#chude', { index: 1 }); ok('Chủ đề chọn được', (await count())>=1);
    await page.getByRole('button', { name: 'Xóa bộ lọc' }).first().click();
    await page.locator('#q').pressSequentially('cuc tri');
    ok('Catalog tìm "cuc tri" → 1', (await page.inputValue('#q'))==='cuc tri' && (await count())===1);
    await page.goto(`${BASE}/hoc-lieu/?mon=anh&lop=6`, { waitUntil: 'networkidle' }); ok('URL ?mon=anh&lop=6 → 1', (await count())===1);
    await page.goto(`${BASE}/hoc-lieu/?lop=7`, { waitUntil: 'networkidle' });
    ok('Lớp 7 trống: thông báo "Đang cập nhật theo lộ trình"', (await page.locator('section[aria-label="Kết quả"]').innerText()).includes('Đang cập nhật theo lộ trình'));
    await page.goto(`${BASE}/hoc-lieu/?mon=toan&lop=9&chude=phuong-trinh-bac-hai-mot-an`, { waitUntil: 'networkidle' }); ok('Breadcrumb chủ đề (chude slug) → 1', (await count())===1);

    await m.goto(`${BASE}/hoc-lieu/`, { waitUntil: 'networkidle' });
    const toggle = m.getByRole('button', { name: 'Bộ lọc', exact: true });
    ok('Bộ lọc thu gọn lúc mở danh mục trên điện thoại', (await toggle.getAttribute('aria-expanded'))==='false');
    await toggle.click();
    await m.getByRole('button', { name: 'Tiếng Anh', exact: true }).click();
    ok('Mở bộ lọc di động và lọc Tiếng Anh → 2', (await m.locator('section[aria-label="Kết quả"] a.card').count())===2);

    // --- 5. Breadcrumb + TOC + liên kết tiên quyết ---
    await page.goto(`${BASE}/bai/toan-12-cuctri-001/`, { waitUntil: 'networkidle' });
    ok('Breadcrumb có 5 mục', (await page.locator('nav[aria-label="Đường dẫn"] li').count())===5);
    ok('TOC có liên kết neo', (await page.locator('aside a[href^="#"]').count())>=10);
    await page.getByRole('link', { name: 'Ví dụ có lời giải' }).click();
    await page.waitForURL('**/#vi-du');
    ok('Đọc nhanh nhảy đến phần ví dụ', (await page.locator('#vi-du h2').innerText())==='Ví dụ minh họa');
    await page.locator('main a[href$="/bai/toan-09-ptb2-001/"]').first().click(); await page.waitForURL('**/bai/toan-09-ptb2-001/');
    ok('Liên kết tiên quyết dẫn đúng sang TOAN-09-PTB2-001', page.url().endsWith('/bai/toan-09-ptb2-001/'), page.url());

    // --- 6. Dark mode lưu trạng thái ---
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    const t0 = await page.evaluate(()=>document.documentElement.dataset.theme);
    await page.getByRole('button', { name: /Chuyển sang giao diện/ }).click();
    const t1 = await page.evaluate(()=>document.documentElement.dataset.theme);
    await page.reload({ waitUntil: 'networkidle' });
    const t2 = await page.evaluate(()=>document.documentElement.dataset.theme);
    ok('Đổi sáng/tối và lưu qua tải lại', t0!==t1 && t1===t2, `${t0}→${t1}→${t2}`);
    await page.screenshot({ path: SHOTS+'/home-dark-desktop.png' });
    await page.goto(`${BASE}/bai/van-12-nlxh-001/`, { waitUntil: 'networkidle' });
    await page.locator('#dan-chung').screenshot({ path: SHOTS+'/van-dan-chung-dark.png' });
    // reset theme
    await page.evaluate(()=>localStorage.removeItem('tailieu-theme'));

    // --- 7. 404 ---
    await page.goto(`${BASE}/404.html`, { waitUntil: 'networkidle' });
    ok('404.html hiển thị trang lỗi thân thiện có liên kết về trang chủ', (await page.content()).includes('Không tìm thấy trang') && (await page.locator('main a[href$="/tailieu/"]').count())===1);

    // Ảnh trang chủ
    await ctx.clearCookies();
    await m.goto(`${BASE}/`, { waitUntil: 'networkidle' }); await m.screenshot({ path: SHOTS+'/home-mobile.png', fullPage: true });
    await page.evaluate(()=>localStorage.clear()); await page.goto(`${BASE}/`, { waitUntil: 'networkidle' }); await page.screenshot({ path: SHOTS+'/home-desktop.png' });

    const fails = results.filter(r=>!r.pass);
    console.log(`\nTỔNG: ${results.length-fails.length}/${results.length} đạt`); if (fails.length) console.log('THẤT BẠI:\n'+fails.map(f=>' - '+f.name+' '+f.extra).join('\n'));
    if (fails.length) process.exitCode = 1;
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
