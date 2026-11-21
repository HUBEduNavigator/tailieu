# DECISIONS_LOG – Nhật ký quyết định kiến trúc

**Hướng hiện hành từ 21/11/2026.** Trang chủ dẫn vào cẩm nang làm bài theo ba môn. Kho chín bài và đường dẫn cũ tiếp tục hoạt động. Đợt kế tiếp theo [meta-prompt điều phối](prompts/META_PROMPT_FINAL.md) là nghiên cứu cách thử đáp án bằng máy tính. Lộ trình phủ theo mã bài bên dưới là lịch sử.

Mỗi quyết định: bối cảnh → quyết định → lý do → hệ quả. Muốn đổi một quyết định đã chốt, thêm mục mới ghi rõ người quyết định và lý do, không xóa mục cũ.

## P0-001 · Stack kế thừa repo `home`
- **Quyết định**: Next.js 16.4.6 (App Router), React 19.3.1, TypeScript 5.9.3, Tailwind CSS 4.3.5, `output: "export"`, `trailingSlash: true`.
- **Lý do**: đọc trực tiếp `package.json`, `next.config.ts`, `app/globals.css`, `app/layout.tsx` và workflow của `HUBEduNavigator/home`; giữ cùng stack để thống nhất nhận diện và vận hành. Dùng TypeScript 5.9 (không phải 7) như `home` vì đã kiểm chứng tương thích.

## P0-002 · Đường dẫn con `/tailieu`
- **Quyết định**: `basePath` mặc định `/tailieu` ở production, `""` ở `dev`; biến `NEXT_PUBLIC_BASE_PATH` ghi đè (kể cả rỗng, dùng cho `npm run preview`). `assetPrefix` đặt `/tailieu/` theo đặc tả.
- **Lý do**: GitHub Pages phục vụ tại `https://hubedunavigator.github.io/tailieu/`. Mọi liên kết nội bộ đi qua `next/link` nên tự mang tiền tố. Đã kiểm tra: toàn bộ `href/src` trong HTML dựng ra đều bắt đầu bằng `/tailieu/`.
- **Ghi chú**: thử bỏ `assetPrefix` cho kết quả HTML giống hệt (`basePath` đã đủ); giữ lại theo đặc tả. Thẻ `<link rel="preconnect" href="/">` là mặc định của Next, vô hại.

## P0-003 · KaTeX dựng lúc build
- **Quyết định**: dùng gói `katex` npm, dựng HTML ở phía server (`katex.renderToString`, `throwOnError: true`); CSS và phông KaTeX được bundler đóng gói cục bộ (`katex/dist/katex.min.css`); công thức khối cuộn ngang bằng `.math-block { overflow-x: auto }`.
- **Lý do**: không phụ thuộc CDN; không cần JS ở trình duyệt để hiện công thức; lỗi LaTeX chặn ngay khi build nên không thể lộ mã thô. `npm run validate` cũng dựng thử mọi công thức.

## P0-004 · Phông chữ đóng gói cục bộ
- **Quyết định**: dùng `@fontsource` (Be Vietnam Pro, Fraunces cho tiêu đề — như `home`; Noto Sans cho IPA) thay `next/font/google`.
- **Lý do**: `next/font/google` cần tải từ Google lúc build (môi trường build hạn chế mạng sẽ lỗi); fontsource tự chứa. Noto Sans có đủ ký tự IPA (latin-ext, greek cho θ); đã kiểm tra trình duyệt nạp đúng và các ký tự `ɪ ʃ ː ˈ ə θ ð ŋ ɚ ɡ ɒ` đều có glyph.

## P0-005 · Tối giản hoạt ảnh
- **Quyết định**: bỏ `motion`/framer, thanh tiến trình cuộn, hoạt ảnh trang chủ, khối marketing. Chỉ giữ `transition-colors`, focus-visible rõ ràng; `prefers-reduced-motion` được tôn trọng. Không có thư viện hoạt ảnh trong `dependencies`.

