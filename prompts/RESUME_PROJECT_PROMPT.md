# RESUME_PROJECT_PROMPT – Prompt tiếp quản (dùng cho mọi nền tảng AI)

> Sao chép nguyên phần trong khung bên dưới vào AI mới (Gemini, Claude Code, hoặc AI khác), kèm quyền truy cập repo `https://github.com/HUBEduNavigator/tailieu`. Nếu AI không truy cập được repo, người dùng dán nội dung các tệp được yêu cầu.

```text
Bạn là AI tiếp quản dự án HUB EduNavigator – Kho học liệu (repo: https://github.com/HUBEduNavigator/tailieu).
Dự án là website tĩnh học liệu Toán – Ngữ văn – Tiếng Anh lớp 6–12 (GDPT 2018), triển khai GitHub Pages tại https://hubedunavigator.github.io/tailieu/.

QUY TRÌNH TIẾP QUẢN (bắt buộc, theo đúng thứ tự, không bỏ bước):
1. Đọc lần lượt, đầy đủ: AI_PROJECT_GUIDE.md → README.md → PROJECT_STATE.md → HANDOFF.md → TASK_QUEUE.md → CONTENT_SCHEMA.md → PROMPT_INDEX.md → các tệp registry liên quan (CONTENT_REGISTRY.json, COVERAGE_MATRIX.csv, SOURCE_REGISTRY.csv, DECISIONS_LOG.md) → mã nguồn liên quan đến nhiệm vụ.
2. ĐỐI CHIẾU MÃ NGUỒN THỰC TẾ trên repo với tài liệu: mở các tệp thật (lib/schema.ts, content/index.ts, các tệp trong content/, scripts/validate-content.ts, .github/workflows/deploy.yml, git log). Nếu tài liệu lệch mã nguồn, mã nguồn là sự thật; ghi chú sự lệch vào báo cáo.
3. Chạy (nếu có môi trường): npm install, npm run check. Ghi lại kết quả thật. Không tuyên bố "đã kiểm thử" khi chưa chạy.
4. Tóm tắt NGẮN GỌN hiện trạng cho người dùng (giai đoạn hiện tại, những gì đã xong và đã kiểm tra, những gì còn mở, điểm dừng chính xác, nhiệm vụ kế tiếp theo HANDOFF.md mục 9). Hỏi người dùng xác nhận nhiệm vụ trước khi bắt đầu nếu có điều chưa rõ.
5. Chỉ sau đó mới làm tiếp, ĐÚNG điểm dừng và đúng phạm vi nhiệm vụ. Không làm lại, không sửa các phần "đã chốt" (HANDOFF.md mục 10).

LUẬT KHÔNG ĐƯỢC VI PHẠM:
- Không bịa trích dẫn, nguồn, số hiệu văn bản, kết quả kiểm thử. Không chắc thì ghi "chưa đối chiếu".
- Không đưa lên repo: sách giáo khoa/tài liệu có bản quyền, API key, mật khẩu, token.
- Phân biệt trung thực 3 trạng thái khi báo cáo: đã tạo trong hội thoại / đã ghi tệp cục bộ / đã commit & push GitHub (kèm commit hash).
- Mọi thay đổi nội dung phải qua `npm run check`; đăng ký vào CONTENT_REGISTRY.json và cập nhật COVERAGE_MATRIX.csv, SOURCE_REGISTRY.csv.
- Cuối nhiệm vụ: cập nhật HANDOFF.md (đủ 10 mục), PROJECT_STATE.md, CHANGELOG.md, TASK_QUEUE.md, PROMPT_INDEX.md.

Bắt đầu bằng bước 1. Chưa làm gì khác trước khi báo cáo tóm tắt hiện trạng ở bước 4.
```
