import type { Subject } from "./schema";

export interface GuideChoice {
  label: string;
  feedback: string;
}

interface Guide {
  slug: string;
  title: string;
  intent: string;
  question: string;
  choices: GuideChoice[];
  answer: number;
  cue: string;
  reasoning: string;
  limit: string;
  reading: { label: string; href: string };
}

export const guideHref = (subject: Subject, slug: string) => `/mon/${subject}/${slug}/`;

export const subjectIntros: Record<Subject, string> = {
  toan: "Chọn lúc nên dùng máy tính, thử đáp án hoặc loại một phương án trước khi tính.",
  van: "Chọn dẫn chứng vừa sức với luận điểm và dựng khung viết theo đúng lệnh đề.",
  anh: "Nhìn dấu hiệu trong âm và câu để thu hẹp lựa chọn, rồi kiểm tra bằng nghĩa.",
};

export const guides: Record<Subject, Guide[]> = {
  toan: [
    {
      slug: "may-tinh", title: "Thử đáp án bằng máy tính", intent: "Thay số vào đề gốc để phát hiện nghiệm ngoại lai.",
      question: "Sau khi bình phương √(x + 2) = x, bạn tìm được 2 và −1. Máy tính có thể giúp kiểm tra số nào cần loại?",
      choices: [
        { label: "Giữ cả 2 và −1", feedback: "Bình phương có thể đưa thêm nghiệm. Thử −1 vào phương trình trước khi bình phương." },
        { label: "Chỉ giữ 2", feedback: "Thay 2 vào đề gốc cho √4 = 2. Giá trị −1 bị loại vì vế phải âm." },
        { label: "Chỉ giữ −1", feedback: "Với −1, vế trái bằng 1 còn vế phải bằng −1." },
      ],
      answer: 1,
      cue: "Vế trái là căn bậc hai số học nên luôn không âm. Hãy dự đoán trước khi bấm.",
      reasoning: "Nhập √(−1 + 2) − (−1), máy trả 2. Hai vế lệch nhau nên loại −1. Với 2, nhập √(2 + 2) − 2, kết quả bằng 0. Nghiệm 2 thỏa đề gốc.",
      limit: "Thử đáp án chỉ xác nhận các giá trị đã thử. Nếu đề yêu cầu tìm tất cả nghiệm, cần lập luận để danh sách ứng viên đầy đủ. Kết quả thập phân xấp xỉ 0 cũng cần kiểm tra lại bằng phép tính chính xác.",
      reading: { label: "Đọc thêm về điều kiện của nghiệm", href: "/bai/toan-09-ptb2-001/" },
    },
    {
      slug: "loai-phuong-an", title: "Nhận dạng và loại phương án", intent: "Dùng dấu của tích hai nghiệm để quyết định bước tính kế tiếp.",
      question: "Phương trình x² − 4x − 5 = 0 có hai nghiệm. Trong các cặp (1, 5), (−1, −5), (−1, 5), cặp nào còn đáng kiểm tra?",
      choices: [
        { label: "(1, 5)", feedback: "Hai số đều dương nên tích dương." },
        { label: "(−1, −5)", feedback: "Hai số đều âm nên tích dương." },
        { label: "(−1, 5)", feedback: "Hai số trái dấu nên tích có thể bằng −5. Kiểm lại tổng để chốt." },
      ],
      answer: 2,
      cue: "Tích hai nghiệm bằng −5. Bạn có thể gạch hai cặp trước khi giải phương trình.",
      reasoning: "Chỉ (−1, 5) có hai số trái dấu. Kiểm tra tiếp tổng bằng 4 và tích bằng −5. Cặp này thỏa cả hai hệ thức Viète.",
      limit: "Dấu của tích chỉ là bước lọc. Nếu có thêm phương án (1, −5), nó cũng vượt qua bước lọc đầu tiên.",
      reading: { label: "Đối chiếu các dạng dùng hệ thức Viète", href: "/bai/toan-09-ptb2-001/" },
    },
  ],
  van: [
    {
      slug: "ngu-lieu-dan-chung", title: "Ngân hàng ngữ liệu và dẫn chứng", intent: "Đối chiếu xuất xứ, luận điểm dùng được và giới hạn của một dẫn chứng.",
      question: "Bạn nhớ câu “Chữ tâm kia mới bằng ba chữ tài”. Câu này giúp bàn về trách nhiệm của người có tài hay chứng minh rằng cứ nỗ lực là sẽ thành công?",
      choices: [
        { label: "Trách nhiệm của người có tài", feedback: "Câu thơ cho phép bàn về vai trò của chữ tâm khi dùng tài." },
        { label: "Cứ nỗ lực là sẽ thành công", feedback: "Câu thơ bàn về chữ tâm và chữ tài. Luận điểm về nỗ lực cần một dẫn chứng khác." },
      ],
      answer: 0,
      cue: "Đọc cả hai câu ở phần kết Truyện Kiều. Từ nào cho thấy Nguyễn Du đang bàn về cách dùng tài?",
      reasoning: "Chọn luận điểm về trách nhiệm. Có thể nối ý như sau: Người có tài còn phải cân nhắc tài năng ấy đem lại điều gì cho người khác. Sau đó dẫn đủ hai câu và phân tích chữ “tâm”.",
      limit: "Câu thơ không kể một hành trình nỗ lực hay kết quả đạt được. Với đề về sự kiên trì, cần một dẫn chứng cho thấy hành động được duy trì qua trở ngại.",
      reading: { label: "Mở thẻ nguyên văn, xuất xứ và phạm vi sử dụng", href: "/bai/van-12-nlxh-001/#dan-chung" },
    },
    {
      slug: "khung-viet", title: "Khung viết theo lệnh đề", intent: "Chọn câu mở, tổ chức thân đoạn và kết ý theo việc đề yêu cầu.",
      question: "Đề yêu cầu viết một đoạn bàn về trách nhiệm của người có tài. Bạn sẽ dành câu đầu để định nghĩa “tài” hay nêu điều mình muốn bảo vệ?",
      choices: [
        { label: "Định nghĩa “tài”", feedback: "Câu định nghĩa có thể đặt ở phần giải thích. Hãy dành câu đầu cho trọng tâm “trách nhiệm”." },
        { label: "Nêu điều mình muốn bảo vệ", feedback: "Một câu nêu trách nhiệm cụ thể giúp người đọc thấy hướng lập luận ngay." },
      ],
      answer: 1,
      cue: "Gạch dưới “trách nhiệm”. Thử đọc câu đầu và hỏi xem người chấm đã biết mình định bàn chuyện gì chưa.",
      reasoning: "Có thể mở: “Người giỏi một việc còn phải cân nhắc ai sẽ chịu tác động từ việc mình làm.” Thân đoạn chọn một hệ quả, đưa dẫn chứng rồi giải thích mối liên hệ. Có thể kết: “Trước khi dùng điều mình giỏi, ta cần hỏi việc ấy có ích cho ai.”",
      limit: "Khung này dành cho một đoạn nghị luận xã hội. Với bài phân tích văn học, phải trở lại chi tiết ngôn từ hoặc hình thức nghệ thuật của chính văn bản. Với bài thi vào 10, đối chiếu dung lượng ghi trên đề địa phương.",
      reading: { label: "Xem khung đoạn và các bước triển khai", href: "/bai/van-12-nlxh-001/#khung-bai-viet" },
    },
  ],
  anh: [
    {
      slug: "am-va-loai-tru", title: "Phát âm và loại trừ", intent: "Nghe âm cuối của từ gốc trước khi chọn cách đọc đuôi.",
      question: "Trong ba từ books, bags và cups, từ nào đọc đuôi -s khác hai từ còn lại?",
      choices: [
        { label: "books", feedback: "Âm /k/ ở cuối book dẫn đến đuôi /s/." },
        { label: "bags", feedback: "Âm /ɡ/ ở cuối bag dẫn đến đuôi /z/." },
        { label: "cups", feedback: "Âm /p/ ở cuối cup dẫn đến đuôi /s/." },
      ],
      answer: 1,
      cue: "Thử đọc book, bag, cup khi chưa thêm -s. Đặt tay lên cổ họng và chú ý âm /ɡ/ ở cuối bag.",
      reasoning: "Book kết thúc bằng /k/, cup bằng /p/. Hai âm vô thanh này dẫn đến đuôi /s/. Bag kết thúc bằng /ɡ/ hữu thanh nên bags có đuôi /z/.",
      limit: "Gặp âm xuýt như /s/ hoặc /ʃ/, cần xét cách đọc /ɪz/. Chỉ nhìn chữ s ở cuối đáp án sẽ bỏ mất dấu hiệu phân biệt.",
      reading: { label: "Đối chiếu bảng IPA và ví dụ về đuôi -s/-es", href: "/bai/anh-06-gram-001/#ipa" },
    },
    {
      slug: "cau-truc-va-ngu-canh", title: "Cấu trúc và dấu hiệu ngữ cảnh", intent: "Nhận ra vai trò của trợ động từ trước khi chia động từ chính.",
      question: "Điền vào “Does Mai usually ___ to school by bus?” Bạn chọn go hay goes?",
      choices: [
        { label: "go", feedback: "Does đã mang dấu hiệu ngôi thứ ba số ít. Động từ chính dùng dạng nguyên mẫu." },
        { label: "goes", feedback: "Goes phù hợp với “Mai usually goes…”. Trong câu hỏi này, Does đã đứng trước chủ ngữ." },
      ],
      answer: 0,
      cue: "Khoanh Does trước khi nhìn Mai hoặc usually. Từ nào đã mang dấu hiệu ngôi thứ ba số ít?",
      reasoning: "Chọn go. Trong câu hỏi hiện tại đơn với động từ thường, dùng Does + chủ ngữ + động từ nguyên mẫu. Usually bổ sung tần suất. Câu hỏi có nghĩa “Mai có thường đến trường bằng xe buýt không?”",
      limit: "Chuyển sang câu khẳng định thì mẫu thay đổi: Mai usually goes to school by bus. Với động từ be, câu hỏi hiện tại đơn dùng cấu trúc khác.",
      reading: { label: "So sánh cấu trúc và ví dụ song ngữ", href: "/bai/anh-06-gram-001/" },
    },
  ],
};