## P0-006 · Nhận diện đồng bộ từ `home`
- **Kế thừa**: bảng màu Light/Dark (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--navy`, `--accent` vàng `#f0b429`, `--focus`, `--ok`), bo góc thẻ ~1.1–1.25rem, nút bo tròn, `data-theme` + `@custom-variant dark`, cặp phông Be Vietnam Pro + Fraunces, logo la bàn và `app/icon.svg`, tên “HUB EduNavigator”, liên kết về trang chủ `https://hubedunavigator.github.io/home/`, cấu trúc workflow deploy.
- **Khác có chủ đích**: lưu lựa chọn sáng/tối vào `localStorage` (`home` chỉ giữ trong bộ nhớ) theo yêu cầu P0; thêm token cho khung trích dẫn và cảnh báo.

## P0-007 · Trường `accessLevel`
- **Quyết định**: có sẵn trong schema (`free`/`member`/`premium`); `npm run validate` bắt buộc `free` ở P0. Không dựng giao diện khóa, đăng nhập hay backend.

## P0-008 · Lưu trữ dữ liệu học liệu
- **Quyết định**: mỗi đơn vị là một tệp TypeScript `content/<môn>/<lớp>/*.ts` dùng `satisfies MathUnit|VanUnit|AnhUnit` (kiểm tra kiểu chặt lúc build); đăng ký trong `content/index.ts`; sổ cái `CONTENT_REGISTRY.json` được đối chiếu tự động bởi `scripts/validate-content.ts`.
- **Lý do**: thêm học liệu không phải sửa giao diện; lỗi cấu trúc bị chặn ở thời điểm biên dịch.

## P0-009 · Tìm kiếm phía trình duyệt
- **Quyết định**: danh mục gọn (`CatalogItem`) được nhúng khi build; khớp **theo đầu từ** sau chuẩn hóa (NFD bỏ dấu, `đ→d`, chữ thường) để “am” không dính vào “tham”; mọi từ của truy vấn phải khớp; xếp hạng theo id/tiêu đề. Bộ lọc nằm trong URL (`?mon=&lop=&nhom=&chude=&muc=&q=`) để chia sẻ được; mục không có kết quả hiện “Đang cập nhật theo lộ trình”.
- **Giới hạn đã biết**: nhúng danh mục vào trang chỉ hợp lý tới vài trăm đơn vị (xem `TASK_QUEUE.md`, giai đoạn 3).

## P0-010 · Cách đánh dấu mức kiểm chứng
- **Quyết định**: nhãn `seed-verified` bắt buộc kèm khối `verification` (`method` + `openItems`) hiển thị công khai ở cuối mỗi bài. Toán được tính lại bằng sympy. Ngữ văn và Tiếng Anh **chưa** đối chiếu bản in/từ điển trực tuyến vì môi trường làm việc P0 chặn mạng ngoài (Wikisource, Cambridge); các điểm này được liệt kê trung thực ở `openItems` và `SOURCE_REGISTRY.csv`.

## P0-011 · Quy trình 7 bước `a → g`
- Đề bài P0 yêu cầu ghi “quy trình 7 bước a → g” nhưng không liệt kê chi tiết các bước. P0 đã tự định nghĩa 7 bước (tiếp nhận → chốt phạm vi → soạn → thẩm định độc lập → sửa → ghi tệp/kiểm thử → đồng bộ/bàn giao) trong `AI_PROJECT_GUIDE.md`. **Người dùng cần xác nhận hoặc chỉnh lại nếu bộ 7 bước gốc khác.**

## P0-012 · Triển khai
- **Quyết định**: workflow `deploy.yml` (push `main` + `workflow_dispatch`; quyền `contents: read`, `pages: write`, `id-token: write`) chạy `typecheck` + `validate` trước `build` để không triển khai nội dung sai. Phiên bản action giữ như repo `home`. Có `public/.nojekyll` (đã xuất ra `out/.nojekyll`).

## P0-013 · Seed data
- 5 đơn vị (Toán 2, Văn 1, Anh 2). Văn chỉ làm 1 vì không thể kiểm chứng nguyên văn trích dẫn trực tuyến trong phiên P0, nên giữ số lượng tối thiểu theo nguyên tắc “không bịa trích dẫn”.

## Thiết kế riêng cho kho học liệu · 2026-11-20

- Người dùng yêu cầu làm lại giao diện theo nhu cầu tìm và đọc tài liệu. Cập nhật quyết định P0-006 về kế thừa bố cục, màu và dấu hiệu nhận diện từ `home`.
- Trang khám phá có tìm kiếm và các lối tắt, danh mục dùng bộ lọc chia sẻ được qua URL, trang chi tiết có khung đọc và mục lục.
- Tên HUB EduNavigator và liên kết về `home` dùng để nhận diện hệ sinh thái. Kho vẫn xuất tĩnh tại `/tailieu` với các URL dạng bài hiện có.
