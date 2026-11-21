import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { guides } from "@/lib/guides";
import { SUBJECT_INFO } from "@/lib/labels";
import { SUBJECTS, type Subject } from "@/lib/schema";

export const dynamicParams = false;
export const generateStaticParams = () => SUBJECTS.flatMap(subject => guides[subject].map(g => ({ subject, collection: g.slug })));
type Props = { params: Promise<{ subject: Subject; collection: string }> };
async function resolveGuide({ params }: Props) {
  const { subject, collection } = await params;
  const guide = guides[subject]?.find(g => g.slug === collection);
  if (!guide) notFound();
  return { subject, guide };
}
export async function generateMetadata(props: Props) {
  const { guide } = await resolveGuide(props);
  return { title: guide.title, description: guide.intent };
}
export default async function GuidePage(props: Props) {
  const { subject, guide } = await resolveGuide(props);
  return <article className="container-x handbook">
    <Breadcrumb items={[{ label: "Cẩm nang", href: "/" }, { label: SUBJECT_INFO[subject].name, href: '/mon/'+subject+'/' }, { label: guide.title }]} />
    <header className="guide-heading"><h1>{guide.title}</h1><p>{guide.intent}</p></header>
    <section className="exercise"><h2>Thử quyết định</h2><p className="question-text">{guide.question}</p>
      <details><summary>Xem một gợi ý</summary><p>{guide.cue}</p></details>
      <details><summary>Đối chiếu cách làm</summary><p>{guide.reasoning}</p><h3>Giới hạn áp dụng</h3><p>{guide.limit}</p></details>
    </section>
    <Link prefetch={false} className="guide-link" href={guide.reading.href}>{guide.reading.label}<ArrowRight size={18}/></Link>
  </article>;
}
