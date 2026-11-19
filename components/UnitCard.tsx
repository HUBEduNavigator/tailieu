import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/lib/content";
import { DIFFICULTY_INFO, SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { unitHref } from "@/lib/text";
import { SubjectIcon } from "./SubjectIcon";

export function UnitCard({ item }: { item: CatalogItem }) {
  return (
    <Link href={unitHref(item.id)} prefetch={false} className="card document-card">
      <div className="flex items-center gap-3">
        <SubjectIcon subject={item.subject} />
        <span className="grow text-sm font-semibold text-muted">
          {SUBJECT_INFO[item.subject].name} · Lớp {item.grade}
        </span>
        <ArrowUpRight size={19} aria-hidden className="document-arrow shrink-0 text-muted" />
      </div>
      <h3>{item.title}</h3>
      <p className="document-summary">{item.summary}</p>
      <div className="document-meta">
        <span>{TRACK_INFO[item.track].name}</span>
        <span>{DIFFICULTY_INFO[item.difficulty].name}</span>
        <span className="font-mono">{item.id}</span>
      </div>
    </Link>
  );
}
