# HANDOFF – Bàn giao nhiệm vụ

_Cập nhật 2026-11-20 · Thiết kế lại giao diện kho học liệu_

## (1) Giai đoạn hiện tại

**Giai đoạn 1 (P0) – đã hoàn thành.** Giai đoạn 2–4 đang chờ (xem `TASK_QUEUE.md`). Phiên bản `v0.2.0` cập nhật giao diện thư viện.

## (2) Mã và tên nhiệm vụ gần nhất

Thiết kế lại kho học liệu theo yêu cầu người dùng ngày 2026-11-20. Prompt `prompts/P0-TAILIEU-CORE.md` ghi yêu cầu gốc về dữ liệu, tra cứu và trình bày theo môn. Quyết định mới về thiết kế được ghi trong `DECISIONS_LOG.md`.

## (3) Hạng mục đã hoàn thành và đã kiểm tra

- Cập nhật trang khám phá, danh mục, trang môn và trang đọc. Các trang vẫn dùng URL dưới `/tailieu`.
- `npm run check` đã kiểm tra TypeScript, 5 dạng bài, 398 công thức KaTeX, 11 nguồn và tạo bản tĩnh.
- Bộ kiểm thử Chromium kiểm tra điều hướng, bố cục ở 375 px, tìm kiếm, các bộ lọc, mục lục, phông KaTeX và IPA, liên kết nội bộ và chế độ sáng/tối.
- Xem commit và trạng thái triển khai trên GitHub để xác định phiên bản đang phục vụ.

## (4) Tệp, thư mục, trang vừa tạo hoặc sửa

- `app/` chứa bố cục, màu, favicon, ảnh minh họa WebP và các trang đã thiết kế lại.
- `components/` chứa điều hướng, tìm kiếm, bộ lọc, thẻ tài liệu và bố cục đọc.
- `scripts/e2e-smoke.cjs` kiểm tra thêm tìm kiếm bằng Enter, đóng gợi ý bằng Escape, lọc trên điện thoại và liên kết đọc nhanh.

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

## (7) Công việc đang dang dở

Không có tệp dở dang. Những việc đã nêu ở mục 6 là việc kiểm chứng còn mở, không phải mã chưa viết xong. Chưa làm (ngoài phạm vi P0): thẩm định A ⇄ B cho seed, nạp học liệu mới, âm thanh IPA, chỉ mục tìm kiếm tách riêng.

## (8) Điều kiện, đầu vào để tiếp tục

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
6. Dùng bảng màu và bố cục thư viện độc lập theo quyết định ngày 2026-11-20. Giữ tên và liên kết về hệ sinh thái HUB EduNavigator.
7. Lược đồ 15 trường + `accessLevel` (mặc định và bắt buộc `free` ở giai đoạn này); quy ước `id` `MON-LL-CHUDE-NNN` và **các `id` đã đăng không đổi** (CONTENT_SCHEMA.md).
8. Cấu trúc Thẻ Dẫn chứng 5 trường (bắt buộc có *Giới hạn sử dụng*) và tách khối trích dẫn nguyên văn khỏi diễn giải.
9. Cách lưu dữ liệu: tệp TS `content/<môn>/<lớp>/` + đăng ký `content/index.ts` + sổ cái `CONTENT_REGISTRY.json`; `npm run validate` là cổng kiểm tra bắt buộc, kể cả trong workflow (P0-008, P0-012).
10. Quy tắc minh bạch kiểm chứng: nhãn `seed-verified` luôn kèm `verification.openItems`; không nâng `verified` khi chưa có thẩm định độc lập (P0-010).
11. Quy tắc “Đang cập nhật theo lộ trình” thay cho liên kết tới trang chưa có; không có nút chết.
12. Năm đơn vị seed `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001`, `VAN-12-NLXH-001`, `ANH-06-PRON-001`, `ANH-12-NOTICE-001`: chỉ sửa để vá lỗi kiểm chứng ở `P2-VERIFY-SEED`, không viết lại.
