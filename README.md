# HUB EduNavigator – Cẩm nang làm bài thi

Cẩm nang thực hành Toán, Ngữ văn và Tiếng Anh. Mỗi chuyên mục đặt học sinh trước một lựa chọn, sau đó giải thích dấu hiệu, cách làm và giới hạn áp dụng.

- [Website](https://hubedunavigator.github.io/tailieu/)
- [Meta-prompt giao nghiên cứu và tích hợp](prompts/META_PROMPT_FINAL.md)
- [Quy trình biên tập](AI_PROJECT_GUIDE.md)

## Phát triển

Dùng Node.js 22. Chạy `npm ci` và `npm run dev`. Cấu hình xuất tĩnh của Next.js dùng đường dẫn gốc `/tailieu` trên GitHub Pages.

`npm run check` kiểm tra kiểu, dữ liệu và dựng bản tĩnh vào `out/`. Xem đầu tệp [e2e-smoke.cjs](scripts/e2e-smoke.cjs) để chạy kiểm thử trình duyệt. GitHub Actions triển khai sau khi có cập nhật vào nhánh `main`.
