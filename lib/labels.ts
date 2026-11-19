import type { Difficulty, Grade, QuestionFormat, Subject, Track } from "./schema";

export const SUBJECT_INFO: Record<Subject, { name: string; short: string; tagline: string; description: string }> = {
  toan: {
    name: "Toán học",
    short: "Toán",
    tagline: "Dạng bài, phương pháp và lời giải từng bước",
    description:
      "Mỗi dạng bài gồm dấu hiệu nhận biết, phương pháp kèm điều kiện áp dụng, ví dụ giải chi tiết theo các định dạng câu hỏi của chương trình GDPT 2018 và những bẫy thường gặp.",
  },
  van: {
    name: "Ngữ văn",
    short: "Văn",
    tagline: "Khung bài viết và Ngân hàng Dẫn chứng có nguồn",
    description:
      "Mỗi dạng đề có khung phương pháp, phần trích dẫn nguyên văn kèm nguồn tách riêng khỏi phần diễn giải, và các Thẻ Dẫn chứng nêu rõ giới hạn sử dụng.",
  },
  anh: {
    name: "Tiếng Anh",
    short: "Anh",
    tagline: "Phiên âm IPA, ngữ pháp, từ vựng và bài tập theo dạng",
    description:
      "Mỗi dạng bài có bảng phiên âm quốc tế (IPA), bảng cấu trúc ngữ pháp và ngoại lệ, bảng từ vựng – collocation, ví dụ đối chiếu Anh–Việt và bài tập kèm đáp án giải thích.",
  },
};

export const TRACK_INFO: Record<Track, { name: string; description: string }> = {
  "nen-tang": { name: "Nền tảng", description: "Kiến thức và kỹ năng cốt lõi theo chương trình lớp học." },
  "nang-cao": { name: "Nâng cao", description: "Mở rộng, đào sâu cho học sinh muốn học vượt chuẩn." },
  "tuyen-sinh-10": { name: "Tuyển sinh lớp 10", description: "Dạng bài trọng tâm của kỳ thi vào lớp 10." },
  "tot-nghiep-thpt": { name: "Tốt nghiệp THPT", description: "Dạng bài theo định dạng đề thi tốt nghiệp THPT (GDPT 2018)." },
  "bo-tro": { name: "Bổ trợ", description: "Kỹ năng, tư liệu và công cụ hỗ trợ học tập." },
};

export const DIFFICULTY_INFO: Record<Difficulty, { name: string; rank: number }> = {
  "nhan-biet": { name: "Nhận biết", rank: 1 },
  "thong-hieu": { name: "Thông hiểu", rank: 2 },
  "van-dung": { name: "Vận dụng", rank: 3 },
  "van-dung-cao": { name: "Vận dụng cao", rank: 4 },
};

export const FORMAT_INFO: Record<QuestionFormat, string> = {
  "trac-nghiem-nhieu-lua-chon": "Trắc nghiệm nhiều lựa chọn",
  "dung-sai": "Đúng/Sai",
  "tra-loi-ngan": "Trả lời ngắn",
  "tu-luan": "Tự luận",
  "bai-toan-thuc-te": "Bài toán thực tế",
};

export const gradeLabel = (g: Grade | number) => `Lớp ${g}`;
