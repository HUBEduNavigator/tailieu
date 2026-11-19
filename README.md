# HUB EduNavigator – Kho học liệu (`tailieu`)

Website tĩnh về **học liệu tự học và ngân hàng dạng bài** cho học sinh Việt Nam lớp 6–12 (chương trình GDPT 2018), ba môn: **Toán học, Ngữ văn, Tiếng Anh**. Thuộc hệ sinh thái HUB EduNavigator (trang chủ: <https://hubedunavigator.github.io/home/>).

- Địa chỉ khi đã bật GitHub Pages: <https://hubedunavigator.github.io/tailieu/>
- Phiên bản hiện tại: **v0.2.0** (giao diện kho học liệu, xem `CHANGELOG.md`)

## Học liệu được tổ chức thế nào

`Môn → Lớp (6–12) → Nhóm học liệu → Chủ đề → Dạng bài`

Năm nhóm học liệu: `Nền tảng`, `Nâng cao`, `Tuyển sinh lớp 10`, `Tốt nghiệp THPT`, `Bổ trợ`.

Mỗi dạng bài là một tệp dữ liệu có cấu trúc chặt chẽ (15 trường chuẩn, xem `CONTENT_SCHEMA.md`). Giao diện tự đọc dữ liệu: **thêm học liệu mới không phải sửa giao diện**.

Trang **Khám phá** có tìm kiếm nhanh và lối tắt theo môn, lớp, kỳ thi. Trang **Danh mục** hỗ trợ lọc kết hợp và chia sẻ bộ lọc qua URL. Trong mỗi dạng bài, người đọc có thể dùng mục lục hoặc nhảy thẳng đến phương pháp, ví dụ và lỗi thường gặp.

## Công nghệ

Next.js (App Router) + TypeScript + Tailwind CSS 4, xuất tĩnh (`output: "export"`).
Công thức Toán dùng **KaTeX** dựng sẵn lúc build (không cần CDN, không cần JavaScript để hiển thị công thức). Phông chữ (Be Vietnam Pro, Fraunces, Noto Sans cho IPA) được đóng gói cùng dự án qua `@fontsource`, không gọi Google Fonts.

## Cấu trúc thư mục

```
app/                 Các trang (trang chủ, /mon/…, /hoc-lieu, /bai/…, /gioi-thieu)
components/          Giao diện: Header, Catalog (bộ lọc), HomeSearch, unit/ (hiển thị dạng bài theo môn)
content/             DỮ LIỆU học liệu: content/<môn>/<lớp>/<tệp>.ts và content/index.ts (đăng ký)
lib/                 schema.ts (lược đồ), rich.ts (KaTeX), search.ts, labels.ts, sources.ts
scripts/             validate-content.ts (kiểm tra toàn vẹn), e2e-smoke.cjs (kiểm thử trình duyệt)
prompts/             Các prompt đã dùng và prompt tiếp quản
.github/workflows/   deploy.yml – tự động triển khai lên GitHub Pages
*.md, *.csv, *.json  Sổ cái và tệp bàn giao (xem bên dưới)
```

### Tệp quản lý dự án (đọc theo thứ tự này khi tiếp quản)

`AI_PROJECT_GUIDE.md` → `README.md` → `PROJECT_STATE.md` → `HANDOFF.md` → `TASK_QUEUE.md` → `CONTENT_SCHEMA.md` → `PROMPT_INDEX.md` → `CONTENT_REGISTRY.json`, `COVERAGE_MATRIX.csv`, `SOURCE_REGISTRY.csv`, `DECISIONS_LOG.md`, `CHANGELOG.md`.

## Chạy trên máy

Yêu cầu Node.js 22 trở lên.

```bash
npm install
npm run dev
```

Mở <http://localhost:3000/>. Khi chạy `dev`, đường dẫn gốc là `/` (không có `/tailieu`).

```bash
npm run check
```

Chạy lần lượt: kiểm tra kiểu (TypeScript) → kiểm tra toàn vẹn nội dung (`npm run validate`) → build tĩnh ra thư mục `out/`.

```bash
npm run preview
```

Build với đường dẫn gốc `/` rồi mở `out/` bằng `npx serve` để xem thử bản tĩnh trên máy.

> `npm run build` mặc định dùng đường dẫn con `/tailieu` (đúng với GitHub Pages). Biến `NEXT_PUBLIC_BASE_PATH` cho phép ghi đè (kể cả để trống).

## Thêm một dạng bài mới

1. Tạo tệp `content/<môn>/<lớp>/<ten-tep>.ts` theo mẫu một tệp có sẵn (kiểu `MathUnit`, `VanUnit` hoặc `AnhUnit` trong `lib/schema.ts`).
2. Thêm nguồn (nếu mới) vào `SOURCE_REGISTRY.csv`.
3. Import vào `content/index.ts`.
4. Ghi vào `CONTENT_REGISTRY.json` và cập nhật `COVERAGE_MATRIX.csv`.
5. Chạy `npm run check`. Lệnh `validate` sẽ báo nếu mã `id` sai quy ước, nguồn không tồn tại, liên kết gãy, công thức KaTeX lỗi, Thẻ Dẫn chứng thiếu trường…

## Bật GitHub Pages bằng giao diện web (không cần dùng dòng lệnh)

1. Vào <https://github.com/HUBEduNavigator/tailieu> và bấm tab **Settings** (Cài đặt) của repository.
2. Ở thanh bên trái chọn **Pages**. Mục **Build and deployment → Source**, chọn **GitHub Actions**.
3. Chọn tab **Actions**. Nếu thấy workflow **Deploy to GitHub Pages** chưa chạy, bấm vào đó rồi **Run workflow** (nhánh `main`). Workflow cũng tự chạy mỗi khi có thay đổi được đẩy lên nhánh `main`.
4. Chờ vài phút cho tới khi cả hai bước `build` và `deploy` có dấu tích xanh. Mở <https://hubedunavigator.github.io/tailieu/> để xem trang.

Nếu thấy lỗi quyền (ví dụ *Resource not accessible by integration*), quay lại bước 2 và chắc chắn Source đã là **GitHub Actions**.

## Giấy phép và bản quyền nội dung

Không đưa sách giáo khoa hay tài liệu có bản quyền lên repo. Mọi đề bài, lời giải, văn bản bài tập là biên soạn gốc. Trích dẫn văn học phải đúng nguyên văn, có xuất xứ, và đã đối chiếu (xem `AI_PROJECT_GUIDE.md`).
