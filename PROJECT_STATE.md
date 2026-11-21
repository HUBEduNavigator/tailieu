# PROJECT_STATE – Ảnh chụp tiến độ

**Hướng hiện hành từ 21/11/2026.** Trang chủ dẫn vào cẩm nang làm bài theo ba môn. Kho chín bài và đường dẫn cũ tiếp tục hoạt động. Đợt kế tiếp theo [meta-prompt điều phối](prompts/META_PROMPT_FINAL.md) là nghiên cứu cách thử đáp án bằng máy tính. Lộ trình phủ theo mã bài bên dưới là lịch sử.

_Cập nhật: 2026-11-21 · Phiên bản phát hành: v0.2.0_

## Tổng quan

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **P0** | Khung website, bộ hiển thị 3 môn, bộ lọc/tìm kiếm, dữ liệu mồi, triển khai, hệ thống quản lý đa AI | **Hoàn thành** (`P0-TAILIEU-CORE`) |
| **Giai đoạn 2** | Lập kế hoạch phủ và nạp học liệu đợt đầu cho từng môn theo ma trận phủ | Đã đăng bài Toán 6 về số nguyên. Đợt 2, 3 và 4 đã hợp nhất. Đợt 5 chờ chốt chủ đề và đầu vào. |
| **Giai đoạn 3** | Mở rộng, thẩm định chéo A ⇄ B, nâng nhãn `verified` | Chờ |
| **Giai đoạn 4** | Hoàn thiện, đồng bộ liên kết, bàn giao ổn định (nội dung có thể khóa theo `accessLevel` nếu quyết định sau) | Chờ |

(Cách chia 4 giai đoạn và nội dung chi tiết: `TASK_QUEUE.md`.)

## Giao diện kho học liệu

Trang chủ mở bằng một tình huống làm bài, sau đó dẫn vào ba môn và sáu chuyên mục có câu hỏi tương tác. Mỗi chuyên mục có phản hồi theo lựa chọn, gợi ý, cách làm và giới hạn áp dụng. Danh mục giữ bộ lọc theo lớp và đường dẫn đến chín bài đã xuất bản.

## Kho học liệu hiện có

| Môn | Số dạng bài | Mã |
|---|---|---|
| Toán học | 4 | `TOAN-06-SN-001`, `TOAN-06-CH-001`, `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001` |
| Ngữ văn | 2 | `VAN-06-DHTR-001`, `VAN-12-NLXH-001` |
| Tiếng Anh | 3 | `ANH-06-PRON-001`, `ANH-06-GRAM-001`, `ANH-12-NOTICE-001` |
| **Tổng bản phát hành Đợt 2–4** | **9** | |

`TOAN-06-SN-001`, `VAN-06-DHTR-001`, `ANH-06-GRAM-001` và `TOAN-06-CH-001` mang trạng thái `verified` theo xác nhận của người dùng. Năm bài mẫu P0 mang trạng thái `seed-verified`.

## Hạ tầng

- Khung Next.js 16 + React 19 + Tailwind 4, xuất tĩnh, `basePath` `/tailieu`.
- Workflow `.github/workflows/deploy.yml` chạy khi push lên `main`.
- Các bước kiểm tra bản hợp nhất Đợt 2–4 và kết quả được ghi tại `HANDOFF.md` mục 3.
- GitHub Pages triển khai từ GitHub Actions. Xem hướng dẫn kiểm tra lần chạy trong `README.md`.

## Trạng thái đồng bộ (3 trạng thái, xem `AI_PROJECT_GUIDE.md` mục 5)

Xem `HANDOFF.md` mục 3 và báo cáo cuối của nhiệm vụ để biết commit hash và nhánh đã đẩy.
