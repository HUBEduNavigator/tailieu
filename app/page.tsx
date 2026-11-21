import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, CornerDownRight } from "lucide-react";
import { HomeSearch } from "@/components/HomeSearch";
import { SubjectIcon } from "@/components/SubjectIcon";
import { getCatalog } from "@/lib/content";
import { guideHref, guides, subjectIntros } from "@/lib/guides";
import { SUBJECT_INFO } from "@/lib/labels";
import { SUBJECTS } from "@/lib/schema";

export default function HomePage() {
  const featured = guides.toan[0];

  return (
    <div className="practice-home">
      <section className="practice-masthead" aria-labelledby="home-title">
        <div className="container-x masthead-layout">
          <div className="masthead-copy">
            <h1 id="home-title">Đọc đề.<br /> <em>Chọn cách làm.</em></h1>
            <p>Luyện cách nhận ra bẫy trong đề Toán, chọn dẫn chứng Ngữ văn và loại phương án nhiễu Tiếng Anh.</p>
            <a href="#chuyen-muc" className="masthead-button">Khám phá chuyên mục <ArrowDown size={18} aria-hidden /></a>
          </div>
          <article className="featured-problem">
            <div className="featured-label"><SubjectIcon subject="toan" /> Thử nhanh · {featured.title}</div>
            <h2>Giữ nghiệm nào sau khi bình phương?</h2>
            <p className="featured-equation">√(x + 2) = x</p>
            <p className="featured-choices">Sau khi bình phương, ta tìm được <strong>x = 2</strong> và <strong>x = −1</strong>.</p>
            <Link prefetch={false} href={guideHref("toan", featured.slug)} className="featured-link">
              Thử chọn nghiệm <ArrowUpRight size={19} aria-hidden />
            </Link>
          </article>
        </div>
      </section>

      <section className="container-x practice-index" id="chuyen-muc" aria-labelledby="subject-list-title">
        <h2 id="subject-list-title">Bạn muốn luyện gì?</h2>
        {SUBJECTS.map(subject => (
          <section key={subject} className="subject-band">
            <div className="subject-band-label">
              <Link prefetch={false} href={`/mon/${subject}/`}>
                <SubjectIcon subject={subject} />
                <h3>{SUBJECT_INFO[subject].name}</h3>
                <ArrowUpRight size={17} aria-hidden />
              </Link>
              <p>{subjectIntros[subject]}</p>
            </div>
            <ul className="topic-list">
              {guides[subject].map(guide => (
                <li key={guide.slug}>
                  <Link prefetch={false} href={guideHref(subject, guide.slug)}>
                    <CornerDownRight size={17} className="topic-turn" aria-hidden />
                    <span><strong>{guide.title}</strong><small>{guide.intent}</small></span>
                    <ArrowRight size={20} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section className="container-x" aria-labelledby="archive-title">
        <div className="archive-search">
          <BookOpen size={23} aria-hidden />
          <h2 id="archive-title">Tra cứu học liệu đã xuất bản</h2>
          <HomeSearch items={getCatalog()} />
        </div>
      </section>
    </div>
  );
}
