# HANDOFF – Bàn giao nhiệm vụ

_Cập nhật: 2026-11-19 · AI thực hiện: Claude Code · Nhiệm vụ: `P0-TAILIEU-CORE`_

## (1) Giai đoạn hiện tại

**Giai đoạn 1 (P0) – đã hoàn thành.** Giai đoạn 2–4 đang chờ (xem `TASK_QUEUE.md`). Phiên bản `v0.1.0`.

## (2) Mã và tên nhiệm vụ gần nhất

`P0-TAILIEU-CORE` – Khởi tạo Khung Website Học liệu HUB EduNavigator (Toán – Ngữ văn – Tiếng Anh, lớp 6–12) và Hệ thống Quản lý Dự án Đa AI. Prompt lưu tại `prompts/P0-TAILIEU-CORE.md`.

## (3) Hạng mục đã hoàn thành và đã kiểm tra

Kết quả chạy thật trong phiên P0 (Node 22, Next 16.4.6):

| Hạng mục | Kết quả |
|---|---|
| `npm run typecheck` (tsc strict) | Đạt, không lỗi |
| `npm run validate` | Đạt: 5 đơn vị, 398 công thức KaTeX dựng thành công, 11 nguồn, 5 mục sổ cái khớp dữ liệu |
| `npm run build` | Đạt: 14 trang tĩnh, không lỗi, không cảnh báo; `out/.nojekyll` có mặt; mọi `href/src` đều mang tiền tố `/tailieu/` |
| `npm audit` | 0 lỗ hổng |
| Kiểm thử trình duyệt (`scripts/e2e-smoke.cjs`, Chromium/Playwright, phục vụ `out/` dưới `/tailieu/`) | **57/57 đạt**: duyệt toàn bộ 11 trang nội bộ đều 200 và không liên kết ngoài `/tailieu`; không lỗi console/request thất bại; 375px không tràn ngang ở cả 11 trang; không lộ `$` hay `\` thô ở 5 trang bài (desktop và 375px); font KaTeX và Noto Sans (IPA, đủ ký tự `ɪ ʃ ː ˈ ə θ ð ŋ ɚ ɡ ɒ`) nạp đúng; công thức khối dài cuộn ngang ở 375px; 13 truy vấn tìm kiếm có dấu/không dấu cho kết quả đầu đúng; bộ lọc đa chiều và URL tham số; “Đang cập nhật theo lộ trình” hiện đúng khi trống; breadcrumb, mục lục, liên kết tiên quyết; chuyển sáng/tối và lưu qua tải lại; `404.html` thân thiện |
| Kiểm tra hình ảnh | Đã xem ảnh chụp (desktop, 375px, chế độ tối) cho trang chủ, bảng IPA, Thẻ Dẫn chứng, ví dụ Toán 12 |
| Kiểm chứng Toán | Mọi điều kiện, nghiệm, giá trị tham số, giá trị cực trị, khoảng cách giữa hai điểm cực trị được tính lại độc lập bằng sympy trước khi viết |

Chưa được kiểm thử trong phiên này: **chạy workflow thực tế trên GitHub Actions** và hiển thị trên máy thật. Xem mục 6.

## (4) Tệp, thư mục, trang vừa tạo hoặc sửa

Repo `tailieu` trống trước P0, nên **toàn bộ tệp là mới**:

- **Cấu hình**: `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `.gitignore`, `public/.nojekyll`, `.github/workflows/deploy.yml`
- **Giao diện/trang** (`app/`): `layout.tsx`, `globals.css`, `page.tsx` (trang chủ), `hoc-lieu/page.tsx` (tra cứu + lọc), `mon/[subject]/page.tsx` (3 trang môn), `bai/[slug]/page.tsx` (5 trang dạng bài), `gioi-thieu/page.tsx`, `not-found.tsx`, `icon.svg`
- **Component** (`components/`): `Header`, `Footer`, `Logo`, `ThemeToggle`, `Breadcrumb`, `Rich` (KaTeX), `Catalog` (bộ lọc), `HomeSearch`, `UnitCard`, `unit/` (`UnitView`, `common`, `VanParts`, `AnhParts`)
- **Lõi** (`lib/`): `schema.ts`, `labels.ts`, `rich.ts`, `search.ts`, `text.ts`, `content.ts`, `sources.ts`
- **Dữ liệu** (`content/`): `index.ts` + 5 tệp học liệu (xem mục 5)
- **Công cụ**: `scripts/validate-content.ts`, `scripts/e2e-smoke.cjs`
- **Hệ thống quản lý (13 mục)**: `README.md`, `AI_PROJECT_GUIDE.md`, `CONTENT_SCHEMA.md`, `PROJECT_STATE.md`, `CONTENT_REGISTRY.json`, `COVERAGE_MATRIX.csv`, `SOURCE_REGISTRY.csv`, `PROMPT_INDEX.md`, `TASK_QUEUE.md`, `DECISIONS_LOG.md`, `CHANGELOG.md`, `HANDOFF.md`, `prompts/` (`P0-TAILIEU-CORE.md`, `META_PROMPT_FINAL.md` giữ chỗ, `RESUME_PROJECT_PROMPT.md`)
- **Trạng thái commit/push**: xem commit hash trong `git log` và báo cáo cuối của nhiệm vụ (một tệp không thể tự chứa hash của chính commit chứa nó).

