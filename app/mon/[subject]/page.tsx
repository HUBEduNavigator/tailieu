import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SubjectIcon } from "@/components/SubjectIcon";
import { guideHref, guides } from "@/lib/guides";
import { SUBJECT_INFO, SUBJECTS, type Subject } from "@/lib/subjects";

export const dynamicParams = false;
export const generateStaticParams = () => SUBJECTS.map(subject => ({ subject }));
type Props = { params: Promise<{ subject: Subject }> };

export async function generateMetadata({ params }: Props) {
  const { subject } = await params;
  return { title: SUBJECT_INFO[subject]?.name, description: SUBJECT_INFO[subject]?.intro };
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
        <p>{SUBJECT_INFO[subject].intro}</p>
      </header>
      <section className="subject-topic-section" aria-labelledby="practice-topics-title">
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
    </div>
  );
}
