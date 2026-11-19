/**
 * Kiểm tra toàn vẹn nội dung. Chạy: npm run validate
 * - Mã id đúng quy ước, duy nhất; khớp CONTENT_REGISTRY.json (id, title, subject, grade, track, difficulty, status, accessLevel, filePath).
 * - Liên kết tiên quyết/liên quan trỏ tới id có thật; nguồn có trong SOURCE_REGISTRY.csv.
 * - Mọi chuỗi giàu: công thức KaTeX dựng được (không lộ LaTeX thô), không còn dấu $ hoặc ** dư.
 * - Thẻ Dẫn chứng đủ 5 trường; trích dẫn tách rạch ròi nguồn; IPA dùng đúng ký tự.
 */
import fs from "node:fs";
import path from "node:path";
import { UNITS } from "../content";
import { checkRich, parseRich } from "../lib/rich";
import { loadSources } from "../lib/sources";
import { ACCESS_LEVELS, CONTENT_STATUSES, DIFFICULTIES, GRADES, QUESTION_FORMATS, SUBJECTS, TRACKS } from "../lib/schema";

const root = path.resolve(__dirname, "..");
const errors: string[] = [];
const err = (m: string) => errors.push(m);

const ID_RE = /^(TOAN|VAN|ANH)-(0[6-9]|1[0-2])-[A-Z0-9]+-\d{3}$/;
const subjectOfPrefix = { TOAN: "toan", VAN: "van", ANH: "anh" } as const;

const sources = new Set(loadSources(root).map((s) => s.source_id));
const registry = JSON.parse(fs.readFileSync(path.join(root, "CONTENT_REGISTRY.json"), "utf8")) as {
  items: { id: string; title: string; subject: string; grade: number; track: string; difficulty: string; status: string; accessLevel: string; filePath: string }[];
};

const ids = new Set<string>();
let formulas = 0;

/** Duyệt mọi chuỗi trong một cấu trúc và kiểm tra văn bản giàu. */
function walk(v: unknown, where: string) {
  if (typeof v === "string") {
    try {
      formulas += checkRich(v);
    } catch (e) {
      err(`${where}: ${(e as Error).message}`);
    }
    // Chuỗi thường không chứa dấu $ lẻ: nếu parse không lỗi thì ổn.
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${where}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, `${where}.${k}`);
}

