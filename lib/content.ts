import { UNITS } from "@/content";
import { normalizeVi, slugify, unitSlug } from "./text";
import type { Difficulty, Grade, LearningUnit, Subject, Track } from "./schema";
import { GRADES, SUBJECTS } from "./schema";
import { stripRich } from "./rich";

/** Dạng gọn của đơn vị, gửi xuống trình duyệt cho tìm kiếm và bộ lọc. */
export interface CatalogItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  subject: Subject;
  grade: Grade;
  track: Track;
  topic: string;
  topicSlug: string;
  difficulty: Difficulty;
  /** Chuỗi đã chuẩn hóa (bỏ dấu, chữ thường) để tìm kiếm. */
  haystack: string;
}

export function getUnits(): LearningUnit[] {
  return UNITS;
}

export function getUnitBySlug(slug: string): LearningUnit | undefined {
  return UNITS.find((u) => unitSlug(u.id) === slug);
}

export function getUnitById(id: string): LearningUnit | undefined {
  return UNITS.find((u) => u.id === id);
}

export function toCatalogItem(u: LearningUnit): CatalogItem {
  const t = u.taxonomy;
  const haystack = normalizeVi(
    [u.id, u.title, u.summary, t.topic, ...u.keywords, ...u.objectives.map(stripRich)].join(" | "),
  );
  return {
    id: u.id,
    slug: unitSlug(u.id),
    title: u.title,
    summary: u.summary,
    subject: t.subject,
    grade: t.grade,
    track: t.track,
    topic: t.topic,
    topicSlug: slugify(t.topic),
    difficulty: u.difficulty,
    haystack,
  };
}

export function getCatalog(): CatalogItem[] {
  return UNITS.map(toCatalogItem).sort(
    (a, b) => SUBJECTS.indexOf(a.subject) - SUBJECTS.indexOf(b.subject) || a.grade - b.grade || a.id.localeCompare(b.id),
  );
}

export function countBy(subject?: Subject, grade?: Grade, track?: Track): number {
  return UNITS.filter(
    (u) =>
      (!subject || u.taxonomy.subject === subject) &&
      (!grade || u.taxonomy.grade === grade) &&
      (!track || u.taxonomy.track === track),
  ).length;
}

export const ALL_GRADES = GRADES;
