/**
 * LƯỢC ĐỒ DỮ LIỆU HỌC LIỆU – HUB EduNavigator (tailieu)
 * Đặc tả bằng lời: xem CONTENT_SCHEMA.md. Mọi đơn vị học liệu phải thỏa `LearningUnit`.
 *
 * Quy ước văn bản giàu (kiểu `Rich`):
 *   - `$...$`   : công thức nội dòng (KaTeX)
 *   - `$$...$$` : công thức khối (KaTeX)
 *   - `**...**` : in đậm
 *   - Văn bản thường: giữ nguyên.
 */

export type Rich = string;

export const SUBJECTS = ["toan", "van", "anh"] as const;
export type Subject = (typeof SUBJECTS)[number];

export const GRADES = [6, 7, 8, 9, 10, 11, 12] as const;
export type Grade = (typeof GRADES)[number];

export const TRACKS = ["nen-tang", "nang-cao", "tuyen-sinh-10", "tot-nghiep-thpt", "bo-tro"] as const;
export type Track = (typeof TRACKS)[number];

export const DIFFICULTIES = ["nhan-biet", "thong-hieu", "van-dung", "van-dung-cao"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const ACCESS_LEVELS = ["free", "member", "premium"] as const;
export type AccessLevel = (typeof ACCESS_LEVELS)[number];

/** Trạng thái kiểm chứng nội dung. */
export const CONTENT_STATUSES = ["draft", "seed-verified", "verified"] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

/** Trường 3. */
export interface Taxonomy {
  subject: Subject;
  grade: Grade;
  track: Track;
  /** Chủ đề (hiển thị và lọc). */
  topic: string;
  /** Vị trí trong chương trình GDPT 2018 (chương/mạch nội dung). */
  curriculumPosition: string;
}

/** Trường 9. */
export interface MethodStep {
  title: Rich;
  detail: Rich;
  /** Tại sao làm bước này. */
  why?: Rich;
  /** Điều kiện áp dụng riêng của bước. */
  condition?: Rich;
}
export interface Methodology {
  summary?: Rich;
  /** Điều kiện chung để phương pháp có hiệu lực. */
  applicability: Rich[];
  steps: MethodStep[];
}

/** Nhãn định dạng câu hỏi GDPT 2018 (chủ yếu cho Toán). */
export const QUESTION_FORMATS = [
  "trac-nghiem-nhieu-lua-chon",
  "dung-sai",
  "tra-loi-ngan",
  "tu-luan",
  "bai-toan-thuc-te",
] as const;
export type QuestionFormat = (typeof QUESTION_FORMATS)[number];

/** Khối trích dẫn nguyên văn kèm nguồn (tách khỏi phần diễn giải). */
export interface QuotedPassage {
  /** Nguyên văn, giữ xuống dòng bằng "\n". Không gõ lại theo trí nhớ nếu chưa kiểm chứng. */
  text: string;
  /** Hiển thị: tác giả, tác phẩm, người dịch/hiệu đính… */
  attribution: string;
  sourceId: string;
}

export interface ChoiceOption {
  label: string; // "A" | "B" | "C" | "D"
  text: Rich;
  /** Vì sao phương án này đúng/sai (bẫy gì). */
  note?: Rich;
}
export interface TrueFalseStatement {
  label: string; // "a" | "b" | "c" | "d"
  text: Rich;
  truth: boolean;
  explanation: Rich;
}

/** Trường 10. */
export interface WorkedExample {
  title: string;
  format?: QuestionFormat;
  statement: Rich;
  /** Ngữ liệu trích nguyên văn (thường dùng cho Ngữ văn). */
  passage?: QuotedPassage;
  choices?: ChoiceOption[];
  correctChoice?: string;
  statements?: TrueFalseStatement[];
  /** Phân tích hướng đi. */
  analysis: Rich;
  /** Lời giải từng bước (mỗi phần tử là một bước/đoạn). */
  solution: Rich[];
  answer?: Rich;
  /** Kiểm tra lại (thay ngược nghiệm, đối chiếu điều kiện…). */
  check?: Rich;
}

/** Trường 11. */
export interface Variant {
  title: Rich;
  description: Rich;
  hint?: Rich;
}

/** Trường 12. */
export interface Mistake {
  mistake: Rich;
  why: Rich;
  fix?: Rich;
}

/** Trường 14: liên kết tới SOURCE_REGISTRY.csv. */
export interface SourceRef {
  sourceId: string;
  /** Vị trí cụ thể: chương, mục, trang… */
  locator?: string;
  note?: string;
}

/** Trường 15. */
export interface RelatedIds {
  prerequisiteIds: string[];
  relatedProblemIds: string[];
}

/** Minh bạch về mức độ kiểm chứng của đơn vị học liệu. */
export interface Verification {
  /** Đã kiểm bằng cách nào. */
  method: Rich;
  /** Những điểm còn cần người đối chiếu (nếu có). */
  openItems: string[];
}

/* ---------- Mở rộng Toán ---------- */
export interface MathExt {
  kind: "toan";
  /** Các định dạng câu hỏi GDPT 2018 mà đơn vị này có minh họa. */
  questionFormats: QuestionFormat[];
}

/* ---------- Mở rộng Ngữ văn ---------- */
export interface EssayFramePart {
  part: string;
  content: Rich;
  guideline?: Rich;
}
export interface EssayFrame {
  /** Dạng đề (ví dụ: NLXH 200 chữ). */
  examType: string;
  lengthGuide?: string;
  parts: EssayFramePart[];
}
/** Thẻ Ngân hàng Dẫn chứng: đủ 5 trường bắt buộc. */
export interface EvidenceCard {
  id: string;
  /** 1. Xuất xứ. */
  origin: { author?: string; work: string; location?: string; sourceId: string };
  /** Trích dẫn nguyên văn (nếu dẫn chứng là câu chữ). */
  quote?: { text: string; attribution: string };
  /** 2. Nội dung cốt lõi. */
  coreContent: Rich;
  /** 3. Ý nghĩa. */
  meaning: Rich;
  /** 4. Chủ đề vận dụng. */
  applicableTopics: string[];
  /** 5. Giới hạn sử dụng. */
  usageLimits: Rich;
}
export interface VanExt {
  kind: "van";
  essayFrame: EssayFrame;
  evidenceCards: EvidenceCard[];
}

/* ---------- Mở rộng Tiếng Anh ---------- */
export interface IpaSound {
  ipa: string;
  name: string;
  articulation: Rich;
  commonErrors: Rich[];
  accentNote?: Rich;
}
export interface IpaWordRow {
  word: string;
  ipaBr: string;
  ipaAm?: string;
  meaningVi: string;
  note?: Rich;
}
export interface IpaSection {
  title: string;
  sounds: IpaSound[];
  wordGroups: { label: string; rows: IpaWordRow[] }[];
  minimalPairs?: { a: IpaWordRow; b: IpaWordRow }[];
  accentNotes?: Rich[];
}
export interface GrammarTable {
  title: string;
  headers: string[];
  rows: Rich[][];
  exceptions?: Rich[];
}
export interface VocabRow {
  term: string;
  pos?: string;
  ipa?: string;
  meaningVi: string;
  example?: string;
  exampleVi?: string;
}
export interface VocabTable {
  title: string;
  kind: "vocab" | "collocation" | "phrasal-verb";
  rows: VocabRow[];
}
export interface BilingualExample {
  en: string;
  vi: string;
  ipa?: string;
  note?: Rich;
}
export interface Exercise {
  id: string;
  title: string;
  instruction: string;
  /** Đoạn văn dùng chung (ví dụ bài đọc điền). */
  passage?: { title?: string; text: string; textVi?: string; sourceNote: string };
  items: { prompt: string; options?: string[]; answer: string; explanation: Rich }[];
}
export interface AnhExt {
  kind: "anh";
  ipa?: IpaSection;
  grammarTables: GrammarTable[];
  vocabTables: VocabTable[];
  bilingualExamples: BilingualExample[];
  exercises: Exercise[];
}

/** Trường dùng chung của mọi đơn vị học liệu. */
export interface UnitBase {
  /** 1. Mã định danh ổn định, duy nhất: MON-LL-CHUDE-NNN (ví dụ TOAN-09-PTB2-001). */
  id: string;
  /** 2. */
  title: string;
  /** Tóm tắt ngắn (một–hai câu) dùng cho thẻ và tìm kiếm; văn bản thuần, không công thức. */
  summary: string;
  /** Từ khóa bổ sung cho tìm kiếm (có thể không dấu). */
  keywords: string[];
  taxonomy: Taxonomy;
  /** 4. */
  objectives: Rich[];
  /** 5. */
  prerequisites: Rich[];
  /** 6. */
  recognitionSigns: Rich[];
  /** 7. */
  questionPatterns: Rich[];
  /** 8. */
  testedKnowledge: Rich[];
  /** 9. */
  methodology: Methodology;
  /** 10. */
  workedExamples: WorkedExample[];
  /** 11. */
  variants: Variant[];
  /** 12. */
  commonMistakes: Mistake[];
  /** 13. */
  difficulty: Difficulty;
  /** 14. */
  sources: SourceRef[];
  /** 15. */
  relatedIds: RelatedIds;
  /** Trường dự phòng. Mặc định "free" ở giai đoạn hiện tại. */
  accessLevel: AccessLevel;
  status: ContentStatus;
  verification: Verification;
  /** Ngày cập nhật cuối (YYYY-MM-DD). */
  updatedAt: string;
}

export type MathUnit = UnitBase & { ext: MathExt };
export type VanUnit = UnitBase & { ext: VanExt };
export type AnhUnit = UnitBase & { ext: AnhExt };
export type LearningUnit = MathUnit | VanUnit | AnhUnit;
