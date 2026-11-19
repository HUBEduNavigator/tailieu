# CONTENT_SCHEMA – Đặc tả dữ liệu học liệu

Nguồn sự thật về kiểu dữ liệu là `lib/schema.ts` (TypeScript). Tài liệu này giải thích bằng lời. Khi hai nơi lệch nhau, **mã nguồn thắng**, và phải sửa tài liệu này.

## 1. Quy ước văn bản giàu (`Rich`)

| Cú pháp | Ý nghĩa |
|---|---|
| `$...$` | Công thức KaTeX nội dòng |
| `$$...$$` | Công thức KaTeX khối (có cuộn ngang trên điện thoại) |
| `**...**` | In đậm |
| `\$` | Ký tự đô-la thường |
| `\n\n` / `\n` | Tách đoạn / xuống dòng (với các trường hiển thị theo đoạn) |

Trong chuỗi TypeScript phải nhân đôi dấu gạch chéo ngược: `"$\\Delta=b^2-4ac$"`. Công thức dựng lúc build với `throwOnError: true`: công thức lỗi làm **build thất bại**, nên không bao giờ lộ LaTeX thô ra giao diện. `title` và `summary` là văn bản thuần, **không** chứa công thức.

## 2. Quy tắc đặt mã định danh `id`

Dạng: `MON-LL-CHUDE-NNN`

- `MON`: `TOAN` | `VAN` | `ANH`
- `LL`: lớp, hai chữ số `06`…`12`
- `CHUDE`: mã chủ đề viết hoa, chỉ chữ A–Z và số (ví dụ `PTB2`, `CUCTRI`, `NLXH`, `PRON`, `NOTICE`)
- `NNN`: số thứ tự ba chữ số trong cùng `MON-LL-CHUDE`, bắt đầu `001`

Ví dụ: `TOAN-09-PTB2-001`, `VAN-12-NLXH-001`, `ANH-10-PRON-001`.

Quy tắc: `id` **duy nhất toàn kho và không bao giờ đổi** sau khi đã đăng (URL, liên kết và sổ cái dựa vào nó). Không tái sử dụng `id` đã xóa. Tiền tố môn và lớp trong `id` phải khớp `taxonomy`. URL trang là `id` viết thường: `/bai/toan-09-ptb2-001/`. `npm run validate` kiểm tra tất cả điều này.

## 3. Các trường chuẩn (15 trường + dự phòng)

| # | Trường | Kiểu | Nội dung |
|---|---|---|---|
| 1 | `id` | string | Mã định danh, xem mục 2 |
| 2 | `title` | string | Tên dạng bài |
| 3 | `taxonomy` | `{subject, grade, track, topic, curriculumPosition}` | `subject`: `toan`/`van`/`anh`; `grade`: 6–12; `track`: `nen-tang`/`nang-cao`/`tuyen-sinh-10`/`tot-nghiep-thpt`/`bo-tro`; `topic`: chủ đề (dùng để lọc); `curriculumPosition`: vị trí trong chương trình GDPT 2018 |
| 4 | `objectives` | `Rich[]` | Mục tiêu theo yêu cầu cần đạt (diễn đạt lại, không chép nguyên văn chương trình) |
| 5 | `prerequisites` | `Rich[]` | Kiến thức/công thức/kỹ năng tiên quyết |
| 6 | `recognitionSigns` | `Rich[]` | Dấu hiệu nhận biết dạng bài |
| 7 | `questionPatterns` | `Rich[]` | Mô hình câu hỏi thường gặp |
| 8 | `testedKnowledge` | `Rich[]` | Kiến thức trọng tâm được kiểm tra |
| 9 | `methodology` | `{summary?, applicability[], steps[{title, detail, why?, condition?}]}` | Phương pháp: **bắt buộc có điều kiện áp dụng** và nêu *vì sao* (`why`) ít nhất ở một bước |
| 10 | `workedExamples` | `WorkedExample[]` | Đề, phân tích hướng đi, lời giải từng bước, đáp án, kiểm tra lại; có thể có `format`, `choices`, `statements` (đúng/sai), `passage` (trích nguyên văn) |
| 11 | `variants` | `{title, description, hint?}[]` | Biến thể thường gặp |
| 12 | `commonMistakes` | `{mistake, why, fix?}[]` | Lỗi sai và bẫy |
| 13 | `difficulty` | `nhan-biet` / `thong-hieu` / `van-dung` / `van-dung-cao` | Mức độ |
| 14 | `sources` | `{sourceId, locator?, note?}[]` | `sourceId` **phải có** trong `SOURCE_REGISTRY.csv` |
| 15 | `relatedIds` | `{prerequisiteIds[], relatedProblemIds[]}` | Chỉ trỏ tới `id` **đã tồn tại** trong kho (tránh liên kết 404) |
| – | `accessLevel` | `free` / `member` / `premium` | **Dự phòng.** Giai đoạn hiện tại luôn `free` (validate bắt buộc); chưa có giao diện khóa hay đăng nhập |

