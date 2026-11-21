export const SUBJECTS = ["toan", "van", "anh"] as const;
export type Subject = (typeof SUBJECTS)[number];

export const SUBJECT_INFO: Record<Subject, { name: string; short: string; intro: string }> = {
  toan: {
    name: "Toán học",
    short: "Toán",
    intro: "Chọn lúc nên dùng máy tính, thử đáp án hoặc loại một phương án trước khi tính.",
  },
  van: {
    name: "Ngữ văn",
    short: "Văn",
    intro: "Chọn dẫn chứng vừa sức với luận điểm và dựng khung viết theo đúng lệnh đề.",
  },
  anh: {
    name: "Tiếng Anh",
    short: "Anh",
    intro: "Nhìn dấu hiệu trong âm và câu để thu hẹp lựa chọn, rồi kiểm tra bằng nghĩa.",
  },
};