## (5) Dữ liệu và nguồn đã dùng

Toàn bộ ở trạng thái `seed-verified` (tự kiểm; **chưa** qua thẩm định độc lập A ⇄ B):

| Mã | Nội dung | Cách kiểm |
|---|---|---|
| `TOAN-09-PTB2-001` | Hệ thức Viète & bài toán tham số (5 ví dụ: tự luận, trả lời ngắn, đúng/sai, trắc nghiệm, thực tế) | sympy + thay ngược |
| `TOAN-12-CUCTRI-001` | Cực trị hàm bậc ba & biện luận tham số (4 ví dụ, có bảng biến thiên KaTeX) | sympy + đạo hàm cấp hai |
| `VAN-12-NLXH-001` | NLXH tư tưởng đạo lí “tài và tâm”, khung viết, 3 Thẻ Dẫn chứng, đoạn văn mẫu (201 chữ, đếm bằng mã) | Tự rà soát; **trích dẫn chưa đối chiếu bản in** |
| `ANH-06-PRON-001` | /ɪ/ vs /iː/ (bảng IPA, 7 cặp tối thiểu, quy luật chính tả + ngoại lệ, bài tập) | Tự rà soát theo quy ước từ điển; **chưa tra trực tuyến** |
| `ANH-12-NOTICE-001` | Đọc điền thông báo 6 chỗ trống (văn bản gốc do biên soạn, ngữ pháp, từ nối, từ chỉ lượng) + bài luyện 5 câu | Tự rà soát; bản dịch tự dịch |

Nguồn: 11 mục trong `SOURCE_REGISTRY.csv` (CT GDPT 2018 và 3 chương trình môn, Quyết định 764/QĐ-BGDĐT ngày 08/03/2024, Truyện Kiều, Bình Ngô đại cáo, tục ngữ, Cambridge Dictionary, Handbook of the IPA, biên soạn gốc HUB). Cột `verified_status` ghi trung thực mức đối chiếu của từng nguồn.

Nhận diện kế thừa từ repo `home` (đọc trực tiếp, commit `abcd536`): xem `DECISIONS_LOG.md` mục P0-006. Không cần dán cấu hình thủ công.

## (6) Lỗi, vấn đề phát hiện chưa xử lý

1. **Trích dẫn Ngữ văn chưa đối chiếu bản in.** Môi trường P0 chặn mạng ngoài (Wikisource không truy cập được qua cả hai kênh). Hai câu Truyện Kiều chỉ được xác nhận qua tìm kiếm web là của Nguyễn Du; câu Bình Ngô đại cáo (bản dịch, tìm kiếm cho thấy bản Bùi Kỷ phổ biến) cần đối chiếu **nguyên văn và tên người dịch** theo SGK; không ghi số câu thơ. Cần người/AI có bản in thẩm định trước khi nâng nhãn `verified`.
2. **Phiên âm IPA chưa tra trực tuyến** từng từ ở Cambridge/Oxford (mạng bị chặn); mới rà soát theo quy ước. Chưa có âm thanh mẫu.
3. **Định dạng đề Tiếng Anh**: chỉ xác nhận được số hiệu/ngày của Quyết định 764/QĐ-BGDĐT (08/03/2024); trang tra cứu ghi chú nội dung môn Tiếng Anh chưa cập nhật nên **chưa khẳng định** vị trí/số câu của dạng “đọc điền thông báo” trong đề. Bài mẫu được viết là “mô phỏng định dạng”.
4. **Số hiệu và ngày Thông tư 32/2018/TT-BGDĐT (26/12/2018)** ghi theo hiểu biết, chưa tra lại văn bản gốc; `url` để trống.
5. **Workflow `deploy.yml` chưa chạy thực tế trên GitHub.** Phiên bản action được sao theo repo `home` (checkout@v7, setup-node@v7, configure-pages@v6, upload-pages-artifact@v5, deploy-pages@v5) nhưng chưa tự xác nhận. Người dùng cần bật Pages (Source = GitHub Actions) và xem kết quả lần chạy đầu.
6. **Kiểm thử 375px là mô phỏng khung nhìn bằng Chromium**, chưa thử trên điện thoại thật.
7. **Định nghĩa 7 bước `a → g`** do P0 tự soạn (đề không liệt kê chi tiết); cần người dùng xác nhận (`DECISIONS_LOG.md` P0-011).
8. `META_PROMPT_FINAL.md` mới là tệp giữ chỗ (người dùng chưa dán nội dung).
9. Văn chỉ có 1 đơn vị seed (đề cho phép 1–2) do không kiểm chứng được nguyên văn thơ ngoài SGK.
10. Mục tiêu (`objectives`) diễn đạt theo tinh thần yêu cầu cần đạt, chưa đối chiếu từng câu với văn bản chương trình gốc.

