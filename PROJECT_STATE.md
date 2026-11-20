# PROJECT_STATE – Ảnh chụp tiến độ

_Cập nhật: 2026-11-20 · Phiên bản: v0.2.0_

## Tổng quan

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **P0** | Khung website, bộ hiển thị 3 môn, bộ lọc/tìm kiếm, dữ liệu mồi, triển khai, hệ thống quản lý đa AI | **Hoàn thành** (`P0-TAILIEU-CORE`) |
| **Giai đoạn 2** | Lập kế hoạch phủ và nạp học liệu đợt đầu cho từng môn theo ma trận phủ | Đã đăng bài Toán 6 đầu tiên |
| **Giai đoạn 3** | Mở rộng, thẩm định chéo A ⇄ B, nâng nhãn `verified` | Chờ |
| **Giai đoạn 4** | Hoàn thiện, đồng bộ liên kết, bàn giao ổn định (nội dung có thể khóa theo `accessLevel` nếu quyết định sau) | Chờ |

(Cách chia 4 giai đoạn và nội dung chi tiết: `TASK_QUEUE.md`.)

## Giao diện kho học liệu

Trang khám phá, danh mục, trang môn và trang đọc dùng bố cục riêng cho thư viện. Các đường dẫn công khai, dữ liệu và mức kiểm chứng của 5 dạng bài được giữ theo P0.

## Kho học liệu hiện có

| Môn | Số dạng bài | Mã |
|---|---|---|
| Toán học | 3 | `TOAN-06-SN-001`, `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001` |
| Ngữ văn | 1 | `VAN-12-NLXH-001` |
| Tiếng Anh | 2 | `ANH-06-PRON-001`, `ANH-12-NOTICE-001` |

`TOAN-06-SN-001` mang trạng thái `verified` theo xác nhận của người dùng. Năm bài mẫu P0 mang trạng thái `seed-verified`.

## Hạ tầng

- Khung Next.js 16 + React 19 + Tailwind 4, xuất tĩnh, `basePath` `/tailieu`.
- Workflow `.github/workflows/deploy.yml` chạy khi push lên `main`.
- Kiểm tra: `npm run typecheck`, `npm run validate`, `npm run build` (đã chạy ở P0, xem `HANDOFF.md`).
- GitHub Pages triển khai từ GitHub Actions. Xem hướng dẫn kiểm tra lần chạy trong `README.md`.

## Trạng thái đồng bộ (3 trạng thái, xem `AI_PROJECT_GUIDE.md` mục 5)

Xem `HANDOFF.md` mục 3 và báo cáo cuối của nhiệm vụ để biết commit hash và nhánh đã đẩy.
