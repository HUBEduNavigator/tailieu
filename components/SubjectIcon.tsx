import { BookOpen, FunctionSquare, Languages } from "lucide-react";
import type { Subject } from "@/lib/schema";

const icons = { toan: FunctionSquare, van: BookOpen, anh: Languages };

export function SubjectIcon({ subject }: { subject: Subject }) {
  const Icon = icons[subject];
  return <span className={`subject-icon subject-${subject}`}><Icon size={21} aria-hidden /></span>;
}
