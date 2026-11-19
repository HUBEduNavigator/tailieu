import type { MathUnit } from "@/lib/schema";

export const unit = {
  id: "TOAN-09-PTB2-001",
  title: "Hệ thức Viète và bài toán tham số của phương trình bậc hai",
  summary:
    "Dùng định lí Viète để tìm tham số m khi hai nghiệm của phương trình bậc hai phải thỏa một hệ thức cho trước; kèm điều kiện có nghiệm và bước đối chiếu nghiệm.",
  keywords: ["viete", "phuong trinh bac hai", "tham so", "tong va tich nghiem", "delta", "bieu thuc doi xung", "tuyen sinh 10"],
  taxonomy: {
    subject: "toan",
    grade: 9,
    track: "tuyen-sinh-10",
    topic: "Phương trình bậc hai một ẩn",
    curriculumPosition: "Mạch Đại số – Phương trình bậc hai một ẩn; định lí Viète và ứng dụng (Toán 9, GDPT 2018)",
  },
  objectives: [
    "Phát biểu được định lí Viète và nêu rõ điều kiện áp dụng (phương trình bậc hai có nghiệm).",
    "Biến đổi được các biểu thức đối xứng của hai nghiệm về tổng $S=x_1+x_2$ và tích $P=x_1x_2$.",
    "Giải được bài toán tìm tham số $m$ để hai nghiệm thỏa một điều kiện, có đối chiếu điều kiện $\\Delta\\ge 0$.",
    "Vận dụng định lí Viète để tìm hai số khi biết tổng và tích, trong đó có bài toán thực tế.",
  ],
  prerequisites: [
    "Công thức nghiệm và biệt thức của phương trình $ax^2+bx+c=0$ $(a\\ne 0)$: $\\Delta=b^2-4ac$; khi $b=2b'$ dùng $\\Delta'=b'^2-ac$.",
    "Hằng đẳng thức đáng nhớ: $(x_1+x_2)^2=x_1^2+2x_1x_2+x_2^2$.",
    "Giải phương trình bậc hai và bất phương trình bậc nhất một ẩn.",
  ],
  recognitionSigns: [
    "Đề cho phương trình bậc hai chứa tham số $m$ và nhắc đến “hai nghiệm $x_1, x_2$”.",
    "Điều kiện cho trước là một hệ thức đối xứng giữa $x_1$ và $x_2$ (ví dụ $x_1^2+x_2^2=10$, $|x_1-x_2|=1$, $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=3$).",
    "Đề yêu cầu “tìm hai số biết tổng và tích”, thường dưới dạng bài toán chu vi – diện tích.",
  ],
  questionPatterns: [
    "Tìm $m$ để phương trình có hai nghiệm phân biệt thỏa mãn một hệ thức đối xứng.",
    "Tìm $m$ để phương trình có hai nghiệm cùng dấu, trái dấu, hoặc cùng dương.",
    "Cho một nghiệm, tìm tham số và nghiệm còn lại.",
    "Lập hệ thức giữa $x_1, x_2$ không phụ thuộc vào $m$.",
    "Tìm hai số biết tổng và tích (bài toán thực tế).",
  ],
  testedKnowledge: [
    "Điều kiện có nghiệm: $a\\ne 0$ và $\\Delta\\ge 0$ (hai nghiệm phân biệt: $\\Delta>0$).",
    "Định lí Viète: $x_1+x_2=-\\dfrac{b}{a}$, $x_1x_2=\\dfrac{c}{a}$.",
    "Biểu thức đối xứng: $x_1^2+x_2^2=S^2-2P$; $(x_1-x_2)^2=S^2-4P$; $x_1^3+x_2^3=S^3-3SP$.",
    "Kỹ năng đối chiếu nghiệm của phương trình tham số với điều kiện đã đặt.",
  ],
  methodology: {
    summary:
      "Khi hai nghiệm chưa tìm được tường minh hoặc quá cồng kềnh, ta không giải nghiệm mà làm việc với tổng và tích của chúng.",
    applicability: [
      "Phương trình là bậc hai thực sự ($a\\ne 0$ với mọi giá trị tham số đang xét).",
      "Phương trình có nghiệm thực, tức $\\Delta\\ge 0$; nếu không, hệ thức Viète không có ý nghĩa với bài toán.",
      "Hệ thức cần thỏa mãn biểu diễn được qua $S$ và $P$ (đối xứng giữa hai nghiệm). Nếu không đối xứng, kết hợp thêm một phương trình từ đề để khử $m$.",
    ],
    steps: [
      {
        title: "Đặt điều kiện để phương trình có nghiệm",
        detail: "Xét $a\\ne 0$, tính $\\Delta$ (hoặc $\\Delta'$) theo $m$, giải $\\Delta\\ge 0$ (hoặc $\\Delta>0$ nếu đề yêu cầu hai nghiệm phân biệt).",
        why: "Định lí Viète chỉ mô tả nghiệm khi nghiệm tồn tại. Bỏ bước này là nguồn sai phổ biến nhất.",
        condition: "Hai nghiệm phân biệt thì $\\Delta>0$; “có nghiệm” hoặc “có hai nghiệm” (không nói phân biệt) thì $\\Delta\\ge 0$.",
      },
      {
        title: "Viết tổng và tích nghiệm theo $m$",
        detail: "Áp dụng $S=-\\dfrac{b}{a}$, $P=\\dfrac{c}{a}$ cho phương trình đã cho.",
        why: "Đây là cầu nối giữa tham số và hai nghiệm mà không cần giải ra nghiệm.",
      },
      {
        title: "Biến đổi hệ thức của đề về $S$ và $P$",
        detail: "Dùng $x_1^2+x_2^2=S^2-2P$, $(x_1-x_2)^2=S^2-4P$, $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=\\dfrac{S}{P}$ (khi $P\\ne 0$)…",
        why: "Chỉ khi biểu thức đối xứng mới quy được về $S, P$ mà không cần biết nghiệm nào là $x_1$, nghiệm nào là $x_2$.",
        condition: "Phép chia cho $x_1$, $x_2$ hoặc $P$ chỉ hợp lệ khi chúng khác $0$: đặt thêm điều kiện.",
      },
      {
        title: "Thế $S$, $P$ vào và giải phương trình theo $m$",
        detail: "Thu được một phương trình (thường bậc hai) với ẩn $m$; giải để lấy các giá trị $m$ ứng viên.",
      },
      {
        title: "Đối chiếu điều kiện ở bước 1, kết luận và thử lại",
        detail: "Loại các giá trị $m$ không thỏa điều kiện có nghiệm; thay giá trị còn lại vào phương trình để kiểm tra.",
        why: "Các giá trị $m$ ở bước 4 chỉ là điều kiện cần; điều kiện đủ nằm ở bước 1.",
      },
    ],
  },
  workedExamples: [
    {
      title: "Ví dụ 1 – Tự luận: hệ thức tổng bình phương",
      format: "tu-luan",
      statement:
        "Cho phương trình $x^2-2(m+1)x+m^2+2=0$ ($m$ là tham số). Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thỏa mãn $x_1^2+x_2^2=10$.",
      analysis:
        "Hệ thức $x_1^2+x_2^2=10$ là đối xứng nên quy được về $S$ và $P$. Hệ số $b=-2(m+1)$ chẵn, vì vậy dùng $\\Delta'$ cho gọn.",
      solution: [
        "**Điều kiện có nghiệm.** Phương trình có $a=1\\ne 0$ và $b'=-(m+1)$, nên $$\\Delta'=(m+1)^2-(m^2+2)=2m-1.$$ Phương trình có hai nghiệm khi $\\Delta'\\ge 0\\iff m\\ge \\dfrac12$.",
        "**Viète.** $S=x_1+x_2=2(m+1)$ và $P=x_1x_2=m^2+2$.",
        "**Biến đổi.** $$x_1^2+x_2^2=S^2-2P=4(m+1)^2-2(m^2+2)=2m^2+8m.$$",
        "**Giải theo $m$.** $2m^2+8m=10\\iff m^2+4m-5=0\\iff (m-1)(m+5)=0$, suy ra $m=1$ hoặc $m=-5$.",
        "**Đối chiếu điều kiện $m\\ge\\dfrac12$.** Nhận $m=1$; loại $m=-5$.",
      ],
      answer: "$m=1$.",
      check:
        "Với $m=1$: $x^2-4x+3=0$ có nghiệm $x=1$ và $x=3$, và $1^2+3^2=10$ (đúng). Với $m=-5$: $x^2+8x+27=0$ có $\\Delta'=16-27=-11<0$, vô nghiệm nên đúng là phải loại.",
    },
    {
      title: "Ví dụ 2 – Trả lời ngắn: hiệu hai nghiệm",
      format: "tra-loi-ngan",
      statement:
        "Biết phương trình $x^2-5x+m=0$ có hai nghiệm $x_1, x_2$ thỏa mãn $|x_1-x_2|=1$. Tìm giá trị của $m$.",
      analysis:
        "Bình phương hai vế để mất dấu giá trị tuyệt đối: $(x_1-x_2)^2=S^2-4P$.",
      solution: [
        "Điều kiện có nghiệm: $\\Delta=25-4m\\ge 0\\iff m\\le\\dfrac{25}{4}$.",
        "Viète: $S=5$, $P=m$.",
        "$|x_1-x_2|=1\\iff (x_1-x_2)^2=1\\iff S^2-4P=1\\iff 25-4m=1\\iff m=6$.",
        "$m=6\\le\\dfrac{25}{4}$ nên thỏa điều kiện.",
      ],
      answer: "$6$",
      check: "Với $m=6$: $x^2-5x+6=0$ có nghiệm $2$ và $3$, $|2-3|=1$ (đúng).",
    },
    {
      title: "Ví dụ 3 – Đúng/Sai: tính chất của phương trình cụ thể",
      format: "dung-sai",
      statement:
        "Cho phương trình $x^2-6x+5=0$ có hai nghiệm $x_1, x_2$. Xét tính đúng sai của mỗi mệnh đề sau.",
      analysis:
        "Phương trình cụ thể nên có thể kiểm tra mọi mệnh đề bằng Viète rồi đối chiếu với nghiệm thật là $1$ và $5$.",
      statements: [
        { label: "a", text: "Phương trình có hai nghiệm phân biệt.", truth: true, explanation: "$\\Delta'=9-5=4>0$." },
        { label: "b", text: "$x_1+x_2=6$.", truth: true, explanation: "$S=-\\dfrac{b}{a}=6$." },
        { label: "c", text: "$x_1x_2=-5$.", truth: false, explanation: "$P=\\dfrac{c}{a}=5$, không phải $-5$. Dễ nhầm do lấy dấu của $b$ cho $c$." },
        { label: "d", text: "$x_1^2+x_2^2=24$.", truth: false, explanation: "$x_1^2+x_2^2=S^2-2P=36-10=26$. Kiểm tra: $1^2+5^2=26$." },
      ],
      solution: ["Tính $\\Delta'$, $S$, $P$ một lần rồi đối chiếu từng mệnh đề như ở phần giải thích bên trên."],
      answer: "a – Đúng; b – Đúng; c – Sai; d – Sai.",
    },
    {
      title: "Ví dụ 4 – Trắc nghiệm nhiều lựa chọn",
      format: "trac-nghiem-nhieu-lua-chon",
      statement:
        "Biết phương trình $x^2-4x+m=0$ có hai nghiệm $x_1, x_2$ thỏa mãn $x_1^2+x_2^2=10$. Giá trị của $m$ là",
      choices: [
        { label: "A", text: "$m=3$", note: "Đúng." },
        { label: "B", text: "$m=-3$", note: "Bẫy: viết nhầm $x_1^2+x_2^2=S^2+2P$." },
        { label: "C", text: "$m=13$", note: "Bẫy: nhầm dấu khi giải; giá trị này còn vi phạm điều kiện $m\\le 4$." },
        { label: "D", text: "$m=5$", note: "Sai: khi đó $x_1^2+x_2^2=16-10=6\\ne 10$." },
      ],
      correctChoice: "A",
      analysis: "Cùng mô hình với Ví dụ 1 nhưng yêu cầu chọn đáp án, nên tận dụng việc thử lại để loại nhanh.",
      solution: [
        "Điều kiện có nghiệm: $\\Delta'=4-m\\ge 0\\iff m\\le 4$.",
        "$S=4$, $P=m$ nên $x_1^2+x_2^2=S^2-2P=16-2m$.",
        "$16-2m=10\\iff m=3$, thỏa $m\\le 4$.",
      ],
      answer: "Chọn A.",
      check: "$m=3$: $x^2-4x+3=0$ có nghiệm $1$ và $3$; $1+9=10$.",
    },
    {
      title: "Ví dụ 5 – Bài toán thực tế: tìm hai số biết tổng và tích",
      format: "bai-toan-thuc-te",
      statement:
        "Một mảnh vườn hình chữ nhật có chu vi $14\\ \\text{m}$ và diện tích $12\\ \\text{m}^2$. Tính chiều dài và chiều rộng của mảnh vườn.",
      analysis:
        "Nửa chu vi là $7$, tức tổng hai kích thước bằng $7$; tích hai kích thước bằng diện tích $12$. Hai số có tổng $S$ và tích $P$ là nghiệm của $X^2-SX+P=0$.",
      solution: [
        "Gọi chiều dài và chiều rộng là hai nghiệm của $X^2-7X+12=0$ (với $S=7$, $P=12$).",
        "$\\Delta=49-48=1>0$ nên $X=\\dfrac{7\\pm 1}{2}$, tức $X=4$ hoặc $X=3$.",
        "Chiều dài lớn hơn chiều rộng, vậy chiều dài $4\\ \\text{m}$, chiều rộng $3\\ \\text{m}$.",
      ],
      answer: "Chiều dài $4\\ \\text{m}$, chiều rộng $3\\ \\text{m}$.",
      check: "Chu vi $2(4+3)=14\\ \\text{m}$; diện tích $4\\cdot 3=12\\ \\text{m}^2$. Cả hai nghiệm đều dương nên hợp với ý nghĩa thực tế.",
    },
  ],
  variants: [
    {
      title: "Hai nghiệm cùng dấu, trái dấu",
      description:
        "Trái dấu $\\iff P<0$ (khi đó tự có $\\Delta>0$). Cùng dấu $\\iff \\Delta\\ge 0$ và $P>0$; cùng dương thêm $S>0$; cùng âm thêm $S<0$.",
    },
    {
      title: "Biểu thức không đối xứng",
      description:
        "Ví dụ $x_1=2x_2$ hoặc $x_1-3x_2=1$. Kết hợp điều kiện này với $x_1+x_2=S$ để giải ra $x_1, x_2$ theo $m$, rồi thế vào $x_1x_2=P$.",
      hint: "Giải hệ hai phương trình chứa $x_1, x_2$ trước, sau đó dùng Viète lần hai để tìm $m$.",
    },
    {
      title: "Hệ thức độc lập với tham số",
      description:
        "Từ $S$ và $P$ cùng chứa $m$, khử $m$ giữa hai biểu thức để được một hệ thức giữa $x_1$ và $x_2$ không còn $m$.",
    },
    {
      title: "Nhẩm nghiệm khi các hệ số đặc biệt",
      description:
        "Nếu $a+b+c=0$ thì nghiệm là $1$ và $\\dfrac{c}{a}$; nếu $a-b+c=0$ thì nghiệm là $-1$ và $-\\dfrac{c}{a}$.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Quên (hoặc không đối chiếu) điều kiện $\\Delta\\ge 0$.",
      why: "Viète chỉ dùng được khi phương trình có nghiệm; giá trị $m$ thu được ở bước giải có thể làm phương trình vô nghiệm.",
      fix: "Luôn đặt điều kiện ở bước 1 và dùng nó để loại nghiệm ở bước cuối.",
    },
    {
      mistake: "Viết $x_1^2+x_2^2=S^2+2P$.",
      why: "Nhớ nhầm dấu của hằng đẳng thức $(x_1+x_2)^2=x_1^2+x_2^2+2x_1x_2$.",
      fix: "Tự suy ra từ $(x_1+x_2)^2$ thay vì học thuộc: $x_1^2+x_2^2=S^2-2P$.",
    },
    {
      mistake: "Nhầm $S=\\dfrac{b}{a}$ thay vì $-\\dfrac{b}{a}$.",
      why: "Quên dấu trừ khi $b$ có sẵn dấu âm trong phương trình.",
      fix: "Viết rõ $a, b, c$ (kèm dấu) ra nháp trước khi thế vào công thức.",
    },
    {
      mistake: "Dùng $b$ thay cho $b'$ khi tính $\\Delta'=b'^2-ac$.",
      why: "$\\Delta'$ chỉ dùng được với $b=2b'$; thế nguyên $b$ vào công thức làm sai điều kiện có nghiệm.",
      fix: "Xác định $b'=\\dfrac{b}{2}$ trước khi tính; nghi ngờ thì dùng $\\Delta=b^2-4ac$.",
    },
    {
      mistake: "Nhầm “có hai nghiệm phân biệt” ($\\Delta>0$) với “có nghiệm” ($\\Delta\\ge 0$).",
      why: "Dấu bằng khiến phương trình có nghiệm kép, hai nghiệm trùng nhau, có thể không thỏa yêu cầu “phân biệt”.",
      fix: "Đọc kỹ từ khóa của đề: “phân biệt” hay không.",
    },
    {
      mistake: "Chia cho $x_1$, $x_2$ hoặc $P$ mà không đặt điều kiện khác $0$.",
      why: "Các biểu thức như $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}$ chỉ xác định khi $x_1x_2\\ne 0$.",
      fix: "Đặt thêm điều kiện $P\\ne 0$ ngay từ bước 1.",
    },
  ],
  difficulty: "van-dung",
  sources: [
    { sourceId: "SRC-CT-TOAN", locator: "Lớp 9 – Phương trình bậc hai một ẩn; định lí Viète", note: "Căn cứ yêu cầu cần đạt." },
    { sourceId: "SRC-HUB-ORIG", note: "Toàn bộ đề, lời giải, bẫy do HUB EduNavigator biên soạn." },
  ],
  relatedIds: {
    prerequisiteIds: [],
    relatedProblemIds: ["TOAN-12-CUCTRI-001"],
  },
  accessLevel: "free",
  status: "seed-verified",
  verification: {
    method:
      "Mọi điều kiện, nghiệm, giá trị tham số và kết quả thay ngược ở 5 ví dụ được tính lại độc lập bằng đại số máy tính (sympy) và đối chiếu với lời giải viết tay.",
    openItems: [
      "Chưa gắn số bài/số trang theo một bộ SGK cụ thể vì mỗi bộ sách đánh số khác nhau; cần đối chiếu khi gắn với lớp học.",
    ],
  },
  updatedAt: "2026-11-19",
  ext: {
    kind: "toan",
    questionFormats: ["tu-luan", "tra-loi-ngan", "dung-sai", "trac-nghiem-nhieu-lua-chon", "bai-toan-thuc-te"],
  },
} satisfies MathUnit;
