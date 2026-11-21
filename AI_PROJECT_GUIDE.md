# Quy trình biên tập Cẩm nang làm bài thi

Đọc [meta-prompt](prompts/META_PROMPT_FINAL.md), [trạng thái dự án](PROJECT_STATE.md) và mã của chuyên mục trước khi bắt đầu.

1. Chọn một quyết định học sinh thường bỏ sót trong đề. Ưu tiên ví dụ có thể chỉ ra dấu hiệu và tình huống dễ vận dụng sai.
2. Dùng Gemini nghiên cứu và giao nguồn, ví dụ, phản ví dụ cùng thiết kế thực hành. GPT tự giải lại, đối chiếu nguồn, sửa lỗi và ghi rõ các điểm còn cần kiểm chứng.
3. Thêm hoặc cập nhật chuyên mục trong `lib/guides.ts`. Mỗi tình huống cần câu hỏi, lựa chọn, phản hồi cho từng lựa chọn, gợi ý, cách làm và giới hạn áp dụng. Ghi xuất xứ cho trích dẫn và dẫn nguồn theo từng khẳng định cần đối chiếu.
4. Chạy `npm run check` rồi thử luồng chọn đáp án, mở gợi ý và đi tiếp bằng bàn phím và trên điện thoại. Duy trì các URL hiện hành của cẩm nang nếu công việc không yêu cầu đổi.
5. Ghi lại kết quả kiểm thử, thay đổi nội dung và trạng thái xuất bản khi bàn giao.
