# TASK_QUEUE – Hàng đợi nhiệm vụ theo 4 giai đoạn

Ký hiệu: ✅ xong · ⏭ kế tiếp · ⬜ chờ. Mã nhiệm vụ đặt theo `PHASE-PHẠM VI`.

## Giai đoạn 1 – Khởi tạo (P0) ✅

- ✅ `P0-TAILIEU-CORE`: khung website, hiển thị 3 môn, lọc/tìm kiếm, seed 5 đơn vị, workflow Pages, hệ thống tệp quản lý.

## Giai đoạn 2 – Lập kế hoạch phủ và nạp đợt đầu ⏭

- ✅ `B1-M1-A` đã đăng bài Toán 6 `TOAN-06-SN-001` về phép tính số nguyên sau khi người dùng xác nhận đạt thẩm định.
- ⬜ `B2-C`: `VAN-06-DHTR-001` chờ đầu vào xác nhận nghiệm thu. Đơn vị chưa có trên `main` tại thời điểm tích hợp B3-C.
- ✅ `B3` – `ANH-06-GRAM-001`: Đợt 3 đã tích hợp và kiểm thử trên nhánh B3-C. Việc phát hành theo quy trình merge vào `main`.
- ⏭ `B4` – Đợt 4: chờ chốt môn, lớp, chủ đề và hồ sơ học liệu.
- ⏭ `P2-COVERAGE-PLAN`: lập danh sách chủ đề/dạng bài cho từng môn × lớp × nhóm; điền `COVERAGE_MATRIX.csv` (`planned_count`). Cần chốt thứ tự ưu tiên với người dùng (đề xuất: lớp 9 và 12 trước vì gắn kỳ thi).
- ⬜ `P2-VERIFY-SEED`: thẩm định độc lập A ⇄ B cho 5 đơn vị seed; xử lý `verification.openItems`; nâng `verified` nếu đạt (xem `HANDOFF.md` mục 6–7).
- ⬜ `P2-AUDIO-IPA` (tùy chọn): nghiên cứu cách đưa âm thanh mẫu IPA hợp lệ (không vi phạm bản quyền).
- ⬜ Đợt nạp A–B–C (khung chờ trong `PROMPT_INDEX.md`): mỗi đợt do AI soạn (A) → AI thẩm định (B) → AI hoàn thiện/đăng ký (C), mỗi đợt chỉ nạp một nhóm nhỏ có kiểm chứng.

## Giai đoạn 3 – Mở rộng và thẩm định chéo ⬜

- ⬜ Nạp học liệu theo ma trận phủ, ưu tiên nhóm `Tuyển sinh lớp 10` và `Tốt nghiệp THPT`.
- ⬜ Mở rộng Ngân hàng Dẫn chứng (Ngữ văn) với kiểm chứng từng trích dẫn theo bản in.
- ⬜ Chuyển danh mục tìm kiếm từ dữ liệu nhúng sang chỉ mục JSON tách riêng nếu kho vượt vài trăm đơn vị.
- ⬜ Trang thống kê độ phủ công khai (tùy chọn) sinh từ `COVERAGE_MATRIX.csv`.

## Giai đoạn 4 – Hoàn thiện và ổn định ⬜

- ⬜ Rà soát toàn kho: liên kết tiên quyết/liên quan, nhất quán thuật ngữ.
- ⬜ Quyết định về `accessLevel` (`member`/`premium`) và đăng nhập: chỉ làm khi có chỉ thị mới (hiện cấm ở P0).
- ⬜ Tối ưu SEO/hiệu năng, kiểm thử khả năng truy cập (a11y) sâu hơn.
- ⬜ Bàn giao ổn định, chốt phiên bản `v1.0.0`.

## Việc nhỏ chưa gán giai đoạn

- ⬜ Cân nhắc thêm `README` nhãn trạng thái (badge) hiển thị trạng thái triển khai.
- ⬜ Chạy `npm audit` định kỳ và cập nhật phụ thuộc theo bản vá.
