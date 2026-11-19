import type { MathUnit } from "@/lib/schema";

export const unit = {
  id: "TOAN-12-CUCTRI-001",
  title: "Tìm cực trị của hàm số bậc ba và biện luận theo tham số",
  summary:
    "Tìm điểm cực trị, giá trị cực trị của hàm số bậc ba bằng đạo hàm, và biện luận số cực trị theo tham số thông qua biệt thức của đạo hàm.",
  keywords: ["cuc tri", "ham so bac ba", "dao ham", "bang bien thien", "cuc dai", "cuc tieu", "tham so", "tot nghiep thpt"],
  taxonomy: {
    subject: "toan",
    grade: 12,
    track: "tot-nghiep-thpt",
    topic: "Ứng dụng đạo hàm – Cực trị của hàm số",
    curriculumPosition: "Mạch Giải tích – Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số: tính đơn điệu, cực trị (Toán 12, GDPT 2018)",
  },
  objectives: [
    "Phân biệt chính xác điểm cực trị, giá trị cực trị và điểm cực trị của đồ thị.",
    "Tìm cực trị của hàm số bậc ba bằng bảng biến thiên hoặc bằng dấu của đạo hàm cấp hai.",
    "Biện luận số điểm cực trị của hàm bậc ba theo tham số.",
    "Trả lời được các định dạng câu hỏi: trắc nghiệm, đúng/sai, trả lời ngắn và tự luận.",
  ],
  prerequisites: [
    "Quy tắc tính đạo hàm của đa thức: $(x^n)'=nx^{n-1}$.",
    "Mối liên hệ giữa dấu của $f'(x)$ và tính đơn điệu của hàm số.",
    "Giải phương trình bậc hai, biệt thức $\\Delta$ và định lí Viète (xem TOAN-09-PTB2-001).",
  ],
  recognitionSigns: [
    "Đề dùng các từ “cực đại”, “cực tiểu”, “cực trị”, “điểm cực trị của đồ thị”.",
    "Hàm số cho dưới dạng $y=ax^3+bx^2+cx+d$, có thể chứa tham số $m$.",
    "Đề yêu cầu “có hai điểm cực trị”, “đạt cực tiểu tại $x=x_0$”, “giá trị cực đại bằng …”.",
  ],
  questionPatterns: [
    "Tìm điểm cực đại, cực tiểu và giá trị cực trị của một hàm bậc ba cho trước.",
    "Tìm $m$ để hàm số có (hoặc không có) cực trị.",
    "Tìm $m$ để giá trị cực đại/cực tiểu bằng một số cho trước.",
    "Tính khoảng cách hoặc lập phương trình đường thẳng qua hai điểm cực trị của đồ thị.",
    "Đọc cực trị từ bảng biến thiên hoặc đồ thị (câu nhận biết).",
  ],
  testedKnowledge: [
    "Điều kiện cần: nếu hàm số đạt cực trị tại $x_0$ và có đạo hàm tại đó thì $f'(x_0)=0$.",
    "Điều kiện đủ: $f'(x)$ đổi dấu khi $x$ đi qua $x_0$; hoặc $f'(x_0)=0$ và $f''(x_0)\\ne 0$.",
    "Hàm bậc ba có đúng $2$ điểm cực trị khi và chỉ khi $f'(x)=0$ có hai nghiệm phân biệt.",
  ],
  methodology: {
    summary: "Tìm nghiệm của đạo hàm, kiểm tra dấu đạo hàm đổi chiều ở đâu, rồi tính giá trị hàm số tại các điểm đó.",
    applicability: [
      "Hàm số xác định và có đạo hàm trên khoảng chứa điểm đang xét (với hàm bậc ba: trên $\\mathbb{R}$).",
      "Chỉ kết luận cực trị khi $f'$ đổi dấu; $f'(x_0)=0$ mới chỉ là điều kiện cần.",
    ],
    steps: [
      {
        title: "Tìm tập xác định và tính $f'(x)$",
        detail: "Với hàm bậc ba, tập xác định là $\\mathbb{R}$ và $f'(x)$ là tam thức bậc hai.",
      },
      {
        title: "Giải $f'(x)=0$",
        detail: "Tìm các điểm mà tại đó đạo hàm bằng $0$ (điểm nghi ngờ cực trị).",
        why: "Cực trị của hàm khả vi chỉ có thể xảy ra tại các điểm này.",
      },
      {
        title: "Xét dấu $f'(x)$ và lập bảng biến thiên",
        detail: "Nếu $f'$ đổi dấu từ $+$ sang $-$ thì cực đại; từ $-$ sang $+$ thì cực tiểu. Có thể dùng $f''(x_0)<0$ (cực đại) hoặc $f''(x_0)>0$ (cực tiểu).",
        why: "Đổi dấu của $f'$ mới chứng minh hàm đổi chiều biến thiên.",
        condition: "Nếu $f''(x_0)=0$ thì quy tắc đạo hàm cấp hai không kết luận được; quay lại xét dấu $f'$.",
      },
      {
        title: "Tính giá trị cực trị $f(x_0)$",
        detail: "Phân biệt rõ: điểm cực trị $x_0$; giá trị cực trị $f(x_0)$; điểm cực trị của đồ thị $(x_0;\\,f(x_0))$.",
      },
      {
        title: "Với tham số: biện luận bằng $\\Delta$ của $f'(x)$",
        detail: "Hàm bậc ba có hai cực trị $\\iff \\Delta_{f'}>0$. Nếu $\\Delta_{f'}=0$ thì $f'$ không đổi dấu, hàm đơn điệu, không có cực trị.",
        why: "Khi $f'$ có nghiệm kép, $f'$ chỉ chạm $0$ mà không đổi dấu.",
      },
    ],
  },
  workedExamples: [
    {
      title: "Ví dụ 1 – Tự luận: cực trị và bảng biến thiên",
      format: "tu-luan",
      statement: "Tìm các điểm cực trị và giá trị cực trị của hàm số $f(x)=x^3-3x^2-9x+1$.",
      analysis: "Hàm bậc ba, tập xác định $\\mathbb{R}$. Tính $f'$, tìm nghiệm, lập bảng biến thiên rồi tính giá trị hàm số.",
      solution: [
        "$f'(x)=3x^2-6x-9=3(x+1)(x-3)$. $f'(x)=0\\iff x=-1$ hoặc $x=3$.",
        "Dấu của $f'$: $f'(x)>0$ khi $x<-1$ hoặc $x>3$; $f'(x)<0$ khi $-1<x<3$. Bảng biến thiên:\n\n$$\\begin{array}{c|ccccccc} x & -\\infty & & -1 & & 3 & & +\\infty \\\\ \\hline f'(x) & & + & 0 & - & 0 & + & \\\\ \\hline f(x) & & \\nearrow & 6 & \\searrow & -26 & \\nearrow & \\end{array}$$",
        "$f'$ đổi dấu từ $+$ sang $-$ tại $x=-1$ nên đó là điểm cực đại; đổi dấu từ $-$ sang $+$ tại $x=3$ nên đó là điểm cực tiểu.",
        "Tính: $f(-1)=-1-3+9+1=6$ và $f(3)=27-27-27+1=-26$.",
      ],
      answer:
        "Hàm số đạt cực đại tại $x=-1$ với giá trị cực đại $6$; đạt cực tiểu tại $x=3$ với giá trị cực tiểu $-26$.",
      check: "Kiểm tra bằng đạo hàm cấp hai: $f''(x)=6x-6$, $f''(-1)=-12<0$ (cực đại), $f''(3)=12>0$ (cực tiểu).",
    },
    {
      title: "Ví dụ 2 – Trả lời ngắn: biện luận theo tham số",
      format: "tra-loi-ngan",
      statement:
        "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-5;\\,5]$ để hàm số $y=x^3-3x^2+3mx+1$ có hai điểm cực trị?",
      analysis: "Hai điểm cực trị $\\iff y'=0$ có hai nghiệm phân biệt, tức biệt thức của tam thức $y'$ phải dương.",
      solution: [
        "$y'=3x^2-6x+3m$.",
        "$y'=0$ có hai nghiệm phân biệt $\\iff \\Delta'=9-9m>0\\iff m<1$.",
        "Các số nguyên $m\\in[-5;5]$ thỏa $m<1$ là $-5,-4,-3,-2,-1,0$, tức $6$ giá trị.",
      ],
      answer: "$6$",
      check:
        "Với $m=1$: $y'=3(x-1)^2\\ge 0$ nên hàm số đồng biến trên $\\mathbb{R}$, không có cực trị. Vì vậy phải loại $m=1$ (không lấy $m\\le 1$).",
    },
    {
      title: "Ví dụ 3 – Đúng/Sai: hàm số cụ thể",
      format: "dung-sai",
      statement: "Cho hàm số $y=-x^3+3x+1$. Xét tính đúng sai của mỗi mệnh đề sau.",
      analysis: "Có $y'=-3x^2+3=-3(x-1)(x+1)$. Hệ số $a<0$ nên cực đại nằm ở bên phải cực tiểu.",
      statements: [
        { label: "a", text: "$y'=-3x^2+3$.", truth: true, explanation: "Đạo hàm của $-x^3+3x+1$." },
        { label: "b", text: "Hàm số đạt cực tiểu tại $x=1$.", truth: false, explanation: "$y'$ đổi dấu từ $+$ sang $-$ tại $x=1$ nên $x=1$ là điểm cực đại; cực tiểu tại $x=-1$." },
        { label: "c", text: "Giá trị cực đại của hàm số bằng $3$.", truth: true, explanation: "$y(1)=-1+3+1=3$." },
        { label: "d", text: "Khoảng cách giữa hai điểm cực trị của đồ thị bằng $2\\sqrt5$.", truth: true, explanation: "Hai điểm cực trị là $(-1;\\,-1)$ và $(1;\\,3)$, khoảng cách $\\sqrt{2^2+4^2}=\\sqrt{20}=2\\sqrt5$." },
      ],
      solution: ["Lập bảng xét dấu $y'$ một lần rồi đối chiếu từng mệnh đề với giải thích bên trên."],
      answer: "a – Đúng; b – Sai; c – Đúng; d – Đúng.",
    },
    {
      title: "Ví dụ 4 – Trắc nghiệm: cực tiểu cho trước",
      format: "trac-nghiem-nhieu-lua-chon",
      statement: "Hàm số $y=x^3-3x^2+m$ có giá trị cực tiểu bằng $1$. Giá trị của $m$ là",
      choices: [
        { label: "A", text: "$m=5$", note: "Đúng." },
        { label: "B", text: "$m=1$", note: "Bẫy: lấy $y(0)=m$, đó là giá trị cực đại chứ không phải cực tiểu." },
        { label: "C", text: "$m=-3$", note: "Bẫy: giải $m-4=1$ thành $m=1-4$." },
        { label: "D", text: "$m=3$", note: "Sai: khi đó giá trị cực tiểu là $-1\\ne 1$." },
      ],
      correctChoice: "A",
      analysis: "Xác định đúng điểm nào là cực tiểu trước khi dùng giá trị $1$.",
      solution: [
        "$y'=3x^2-6x=3x(x-2)$, nên $y'=0\\iff x=0$ hoặc $x=2$.",
        "$y''=6x-6$: $y''(0)=-6<0$ nên $x=0$ là cực đại; $y''(2)=6>0$ nên $x=2$ là cực tiểu.",
        "Giá trị cực tiểu: $y(2)=8-12+m=m-4$. Đặt $m-4=1$, suy ra $m=5$.",
      ],
      answer: "Chọn A.",
    },
  ],
  variants: [
    {
      title: "Hai điểm cực trị nằm về hai phía trục tung",
      description: "Tương đương $y'=0$ có hai nghiệm trái dấu, tức $P=\\dfrac{c}{a}<0$ với $y'=ax^2+bx+c$. Đây là chỗ dùng định lí Viète.",
    },
    {
      title: "Hàm trùng phương $y=ax^4+bx^2+c$",
      description: "$y'=2x(2ax^2+b)$: hàm có một hoặc ba điểm cực trị tùy dấu của $ab$.",
    },
    {
      title: "Đường thẳng đi qua hai điểm cực trị",
      description: "Chia $y$ cho $y'$ để tìm phần dư (bậc nhất); phần dư chính là phương trình đường thẳng qua hai điểm cực trị.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Kết luận “$f'(x_0)=0$ thì $x_0$ là cực trị”.",
      why: "Đó chỉ là điều kiện cần. Ví dụ $y=x^3$ có $y'(0)=0$ nhưng $y'=3x^2\\ge 0$ không đổi dấu nên không có cực trị.",
      fix: "Luôn kiểm tra $f'$ đổi dấu (hoặc $f''(x_0)\\ne 0$).",
    },
    {
      mistake: "Khi biện luận tham số, lấy cả trường hợp $\\Delta_{f'}=0$.",
      why: "Nghiệm kép của $f'$ không làm $f'$ đổi dấu.",
      fix: "Dùng bất đẳng thức chặt $\\Delta_{f'}>0$ cho “hai điểm cực trị”.",
    },
    {
      mistake: "Nhầm điểm cực trị, giá trị cực trị và điểm cực trị của đồ thị.",
      why: "Ba đối tượng khác nhau: $x_0$, $f(x_0)$, và cặp $(x_0;\\,f(x_0))$.",
      fix: "Đọc câu hỏi để biết đề cần đại lượng nào; ghi rõ trong đáp án.",
    },
    {
      mistake: "Quên rằng $a<0$ thì thứ tự cực đại/cực tiểu đảo lại.",
      why: "Hàm bậc ba có $a>0$: cực đại ở bên trái cực tiểu; $a<0$: ngược lại.",
      fix: "Luôn lập bảng xét dấu $y'$ thay vì đoán theo thứ tự nghiệm.",
    },
    {
      mistake: "Dùng $f''(x_0)=0$ để kết luận không có cực trị.",
      why: "Khi $f''(x_0)=0$, quy tắc cấp hai không kết luận được; cực trị vẫn có thể xảy ra (ví dụ $y=x^4$ tại $x=0$).",
      fix: "Quay lại xét dấu $f'$ quanh $x_0$.",
    },
  ],
  difficulty: "van-dung",
  sources: [
    { sourceId: "SRC-CT-TOAN", locator: "Lớp 12 – Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số", note: "Căn cứ yêu cầu cần đạt." },
    { sourceId: "SRC-QD764", locator: "Cấu trúc đề môn Toán: trắc nghiệm nhiều lựa chọn, đúng/sai, trả lời ngắn", note: "Cơ sở cho các nhãn định dạng câu hỏi." },
    { sourceId: "SRC-HUB-ORIG", note: "Toàn bộ đề, lời giải, bẫy do HUB EduNavigator biên soạn." },
  ],
  relatedIds: {
    prerequisiteIds: ["TOAN-09-PTB2-001"],
    relatedProblemIds: [],
  },
  accessLevel: "free",
  status: "seed-verified",
  verification: {
    method:
      "Đạo hàm, nghiệm, bảng biến thiên, giá trị cực trị, điều kiện của tham số và khoảng cách giữa hai điểm cực trị được tính lại độc lập bằng sympy, đối chiếu bằng đạo hàm cấp hai.",
    openItems: [
      "Số lượng câu mỗi dạng trong đề thi chính thức cần đối chiếu lại theo công bố hằng năm của Bộ GD&ĐT.",
    ],
  },
  updatedAt: "2026-11-19",
  ext: {
    kind: "toan",
    questionFormats: ["tu-luan", "tra-loi-ngan", "dung-sai", "trac-nghiem-nhieu-lua-chon"],
  },
} satisfies MathUnit;
