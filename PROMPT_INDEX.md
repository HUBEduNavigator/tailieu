# PROMPT_INDEX – Danh mục prompt

| Mã | Mục đích | Tệp | Trạng thái |
|---|---|---|---|
| `META_PROMPT_FINAL` | Meta-prompt gốc của dự án (định hướng chung cho các AI) | `prompts/META_PROMPT_FINAL.md` | **Giữ chỗ** – chờ người dùng dán toàn văn (P0 không nhận được nội dung) |
| `P0-TAILIEU-CORE` | Khởi tạo khung website và hệ thống quản lý đa AI | `prompts/P0-TAILIEU-CORE.md` | **Đã chạy** (Claude Code), xong v0.1.0 |
| `RESUME_PROJECT_PROMPT` | Prompt trung lập để bất kỳ AI nào tiếp quản đúng điểm dừng | `prompts/RESUME_PROJECT_PROMPT.md` | Sẵn sàng dùng |
| `B3-A` | Nghiên cứu và soạn học liệu hiện tại đơn, tần suất và đuôi -s/-es | Hồ sơ nghiên cứu Đợt 3 | Đã có bản học liệu bàn giao |
| `B3-B` | Thẩm định độc lập, đối chiếu nguồn, IPA, bản dịch và đáp án | Hồ sơ nghiệm thu Đợt 3 | Người dùng xác nhận đạt |
| `B3-C` | Tích hợp `ANH-06-GRAM-001`, đồng bộ sổ cái và kiểm thử bản xuất tĩnh | Yêu cầu tích hợp và tệp học liệu do người dùng cung cấp | Đã chạy bằng Codex ngày 2026-11-21 trên nhánh `feat/anh-06-gram-001` |

## Khung chờ các đợt A–B–C (Giai đoạn 2 trở đi)

Mỗi đợt có ba prompt, đặt tên `P<giai đoạn>-<phạm vi>-<A|B|C>` và lưu trong `prompts/`:

| Vai | Việc | Tệp (chưa tạo) | Trạng thái |
|---|---|---|---|
| **A – Soạn** | Soạn dữ liệu theo `CONTENT_SCHEMA.md`, ghi nguồn | `prompts/P2-<phạm vi>-A.md` | Chờ |
| **B – Thẩm định** | Thẩm định độc lập, lập báo cáo lỗi | `prompts/P2-<phạm vi>-B.md` | Chờ |
| **C – Hoàn thiện** | Sửa theo phản biện, ghi tệp, đăng ký sổ cái, build, push | `prompts/P2-<phạm vi>-C.md` | Chờ |

Quy tắc: tạo tệp prompt **trước** khi chạy, cập nhật bảng này sau khi chạy (trạng thái, ngày, AI thực hiện, commit).
