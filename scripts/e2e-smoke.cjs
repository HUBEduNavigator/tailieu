/**
 * Cần Playwright và Chromium. Chạy npm run build rồi:
 *   root=$(mktemp -d)
 *   ln -s "$PWD/out" "$root/tailieu"
 *   python3 -m http.server 4173 --directory "$root" --protocol HTTP/1.1
 *   NODE_PATH=$(npm root -g) node scripts/e2e-smoke.cjs
 */
const assert = require("node:assert/strict");
const { existsSync } = require("node:fs");
const { join } = require("node:path");
const { chromium } = require("playwright");

const base = "http://localhost:4173/tailieu/";
const retiredRoutes = ["hoc-lieu", "bai"];

async function run() {
  for (const route of retiredRoutes) {
    assert.ok(!existsSync(join(__dirname, "..", "out", route)), `Đường dẫn vẫn được xuất tĩnh: ${route}`);
  }

  const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
  try {
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: "light" });
    const mobile = await browser.newPage({ viewport: { width: 320, height: 800 } });
    const errors = [];
    for (const page of [desktop, mobile]) {
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => {
        if (message.type() === "error") errors.push(message.text());
      });
    }

    const pending = new Set([base]);
    const visited = new Set();
    for (const url of pending) {
      const response = await desktop.goto(url);
      assert.equal(response?.status(), 200, url);
      visited.add(url);
      const links = await desktop.locator("a[href]").evaluateAll(anchors => anchors.map(anchor => anchor.href));
      for (const href of links) {
        const destination = new URL(href);
        if (destination.origin !== new URL(base).origin) continue;
        assert.ok(href.startsWith(base), `Liên kết ra ngoài cẩm nang: ${href}`);
        destination.hash = "";
        pending.add(destination.href);
      }
      await mobile.goto(url);
      assert.ok(await mobile.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Tràn ngang ở 320px: ${url}`);
    }

    const guides = [...visited].filter(url => url.slice(base.length).split("/").filter(Boolean).length === 3);
    assert.ok(guides.length >= 6, "Thiếu chuyên mục thực hành");
    for (const url of guides) {
      await mobile.goto(url);
      const hint = mobile.getByText("Xem gợi ý", { exact: true });
      await hint.focus();
      await mobile.keyboard.press("Enter");
      assert.equal(await mobile.locator("details[open]").count(), 1, url);
      const limit = mobile.getByRole("heading", { name: "Giới hạn áp dụng", includeHidden: true });
      assert.ok(!(await limit.isVisible()), url);
      await mobile.getByText("Đối chiếu cách làm", { exact: true }).click();
      assert.ok(await limit.isVisible(), url);
      const more = mobile.getByRole("navigation", { name: "Luyện tiếp" }).locator("a").first();
      const target = new URL(await more.getAttribute("href"), url).href;
      assert.ok(guides.includes(target) && target !== url);
      await more.click();
      await mobile.waitForURL(target);
    }

    await desktop.goto(base);
    await desktop.getByRole("link", { name: "Thử chọn nghiệm" }).click();
    await desktop.getByRole("button", { name: "Giữ cả 2 và −1" }).click();
    const feedback = desktop.getByRole("status");
    assert.match(await feedback.innerText(), /Thử lại/);
    const correct = desktop.getByRole("button", { name: "Chỉ giữ 2" });
    await correct.focus();
    await desktop.keyboard.press("Space");
    assert.equal(await correct.getAttribute("aria-pressed"), "true");
    assert.match(await feedback.innerText(), /Đúng/);
    await desktop.getByRole("button", { name: "Chuyển sang giao diện tối" }).click();
    await desktop.reload();
    assert.equal(await desktop.locator("html").getAttribute("data-theme"), "dark");

    await desktop.goto(base + "mon/van/ngu-lieu-dan-chung/");
    assert.match(await desktop.locator("blockquote").innerText(), /Chữ tâm kia mới bằng ba chữ tài/);
    assert.match(await desktop.locator("figcaption").innerText(), /Nguyễn Du.*Truyện Kiều/);

    await desktop.goto(base + "404.html");
    assert.ok(await desktop.getByRole("heading", { name: "Không tìm thấy trang" }).isVisible());
    await desktop.getByRole("link", { name: "Về trang chủ" }).click();
    await desktop.waitForURL(base);
    assert.deepEqual(errors, [], "Lỗi trong trình duyệt");

    for (const route of retiredRoutes) {
      const response = await desktop.request.get(base + route + "/");
      assert.equal(response.status(), 404);
    }

    console.log(`✓ ${visited.size} trang, ${guides.length} chuyên mục, điều hướng, lựa chọn, trích dẫn, giao diện tối và chiều rộng 320px đều đạt.`);
    console.log("✓ Các đường dẫn đã gỡ trả HTTP 404.");
  } finally {
    await browser.close();
  }
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
