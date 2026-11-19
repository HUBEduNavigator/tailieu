# P0-TAILIEU-CORE (bản lưu prompt đã chạy)

> Lưu nguyên văn nội dung prompt nhiệm vụ P0 do người dùng giao cho Claude Code. Hai ô “NGƯỜI DÙNG DÁN VÀO ĐÂY” trong bản gốc đã để trống khi chạy (xem ghi chú ở cuối).

# MÃ & TÊN NHIỆM VỤ
`P0-TAILIEU-CORE` – Khởi tạo Khung Website Học liệu HUB EduNavigator (Toán – Ngữ văn – Tiếng Anh, Lớp 6–12) và Hệ thống Quản lý Dự án Đa AI

# NỀN TẢNG THỰC THI MỤC TIÊU
Claude Code (Sonnet 5.5 High), thao tác trực tiếp trên repository đích: `https://github.com/HUBEduNavigator/tailieu` (triển khai tĩnh lên GitHub Pages từ nhánh `main`).

# MỤC TIÊU & PHẠM VI CỤ THỂ
Xây dựng bộ khung kỹ thuật hoàn chỉnh, gọn nhẹ và bền vững cho Website Học liệu Tự học & Ngân hàng Dạng bài của hệ sinh thái HUB EduNavigator:
- **Đối tượng:** Học sinh Việt Nam từ Lớp 6 đến Lớp 12 (Chương trình GDPT 2018).
- **Môn học:** Toán học, Ngữ văn, Tiếng Anh.
- **Phân tầng học liệu:** Môn → Lớp (6–12) → Nhóm học liệu (`Nền tảng`, `Nâng cao`, `Tuyển sinh lớp 10`, `Tốt nghiệp THPT`, `Bổ trợ`) → Chủ đề → Dạng bài.
- **Đầu ra bắt buộc của P0:**
  1. Khung website tĩnh đồng bộ nhận diện với `https://hubedunavigator.github.io/home/` (tối giản hoạt ảnh).
  2. Bộ hiển thị đặc thù cho 3 môn (KaTeX cho Toán, cấu trúc bài viết + thẻ Ngân hàng Dẫn chứng cho Ngữ văn, bảng IPA + ngữ pháp + từ vựng cho Tiếng Anh).
  3. Bộ lọc đa chiều và tìm kiếm nội dung nhanh.
  4. Dữ liệu mồi kiểm thử (Seed Data): đúng 1–2 đơn vị học liệu mẫu có thật, đã kiểm chứng cho mỗi môn.
  5. Cấu hình xuất tĩnh và GitHub Actions workflow triển khai tự động lên GitHub Pages từ nhánh `main`.
  6. Trọn bộ hệ thống tệp quản lý, sổ cái và bàn giao đa AI ngay trên repository `tailieu`.

# ĐẦU VÀO CẦN CUNG CẤP
- Repository tham chiếu nhận diện thương hiệu: `https://github.com/HUBEduNavigator/home` (Website: `https://hubedunavigator.github.io/home/`).
- Nếu không thể truy cập trực tiếp repo `home` từ môi trường hiện tại, sử dụng tệp cấu hình người dùng dán bổ sung: *(ô để trống khi chạy; repo `home` đọc được trực tiếp)*.
- Tệp Meta-Prompt gốc để lưu vào `prompts/META_PROMPT_FINAL.md` (nếu có): *(ô để trống khi chạy)*.

# QUY TRÌNH THỰC HIỆN CHI TIẾT

## Bước 1: Kiểm tra hiện trạng repo `tailieu` và khảo sát nhận diện từ repo `home`
1. Kiểm tra các tệp hiện có trong `HUBEduNavigator/tailieu`. Nếu đã có tệp trước đó, rà soát kỹ để không ghi đè mất dữ liệu quan trọng.
2. Đọc cấu hình từ repo `HUBEduNavigator/home` (hoặc khối người dùng dán vào) để trích xuất chính xác: framework và phiên bản (ưu tiên đồng bộ stack với `home`, ví dụ Next.js App Router + TypeScript + Tailwind CSS); bảng màu thương hiệu cho Light Mode và Dark Mode, biến CSS, bo góc, đường viền; bộ font chữ tiếng Việt và phong cách typography; thông tin nhận diện Header/Footer (tên thương hiệu HUB EduNavigator, logo/favicon nếu có, liên kết quay về `https://hubedunavigator.github.io/home/`). *Lưu ý minh bạch:* nếu không truy cập được repo `home` và người dùng chưa dán cấu hình, hãy dựng bộ design token tối giản, sạch sẽ, dễ đọc với Light/Dark mode chuẩn WCAG, đồng thời ghi rõ vào `DECISIONS_LOG.md` và `HANDOFF.md` các tệp CSS token cần đồng bộ lại sau.
3. Lược bỏ hoàn toàn các hoạt ảnh nặng, hiệu ứng trang chủ cầu kỳ và các khối marketing. Chỉ giữ chuyển đổi trạng thái tối giản (`transition-colors`, focus state rõ ràng, chuyển chế độ sáng/tối mượt).