Trường bổ sung dùng chung: `summary` (tóm tắt thuần văn bản), `keywords` (từ khóa tìm kiếm, nên có bản không dấu), `status` (`draft`/`seed-verified`/`verified`), `verification` (`method`, `openItems[]`: minh bạch cách đã kiểm chứng và việc còn cần người đối chiếu), `updatedAt`, `ext` (phần mở rộng theo môn).

Quy tắc linh hoạt: trường nào không phù hợp đặc thù môn thì viết ngắn, không nhồi chữ cho đủ.

## 4. Mở rộng theo môn (`ext`, phân biệt bằng `ext.kind`)

### Toán học (`kind: "toan"`)
- `questionFormats`: nhãn định dạng câu hỏi GDPT 2018: `trac-nghiem-nhieu-lua-chon`, `dung-sai`, `tra-loi-ngan`, `tu-luan`, `bai-toan-thuc-te`. Mỗi nhãn khai báo phải có ít nhất một ví dụ minh họa dùng nhãn đó (validate kiểm tra).
- Công thức dùng KaTeX trong mọi trường `Rich`.

### Ngữ văn (`kind: "van"`)
- `essayFrame`: khung cấu trúc bài viết gắn với dạng đề (`examType`, `lengthGuide`, `parts[{part, content, guideline}]`).
- `evidenceCards[]`: **Thẻ Ngân hàng Dẫn chứng**, đủ **5 trường bắt buộc**: (1) `origin` Xuất xứ (tác giả, tác phẩm, vị trí, `sourceId`); (2) `coreContent` Nội dung cốt lõi; (3) `meaning` Ý nghĩa; (4) `applicableTopics` Chủ đề vận dụng; (5) `usageLimits` **Giới hạn sử dụng** (bắt buộc đủ dài, nêu rõ không được dùng sai ở đâu). Có thể kèm `quote` (trích nguyên văn).
- Phân tách trích dẫn và diễn giải: trích nguyên văn đặt trong `WorkedExample.passage` hoặc `EvidenceCard.quote` (hiển thị ở khung riêng, có nhãn "Trích dẫn nguyên văn" và nguồn); phần diễn giải của người biên soạn nằm ở `analysis`/`solution`.

### Tiếng Anh (`kind: "anh"`)
- `ipa`: bảng phiên âm: `sounds[{ipa, name, articulation, commonErrors, accentNote?}]` (vị trí phát âm, lỗi thường gặp, khác biệt Anh–Anh/Anh–Mỹ), `wordGroups`, `minimalPairs`, `accentNotes`.
- `grammarTables[]`: bảng cấu trúc ngữ pháp, có `exceptions` (ngoại lệ).
- `vocabTables[]`: `kind` = `vocab` | `collocation` | `phrasal-verb`.
- `bilingualExamples[]`: đối chiếu Anh–Việt (có thể kèm IPA).
- `exercises[]`: bài tập theo dạng, có `passage` tùy chọn, `items[{prompt, options?, answer, explanation}]`.
- Phiên âm luôn nằm giữa hai dấu `/…/`, dùng `ɡ` (U+0261) thay chữ `g` thường, dấu độ dài `ː` (U+02D0) và dấu trọng âm `ˈ` (U+02C8).

## 5. Quy trình thêm một đơn vị

Xem mục "Thêm một dạng bài mới" trong `README.md`. Mọi đơn vị phải qua `npm run validate` trước khi commit.