## (7) Công việc đang dang dở

Không có tệp dở dang. Những việc đã nêu ở mục 6 là việc kiểm chứng còn mở, không phải mã chưa viết xong. Chưa làm (ngoài phạm vi P0): thẩm định A ⇄ B cho seed, nạp học liệu mới, âm thanh IPA, chỉ mục tìm kiếm tách riêng.

## (8) Điều kiện, đầu vào để tiếp tục

- Người dùng bật GitHub Pages (Settings → Pages → Source: **GitHub Actions**) và xác nhận lần chạy workflow thành công; báo lại nếu có lỗi (đính kèm log).
- Người/AI có **bản in hoặc nguồn tra cứu đáng tin** để đối chiếu trích dẫn Văn và IPA (mục 6.1–6.2).
- Người dùng xác nhận bộ 7 bước (6.7) và (nếu có) dán `META_PROMPT_FINAL`.
- Người dùng chốt thứ tự ưu tiên lớp/chủ đề cho giai đoạn 2 (đề xuất: lớp 9 và 12 trước).
- Môi trường: Node.js ≥ 22; `npm install` rồi `npm run check`.

## (9) Mã nhiệm vụ và prompt cần chạy kế tiếp

1. **`P2-VERIFY-SEED`**: thẩm định độc lập A ⇄ B cho 5 đơn vị seed, xử lý mục 6.1–6.4, nâng `verified` cho đơn vị đạt. Chạy bằng `prompts/RESUME_PROJECT_PROMPT.md` cùng yêu cầu: “Thực hiện P2-VERIFY-SEED theo TASK_QUEUE.md, vai B (thẩm định); không sửa nội dung đã chốt ở HANDOFF mục 10 ngoài phạm vi sửa lỗi thẩm định”.
2. **`P2-COVERAGE-PLAN`**: lập kế hoạch phủ trong `COVERAGE_MATRIX.csv`. Chạy bằng `prompts/RESUME_PROJECT_PROMPT.md` cùng yêu cầu tương ứng.
3. Các đợt nạp A–B–C: tạo tệp prompt trong `prompts/` trước khi chạy (xem `PROMPT_INDEX.md`).

Tệp prompt riêng cho các nhiệm vụ này **chưa được tạo** (đúng quy ước: tạo khi bắt đầu giai đoạn 2).

## (10) Phần đã chốt – KHÔNG làm lại, KHÔNG tự ý sửa

Chỉ sửa khi người dùng ra quyết định mới và ghi vào `DECISIONS_LOG.md`:

1. Stack: Next.js (App Router) + TypeScript + Tailwind CSS 4, `output: "export"`, `trailingSlash: true` (P0-001).
2. `basePath` `/tailieu` + `assetPrefix` `/tailieu/`; mọi liên kết nội bộ dùng `next/link` (P0-002).
3. KaTeX dựng lúc build với `throwOnError: true`; CSS/phông đóng gói cục bộ; không dùng CDN (P0-003).
4. Phông đóng gói bằng `@fontsource`; Noto Sans cho IPA (P0-004).
5. Không thêm hoạt ảnh nặng/thư viện chuyển động (P0-005).
6. Token nhận diện kế thừa từ `home` (P0-006).
7. Lược đồ 15 trường + `accessLevel` (mặc định và bắt buộc `free` ở giai đoạn này); quy ước `id` `MON-LL-CHUDE-NNN` và **các `id` đã đăng không đổi** (CONTENT_SCHEMA.md).
8. Cấu trúc Thẻ Dẫn chứng 5 trường (bắt buộc có *Giới hạn sử dụng*) và tách khối trích dẫn nguyên văn khỏi diễn giải.
9. Cách lưu dữ liệu: tệp TS `content/<môn>/<lớp>/` + đăng ký `content/index.ts` + sổ cái `CONTENT_REGISTRY.json`; `npm run validate` là cổng kiểm tra bắt buộc, kể cả trong workflow (P0-008, P0-012).
10. Quy tắc minh bạch kiểm chứng: nhãn `seed-verified` luôn kèm `verification.openItems`; không nâng `verified` khi chưa có thẩm định độc lập (P0-010).
11. Quy tắc “Đang cập nhật theo lộ trình” thay cho liên kết tới trang chưa có; không có nút chết.
12. Năm đơn vị seed `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001`, `VAN-12-NLXH-001`, `ANH-06-PRON-001`, `ANH-12-NOTICE-001`: chỉ sửa để vá lỗi kiểm chứng ở `P2-VERIFY-SEED`, không viết lại.