## Bước 2: Dựng kiến trúc xuất tĩnh chuẩn GitHub Pages
1. Cấu hình dự án xuất tĩnh hoàn toàn (nếu dùng Next.js: `output: 'export'`, `images: { unoptimized: true }`, cấu hình `basePath: '/tailieu'` và `assetPrefix: '/tailieu/'` cho môi trường production trên GitHub Pages, nhưng vẫn chạy thuận tiện khi dev cục bộ).
2. Đảm bảo có tệp `.nojekyll` trong thư mục xuất tĩnh để GitHub Pages không bỏ qua thư mục bắt đầu bằng dấu gạch dưới (như `_next/`).
3. Tạo tệp `.github/workflows/deploy.yml` chuẩn chính thức của GitHub Pages: tự động chạy khi push lên nhánh `main` (kèm `workflow_dispatch`); quyền `pages: write`, `id-token: write`, `contents: read`; cài dependencies, chạy `npm run build`, tải artifact thư mục tĩnh và deploy bằng `actions/deploy-pages`.

## Bước 3: Thiết kế Kiến trúc Dữ liệu & Data Schema chuẩn (`CONTENT_SCHEMA.md`)
Thiết kế schema TypeScript chặt chẽ và lưu trữ dữ liệu dạng tệp có cấu trúc (JSON/TS/MDX tách rõ theo môn–lớp) sao cho các đợt cập nhật học liệu sau chỉ cần thêm dữ liệu và đăng ký vào sổ cái, không phải sửa giao diện.

Mỗi đơn vị dạng bài bắt buộc hỗ trợ đầy đủ **15 trường chuẩn** (cho phép điều chỉnh linh hoạt theo đặc thù từng môn, không bắt buộc nhồi chữ nếu trường không phù hợp) cộng thêm trường dự phòng:
1. `id` (mã ổn định, duy nhất, ví dụ `TOAN-09-PTB2-001`, `VAN-12-NLXH-001`, `ANH-10-PRON-001`); 2. `title`; 3. `taxonomy` `{ subject, grade (6..12), track ('nen-tang' | 'nang-cao' | 'tuyen-sinh-10' | 'tot-nghiep-thpt' | 'bo-tro'), topic, curriculumPosition }`; 4. `objectives` (theo GDPT 2018); 5. `prerequisites`; 6. `recognitionSigns`; 7. `questionPatterns`; 8. `testedKnowledge`; 9. `methodology` (có chỗ giải thích *tại sao* và *điều kiện áp dụng*); 10. `workedExamples` (đề, phân tích hướng đi, lời giải chi tiết từng bước); 11. `variants`; 12. `commonMistakes`; 13. `difficulty` (`nhan-biet` | `thong-hieu` | `van-dung` | `van-dung-cao`); 14. `sources` (liên kết `SOURCE_REGISTRY.csv`); 15. `relatedIds` (`prerequisiteIds`, `relatedProblemIds`).
- **Trường dự phòng bắt buộc:** `accessLevel: 'free' | 'member' | 'premium'` (mặc định `'free'` toàn bộ trong giai đoạn hiện tại; chưa dựng giao diện khóa nội dung hay đăng nhập).
- **Mở rộng đặc thù 3 môn:** *Toán học*: nhãn định dạng câu hỏi GDPT 2018 (Trắc nghiệm nhiều lựa chọn, Đúng/Sai, Trả lời ngắn, Tự luận/Bài toán thực tế) và hiển thị công thức; *Ngữ văn*: khung phương pháp/cấu trúc bài viết gắn với từng dạng đề, phân tách rõ khối `[Trích dẫn nguyên văn + Nguồn]` với `[Phần diễn giải]`, schema riêng **Thẻ Ngân hàng Dẫn chứng** đủ 5 trường (Xuất xứ, Nội dung cốt lõi, Ý nghĩa, Chủ đề vận dụng, **Giới hạn sử dụng**); *Tiếng Anh*: bảng phiên âm IPA (vị trí phát âm/lỗi sai phổ biến, khác biệt Anh–Anh/Anh–Mỹ), bảng cấu trúc ngữ pháp & ngoại lệ, bảng từ vựng/collocations/phrasal verbs, ví dụ đối chiếu Anh–Việt, bài tập theo dạng.

