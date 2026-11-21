import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SubjectIcon } from "@/components/SubjectIcon";
import { guides, subjectIntros } from "@/lib/guides";
import { SUBJECT_INFO } from "@/lib/labels";
import { SUBJECTS, type Subject } from "@/lib/schema";

export const dynamicParams = false;
export const generateStaticParams = () => SUBJECTS.map(subject => ({ subject }));
type Props = { params: Promise<{ subject: Subject }> };
export async function generateMetadata({ params }: Props) {
  const { subject } = await params;
  return { title: SUBJECT_INFO[subject]?.name, description: subjectIntros[subject] };
}
export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  if (!SUBJECTS.includes(subject)) notFound();
  const title = SUBJECT_INFO[subject].name;
  return <div className="container-x handbook">
    <Breadcrumb items={[{ label: "Cẩm nang", href: "/" }, { label: title }]} />
    <header className="guide-heading"><SubjectIcon subject={subject} /><h1>{title}</h1><p>{subjectIntros[subject]}</p></header>
    <div className="desk-grid pair">{guides[subject].map(g => <section className={'desk desk-'+subject} key={g.slug}>
      <h2><Link prefetch={false} href={'/mon/'+subject+'/'+g.slug+'/'}>{g.title}</Link></h2><p>{g.intent}</p>
      <Link prefetch={false} className="guide-link" href={'/mon/'+subject+'/'+g.slug+'/'}>Mở chuyên mục <ArrowRight size={16}/></Link>
    </section>)}</div>
    <Link prefetch={false} className="guide-link" href={'/hoc-lieu/?mon='+subject}>Tra cứu học liệu {title} đã xuất bản <ArrowRight size={16}/></Link>
  </div>;
}
