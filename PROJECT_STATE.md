# PROJECT_STATE – Ảnh chụp tiến độ

_Cập nhật: 2026-11-19 · Phiên bản: v0.1.0_

## Tổng quan

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| **P0** | Khung website, bộ hiển thị 3 môn, bộ lọc/tìm kiếm, dữ liệu mồi, triển khai, hệ thống quản lý đa AI | **Hoàn thành** (`P0-TAILIEU-CORE`) |
| **Giai đoạn 2** | Lập kế hoạch phủ và nạp học liệu đợt đầu cho từng môn theo ma trận phủ | Chờ |
| **Giai đoạn 3** | Mở rộng, thẩm định chéo A ⇄ B, nâng nhãn `verified` | Chờ |
| **Giai đoạn 4** | Hoàn thiện, đồng bộ liên kết, bàn giao ổn định (nội dung có thể khóa theo `accessLevel` nếu quyết định sau) | Chờ |

(Cách chia 4 giai đoạn và nội dung chi tiết: `TASK_QUEUE.md`.)

## Kho học liệu hiện có

| Môn | Số dạng bài | Mã |
|---|---|---|
| Toán học | 2 | `TOAN-09-PTB2-001`, `TOAN-12-CUCTRI-001` |
| Ngữ văn | 1 | `VAN-12-NLXH-001` |
| Tiếng Anh | 2 | `ANH-06-PRON-001`, `ANH-12-NOTICE-001` |

Toàn bộ ở trạng thái `seed-verified` (đã tự kiểm, **chưa** thẩm định độc lập A ⇄ B). Chi tiết còn mở: `HANDOFF.md` mục 6.

## Hạ tầng

- Khung Next.js 16 + React 19 + Tailwind 4, xuất tĩnh, `basePath` `/tailieu`.
- Workflow `.github/workflows/deploy.yml` chạy khi push lên `main`.
- Kiểm tra: `npm run typecheck`, `npm run validate`, `npm run build` (đã chạy ở P0, xem `HANDOFF.md`).
- Việc người dùng cần làm một lần: bật Pages → Source = GitHub Actions (xem `README.md`).

## Trạng thái đồng bộ (3 trạng thái, xem `AI_PROJECT_GUIDE.md` mục 5)

Xem `HANDOFF.md` mục 3 và báo cáo cuối của nhiệm vụ để biết commit hash và nhánh đã đẩy.
