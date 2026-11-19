import type { AnhUnit } from "@/lib/schema";

export const unit = {
  id: "ANH-06-PRON-001",
  title: "Phân biệt nguyên âm /ɪ/ và /iː/ (ship – sheep)",
  summary:
    "Phân biệt nguyên âm ngắn /ɪ/ và nguyên âm dài /iː/ qua cách phát âm, phiên âm IPA, cặp từ tối thiểu và quy luật chính tả, kèm lỗi thường gặp của người Việt.",
  keywords: ["phat am", "ipa", "phien am", "nguyen am", "ship sheep", "cap tu toi thieu", "ngu am", "i ngan i dai"],
  taxonomy: {
    subject: "anh",
    grade: 6,
    track: "nen-tang",
    topic: "Ngữ âm – Nguyên âm đơn",
    curriculumPosition: "Kiến thức ngôn ngữ – Ngữ âm: phát âm các nguyên âm đơn (môn Tiếng Anh, GDPT 2018)",
  },
  objectives: [
    "Đọc đúng ký hiệu IPA /ɪ/ và /iː/ trong phiên âm từ điển.",
    "Phát âm phân biệt được cặp từ như ship /ʃɪp/ và sheep /ʃiːp/.",
    "Nhận ra nghĩa khác nhau của cặp từ tối thiểu (live – leave, fill – feel…).",
    "Dự đoán gần đúng âm từ cách viết bằng quy luật chính tả và nhớ các ngoại lệ thường gặp.",
  ],
  prerequisites: [
    "Bảng chữ cái tiếng Anh và cách đọc tên chữ cái.",
    "Khái niệm nguyên âm, phụ âm và âm tiết.",
    "Làm quen ký hiệu IPA cơ bản: dấu ˈ (trọng âm chính), dấu ː (âm dài).",
  ],
  recognitionSigns: [
    "Đề yêu cầu chọn từ có phần gạch chân phát âm khác, hoặc nối từ với phiên âm.",
    "Cặp từ chỉ khác một nguyên âm ngắn/dài (ship – sheep).",
    "Phiên âm có /ɪ/ (không dấu dài) hoặc /iː/ (có dấu dài ː).",
  ],
  questionPatterns: [
    "Chọn từ có nguyên âm /ɪ/ (hoặc /iː/) trong bốn từ.",
    "Chọn phiên âm đúng của một từ.",
    "Điền từ phù hợp vào câu dựa trên phiên âm cho sẵn.",
    "Nghe và phân biệt cặp từ tối thiểu (khi có học liệu âm thanh).",
  ],
  testedKnowledge: [
    "Độ dài nguyên âm là dấu hiệu phân biệt nghĩa trong tiếng Anh.",
    "Quy luật chính tả: ee, ea thường là /iː/; i thường là /ɪ/ (kèm ngoại lệ).",
    "Dùng từ điển để kiểm tra phiên âm thay vì đoán.",
  ],
  methodology: {
    summary: "Nghe – nhìn – tự nói: so sánh hai âm theo vị trí lưỡi, độ căng và độ dài, rồi luyện bằng cặp từ tối thiểu.",
    applicability: [
      "Áp dụng cho phiên âm theo từ điển Anh–Anh; một số từ có phiên âm Anh–Mỹ khác (xem ghi chú).",
      "Quy luật chính tả chỉ là xu hướng, luôn có ngoại lệ; từ mới phải tra từ điển.",
    ],
    steps: [
      {
        title: "Nhận diện ký hiệu",
        detail: "/ɪ/ là chữ i hoa viết nhỏ, không có dấu dài. /iː/ có dấu hai chấm ː báo hiệu âm dài.",
        why: "Học sinh thường đọc hai ký hiệu như nhau vì giống chữ “i” tiếng Việt.",
      },
      {
        title: "Đặt khẩu hình",
        detail: "/iː/: lưỡi nâng cao và căng, môi bè nhẹ như đang mỉm cười, kéo dài. /ɪ/: lưỡi thấp hơn một chút, thả lỏng, môi không căng, nói ngắn.",
        why: "Khẩu hình khác nhau tạo ra cả độ dài lẫn âm sắc khác nhau, nên không chỉ “nói lâu hơn”.",
        condition: "Mô tả mang tính gần đúng cho người học Việt Nam; luyện cùng giáo viên hoặc âm thanh mẫu.",
      },
      {
        title: "Luyện bằng cặp từ tối thiểu",
        detail: "Đọc lần lượt ship – sheep, sit – seat, bit – beat, live – leave; đảm bảo hai từ nghe khác nhau rõ rệt.",
      },
      {
        title: "Kiểm tra bằng từ điển",
        detail: "Gặp từ mới, tra phiên âm thay vì đoán từ cách viết.",
        why: "Chính tả tiếng Anh không đảm bảo âm đọc.",
      },
    ],
  },
  workedExamples: [
    {
      title: "Ví dụ 1 – Chọn phiên âm đúng",
      statement: "Chọn phiên âm đúng của từ “beat” (nghĩa: đánh bại).",
      choices: [
        { label: "A", text: "/bɪt/", note: "Là phiên âm của “bit” (một chút)." },
        { label: "B", text: "/biːt/", note: "Đúng." },
        { label: "C", text: "/bet/", note: "Là phiên âm của “bet” (đặt cược)." },
        { label: "D", text: "/beɪt/", note: "Là phiên âm của “bait” (mồi)." },
      ],
      correctChoice: "B",
      analysis: "Cách viết “ea” thường là /iː/; từ “beat” là âm dài.",
      solution: [
        "“beat” có nguyên âm dài /iː/, cho phiên âm /biːt/.",
        "Các đáp án còn lại là phiên âm của những từ khác (bit, bet, bait).",
      ],
      answer: "Chọn B: /biːt/.",
    },
  ],
  variants: [
    { title: "Chọn từ có phần gạch chân phát âm khác", description: "Đề cho bốn từ, ba từ cùng một âm; phải xác định từ khác âm bằng cách tra hoặc nhớ phiên âm." },
    { title: "Điền từ theo phiên âm", description: "Câu có chỗ trống kèm phiên âm; học sinh chọn từ có phiên âm khớp." },
    { title: "Âm cuối từ như city, happy", description: "Âm /i/ ở cuối từ không trọng âm là âm khác, không đồng nhất với /ɪ/ hay /iː/; sẽ học ở bài sau." },
  ],
  commonMistakes: [
    {
      mistake: "Đọc /ɪ/ như /iː/ (ship nghe thành sheep).",
      why: "Tiếng Việt không có sự đối lập ngắn – dài ở nguyên âm i nên người học bỏ qua khác biệt.",
      fix: "Rút ngắn âm và thả lỏng lưỡi, môi; luyện cặp từ tối thiểu.",
    },
    {
      mistake: "Đọc /iː/ quá ngắn như âm “i” tiếng Việt.",
      why: "Độ dài là yếu tố phân biệt nghĩa trong tiếng Anh.",
      fix: "Kéo dài âm gấp khoảng hai lần và giữ môi bè.",
    },
    {
      mistake: "Đoán âm từ cách viết, ví dụ đọc “machine” là /məˈʃɪn/.",
      why: "Một số từ có chữ i nhưng đọc /iː/ (machine, police).",
      fix: "Tra từ điển; học thuộc các ngoại lệ thường gặp.",
    },
    {
      mistake: "Quên dấu ː khi chép phiên âm.",
      why: "Thiếu dấu ː làm /iː/ thành /i/, đổi thành âm khác.",
      fix: "Luôn chép đủ ký hiệu và dấu khi ghi phiên âm.",
    },
  ],
  difficulty: "nhan-biet",
  sources: [
    { sourceId: "SRC-CT-ANH", locator: "Kiến thức ngôn ngữ – Ngữ âm", note: "Căn cứ nội dung chương trình." },
    { sourceId: "SRC-CAMBRIDGE", note: "Quy ước phiên âm IPA tham chiếu từ điển Anh–Anh; cần tra lại từng từ khi mở rộng." },
    { sourceId: "SRC-IPA-HANDBOOK", note: "Ký hiệu IPA /ɪ/ và /iː/." },
    { sourceId: "SRC-HUB-ORIG", note: "Bài tập, ví dụ, ghi chú khẩu hình do HUB EduNavigator biên soạn." },
  ],
  relatedIds: { prerequisiteIds: [], relatedProblemIds: [] },
  accessLevel: "free",
  status: "seed-verified",
  verification: {
    method:
      "Từng ký tự IPA và cặp từ được rà soát thủ công theo quy ước từ điển Anh–Anh; các từ có phiên âm Anh–Mỹ khác đã ghi riêng.",
    openItems: [
      "Chưa tra đối chiếu trực tuyến từng từ với Cambridge/Oxford (mạng của phiên làm việc này bị chặn); cần đối chiếu khi có điều kiện.",
      "Chưa có tệp âm thanh mẫu; nên bổ sung ở đợt sau.",
    ],
  },
  updatedAt: "2026-11-19",
  ext: {
    kind: "anh",
    ipa: {
      title: "Hai nguyên âm /ɪ/ và /iː/",
      sounds: [
        {
          ipa: "/iː/",
          name: "Nguyên âm dài, cao, căng",
          articulation:
            "Lưỡi nâng cao, đưa về phía trước; môi bè nhẹ như đang mỉm cười; kéo dài âm khoảng gấp đôi âm ngắn.",
          commonErrors: ["Đọc ngắn như “i” tiếng Việt.", "Đọc thành /ɪ/ nên sheep nghe như ship."],
          accentNote: "Từ điển Anh–Mỹ nhiều nơi ghi /i/ (không dấu dài) trong vài từ; ở tài liệu này giữ /iː/ cho mọi từ liệt kê.",
        },
        {
          ipa: "/ɪ/",
          name: "Nguyên âm ngắn, hơi thấp, thả lỏng",
          articulation:
            "Lưỡi thấp hơn /iː/ một chút và thả lỏng, môi không bè căng; nói rất ngắn, âm nằm giữa “i” và “ê” tiếng Việt (chỉ là ước lượng).",
          commonErrors: ["Kéo dài thành /iː/.", "Phát âm quá giống “ê” khiến lẫn với /e/ (bit nghe như bet)."],
        },
      ],
      wordGroups: [
        {
          label: "Từ có /iː/",
          rows: [
            { word: "sheep", ipaBr: "/ʃiːp/", meaningVi: "con cừu" },
            { word: "seat", ipaBr: "/siːt/", meaningVi: "chỗ ngồi" },
            { word: "beat", ipaBr: "/biːt/", meaningVi: "đánh bại; nhịp" },
            { word: "leave", ipaBr: "/liːv/", meaningVi: "rời đi" },
            { word: "feel", ipaBr: "/fiːl/", meaningVi: "cảm thấy" },
            { word: "heat", ipaBr: "/hiːt/", meaningVi: "sức nóng" },
            { word: "cheap", ipaBr: "/tʃiːp/", meaningVi: "rẻ" },
            { word: "green", ipaBr: "/ɡriːn/", meaningVi: "xanh lá cây" },
            { word: "meet", ipaBr: "/miːt/", meaningVi: "gặp" },
            { word: "please", ipaBr: "/pliːz/", meaningVi: "làm ơn; xin" },
            { word: "teacher", ipaBr: "/ˈtiːtʃə/", ipaAm: "/ˈtiːtʃɚ/", meaningVi: "giáo viên", note: "Âm cuối khác nhau giữa Anh–Anh và Anh–Mỹ." },
          ],
        },
        {
          label: "Từ có /ɪ/",
          rows: [
            { word: "ship", ipaBr: "/ʃɪp/", meaningVi: "con tàu" },
            { word: "sit", ipaBr: "/sɪt/", meaningVi: "ngồi" },
            { word: "bit", ipaBr: "/bɪt/", meaningVi: "một chút" },
            { word: "live", ipaBr: "/lɪv/", meaningVi: "sống (động từ)" },
            { word: "fill", ipaBr: "/fɪl/", meaningVi: "làm đầy" },
            { word: "hit", ipaBr: "/hɪt/", meaningVi: "đánh, va vào" },
            { word: "chip", ipaBr: "/tʃɪp/", meaningVi: "khoai chiên; mảnh nhỏ" },
            { word: "big", ipaBr: "/bɪɡ/", meaningVi: "to, lớn" },
            { word: "kitchen", ipaBr: "/ˈkɪtʃɪn/", ipaAm: "/ˈkɪtʃən/", meaningVi: "nhà bếp", note: "Âm tiết thứ hai khác nhau giữa Anh–Anh và Anh–Mỹ." },
            { word: "English", ipaBr: "/ˈɪŋɡlɪʃ/", meaningVi: "tiếng Anh" },
          ],
        },
      ],
      minimalPairs: [
        { a: { word: "ship", ipaBr: "/ʃɪp/", meaningVi: "con tàu" }, b: { word: "sheep", ipaBr: "/ʃiːp/", meaningVi: "con cừu" } },
        { a: { word: "sit", ipaBr: "/sɪt/", meaningVi: "ngồi" }, b: { word: "seat", ipaBr: "/siːt/", meaningVi: "chỗ ngồi" } },
        { a: { word: "bit", ipaBr: "/bɪt/", meaningVi: "một chút" }, b: { word: "beat", ipaBr: "/biːt/", meaningVi: "đánh bại" } },
        { a: { word: "live", ipaBr: "/lɪv/", meaningVi: "sống" }, b: { word: "leave", ipaBr: "/liːv/", meaningVi: "rời đi" } },
        { a: { word: "fill", ipaBr: "/fɪl/", meaningVi: "làm đầy" }, b: { word: "feel", ipaBr: "/fiːl/", meaningVi: "cảm thấy" } },
        { a: { word: "hit", ipaBr: "/hɪt/", meaningVi: "đánh" }, b: { word: "heat", ipaBr: "/hiːt/", meaningVi: "sức nóng" } },
        { a: { word: "chip", ipaBr: "/tʃɪp/", meaningVi: "khoai chiên" }, b: { word: "cheap", ipaBr: "/tʃiːp/", meaningVi: "rẻ" } },
      ],
      accentNotes: [
        "Phiên âm cột Anh–Anh theo quy ước từ điển Anh–Anh; cột Anh–Mỹ chỉ ghi khi khác.",
        "Âm /ɪ/ và /iː/ ở những từ trong bài này không khác nhau giữa hai giọng; khác biệt chủ yếu ở âm đi sau (ví dụ âm cuối “-er”).",
      ],
    },
    grammarTables: [
      {
        title: "Quy luật chính tả – âm (xu hướng, không tuyệt đối)",
        headers: ["Chữ viết", "Thường đọc", "Ví dụ", "Ngoại lệ thường gặp"],
        rows: [
          ["ee", "/iː/", "green /ɡriːn/, meet /miːt/", "Rất ít ngoại lệ trong từ cơ bản."],
          ["ea", "/iː/", "meat /miːt/, please /pliːz/", "bread /bred/, head /hed/, great /ɡreɪt/"],
          ["i (giữa hai phụ âm, âm tiết có trọng âm)", "/ɪ/", "sit /sɪt/, big /bɪɡ/", "ice /aɪs/; machine /məˈʃiːn/; police /pəˈliːs/"],
        ],
        exceptions: [
          "Chữ i trong machine và police đọc /iː/ vì đây là từ vay mượn từ tiếng Pháp.",
          "“ea” có thể đọc /e/ (bread, head) hoặc /eɪ/ (great): phải học thuộc.",
        ],
      },
    ],
    vocabTables: [
      {
        title: "Từ vựng cơ bản liên quan",
        kind: "vocab",
        rows: [
          { term: "ship", pos: "n", ipa: "/ʃɪp/", meaningVi: "con tàu", example: "The ship is big.", exampleVi: "Con tàu rất lớn." },
          { term: "sheep", pos: "n", ipa: "/ʃiːp/", meaningVi: "con cừu (số ít và số nhiều giống nhau)", example: "The sheep are in the field.", exampleVi: "Đàn cừu ở ngoài đồng." },
          { term: "seat", pos: "n", ipa: "/siːt/", meaningVi: "chỗ ngồi", example: "Take a seat, please.", exampleVi: "Mời bạn ngồi." },
        ],
      },
    ],
    bilingualExamples: [
      { en: "The sheep is on the ship.", vi: "Con cừu ở trên con tàu.", ipa: "/ðə ʃiːp ɪz ɒn ðə ʃɪp/", note: "Phiên âm Anh–Anh; ở giọng Anh–Mỹ từ “on” thường là /ɑːn/." },
      { en: "Please sit on this seat.", vi: "Làm ơn ngồi vào chỗ này.", ipa: "/pliːz sɪt ɒn ðɪs siːt/" },
      { en: "I live near the beach, but I will leave early.", vi: "Tôi sống gần bãi biển nhưng tôi sẽ rời đi sớm." },
      { en: "Fill the glass, please. I feel thirsty.", vi: "Làm ơn rót đầy ly. Tôi thấy khát." },
    ],
    exercises: [
      {
        id: "EX-1",
        title: "Bài 1 – Nhận biết nguyên âm",
        instruction: "Chọn đáp án đúng.",
        items: [
          { prompt: "Từ nào có nguyên âm /ɪ/?", options: ["A. meet", "B. sit", "C. green", "D. cheap"], answer: "B", explanation: "sit /sɪt/. Ba từ còn lại có /iː/: meet /miːt/, green /ɡriːn/, cheap /tʃiːp/." },
          { prompt: "Từ nào có nguyên âm /iː/?", options: ["A. fill", "B. hit", "C. heat", "D. chip"], answer: "C", explanation: "heat /hiːt/. Còn lại có /ɪ/: fill /fɪl/, hit /hɪt/, chip /tʃɪp/." },
          { prompt: "Từ nào có phiên âm /liːv/?", options: ["A. live", "B. leave", "C. lift", "D. life"], answer: "B", explanation: "leave /liːv/. live /lɪv/, lift /lɪft/, life /laɪf/ đều khác." },
        ],
      },
      {
        id: "EX-2",
        title: "Bài 2 – Điền từ theo phiên âm",
        instruction: "Chọn từ có phiên âm khớp với phiên âm cho sẵn.",
        items: [
          { prompt: "The farmer has a hundred ____ /ʃiːp/ on his farm.", options: ["A. sheep", "B. ship"], answer: "A", explanation: "/ʃiːp/ là sheep (cừu). ship phiên âm là /ʃɪp/." },
          { prompt: "Please ____ /sɪt/ down.", options: ["A. seat", "B. sit"], answer: "B", explanation: "/sɪt/ là sit (ngồi). seat là /siːt/ (chỗ ngồi), không phải động từ “ngồi”." },
          { prompt: "I ____ /lɪv/ in Da Nang.", options: ["A. live", "B. leave"], answer: "A", explanation: "/lɪv/ là live (sống). leave là /liːv/ (rời đi)." },
        ],
      },
    ],
  },
} satisfies AnhUnit;
