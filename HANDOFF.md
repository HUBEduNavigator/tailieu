# HANDOFF – Bàn giao nhiệm vụ

_Cập nhật 2026-11-21 · Tích hợp học liệu Toán 6 Đợt 4_

## (1) Giai đoạn hiện tại

**Giai đoạn 1 (P0) đã hoàn thành.** Trong giai đoạn 2, bài Toán 6 về số nguyên đã được đăng và Đợt 4 đã được tích hợp trên nhánh B4-C. Nhánh có 7 học liệu. Xem `TASK_QUEUE.md` để theo dõi các đợt tiếp theo.

## (2) Mã và tên nhiệm vụ gần nhất

`B4-C` tích hợp `TOAN-06-CH-001` về phân tích thừa số nguyên tố, ƯCLN, BCNN và bài toán thực tế. Người dùng xác nhận bản đính kèm đã đạt thẩm định độc lập. Nhánh `feat/toan-06-ch-001` bắt đầu từ `main` tại `aaab07e`.

## (3) Hạng mục đã hoàn thành và đã kiểm tra

- Đăng ký `TOAN-06-CH-001` ở trạng thái `verified`, mức truy cập `free`. Cả hai danh sách liên kết trong `relatedIds` rỗng theo bản nghiệm thu.
- `npm run validate` trả mã 0 với 7 học liệu, 19 nguồn, 751 công thức KaTeX và 7 mục sổ cái.
- `npm run build` trả mã 0 và sinh `out/bai/toan-06-ch-001/index.html` với `basePath` là `/tailieu`. `npm run typecheck` cũng đạt.
- `node scripts/e2e-smoke.cjs` trả mã 0, **78/78** kiểm tra đạt. Chromium xác nhận trang mới hiển thị 138 công thức KaTeX trên máy tính và ở 375 px, cuộn được dãy số nguyên tố trên di động và tìm được bài qua bộ lọc và từ khóa có dấu hoặc không dấu.
- Kích thước danh sách kiến thức trọng tâm của sáu bài có sẵn khớp với bản `main` ở cả 375 và 1280 px.
- Sau khi merge, xem lượt chạy GitHub Actions và kiểm tra trang công khai tại <https://hubedunavigator.github.io/tailieu/bai/toan-06-ch-001/>.

## (4) Tệp, thư mục, trang vừa tạo hoặc sửa

- Tạo `content/toan/06/ucln-bcnn-bai-toan-thuc-te.ts` và đăng ký trong `content/index.ts`.
- Cập nhật `SOURCE_REGISTRY.csv`, `CONTENT_REGISTRY.json`, `COVERAGE_MATRIX.csv`, `PROJECT_STATE.md`, `TASK_QUEUE.md`, `PROMPT_INDEX.md`, `CHANGELOG.md` và `HANDOFF.md`.
- Điều chỉnh `app/globals.css` để giới hạn cuộn ngang trong danh sách kiến thức trọng tâm khi công thức quá dài.
- Mở rộng `scripts/e2e-smoke.cjs` để kiểm tra công thức, tìm kiếm và bộ lọc của bài mới.

## (5) Dữ liệu và nguồn đã dùng

Bài `TOAN-06-CH-001` dùng nguyên khối dữ liệu `MathUnit` đã nghiệm thu, gồm năm ví dụ thuộc năm định dạng. Ngân hàng tự luyện và lời giải mở rộng được lưu trong hồ sơ đính kèm ở phần riêng sau khối `MathUnit`.

Dùng lại `SRC-HUB-ORIG` và cập nhật `SRC-CT-TOAN`, `SRC-SGK-TOAN6-T1-KNTT`, `SRC-SGK-TOAN6-T1-CTST`, `SRC-SGK-TOAN6-T1-CD`. Ba nguồn mới là `SRC-QD3588-SGK-2025`, `SRC-CV7991-2024` và `SRC-CASIO-FX580VNX-FACT`, thuộc phần căn cứ và mở rộng của hồ sơ.

Bài `TOAN-06-SN-001` có 7 ví dụ, 4 biến thể và 5 lỗi thường gặp. Năm bài mẫu P0 có trạng thái `seed-verified`:

