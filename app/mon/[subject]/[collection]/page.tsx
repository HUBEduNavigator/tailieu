import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Layers } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GuideExercise } from "@/components/GuideExercise";
import { SubjectIcon } from "@/components/SubjectIcon";
import { guideHref, guides } from "@/lib/guides";
import { SUBJECT_INFO, SUBJECTS, type Subject } from "@/lib/subjects";

export const dynamicParams = false;
export const generateStaticParams = () => SUBJECTS.flatMap(subject =>
  guides[subject].map(guide => ({ subject, collection: guide.slug })),
);
type Props = { params: Promise<{ subject: Subject; collection: string }> };

async function resolveGuide({ params }: Props) {
  const { subject, collection } = await params;
  const guide = guides[subject]?.find(entry => entry.slug === collection);
  if (!guide) notFound();
  return { subject, guide };
}

export async function generateMetadata(props: Props) {
  const { guide } = await resolveGuide(props);
  return { title: guide.title, description: guide.intent };
}

export default async function GuidePage(props: Props) {
  const { subject, guide } = await resolveGuide(props);
  const subjectName = SUBJECT_INFO[subject].name;

  return (
    <article className="container-x practice-page">
      <Breadcrumb items={[
        { label: "Khám phá", href: "/" },
        { label: subjectName, href: `/mon/${subject}/` },
        { label: guide.title },
      ]} />
      <header className="practice-heading">
        <SubjectIcon subject={subject} />
        <h1>{guide.title}</h1>
        <p>{guide.intent}</p>
      </header>
      <div className="subject-workspace">
        <GuideExercise key={guide.slug} {...guide} />
        <nav className="practice-aside" aria-labelledby="more-practice-title">
          <Layers size={22} aria-hidden />
          <h2 id="more-practice-title">Luyện tiếp</h2>
          {guides[subject].filter(entry => entry.slug !== guide.slug).map(entry => (
            <Link prefetch={false} key={entry.slug} href={guideHref(subject, entry.slug)}>
              {entry.title} <ArrowRight size={17} aria-hidden />
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
}