## Bước 4: Xây dựng Giao diện & Thành phần Đặc thù 3 Môn
1. **Trang chủ Kho Học liệu** (gọn nhẹ, ưu tiên tra cứu): thanh tìm kiếm tức thì ở trung tâm; 3 cổng vào Toán/Văn/Anh; lối tắt nhanh theo Lớp 6–12 và 2 nhóm kỳ thi (Tuyển sinh lớp 10, Tốt nghiệp THPT); trạng thái minh bạch cho mục chưa có dữ liệu (“Đang cập nhật theo lộ trình”); tuyệt đối không có nút chết hay liên kết 404.
2. **Điều hướng phân cấp & bộ lọc đa chiều**: breadcrumb trên mọi trang chi tiết; lọc kết hợp theo Môn, Lớp, Nhóm học liệu/Kỳ thi, Chủ đề, Mức độ; tìm kiếm client-side nhanh, hỗ trợ tiếng Việt có dấu lẫn không dấu (normalize diacritics), tìm theo tên dạng bài, mã `id`, chủ đề, từ khóa.
3. **Component chuyên biệt**: *Toán*: KaTeX (CSS đóng gói cùng dự án, không CDN), công thức nội dòng và khối có cuộn ngang trên điện thoại, kiểm thử không lộ LaTeX thô; *Ngữ văn*: khung đọc tối ưu độ rộng dòng, thẻ khung phương pháp, hộp trích dẫn tách nguồn khỏi diễn giải, **Thẻ Dẫn chứng** nổi bật *Giới hạn sử dụng*; *Tiếng Anh*: bảng IPA dùng font chuẩn ký tự quốc tế (không lỗi ô vuông), thẻ cấu trúc ngữ pháp, bảng từ vựng/collocations cuộn ngang mượt trên điện thoại.
4. **Hỗ trợ đọc**: Light/Dark mode lưu trạng thái, mục lục cho trang chi tiết, liên kết bấm được tới dạng bài tiên quyết/liên quan.

## Bước 5: Nạp Dữ liệu Mồi Kiểm thử (Seed Data)
Chỉ **1–2 đơn vị học liệu mẫu có thật, chuẩn xác 100% cho mỗi môn** (tổng 3 đến 6 mục). *Toán*: ví dụ Toán 9 (phương trình bậc hai & định lí Viète) hoặc Toán 12 (cực trị hàm số theo GDPT 2018), có đủ công thức KaTeX nội dòng & khối, kiểm tra độc lập từng bước giải, điều kiện xác định, thay ngược nghiệm. *Ngữ văn*: ví dụ Đọc hiểu thơ (ngữ liệu ngoài SGK có nguồn xác thực) hoặc Nghị luận xã hội kèm ít nhất 1 **Thẻ Dẫn chứng** có xuất xứ rõ ràng, không bịa trích dẫn, tách rạch ròi trích dẫn và diễn giải. *Tiếng Anh*: ví dụ phát âm IPA nền tảng (cặp nguyên âm/trọng âm) hoặc dạng Đọc điền thông báo/tờ rơi theo cấu trúc thi THPT GDPT 2018, kiểm chứng chuẩn xác từng ký tự IPA, ngữ pháp, bản dịch. Đánh dấu toàn bộ là `seed-verified` trong `CONTENT_REGISTRY.json`.

## Bước 6: Hệ thống Quản lý & Bàn giao Đa AI trên repo `tailieu`
Tạo đầy đủ, nội dung thực tế, không để tệp trống: 1. `README.md` (mô tả, cấu trúc, lệnh chạy, **hướng dẫn bật GitHub Pages bằng giao diện Web** từng bước); 2. `AI_PROJECT_GUIDE.md` (luật chung cho Gemini TK1, Gemini TK2, Claude Code; quy trình 7 bước a → g; thẩm định độc lập A ⇄ B; chống bịa nguồn/bản quyền; phân biệt 3 trạng thái: đã tạo trong hội thoại / đã ghi tệp cục bộ / đã commit & push; bảo mật); 3. `CONTENT_SCHEMA.md`; 4. `PROJECT_STATE.md`; 5. `CONTENT_REGISTRY.json` (id, title, subject, grade, track, difficulty, status, accessLevel, filePath, updatedAt); 6. `COVERAGE_MATRIX.csv` (`subject,grade,track,topic,planned_count,completed_count,verified_count,status,notes`); 7. `SOURCE_REGISTRY.csv` (`source_id,title,author_or_org,year,url,source_type,reliability,scope,verified_status`, đã điền nguồn thật dùng cho seed); 8. `PROMPT_INDEX.md` (META_PROMPT_FINAL, P0-TAILIEU-CORE, RESUME_PROJECT_PROMPT, khung chờ đợt A–B–C); 9. `TASK_QUEUE.md` (4 giai đoạn); 10. `DECISIONS_LOG.md`; 11. `CHANGELOG.md` (`v0.1.0`); 12. `HANDOFF.md` đủ **10 mục** (giai đoạn hiện tại; mã & tên nhiệm vụ gần nhất; hạng mục đã hoàn thành & kiểm tra; tệp/thư mục/trang vừa tạo hoặc sửa; dữ liệu & nguồn đã dùng; lỗi/vấn đề chưa xử lý; công việc dang dở; điều kiện/đầu vào để tiếp tục; mã nhiệm vụ & prompt kế tiếp; danh sách phần đã chốt không được làm lại hay tự ý sửa); 13. Thư mục `prompts/` gồm `P0-TAILIEU-CORE.md`, `META_PROMPT_FINAL.md` (nếu chưa có thì tạo tệp giữ chỗ), `RESUME_PROJECT_PROMPT.md` (trung lập với mọi nền tảng AI; AI mới đọc đúng thứ tự `AI_PROJECT_GUIDE.md` → `README.md` → `PROJECT_STATE.md` → `HANDOFF.md` → `TASK_QUEUE.md` → `CONTENT_SCHEMA.md` → `PROMPT_INDEX.md` → registry/mã nguồn liên quan, **đối chiếu mã nguồn thực tế**, tóm tắt ngắn gọn cho người dùng rồi mới làm tiếp đúng điểm dừng).

