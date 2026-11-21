import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SubjectIcon } from "@/components/SubjectIcon";
import { guideHref, guides, subjectIntros } from "@/lib/guides";
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

  return (
    <div className="container-x practice-page">
      <Breadcrumb items={[{ label: "Khám phá", href: "/" }, { label: title }]} />
      <header className="practice-heading">
        <SubjectIcon subject={subject} />
        <h1>{title}</h1>
        <p>{subjectIntros[subject]}</p>
      </header>
      <div className="subject-workspace">
        <section aria-labelledby="practice-topics-title">
          <h2 id="practice-topics-title">Chuyên mục thực hành</h2>
          <ul className="workspace-topics">
            {guides[subject].map(guide => (
              <li key={guide.slug}>
                <Link prefetch={false} href={guideHref(subject, guide.slug)}>
                  <span><strong>{guide.title}</strong><small>{guide.intent}</small></span>
                  <ArrowRight size={22} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <aside className="practice-aside">
          <BookOpen size={22} aria-hidden />
          <h2>Đọc sâu theo lớp</h2>
          <Link prefetch={false} href={`/hoc-lieu/?mon=${subject}`}>Học liệu {title} đã xuất bản <ArrowRight size={17} aria-hidden /></Link>
        </aside>
      </div>
    </div>
  );
}
