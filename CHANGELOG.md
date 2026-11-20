# CHANGELOG

Theo [Semantic Versioning](https://semver.org/lang/vi/). Ngày theo định dạng YYYY-MM-DD.

## [0.2.0] – 2026-11-20

- Thiết kế riêng cho kho học liệu. Trang khám phá đưa tìm kiếm, danh sách tài liệu và lối tắt theo môn, lớp, kỳ thi vào cùng một bố cục.
- Danh mục giữ từ khóa và bộ lọc trong URL. Bảng lọc trên điện thoại có thể thu gọn.
- Trang đọc có mục lục riêng và liên kết nhanh đến phương pháp, ví dụ có lời giải và lỗi thường gặp.
- Bổ sung bài Toán 6 `TOAN-06-SN-001` về phép tính số nguyên, quy tắc dấu ngoặc và thứ tự thực hiện phép tính.

## [0.1.0] – 2026-11-19 · `P0-TAILIEU-CORE`

### Thêm mới
- Khung website tĩnh Next.js (App Router) + TypeScript + Tailwind CSS 4, nhận diện đồng bộ với repo `home` (Light/Dark, lưu lựa chọn).
- Cấu hình xuất tĩnh cho GitHub Pages (`basePath /tailieu`, `.nojekyll`) và workflow `.github/workflows/deploy.yml`.
- Lược đồ dữ liệu `lib/schema.ts` (15 trường chuẩn + `accessLevel` + mở rộng Toán/Văn/Anh) và `CONTENT_SCHEMA.md`.
- Bộ hiển thị theo môn: KaTeX (nội dòng và khối, cuộn ngang), khung đọc Ngữ văn + Thẻ Dẫn chứng (nổi bật *Giới hạn sử dụng*) + khối trích dẫn nguyên văn có nguồn, bảng IPA/ngữ pháp/từ vựng/Anh–Việt/bài tập.
- Trang chủ tìm kiếm, cổng 3 môn, lối tắt lớp 6–12 và 2 nhóm kỳ thi, trang môn, trang tra cứu có bộ lọc đa chiều và tìm kiếm tiếng Việt có dấu/không dấu, trang dạng bài có mục lục và breadcrumb, trang giới thiệu, trang 404.
- Dữ liệu mồi `seed-verified`: `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001`, `VAN-12-NLXH-001`, `ANH-06-PRON-001`, `ANH-12-NOTICE-001`.
- `scripts/validate-content.ts` (kiểm tra toàn vẹn nội dung, sổ cái, nguồn, công thức) và `scripts/e2e-smoke.cjs` (kiểm thử trình duyệt).
- Hệ thống tệp quản lý và bàn giao đa AI: `README.md`, `AI_PROJECT_GUIDE.md`, `PROJECT_STATE.md`, `HANDOFF.md`, `TASK_QUEUE.md`, `PROMPT_INDEX.md`, `DECISIONS_LOG.md`, `CONTENT_REGISTRY.json`, `COVERAGE_MATRIX.csv`, `SOURCE_REGISTRY.csv`, thư mục `prompts/`.

### Lưu ý
- Các điểm chưa đối chiếu nguồn (Ngữ văn, IPA) được liệt kê ở `HANDOFF.md` mục 6.