| Mã | Nội dung | Cách kiểm |
|---|---|---|
| `TOAN-09-PTB2-001` | Hệ thức Viète & bài toán tham số (5 ví dụ: tự luận, trả lời ngắn, đúng/sai, trắc nghiệm, thực tế) | sympy + thay ngược |
| `TOAN-12-CUCTRI-001` | Cực trị hàm bậc ba & biện luận tham số (4 ví dụ, có bảng biến thiên KaTeX) | sympy + đạo hàm cấp hai |
| `VAN-12-NLXH-001` | NLXH tư tưởng đạo lí “tài và tâm”, khung viết, 3 Thẻ Dẫn chứng, đoạn văn mẫu (201 chữ, đếm bằng mã) | Tự rà soát; **trích dẫn chưa đối chiếu bản in** |
| `ANH-06-PRON-001` | /ɪ/ vs /iː/ (bảng IPA, 7 cặp tối thiểu, quy luật chính tả + ngoại lệ, bài tập) | Tự rà soát theo quy ước từ điển; **chưa tra trực tuyến** |
| `ANH-12-NOTICE-001` | Đọc điền thông báo 6 chỗ trống (văn bản gốc do biên soạn, ngữ pháp, từ nối, từ chỉ lượng) + bài luyện 5 câu | Tự rà soát; bản dịch tự dịch |

Nguồn P0 gồm 11 mục trong `SOURCE_REGISTRY.csv` (CT GDPT 2018 và 3 chương trình môn, Quyết định 764/QĐ-BGDĐT ngày 08/03/2024, Truyện Kiều, Bình Ngô đại cáo, tục ngữ, Cambridge Dictionary, Handbook of the IPA, biên soạn gốc HUB). Cột `verified_status` ghi trung thực mức đối chiếu của từng nguồn.

Giao diện kho dùng bảng màu và bố cục riêng theo quyết định ngày 2026-11-20 trong `DECISIONS_LOG.md`.

## (6) Lỗi, vấn đề phát hiện chưa xử lý

1. **Trích dẫn Ngữ văn chưa đối chiếu bản in.** Môi trường P0 chặn mạng ngoài (Wikisource không truy cập được qua cả hai kênh). Hai câu Truyện Kiều chỉ được xác nhận qua tìm kiếm web là của Nguyễn Du; câu Bình Ngô đại cáo (bản dịch, tìm kiếm cho thấy bản Bùi Kỷ phổ biến) cần đối chiếu **nguyên văn và tên người dịch** theo SGK; không ghi số câu thơ. Cần người/AI có bản in thẩm định trước khi nâng nhãn `verified`.
2. **Phiên âm IPA chưa tra trực tuyến** từng từ ở Cambridge/Oxford (mạng bị chặn); mới rà soát theo quy ước. Chưa có âm thanh mẫu.
3. **Định dạng đề Tiếng Anh**: chỉ xác nhận được số hiệu/ngày của Quyết định 764/QĐ-BGDĐT (08/03/2024); trang tra cứu ghi chú nội dung môn Tiếng Anh chưa cập nhật nên **chưa khẳng định** vị trí/số câu của dạng “đọc điền thông báo” trong đề. Bài mẫu được viết là “mô phỏng định dạng”.
4. **Số hiệu và ngày Thông tư 32/2018/TT-BGDĐT (26/12/2018)** ghi theo hiểu biết, chưa tra lại văn bản gốc; `url` để trống.
5. Kiểm tra lượt chạy `Deploy to GitHub Pages` tương ứng mỗi lần đẩy lên `main` để xác nhận phiên bản đã được xuất bản.
6. **Kiểm thử 375px là mô phỏng khung nhìn bằng Chromium**, chưa thử trên điện thoại thật.
7. **Định nghĩa 7 bước `a → g`** do P0 tự soạn (đề không liệt kê chi tiết); cần người dùng xác nhận (`DECISIONS_LOG.md` P0-011).
8. `META_PROMPT_FINAL.md` mới là tệp giữ chỗ (người dùng chưa dán nội dung).
9. Văn chỉ có 1 đơn vị seed (đề cho phép 1–2) do không kiểm chứng được nguyên văn thơ ngoài SGK.
10. Mục tiêu (`objectives`) diễn đạt theo tinh thần yêu cầu cần đạt, chưa đối chiếu từng câu với văn bản chương trình gốc.
11. Tại thời điểm tích hợp B4-C, `VAN-06-DHTR-001` chưa có trên `main`. `ANH-06-GRAM-001` đang ở nhánh `feat/anh-06-gram-001`.

## (7) Công việc đang dang dở