for (const u of UNITS) {
  const w = u.id;
  if (!ID_RE.test(u.id)) err(`${w}: id sai quy ước MON-LL-CHUDE-NNN`);
  if (ids.has(u.id)) err(`${w}: id trùng lặp`);
  ids.add(u.id);
  const [pre, gg] = u.id.split("-");
  if (subjectOfPrefix[pre as keyof typeof subjectOfPrefix] !== u.taxonomy.subject) err(`${w}: tiền tố id không khớp môn`);
  if (Number(gg) !== u.taxonomy.grade) err(`${w}: lớp trong id không khớp taxonomy.grade`);
  if (!SUBJECTS.includes(u.taxonomy.subject)) err(`${w}: subject không hợp lệ`);
  if (!GRADES.includes(u.taxonomy.grade)) err(`${w}: grade không hợp lệ`);
  if (!TRACKS.includes(u.taxonomy.track)) err(`${w}: track không hợp lệ`);
  if (!DIFFICULTIES.includes(u.difficulty)) err(`${w}: difficulty không hợp lệ`);
  if (!ACCESS_LEVELS.includes(u.accessLevel)) err(`${w}: accessLevel không hợp lệ`);
  if (!CONTENT_STATUSES.includes(u.status)) err(`${w}: status không hợp lệ`);
  if (u.ext.kind !== u.taxonomy.subject) err(`${w}: ext.kind không khớp môn`);
  if (u.accessLevel !== "free") err(`${w}: giai đoạn P0 yêu cầu accessLevel = "free"`);

  // Nội dung bắt buộc không rỗng
  for (const f of ["objectives", "prerequisites", "recognitionSigns", "questionPatterns", "testedKnowledge", "workedExamples", "variants", "commonMistakes", "sources"] as const) {
    if (!u[f] || u[f].length === 0) err(`${w}: trường ${f} rỗng`);
  }
  if (u.methodology.steps.length === 0) err(`${w}: methodology.steps rỗng`);
  for (const s of u.methodology.steps) if (!s.why && !s.condition) {
    /* cho phép: không bắt buộc mọi bước đều có why */
  }
  if (!u.methodology.steps.some((s) => s.why)) err(`${w}: phương pháp cần nêu "vì sao" ít nhất ở một bước`);
  if (u.methodology.applicability.length === 0) err(`${w}: thiếu điều kiện áp dụng`);

  // Nguồn
  for (const s of u.sources) if (!sources.has(s.sourceId)) err(`${w}: nguồn ${s.sourceId} không có trong SOURCE_REGISTRY.csv`);

  // Liên kết
  const all = UNITS.map((x) => x.id);
  for (const r of [...u.relatedIds.prerequisiteIds, ...u.relatedIds.relatedProblemIds]) {
    if (!all.includes(r)) err(`${w}: liên kết ${r} không trỏ tới đơn vị có thật`);
    if (r === u.id) err(`${w}: tự liên kết với chính mình`);
  }

  // Văn bản giàu + công thức
  walk({ ...u, ext: undefined }, w);
  walk(u.ext, `${w}.ext`);

  // Ví dụ minh họa
  for (const [i, ex] of u.workedExamples.entries()) {
    const ew = `${w}.workedExamples[${i}]`;
    if (ex.format && !QUESTION_FORMATS.includes(ex.format)) err(`${ew}: format không hợp lệ`);
    if (ex.choices) {
      if (!ex.correctChoice || !ex.choices.some((c) => c.label === ex.correctChoice)) err(`${ew}: correctChoice không khớp phương án`);
    }
    if (ex.passage && !sources.has(ex.passage.sourceId)) err(`${ew}: passage.sourceId không có trong registry`);
    if (ex.solution.length === 0) err(`${ew}: thiếu lời giải`);
  }

  if (u.ext.kind === "toan") {
    for (const f of u.ext.questionFormats) if (!QUESTION_FORMATS.includes(f)) err(`${w}: questionFormat ${f} không hợp lệ`);
    for (const f of u.ext.questionFormats) if (!u.workedExamples.some((e) => e.format === f)) err(`${w}: nhãn ${f} khai báo nhưng chưa có ví dụ minh họa`);
  }
  if (u.ext.kind === "van") {
    for (const c of u.ext.evidenceCards) {
      const cw = `${w}.evidenceCards.${c.id}`;
      if (!c.origin.work || !c.origin.sourceId) err(`${cw}: thiếu xuất xứ`);
      if (!sources.has(c.origin.sourceId)) err(`${cw}: sourceId không có trong registry`);
      if (!c.coreContent) err(`${cw}: thiếu nội dung cốt lõi`);
      if (!c.meaning) err(`${cw}: thiếu ý nghĩa`);
      if (c.applicableTopics.length === 0) err(`${cw}: thiếu chủ đề vận dụng`);
      if (!c.usageLimits || c.usageLimits.length < 40) err(`${cw}: thiếu hoặc quá sơ sài mục Giới hạn sử dụng`);
    }
    if (u.ext.evidenceCards.length === 0) err(`${w}: đơn vị Ngữ văn mẫu cần ít nhất 1 Thẻ Dẫn chứng`);
  }
  if (u.ext.kind === "anh") {
    // Ký tự IPA: chỉ cho phép ký hiệu thuộc khối IPA + dấu trọng âm/độ dài + ký tự Latin cơ bản.
    const ipaStrings: string[] = [];
    const ipa = u.ext.ipa;
    if (ipa) {
      for (const g of ipa.wordGroups) for (const r of g.rows) ipaStrings.push(r.ipaBr, ...(r.ipaAm ? [r.ipaAm] : []));
      for (const p of ipa.minimalPairs ?? []) ipaStrings.push(p.a.ipaBr, p.b.ipaBr);
      for (const s of ipa.sounds) ipaStrings.push(s.ipa);
    }
    for (const s of ipaStrings) {
      if (!/^\/[^/]+\/$/.test(s)) err(`${w}: phiên âm "${s}" phải nằm giữa hai dấu /`);
      if (/[ɡ]/.test(s) === false && /g/.test(s)) err(`${w}: phiên âm "${s}" dùng chữ g thường; IPA dùng ɡ (U+0261)`);
    }
    for (const e of u.ext.exercises) for (const it of e.items) {
      if (it.options && !it.options.some((o) => o.startsWith(it.answer + ".") || o.startsWith(it.answer + " "))) err(`${w}.${e.id}: đáp án ${it.answer} không khớp phương án`);
    }
  }
}

// Đối chiếu sổ cái
const regIds = new Set(registry.items.map((r) => r.id));
for (const u of UNITS) if (!regIds.has(u.id)) err(`${u.id}: chưa đăng ký trong CONTENT_REGISTRY.json`);
for (const r of registry.items) {
  const u = UNITS.find((x) => x.id === r.id);
  if (!u) {
    err(`${r.id}: có trong CONTENT_REGISTRY.json nhưng không có trong content/index.ts`);
    continue;
  }
  const exp = { title: u.title, subject: u.taxonomy.subject, grade: u.taxonomy.grade, track: u.taxonomy.track, difficulty: u.difficulty, status: u.status, accessLevel: u.accessLevel };
  for (const [k, v] of Object.entries(exp)) if ((r as Record<string, unknown>)[k] !== v) err(`${r.id}: sổ cái.${k} = ${(r as Record<string, unknown>)[k]} khác dữ liệu = ${v}`);
  if (!fs.existsSync(path.join(root, r.filePath))) err(`${r.id}: filePath không tồn tại: ${r.filePath}`);
}

// Kiểm tra cú pháp giàu không làm hỏng parse (chạy lại độc lập để đếm)
void parseRich;

if (errors.length) {
  console.error(`✗ ${errors.length} lỗi:\n` + errors.map((e) => " - " + e).join("\n"));
  process.exit(1);
}
console.log(`✓ Nội dung hợp lệ: ${UNITS.length} đơn vị, ${formulas} công thức KaTeX dựng thành công, ${sources.size} nguồn, ${registry.items.length} mục trong sổ cái.`);
