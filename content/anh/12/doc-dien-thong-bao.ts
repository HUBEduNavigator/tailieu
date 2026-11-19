import type { AnhUnit } from "@/lib/schema";

export const unit = {
  id: "ANH-12-NOTICE-001",
  title: "Đọc điền thông báo/tờ rơi: chọn từ cho chỗ trống",
  summary:
    "Dạng bài đọc một thông báo hoặc quảng cáo ngắn rồi chọn từ/cụm từ phù hợp cho 6 chỗ trống (4 phương án), kiểm tra từ nối, từ chỉ lượng, dạng từ và cụm từ cố định.",
  keywords: ["doc dien", "thong bao", "to roi", "quang cao", "cloze", "tu noi", "tot nghiep thpt", "chon tu"],
  taxonomy: {
    subject: "anh",
    grade: 12,
    track: "tot-nghiep-thpt",
    topic: "Đọc hiểu – Điền từ vào thông báo, quảng cáo",
    curriculumPosition: "Kĩ năng Đọc; kiến thức ngôn ngữ (từ vựng, ngữ pháp) – môn Tiếng Anh, GDPT 2018",
  },
  objectives: [
    "Xác định mục đích và nội dung chính của một thông báo/quảng cáo ngắn.",
    "Phân tích loại từ và chức năng ngữ pháp của chỗ trống để chọn phương án đúng.",
    "Phân biệt các từ nối, từ chỉ lượng và dạng từ thường gặp trong văn bản thông báo.",
    "Làm đủ 6 chỗ trống trong thời gian ngắn bằng phương pháp loại trừ.",
  ],
  prerequisites: [
    "Từ loại và vị trí của chúng trong câu: danh từ, động từ, tính từ, trạng từ.",
    "Từ nối chỉ nguyên nhân, điều kiện, nhượng bộ: because, since, if, unless, although, however.",
    "Từ chỉ lượng với danh từ đếm được và không đếm được.",
    "Mạo từ a/an/the.",
  ],
  recognitionSigns: [
    "Đề yêu cầu “Read the following advertisement/announcement and mark the letter A, B, C, or D to indicate the option that best fits each of the numbered blanks.”",
    "Văn bản ngắn dạng thông báo, quảng cáo hoặc tờ rơi, có đánh số chỗ trống.",
    "Mỗi chỗ trống có bốn phương án, kiểm tra một điểm ngữ pháp hoặc từ vựng.",
  ],
  questionPatterns: [
    "Chọn mạo từ hoặc từ hạn định đứng trước danh từ.",
    "Chọn từ chỉ lượng phù hợp với danh từ đếm được/không đếm được.",
    "Chọn dạng động từ (to V, V-ing, V nguyên mẫu) trong cấu trúc song song hoặc sau động từ đặc biệt.",
    "Chọn dạng đúng của từ (danh từ, tính từ, trạng từ, động từ).",
    "Chọn từ nối đúng nghĩa giữa hai mệnh đề.",
  ],
  testedKnowledge: [
    "Từ loại và dạng từ.",
    "Từ nối và cấu trúc câu điều kiện loại cơ bản.",
    "Collocation và cụm động từ thông dụng trong văn bản thông báo.",
    "Cấu trúc song song (parallel structure).",
  ],
  methodology: {
    summary: "Đọc lướt để nắm mục đích, rồi phân tích từng chỗ trống theo vị trí ngữ pháp trước khi nhìn nghĩa.",
    applicability: [
      "Áp dụng cho văn bản ngắn có thể đọc hết trong vài chục giây; đọc trọn câu chứa chỗ trống, không chỉ đọc từ ngay trước và sau.",
      "Phương pháp loại trừ chỉ hiệu quả khi nắm chắc ý nghĩa và cách dùng của bốn phương án.",
    ],
    steps: [
      {
        title: "Đọc lướt tiêu đề và câu đầu",
        detail: "Xác định văn bản là thông báo, quảng cáo hay tờ rơi, dành cho ai và để làm gì.",
        why: "Ngữ cảnh giúp loại phương án sai nghĩa nhanh.",
      },
      {
        title: "Xác định chỗ trống cần loại từ gì",
        detail: "Nhìn từ đứng trước và sau chỗ trống: cần mạo từ, danh từ, động từ, tính từ, trạng từ hay từ nối?",
        why: "Xác định chức năng ngữ pháp thường loại được hai trong bốn phương án.",
      },
      {
        title: "Loại trừ và thử lại vào câu",
        detail: "Gạch phương án sai ngữ pháp, rồi đọc lại cả câu với phương án còn lại để kiểm tra nghĩa.",
        condition: "Nếu hai phương án cùng đúng ngữ pháp, chọn theo nghĩa của cả câu và của đoạn.",
      },
      {
        title: "Rà soát toàn bài",
        detail: "Đọc lại văn bản hoàn chỉnh một lần để kiểm tra tính mạch lạc.",
      },
    ],
  },
  workedExamples: [
    {
      title: "Ví dụ – Thông báo câu lạc bộ đọc sách",
      statement:
        "Read the following announcement and mark the letter A, B, C, or D on your answer sheet to indicate the option that best fits each of the numbered blanks from 1 to 6. (Văn bản do HUB EduNavigator biên soạn, mô phỏng định dạng đề.)",
      analysis:
        "Văn bản là thông báo mời đăng ký câu lạc bộ đọc sách hè của thư viện trường. Mỗi chỗ trống kiểm tra một điểm: mạo từ (1), từ chỉ lượng (2), cấu trúc song song (3), dạng từ (4), từ nối chỉ điều kiện (5) và chỉ nguyên nhân (6).",
      solution: [
        "**Câu 1:** Sau “looking for” cần cụm danh từ cho “way” (danh từ đếm được số ít) nên cần mạo từ. “interesting” bắt đầu bằng nguyên âm /ɪ/ nên dùng “an”. Chọn C. an interesting.",
        "**Câu 2:** “books” là danh từ đếm được số nhiều. “a variety of” + danh từ số nhiều là hợp lý. “a lot” thiếu “of”; “much” và “an amount of” đi với danh từ không đếm được. Chọn A. a variety of.",
        "**Câu 3:** Cấu trúc “help you improve …, boost … and relax”: ba động từ song song cùng dạng nguyên mẫu sau “help you”. Chọn C. boost.",
        "**Câu 4:** Sau “will” cần động từ nguyên mẫu; chỉ “receive” là động từ. “receipt” (biên lai), “receiver” (người nhận), “receptive” (dễ tiếp thu) không phải. Chọn A. receive.",
        "**Câu 5:** Mệnh đề “you want to register” là điều kiện để làm việc ở mệnh đề sau (“please fill in the form”). Chọn B. If. “Unless” đảo nghĩa thành phủ định nên không hợp.",
        "**Câu 6:** Hai mệnh đề quan hệ nguyên nhân – kết quả: “places are limited” là lý do của “early registration is recommended”. Chọn C. Since. “Although” chỉ nhượng bộ; “Unless” chỉ điều kiện phủ định; “However” là trạng từ nối, không nối hai mệnh đề bằng dấu phẩy.",
      ],
      answer: "1 – C; 2 – A; 3 – C; 4 – A; 5 – B; 6 – C.",
      check: "Đọc lại cả văn bản với các phương án đã chọn: mọi câu đều đúng ngữ pháp và mạch lạc về nghĩa.",
    },
  ],
  variants: [
    { title: "Thông báo của nhà trường, câu lạc bộ, sự kiện", description: "Thường chứa các cụm: register for, take part in, free of charge, places are limited." },
    { title: "Quảng cáo sản phẩm hoặc dịch vụ", description: "Từ vựng: offer, discount, available, guarantee; hay dùng dạng so sánh và câu mệnh lệnh." },
    { title: "Tờ rơi hướng dẫn, nội quy", description: "Thường kiểm tra động từ khuyết thiếu (must, should), câu mệnh lệnh và cấu trúc bị động." },
  ],
  commonMistakes: [
    { mistake: "Chọn theo nghĩa mà bỏ qua chức năng ngữ pháp.", why: "Nhiều phương án cùng từ gốc (receive, receipt, receiver) chỉ khác loại từ.", fix: "Xác định loại từ cần điền trước khi xét nghĩa." },
    { mistake: "Nhầm “unless” với “if”.", why: "“Unless” mang nghĩa phủ định (nếu không).", fix: "Thử thay bằng “if … not”: nếu nghĩa không hợp thì không dùng unless." },
    { mistake: "Dùng “much” hoặc “an amount of” với danh từ đếm được.", why: "Hai từ này chỉ đi với danh từ không đếm được.", fix: "Xác định danh từ đếm được hay không đếm được trước." },
    { mistake: "Phá cấu trúc song song (to boost thay vì boost).", why: "Các thành phần cùng chức năng phải cùng dạng.", fix: "Nhìn các động từ đứng trước và sau chỗ trống để chọn cùng dạng." },
    { mistake: "Dùng “however” để nối hai mệnh đề chỉ bằng dấu phẩy.", why: "“However” là trạng từ nối, không phải liên từ.", fix: "Chỉ dùng khi tách thành câu riêng hoặc dùng dấu chấm phẩy trước nó." },
  ],
  difficulty: "van-dung",
  sources: [
    { sourceId: "SRC-CT-ANH", locator: "Kĩ năng Đọc; kiến thức ngôn ngữ", note: "Căn cứ yêu cầu cần đạt." },
    { sourceId: "SRC-QD764", locator: "Cấu trúc định dạng đề thi tốt nghiệp THPT từ năm 2025 (môn Ngoại ngữ)", note: "Chỉ dùng làm căn cứ định dạng chung; chi tiết từng câu cần đối chiếu đề minh họa chính thức." },
    { sourceId: "SRC-HUB-ORIG", note: "Văn bản, câu hỏi, đáp án và giải thích do HUB EduNavigator biên soạn gốc, không sao chép từ đề thi." },
  ],
  relatedIds: { prerequisiteIds: [], relatedProblemIds: [] },
  accessLevel: "free",
  status: "seed-verified",
  verification: {
    method:
      "Tự rà soát ngữ pháp, nghĩa và tính duy nhất của đáp án cho 6 chỗ trống và 5 câu luyện thêm; văn bản gốc không sao chép từ nguồn có bản quyền.",
    openItems: [
      "Chưa đối chiếu được toàn văn đề minh họa chính thức của Bộ GD&ĐT vì phiên làm việc không truy cập được nguồn; chưa khẳng định số câu/vị trí câu của dạng bài này trong đề.",
      "Bản dịch tiếng Việt do người biên soạn tự dịch, cần giáo viên tiếng Anh rà soát lần nữa.",
    ],
  },
  updatedAt: "2026-11-19",
  ext: {
    kind: "anh",
    grammarTables: [
      {
        title: "Từ nối thường gặp trong thông báo",
        headers: ["Từ nối", "Nghĩa", "Cách dùng", "Ví dụ"],
        rows: [
          ["If", "nếu", "If + mệnh đề điều kiện (hiện tại), mệnh đề chính (will/mệnh lệnh)", "If you want to register, please fill in the form."],
          ["Unless", "nếu không, trừ khi", "Unless + mệnh đề khẳng định (= If … not)", "Unless you register early, you may miss a place."],
          ["Since / As / Because", "vì, bởi vì", "Nối mệnh đề chỉ nguyên nhân với mệnh đề kết quả", "Since places are limited, early registration is recommended."],
          ["Although", "mặc dù", "Chỉ sự tương phản giữa hai mệnh đề", "Although the club is free, places are limited."],
          ["However", "tuy nhiên", "Trạng từ nối, đứng đầu câu sau dấu chấm và có dấu phẩy", "Places are limited. However, we will open a second group."],
        ],
        exceptions: [
          "“Since” còn chỉ mốc thời gian (since 2020) và đi với thì hoàn thành; chỉ nguyên nhân khi theo sau là mệnh đề đầy đủ.",
          "“Because of” + danh từ/cụm danh từ, khác với “because” + mệnh đề.",
        ],
      },
      {
        title: "Từ chỉ lượng",
        headers: ["Từ", "Đi với", "Ví dụ"],
        rows: [
          ["a variety of", "danh từ đếm được số nhiều", "a variety of books"],
          ["a lot of / lots of", "đếm được số nhiều và không đếm được", "a lot of time"],
          ["many", "đếm được số nhiều", "many students"],
          ["much", "không đếm được", "much information"],
          ["an amount of", "không đếm được", "an amount of money"],
        ],
        exceptions: [
          "“Much” ít dùng trong câu khẳng định thông thường; thường xuất hiện trong câu phủ định, nghi vấn hoặc sau so/too/very.",
        ],
      },
      {
        title: "Mạo từ a/an",
        headers: ["Dựa vào", "Mạo từ", "Ví dụ"],
        rows: [
          ["Âm đầu là nguyên âm", "an", "an interesting way"],
          ["Âm đầu là phụ âm", "a", "a useful way"],
        ],
        exceptions: ["Xét theo âm, không theo chữ viết: “an hour” (âm /aʊə/), “a university” (âm /j/)."],
      },
    ],
    vocabTables: [
      {
        title: "Collocation thường gặp",
        kind: "collocation",
        rows: [
          { term: "register for", meaningVi: "đăng ký (tham gia)", example: "Please register for the course online.", exampleVi: "Vui lòng đăng ký khóa học trực tuyến." },
          { term: "fill in a form", meaningVi: "điền vào mẫu đơn", example: "Fill in the form at the desk.", exampleVi: "Hãy điền vào mẫu đơn tại quầy." },
          { term: "places are limited", meaningVi: "số chỗ có hạn", example: "Places are limited, so apply early.", exampleVi: "Số chỗ có hạn, vì vậy hãy đăng ký sớm." },
          { term: "at least", meaningVi: "ít nhất", example: "Attend at least eight meetings.", exampleVi: "Tham dự ít nhất tám buổi." },
          { term: "improve your vocabulary", meaningVi: "cải thiện vốn từ", example: "Reading helps you improve your vocabulary.", exampleVi: "Đọc sách giúp bạn cải thiện vốn từ." },
        ],
      },
      {
        title: "Cụm động từ thường gặp",
        kind: "phrasal-verb",
        rows: [
          { term: "sign up for", meaningVi: "đăng ký tham gia", example: "She signed up for the reading club.", exampleVi: "Cô ấy đăng ký vào câu lạc bộ đọc sách." },
          { term: "take part in", meaningVi: "tham gia vào", example: "Many students take part in the project.", exampleVi: "Nhiều học sinh tham gia dự án." },
          { term: "look forward to + V-ing", meaningVi: "mong chờ", example: "We look forward to seeing you.", exampleVi: "Chúng tôi mong được gặp bạn." },
        ],
      },
    ],
    bilingualExamples: [
      { en: "Are you looking for an interesting way to spend your summer holiday?", vi: "Bạn có đang tìm một cách thú vị để dành kỳ nghỉ hè không?" },
      { en: "Since places are limited, early registration is strongly recommended.", vi: "Vì số chỗ có hạn, chúng tôi đặc biệt khuyến khích đăng ký sớm." },
    ],
    exercises: [
      {
        id: "EX-1",
        title: "Bài 1 – Thông báo câu lạc bộ đọc sách (6 chỗ trống)",
        instruction:
          "Read the following announcement and choose the option (A, B, C, or D) that best fits each of the numbered blanks from 1 to 6.",
        passage: {
          title: "SCHOOL LIBRARY – SUMMER READING CLUB",
          text:
            "Are you looking for (1) ______ way to spend your summer holiday? Join our Summer Reading Club!\n\n• Who can join? All students from Grades 10 to 12 are welcome.\n• What will you do? You will read (2) ______ books chosen by our librarians, share your ideas in weekly meetings, and write short reviews.\n• Why join? Reading helps you improve your vocabulary, (3) ______ your imagination and relax after a busy school year.\n• When and where? Every Saturday morning from 8:30 to 10:00 in the library's reading room.\n\nAll members who attend at least eight meetings will (4) ______ a certificate and a free book voucher.\n\n(5) ______ you want to register, please fill in the form at the library desk before 30 June. (6) ______ places are limited, early registration is strongly recommended.",
          textVi:
            "Bạn có đang tìm một cách thú vị để dành kỳ nghỉ hè không? Hãy tham gia Câu lạc bộ Đọc sách Hè của chúng tôi!\n\n• Ai có thể tham gia? Mọi học sinh từ khối 10 đến khối 12 đều được chào đón.\n• Bạn sẽ làm gì? Bạn sẽ đọc nhiều loại sách do thủ thư của chúng tôi chọn, chia sẻ ý kiến trong các buổi họp hằng tuần và viết những bài nhận xét ngắn.\n• Vì sao nên tham gia? Đọc sách giúp bạn cải thiện vốn từ, thúc đẩy trí tưởng tượng và thư giãn sau một năm học bận rộn.\n• Khi nào và ở đâu? Mỗi sáng thứ Bảy, từ 8:30 đến 10:00, tại phòng đọc của thư viện.\n\nTất cả thành viên tham dự ít nhất tám buổi sẽ nhận được giấy chứng nhận và một phiếu tặng sách miễn phí.\n\nNếu bạn muốn đăng ký, vui lòng điền vào mẫu đơn tại quầy thư viện trước ngày 30 tháng 6. Vì số chỗ có hạn, chúng tôi đặc biệt khuyến khích đăng ký sớm.",
          sourceNote: "Văn bản do HUB EduNavigator biên soạn gốc; không sao chép từ đề thi hay sách có bản quyền.",
        },
        items: [
          { prompt: "Blank (1)", options: ["A. interest", "B. interesting", "C. an interesting", "D. interestingly"], answer: "C", explanation: "“way” là danh từ đếm được số ít nên cần mạo từ; “interesting” bắt đầu bằng nguyên âm nên dùng “an”." },
          { prompt: "Blank (2)", options: ["A. a variety of", "B. a lot", "C. much", "D. an amount of"], answer: "A", explanation: "“books” là danh từ đếm được số nhiều; “a variety of” + danh từ số nhiều. “a lot” thiếu “of”; “much” và “an amount of” đi với danh từ không đếm được." },
          { prompt: "Blank (3)", options: ["A. boosting", "B. to boost", "C. boost", "D. boosts"], answer: "C", explanation: "Cấu trúc song song với “improve … and relax”: các động từ cùng dạng nguyên mẫu sau “help you”." },
          { prompt: "Blank (4)", options: ["A. receive", "B. receipt", "C. receiver", "D. receptive"], answer: "A", explanation: "Sau “will” cần động từ nguyên mẫu; chỉ “receive” là động từ." },
          { prompt: "Blank (5)", options: ["A. Unless", "B. If", "C. Although", "D. Because"], answer: "B", explanation: "Câu chỉ điều kiện: nếu bạn muốn đăng ký thì điền mẫu đơn. “Unless” mang nghĩa phủ định nên sai nghĩa." },
          { prompt: "Blank (6)", options: ["A. Although", "B. Unless", "C. Since", "D. However"], answer: "C", explanation: "“places are limited” là lý do của việc khuyến khích đăng ký sớm. “Although” chỉ nhượng bộ; “Unless” chỉ điều kiện phủ định; “However” không nối hai mệnh đề chỉ bằng dấu phẩy." },
        ],
      },
      {
        id: "EX-2",
        title: "Bài 2 – Luyện nhanh từ nối và cụm từ",
        instruction: "Choose the best answer to complete each sentence.",
        items: [
          { prompt: "______ it rains tomorrow, the event will be moved indoors.", options: ["A. If", "B. Unless", "C. Although", "D. Because"], answer: "A", explanation: "Điều kiện thực tế: nếu trời mưa thì sự kiện chuyển vào trong nhà." },
          { prompt: "______ the tickets are free, you must book in advance.", options: ["A. Because", "B. Although", "C. Unless", "D. So"], answer: "B", explanation: "Hai mệnh đề tương phản (vé miễn phí nhưng vẫn phải đặt trước) nên dùng “Although”." },
          { prompt: "You will not receive a certificate ______ you attend at least eight meetings.", options: ["A. if", "B. unless", "C. although", "D. since"], answer: "B", explanation: "“Unless you attend” = “If you do not attend”: không tham dự thì không nhận chứng nhận." },
          { prompt: "We are looking forward to ______ you at the club.", options: ["A. see", "B. seeing", "C. saw", "D. be seen"], answer: "B", explanation: "“look forward to” + V-ing (to là giới từ)." },
          { prompt: "Students are encouraged to sign ______ for the club before Friday.", options: ["A. in", "B. on", "C. up", "D. off"], answer: "C", explanation: "“sign up for” = đăng ký tham gia." },
        ],
      },
    ],
  },
} satisfies AnhUnit;