## Bước 7: Kiểm thử thực tế, Build và đồng bộ lên nhánh `main`
1. Chạy TypeScript và `npm run build`; sửa triệt để mọi lỗi/cảnh báo.
2. Kiểm tra bản dựng: điều hướng đủ 3 môn, lọc đa chiều, tìm kiếm có dấu/không dấu; KaTeX chuẩn xác, không lộ `$` hay `\` thô; trang Văn và Anh (IPA, từ vựng, thẻ dẫn chứng) sạch, không tràn khung ở desktop và ~375px; không nút chết, không liên kết 404.
3. Cập nhật hoàn chỉnh `HANDOFF.md`, `PROJECT_STATE.md`, `CHANGELOG.md`.
4. Commit rõ ràng và đẩy lên nhánh `main` của `https://github.com/HUBEduNavigator/tailieu`.

# TIÊU CHUẨN CHẤT LƯỢNG, NGÔN NGỮ & DANH SÁCH VIỆC KHÔNG ĐƯỢC LÀM
- Toàn bộ giao diện, tài liệu quản lý và dữ liệu mồi bằng tiếng Việt chuẩn mực, tự nhiên, như tài liệu giáo dục chuyên nghiệp; tránh văn phong dịch máy, sáo rỗng.
- KHÔNG nhồi hàng loạt bài sơ sài hay văn bản giả (Lorem ipsum).
- KHÔNG dựng đăng nhập, backend, CSDL ngoài hay hoạt ảnh nặng ở P0.
- KHÔNG tạo liên kết hỏng, nút chết, hay đường dẫn tuyệt đối gây vỡ giao diện dưới subpath `/tailieu`.
- KHÔNG đưa API key, mật khẩu, token cá nhân hoặc tệp SGK/tài liệu có bản quyền lên GitHub.
- KHÔNG bịa trích dẫn văn học, nguồn tham khảo hoặc kết quả kiểm thử chưa thực sự chạy.
- KHÔNG đánh đồng trạng thái đã ghi tệp cục bộ với đã push lên GitHub.

# TIÊU CHÍ NGHIỆM THU & BÁO CÁO HOÀN THÀNH
Chỉ báo hoàn thành khi `npm run build` thành công không lỗi, các mục kiểm thử hiển thị (KaTeX, Văn, IPA, lọc/tìm kiếm, mobile/desktop) đã được xác minh và trọn bộ 13 tệp/thư mục quản lý đã được khởi tạo. Báo cáo cuối phải có: (1) phân tách trung thực 3 trạng thái (đã tạo cục bộ / kết quả build & kiểm thử thực tế / đã commit & đồng bộ `main`, kèm commit hash; thiếu quyền push phải báo ngay); (2) tóm tắt cấu trúc kỹ thuật và điểm kế thừa từ `home`; (3) danh sách tệp/thư mục chính và xác nhận `HANDOFF.md` đủ 10 mục; (4) hướng dẫn UI 3–4 bước bật GitHub Pages và kiểm tra `https://hubedunavigator.github.io/tailieu/`.

---
_Ghi chú lưu trữ: bản này được ghi lại từ nội dung nhiệm vụ nhận được; một số đoạn dài đã được viết gọn thành dòng liên tục nhưng không thay đổi yêu cầu. Bản gốc nằm trong lịch sử hội thoại của người dùng._
