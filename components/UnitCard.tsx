import Link from "next/link";
import type { CatalogItem } from "@/lib/content";
import { DIFFICULTY_INFO, SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { unitHref } from "@/lib/text";

export function UnitCard({ item }: { item: CatalogItem }) {
  return (
    <Link href={unitHref(item.id)} className="card block p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip">{SUBJECT_INFO[item.subject].name}</span>
        <span className="chip">Lớp {item.grade}</span>
        <span className="chip">{TRACK_INFO[item.track].name}</span>
        <span className="chip">{DIFFICULTY_INFO[item.difficulty].name}</span>
      </div>
      <h3 className="mt-3 text-xl">{item.title}</h3>
      <p className="mt-2 text-muted">{item.summary}</p>
      <p className="mt-3 text-sm text-muted">
        <span className="font-mono">{item.id}</span> · {item.topic}
      </p>
    </Link>
  );
}
