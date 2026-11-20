import type { MathUnit } from "@/lib/schema";

export const unit = {
  id: "TOAN-06-SN-001",
  title: "Thực hiện phép tính trong tập hợp số nguyên, quy tắc dấu ngoặc và thứ tự thực hiện phép tính",
  summary: "Hướng dẫn cộng, trừ, nhân, chia hết số nguyên, tính lũy thừa cơ số nguyên âm với số mũ nhỏ, áp dụng quy tắc dấu ngoặc và thứ tự thực hiện phép tính để tính hợp lí và giải bài toán thực tế Toán 6.",
  keywords: [
    "số nguyên",
    "so nguyen",
    "thực hiện phép tính số nguyên",
    "thuc hien phep tinh so nguyen",
    "quy tắc dấu ngoặc",
    "quy tac dau ngoac",
    "thứ tự thực hiện phép tính",
    "thu tu thuc hien phep tinh",
    "tính hợp lí",
    "tinh hop li",
    "tính chất phân phối",
    "tinh chat phan phoi",
    "lũy thừa cơ số âm",
    "luy thua co so am"
  ],
  status: "verified",
  verification: {
    method: "Người dùng xác nhận học liệu đã đạt thẩm định. Hồ sơ B1-M1-A V3 ghi lại cách tính kiểm tra 7 ví dụ, 4 biến thể và 5 lỗi thường gặp.",
    openItems: []
  },
  updatedAt: "2026-11-20",
  taxonomy: {
    subject: "toan",
    grade: 6,
    track: "nen-tang",
    topic: "Tập hợp các số nguyên",
    curriculumPosition: "Học kì I Toán 6 – Mạch Số và Đại số: Các phép tính với số nguyên (Chương trình GDPT 2018; KNTT Chương III, CTST Chương 2, Cánh Diều Chương II)"
  },
  difficulty: "thong-hieu",
  accessLevel: "free",
  objectives: [
    "Thực hiện đúng các phép cộng, trừ, nhân, chia hết các số nguyên và tính được lũy thừa với số mũ tự nhiên nhỏ của số nguyên âm trong tập hợp $\\mathbb{Z}$.",
    "Hiểu rõ vì sao khi bỏ hoặc đặt dấu ngoặc có dấu - đằng trước thì phải đổi dấu tất cả các số hạng bên trong, từ đó biến đổi dấu chính xác mà không học vẹt.",
    "Biết chọn cách làm gọn và ít sai sót: khi nào nên tính từ trong ngoặc ra ngoài theo thứ tự chuẩn, khi nào nên bỏ ngoặc để nhóm số đối hoặc đặt thừa số chung (kể cả thừa số mang dấu âm) để tính hợp lí.",
    "Lập được biểu thức số nguyên cho các tình huống thực tế có hai chiều trái ngược (nhiệt độ tăng giảm, độ sâu dưới mực nước biển, thu chi tiền bạc) và biết tự kiểm tra tính hợp lí của đáp số."
  ],
  prerequisites: [
    "Nhận biết tập hợp số nguyên $\\mathbb{Z}=\\{\\ldots,-3,-2,-1,0,1,2,3,\\ldots\\}$, biết biểu diễn trên trục số và xác định số đối của số nguyên $a$ là $-a$; số đối của $0$ là $0$.",
    "Biết các phép cộng, trừ, nhân, chia và tính chất giao hoán, kết hợp, phân phối đã học trên tập hợp số tự nhiên $\\mathbb{N}$.",
    "Hiểu định nghĩa lũy thừa $a^n=\\underbrace{a\\cdot a\\cdots a}_{n\\text{ thừa số}}$ với $n\\in\\mathbb{N}^*$, cùng thứ tự ưu tiên phép tính: ngoặc trong cùng trước; trong từng phạm vi, lũy thừa, nhân/chia, cộng/trừ."
  ],
  recognitionSigns: [
    "Bài yêu cầu “Tính”, “Thực hiện phép tính”, “Tính giá trị biểu thức” hoặc “Tính một cách hợp lí” với số nguyên dương và âm.",
    "Biểu thức phối hợp cộng, trừ, nhân, chia hết, lũy thừa cơ số nguyên, hoặc có các ngoặc $(\\,)$, $[\\,]$, $\\{\\,\\}$.",
    "Có cặp số đối nhau, các nhóm số ghép thành tròn chục/tròn trăm, hoặc nhiều tích có chung thừa số $a$ hay $-a$.",
    "Bài toán có lời văn về nhiệt độ, lên/xuống, lãi/lỗ, thu/chi hoặc sự thay đổi độ sâu theo các chặng."
  ],
  questionPatterns: [
    "**Tự luận tính giá trị (tu-luan):** Thực hiện phép tính đúng thứ tự trong biểu thức hỗn hợp có ngoặc tròn, ngoặc vuông (hoặc ngoặc nhọn), phép chia hết và lũy thừa cơ số âm.",
    "**Tự luận tính hợp lí (tu-luan):** Bỏ dấu ngoặc rồi giao hoán, kết hợp nhóm số đối hoặc số tròn chục, hoặc đổi dấu thừa số để đặt thừa số chung âm theo tính chất phân phối.",
    "**Trắc nghiệm nhiều lựa chọn (trac-nghiem-nhieu-lua-chon):** Tính nhanh giá trị biểu thức ngắn hoặc chọn bước đổi dấu, tính lũy thừa đúng giữa các phương án dễ gây nhầm dấu.",
    "**Trắc nghiệm Đúng/Sai (dung-sai):** Đánh giá tính đúng, sai của 4 khẳng định về lũy thừa cơ số âm, quy tắc bỏ hoặc đặt dấu ngoặc và quy tắc dấu trong phép nhân, chia số nguyên.",
    "**Trả lời ngắn (tra-loi-ngan) và Bài toán thực tế (bai-toan-thuc-te):** Điền trực tiếp giá trị số nguyên của biểu thức hoặc lập biểu thức giải tình huống thực tế (độ sâu tàu lặn, nhiệt độ, thu chi) kèm kiểm tra tính hợp lí."
  ],
  testedKnowledge: [
    "Cộng và trừ: với $a,b\\in\\mathbb{N}^*$, $(-a)+(-b)=-(a+b)$; $a+(-a)=0$; phép trừ $a-b=a+(-b)$. Cộng hai số khác dấu dựa trên độ lớn của hai phần số tự nhiên.",
    "Nhân và chia hết: $(-a)\\cdot(-b)=a\\cdot b$, $(-a)\\cdot b=-(a\\cdot b)$ với $a,b>0$; trong phép chia $a:b$ phải có $b\\ne0$ và đang xét trường hợp thương là số nguyên. Tích bằng $0$ nếu ít nhất một thừa số bằng $0$.",
    "Lũy thừa cơ số âm: với $a>0$ và $n\\in\\mathbb{N}^*$, $(-a)^n$ dương nếu $n$ chẵn, âm nếu $n$ lẻ; $-a^n=-(a^n)$. Chẳng hạn $(-4)^2=16$ còn $-4^2=-16$, vì vậy mệnh đề $(-4)^2=-4^2$ là **SAI**.",
    "Bỏ/đặt dấu ngoặc: $+(a+b-c)=a+b-c$; $-(a+b-c)=-a-b+c$; $a-b+c=a-(b-c)$. Khi có dấu trừ trước ngoặc, phải đổi dấu **mọi** số hạng trong ngoặc.",
    "Tính chất phép toán: $a+b=b+a$, $(a+b)+c=a+(b+c)$, $a\\cdot(b+c)=a\\cdot b+a\\cdot c$, $a\\cdot(b-c)=a\\cdot b-a\\cdot c$. Khi đổi chỗ các số hạng trong một dãy cộng–trừ, luôn giữ dấu của từng số hạng.",
    "Thứ tự phép tính: xử lí cấu trúc ngoặc từ trong ra ngoài; trong từng phạm vi, tính lũy thừa rồi nhân/chia trái sang phải, cuối cùng cộng/trừ trái sang phải. Ví dụ $(2+3)^2=25$, nhưng $-3^2=-9$."
  ],
  methodology: {
    summary: "Quan sát ngoặc và lũy thừa; chọn tính theo thứ tự chuẩn hoặc tính hợp lí bằng bỏ ngoặc, nhóm số đối, đặt thừa số chung; sau đó tự kiểm tra dấu và đáp số.",
    applicability: [
      "Chỉ xét phép chia $a:b$ khi $b\\ne0$ và thương là số nguyên theo phạm vi của đơn vị học liệu.",
      "Giao hoán và kết hợp của phép cộng áp dụng cho tổng đại số: $a-b+c=a+(-b)+c=a+c-b$. Không đổi chỗ trực tiếp thành $b-a$.",
      "Không tự nhóm dãy nhân/chia: $36:(-6)\\cdot2=-12$, còn $36:[(-6)\\cdot2]=-3$. Hai cách nhóm **nói chung khác nhau**, không phải luôn khác nhau.",
      "Bỏ dấu ngoặc bằng quy tắc cộng/trừ chỉ khi ngoặc chịu dấu $+$ hoặc $-$ ở phía trước, không có phép nhân/chia/lũy thừa tác động lên cả ngoặc; với $3\\cdot(a+b)$ cần phân phối hoặc tính trong ngoặc.",
      "Đặt thừa số chung sau khi các tích đã biểu diễn được bằng cùng thừa số: $(-a)\\cdot b=a\\cdot(-b)$, $a=a\\cdot1$."
    ],
    steps: [
      {
        title: "Bước 1 – Quan sát ngoặc và cơ số lũy thừa",
        detail: "Đọc cấu trúc các ngoặc $()$, $[\\,]$, $\\{\\,\\}$. Với cơ số là một số nguyên âm có ngoặc, $(-3)^2=9$; nếu dấu trừ đứng ngoài lũy thừa, $-3^2=-9$. Nếu cơ số là biểu thức $(2+3)^2$, phải tính $2+3=5$ rồi mới nâng lên lũy thừa.",
        why: "Phân biệt dấu âm trong cơ số và dấu đối nằm ngoài lũy thừa giúp tránh sai dấu; tính cơ số có ngoặc trước là bắt buộc.",
        condition: "Áp dụng ngay khi bài có ngoặc hoặc lũy thừa."
      },
      {
        title: "Bước 2 – Chọn cách tính",
        detail: "Nếu có cặp số đối hoặc nhóm thành số tròn chục/trăm mà ngoặc chỉ chịu dấu cộng/trừ, ưu tiên bỏ ngoặc để nhóm. Nếu các tích có chung thừa số, ưu tiên phân phối. Trường hợp có nhiều phép toán xen kẽ hoặc các ngoặc chịu nhân/chia/lũy thừa, ưu tiên tính theo thứ tự chuẩn.",
        why: "Cách chọn có điều kiện tránh bỏ ngoặc sai trong biểu thức có nhân/chia tác động vào ngoặc.",
        condition: "Chỉ nhóm lại sau khi nhận diện đúng cấu trúc và các phép tính được phép biến đổi."
      },
      {
        title: "Bước 3 – Tính chính xác theo nhánh đã chọn",
        detail: "Nếu bỏ ngoặc: dấu $+$ trước ngoặc giữ nguyên các dấu bên trong, dấu $-$ trước ngoặc đổi tất cả dấu; khi đổi chỗ phải mang theo dấu của số hạng. Nếu phân phối: $a\\cdot b+a\\cdot c=a\\cdot(b+c)$ và đồng nhất dấu thừa số trước khi đặt ra ngoài. Nếu tính theo thứ tự chuẩn: thực hiện ngoặc trong cùng trước; trong từng phạm vi làm lũy thừa, nhân/chia từ trái qua phải, cộng/trừ từ trái qua phải.",
        why: "Quy tắc dấu ngoặc là lấy số đối của cả tổng: $-(a+b-c)=(-1)\\cdot[a+b+(-c)]=(-1)\\cdot a+(-1)\\cdot b+(-1)\\cdot(-c)=-a-b+c$. Vì $-1$ nhân vào **mọi** số hạng nên tất cả dấu trong ngoặc đều đảo.",
        condition: "Chỉ áp dụng phép biến đổi khi thỏa đúng điều kiện nêu ở danh sách applicability."
      },
      {
        title: "Bước 4 – Kiểm tra dấu và đáp số",
        detail: "Thay cách tính để đối chiếu: tính riêng từng ngoặc, thử nhân phân phối trở lại, kiểm tra dấu tích/thương và dấu của lũy thừa. Với bài thực tế, kiểm tra thêm ý nghĩa của đáp số.",
        why: "Một phép tính sai dấu có thể kéo theo toàn bộ kết quả sai; kiểm chứng theo cách thứ hai giúp phát hiện sớm.",
        condition: "Thực hiện trước khi chốt kết quả."
      }
    ]
  },
  workedExamples: [
    {
      title: "Ví dụ 1 (Nhận biết): Thực hiện phép tính đúng thứ tự có ngoặc tròn, ngoặc vuông và lũy thừa cơ số âm",
      format: "tu-luan",
      statement: "Tính giá trị biểu thức: $$A=120-\\left[(-3)^2\\cdot15-(24-40):(-4)\\right].$$",
      analysis: "Cơ số $(-3)$ được đặt trong ngoặc nên $(-3)^2=9$. Tính $(24-40)$ và lũy thừa, rồi nhân và chia trong ngoặc vuông, cuối cùng trừ khỏi $120$.",
      solution: [
        "Tính trong ngoặc tròn và lũy thừa: $24-40=-16$; $(-3)^2=(-3)\\cdot(-3)=9$.",
        "Tính nhân và chia: $9\\cdot15=135$; $(-16):(-4)=4$.",
        "Tính ngoặc vuông: $135-4=131$. Sau đó $120-131=-11$.",
        "$$\\begin{aligned}A&=120-\\left[(-3)^2\\cdot15-(24-40):(-4)\\right]\\\\&=120-[9\\cdot15-(-16):(-4)]\\\\&=120-[135-4]\\\\&=120-131=-11.\\end{aligned}$$"
      ],
      answer: "$A=-11$.",
      check: "Đổi sang cách bỏ ngoặc ở bước cuối: $120-[135-4]=120-135+4=-15+4=-11$. Hai cách trùng nhau."
    },
    {
      title: "Ví dụ 2 (Thông hiểu): Áp dụng quy tắc dấu ngoặc để rút gọn và nhóm các số đối",
      format: "tu-luan",
      statement: "Tính hợp lí biểu thức: $$B=(257-148-315)-(-148+257-115).$$",
      analysis: "Bỏ ngoặc thứ hai (trước đó có dấu trừ) sẽ đổi dấu tất cả số hạng; khi đó $257$ và $-257$, $-148$ và $+148$ triệt tiêu nhau.",
      solution: [
        "Bỏ ngoặc: $B=257-148-315+148-257+115$.",
        "Nhóm số đối: $B=(257-257)+(-148+148)+(-315+115)$.",
        "Tính từng nhóm: $0+0-200=-200$.",
        "$$\\begin{aligned}B&=(257-148-315)-(-148+257-115)\\\\&=257-148-315+148-257+115\\\\&=(257-257)+(-148+148)+(-315+115)\\\\&=-200.\\end{aligned}$$"
      ],
      answer: "$B=-200$.",
      check: "Tính thẳng hai ngoặc: $257-148-315=-206$; $-148+257-115=-6$; $(-206)-(-6)=-200$."
    },
    {
      title: "Ví dụ 3 (Vận dụng): Tính hợp lí bằng tính chất phân phối có thừa số chung mang dấu âm",
      format: "tu-luan",
      statement: "Tính hợp lí biểu thức: $$C=(-37)\\cdot64+37\\cdot(-37)+37.$$ ",
      analysis: "Đưa thừa số đầu về cùng dấu $37$ bằng $(-37)\\cdot64=37\\cdot(-64)$, viết $37=37\\cdot1$, rồi đặt $37$ làm thừa số chung.",
      solution: [
        "Chuyển dấu: $(-37)\\cdot64=37\\cdot(-64)$, $37=37\\cdot1$.",
        "Đặt thừa số chung: $C=37\\cdot[(-64)+(-37)+1]$.",
        "Trong ngoặc: $-64-37+1=-100$, nên $C=37\\cdot(-100)=-3700$.",
        "$$\\begin{aligned}C&=(-37)\\cdot64+37\\cdot(-37)+37\\\\&=37\\cdot(-64)+37\\cdot(-37)+37\\cdot1\\\\&=37\\cdot[(-64)+(-37)+1]\\\\&=37\\cdot(-100)=-3700.\\end{aligned}$$"
      ],
      answer: "$C=-3700$.",
      check: "Tính riêng: $(-37)\\cdot64=-2368$, $37\\cdot(-37)=-1369$; tổng $-2368-1369+37=-3700$. Cũng có thể đặt $(-37)$ làm thừa số chung: $(-37)\\cdot(64+37-1)=-3700$."
    },
    {
      title: "Ví dụ 4 (Vận dụng – Bài toán thực tế): Biến động độ sâu tàu lặn nghiên cứu đại dương",
      format: "bai-toan-thuc-te",
      statement: "Một tàu lặn ở độ cao $-15$ m so với mực nước biển. Tàu lặn sâu thêm 4 phút với tốc độ 12 m/phút; sau đó nổi lên 3 phút với tốc độ 8 m/phút; cuối cùng lặn sâu thêm 14 m. Hỏi độ cao cuối cùng so với mực nước biển và độ sâu của tàu, đồng thời kiểm tra tính hợp lí của đáp số.",
      analysis: "Chọn mực nước biển là mốc 0 m. Lặn sâu thêm ghi số âm, nổi lên ghi số dương; độ cao cuối bằng độ cao đầu cộng tổng độ dịch chuyển theo dấu.",
      solution: [
        "Lập biểu thức (m): $D=-15+4\\cdot(-12)+3\\cdot8-14$.",
        "Tính các tích: $4\\cdot(-12)=-48$, $3\\cdot8=24$.",
        "Nhóm số hạng: $D=(-15-14)+(-48+24)=-29-24=-53$ (m).",
        "$$\\begin{aligned}D&=-15+4\\cdot(-12)+3\\cdot8-14\\\\&=-15-48+24-14\\\\&=(-15-14)+(-48+24)\\\\&=-29-24=-53\\text{ (m)}.\\end{aligned}$$",
        "Vì độ cao so với mực nước biển bằng $-53$ m, tàu đang sâu 53 m dưới mực nước biển."
      ],
      answer: "Độ cao $-53$ m so với mực nước biển; độ sâu 53 m.",
      check: "Kiểm tra theo chặng: $-15\\to-63\\to-39\\to-53$ (m). Kiểm tra quãng đường: lặn $48+14=62$ m, nổi 24 m, nên độ sâu tăng thêm $62-24=38$ m; lúc cuối sâu $15+38=53$ m."
    },
    {
      title: "Ví dụ 5 (Thông hiểu – Trắc nghiệm nhiều lựa chọn): Thứ tự phép tính với lũy thừa bậc lẻ cơ số âm",
      format: "trac-nghiem-nhieu-lua-chon",
      statement: "Giá trị của $M=(-2)^3-(-5)\\cdot4$ là bao nhiêu?",
      choices: [
        {
          label: "A",
          text: "$-28$",
          note: "Sai vì nhầm $-8-(-20)$ thành $-8-20$."
        },
        {
          label: "B",
          text: "$-12$",
          note: "Sai vì nhầm $(-2)^3=8$ rồi tính $8-20$."
        },
        {
          label: "C",
          text: "$12$",
          note: "Đáp án đúng."
        },
        {
          label: "D",
          text: "$28$",
          note: "Sai vì nhầm $(-2)^3=8$ nên tính $8-(-20)$."
        }
      ],
      correctChoice: "C",
      analysis: "Tính lũy thừa và nhân trước: $(-2)^3=-8$, $(-5)\\cdot4=-20$; sau đó trừ số âm.",
      solution: [
        "$(-2)^3=(-2)\\cdot(-2)\\cdot(-2)=-8$; $(-5)\\cdot4=-20$.",
        "$M=-8-(-20)=-8+20=12$.",
        "$$\\begin{aligned}M&=(-2)^3-(-5)\\cdot4\\\\&=-8-(-20)\\\\&=12.\\end{aligned}$$ Chọn **C**."
      ],
      answer: "C. $12$.",
      check: "Đảo chiều phép trừ: $12+(-20)=-8$, đúng bằng $(-2)^3$."
    },
    {
      title: "Ví dụ 6 (Thông hiểu – Đúng/Sai): Kiểm tra bản chất dấu ngoặc, lũy thừa và phép nhân số nguyên",
      format: "dung-sai",
      statement: "Xét tính Đúng/Sai của từng khẳng định sau trong $\\mathbb{Z}$; khẳng định có thể là mệnh đề sai có chủ ý.",
      statements: [
        {
          label: "a",
          text: "$(-4)^2=-4^2$",
          truth: false,
          explanation: "$(-4)^2=16$, trong khi $-4^2=-(4^2)=-16$; $16\\ne-16$. Đây là mệnh đề **Sai** được đưa vào có chủ ý."
        },
        {
          label: "b",
          text: "$18-(25-12+7)=18-25+12-7$",
          truth: true,
          explanation: "Bỏ ngoặc có dấu trừ thì đổi dấu tất cả số hạng: $-(25-12+7)=-25+12-7$."
        },
        {
          label: "c",
          text: "$30-45+15=30-(45+15)$",
          truth: false,
          explanation: "Vế trái bằng $0$, vế phải bằng $30-60=-30$; đẳng thức sai. Công thức đặt ngoặc đúng là $30-45+15=30-(45-15)$."
        },
        {
          label: "d",
          text: "Với mọi $a,b\\in\\mathbb{Z}$, ta có $(-a)\\cdot b=a\\cdot(-b)$.",
          truth: true,
          explanation: "Cả hai vế đều bằng $-(a\\cdot b)$, đúng cả khi $a=0$ hoặc $b=0$."
        }
      ],
      analysis: "Kiểm tra từng vế; ghi Đúng hoặc Sai theo giá trị toán học của chính mệnh đề được nêu, không tự đổi dấu bằng thành dấu khác trong đề.",
      solution: [
        "**a) Sai:** $(-4)^2=16$, còn $-4^2=-16$, nên $16\\ne-16$.",
        "**b) Đúng:** $18-(25-12+7)=18-25+12-7=-2$.",
        "**c) Sai:** $30-45+15=0$, còn $30-(45+15)=30-60=-30$.",
        "**d) Đúng:** $(-a)\\cdot b=-(a\\cdot b)=a\\cdot(-b)$ với mọi $a,b\\in\\mathbb{Z}$."
      ],
      answer: "a) Sai; b) Đúng; c) Sai; d) Đúng.",
      check: "Kiểm tra độc lập ý b): $18-(25-12+7)=18-20=-2$ và $18-25+12-7=-2$. Ý c): $0\\ne-30$."
    },
    {
      title: "Ví dụ 7 (Vận dụng – Trả lời ngắn): Kết hợp thứ tự phép tính và quy tắc dấu ngoặc triệt tiêu số đối",
      format: "tra-loi-ngan",
      statement: "Tính giá trị biểu thức: $$P=\\left[(-120):6+(-3)^3\\right]-\\left[(-47)-53\\right].$$",
      analysis: "Tính lần lượt phép chia và lũy thừa trong ngoặc đầu để được $-47$; ngoặc sau bằng $-100$, hoặc bỏ ngoặc sau dấu trừ để triệt tiêu số đối.",
      solution: [
        "Ngoặc đầu: $(-120):6=-20$ và $(-3)^3=-27$; tổng $-20-27=-47$.",
        "Ngoặc sau: $(-47)-53=-100$.",
        "$P=-47-(-100)=-47+100=53$.",
        "$$\\begin{aligned}P&=\\left[(-120):6+(-3)^3\\right]-\\left[(-47)-53\\right]\\\\&=[-20-27]-[-47-53]\\\\&=-47-(-100)=53.\\end{aligned}$$"
      ],
      answer: "$P=53$.",
      check: "Bỏ ngoặc thứ hai: $-47-[(-47)-53]=-47+47+53=53$."
    }
  ],
  variants: [
    {
      title: "Biến thể 1 – Đặt thừa số chung âm",
      description: "Tính $-19\\cdot43-19\\cdot57$ bằng cách đưa $-19$ ra ngoài ngoặc.",
      hint: "$-19\\cdot43-19\\cdot57=(-19)\\cdot(43+57)=(-19)\\cdot100=-1900$."
    },
    {
      title: "Biến thể 2 – Tổng xen kẽ",
      description: "Tính $S=1-2+3-4+\\cdots+99-100$ bằng cách ghép 50 cặp.",
      hint: "$S=(1-2)+(3-4)+\\cdots+(99-100)=50\\cdot(-1)=-50$."
    },
    {
      title: "Biến thể 3 – Ba cấp ngoặc và lũy thừa",
      description: "Tính $200-\\{150-[(-2)^4\\cdot5-(18-30)]\\}$.",
      hint: "$(-2)^4=16$, $18-30=-12$, ngoặc vuông $=80-(-12)=92$, ngoặc nhọn $=150-92=58$; đáp số $200-58=142$."
    },
    {
      title: "Biến thể 4 – Thay giá trị một chữ",
      description: "Tính $E=x-(25-17)+(-12)$ tại $x=-20$.",
      hint: "$E=x-8-12=x-20$; thay $x=-20$ được $E=-20-20=-40$."
    }
  ],
  commonMistakes: [
    {
      mistake: "SAI: nhầm $(-3)^2=-9$ hoặc $-3^2=9$.",
      why: "Không phân biệt dấu trừ ở **trong cơ số** và dấu trừ **đứng ngoài** phép nâng lên lũy thừa.",
      fix: "ĐÚNG: $(-3)^2=(-3)\\cdot(-3)=9$; $-3^2=-(3^2)=-9$."
    },
    {
      mistake: "SAI: $20-(15-8)=20-15-8=-3$.",
      why: "Bỏ ngoặc sau dấu trừ nhưng chỉ đổi dấu $15$, quên đổi dấu $-8$.",
      fix: "ĐÚNG: $20-(15-8)=20-15+8=13$; kiểm tra $20-7=13$."
    },
    {
      mistake: "SAI: $15-28+13=15-(28+13)=-26$.",
      why: "Đưa số hạng $+13$ vào ngoặc sau dấu trừ mà không đổi dấu.",
      fix: "ĐÚNG: $15-28+13=15-(28-13)=0$, cũng bằng $(15+13)-28=0$."
    },
    {
      mistake: "SAI: $(-6)\\cdot17+6\\cdot7=(-6)\\cdot(17+7)=-144$.",
      why: "Tích $6\\cdot7$ là dương, không thể viết thành $(-6)\\cdot7$.",
      fix: "ĐÚNG: $(-6)\\cdot17+6\\cdot7=(-6)\\cdot17+(-6)\\cdot(-7)=(-6)\\cdot(17-7)=-60$."
    },
    {
      mistake: "SAI: $36:(-6)\\cdot2=36:[(-6)\\cdot2]=-3$.",
      why: "Trong chuỗi nhân/chia, hai phép cùng thứ tự ưu tiên và phải thực hiện từ trái sang phải; không được tự gom tích sau dấu chia.",
      fix: "ĐÚNG: $36:(-6)\\cdot2=[36:(-6)]\\cdot2=(-6)\\cdot2=-12$."
    }
  ],
  sources: [
    {
      sourceId: "SRC-CT-TOAN",
      locator: "Chương trình môn Toán lớp 6 – Mạch Số và Đại số (Số tự nhiên và Số nguyên)"
    },
    {
      sourceId: "SRC-SGK-TOAN6-T1-KNTT",
      locator: "Chương III – Số nguyên",
      note: "Tham khảo ở cấp chương. Số bài và số trang cần đối chiếu theo bản in."
    },
    {
      sourceId: "SRC-SGK-TOAN6-T1-CTST",
      locator: "Chương 2 – Số nguyên",
      note: "Tham khảo ở cấp chương. Số bài và số trang cần đối chiếu theo bản in."
    },
    {
      sourceId: "SRC-SGK-TOAN6-T1-CD",
      locator: "Chương II – Số nguyên",
      note: "Tham khảo ở cấp chương. Số bài và số trang cần đối chiếu theo bản in."
    },
    {
      sourceId: "SRC-JRN-HCMUE-2025-SN",
      locator: "Tập 22, Số 6, tr. 1056–1068"
    },
    {
      sourceId: "SRC-JRN-HNUE-2025-SN",
      locator: "Tập 70, Số 1, tr. 113–126"
    }
  ],
  relatedIds: {
    prerequisiteIds: [],
    relatedProblemIds: []
  },
  ext: {
    kind: "toan",
    questionFormats: [
      "tu-luan",
      "bai-toan-thuc-te",
      "trac-nghiem-nhieu-lua-chon",
      "dung-sai",
      "tra-loi-ngan"
    ]
  }
} satisfies MathUnit;