Còn bước merge B4-C vào `main` và xác nhận triển khai GitHub Pages. Theo dõi B2-C và B3-C riêng trong `TASK_QUEUE.md`. Các việc còn mở từ P0 gồm thẩm định A ⇄ B cho seed, lập kế hoạch phủ, âm thanh IPA và chỉ mục tìm kiếm tách riêng.

## (8) Điều kiện, đầu vào để tiếp tục

- Người/AI có **bản in hoặc nguồn tra cứu đáng tin** để đối chiếu trích dẫn Văn và IPA (mục 6.1–6.2).
- Người dùng xác nhận bộ 7 bước (6.7) và (nếu có) dán `META_PROMPT_FINAL`.
- Người dùng chốt thứ tự ưu tiên lớp/chủ đề cho giai đoạn 2 (đề xuất: lớp 9 và 12 trước).
- Đợt 5 cần chốt môn, lớp, chủ đề và hồ sơ học liệu đã thẩm định.
- Môi trường dùng Node.js ≥ 22. Cài bằng `npm ci`, sau đó chạy `npm run check`. Bộ kiểm thử trình duyệt dùng Playwright và Chromium theo hướng dẫn trong `scripts/e2e-smoke.cjs`.

## (9) Mã nhiệm vụ và prompt cần chạy kế tiếp

1. **`B5` – Đợt 5**. Dùng `prompts/RESUME_PROJECT_PROMPT.md` khi đã chốt chủ đề và đầu vào. Ghi các bước A–B–C trong `PROMPT_INDEX.md`.
2. **`B2-C`** tiếp tục khi có xác nhận nghiệm thu cho bài Ngữ văn 6. **`B3-C`** tiếp tục theo nhánh Tiếng Anh 6.
3. **`P2-VERIFY-SEED`** và **`P2-COVERAGE-PLAN`** tiếp tục theo `TASK_QUEUE.md`.

## (10) Phần đã chốt – KHÔNG làm lại, KHÔNG tự ý sửa

Chỉ sửa khi người dùng ra quyết định mới và ghi vào `DECISIONS_LOG.md`:

1. Stack: Next.js (App Router) + TypeScript + Tailwind CSS 4, `output: "export"`, `trailingSlash: true` (P0-001).
2. `basePath` `/tailieu` + `assetPrefix` `/tailieu/`; mọi liên kết nội bộ dùng `next/link` (P0-002).
3. KaTeX dựng lúc build với `throwOnError: true`; CSS/phông đóng gói cục bộ; không dùng CDN (P0-003).
4. Phông đóng gói bằng `@fontsource`; Noto Sans cho IPA (P0-004).
5. Không thêm hoạt ảnh nặng/thư viện chuyển động (P0-005).
6. Dùng bảng màu và bố cục thư viện độc lập theo quyết định ngày 2026-11-20. Giữ tên và liên kết về hệ sinh thái HUB EduNavigator.
7. Lược đồ 15 trường + `accessLevel` (mặc định và bắt buộc `free` ở giai đoạn này); quy ước `id` `MON-LL-CHUDE-NNN` và **các `id` đã đăng không đổi** (CONTENT_SCHEMA.md).
8. Cấu trúc Thẻ Dẫn chứng 5 trường (bắt buộc có *Giới hạn sử dụng*) và tách khối trích dẫn nguyên văn khỏi diễn giải.
9. Cách lưu dữ liệu: tệp TS `content/<môn>/<lớp>/` + đăng ký `content/index.ts` + sổ cái `CONTENT_REGISTRY.json`; `npm run validate` là cổng kiểm tra bắt buộc, kể cả trong workflow (P0-008, P0-012).
10. Quy tắc minh bạch kiểm chứng: nhãn `seed-verified` luôn kèm `verification.openItems`; không nâng `verified` khi chưa có thẩm định độc lập (P0-010).
11. Quy tắc “Đang cập nhật theo lộ trình” thay cho liên kết tới trang chưa có; không có nút chết.
12. Năm đơn vị seed `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001`, `VAN-12-NLXH-001`, `ANH-06-PRON-001`, `ANH-12-NOTICE-001`: chỉ sửa để vá lỗi kiểm chứng ở `P2-VERIFY-SEED`, không viết lại.
13. Giữ nguyên phép tính, phương pháp và đáp án đã thẩm định của `TOAN-06-SN-001` và `TOAN-06-CH-001`. Giữ nguyên nội dung đã chốt của `ANH-06-GRAM-001` khi đưa nhánh Đợt 3 vào `main`.
