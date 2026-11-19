import Link from "next/link";
import { ArrowRight, ChevronRight, GraduationCap, SlidersHorizontal } from "lucide-react";
import { HomeSearch } from "@/components/HomeSearch";
import { SubjectIcon } from "@/components/SubjectIcon";
import { UnitCard } from "@/components/UnitCard";
import { countBy, getCatalog } from "@/lib/content";
import { SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { GRADES, SUBJECTS } from "@/lib/schema";

const EXAMS = ["tuyen-sinh-10", "tot-nghiep-thpt"] as const;

export default function HomePage() {
  const items = getCatalog();
  const missingGrades = GRADES.filter((grade) => countBy(undefined, grade) === 0);

  return (
    <div className="container-x library-layout">
      <section className="library-hero" aria-labelledby="library-title">
        <div className="hero-content">
          <p className="hero-context">Lớp 6–12 <span aria-hidden>·</span> GDPT 2018</p>
          <h1 id="library-title">Kho học liệu tự học</h1>
          <p className="hero-intro">Tra cứu dạng bài, phương pháp và ví dụ có lời giải cho Toán, Ngữ văn và Tiếng Anh.</p>
          <HomeSearch items={items} />
        </div>
      </section>

      <aside className="library-sidebar" aria-label="Lối tắt học liệu">
        <div className="library-browse">
          <section aria-labelledby="subjects">
            <h2 id="subjects">Môn học</h2>
            <ul className="subject-list">
              {SUBJECTS.map((subject) => (
                <li key={subject}>
                  <Link href={`/mon/${subject}/`} prefetch={false}>
                    <SubjectIcon subject={subject} />
                    <span className="grow">{SUBJECT_INFO[subject].name}</span>
                    <span className="browse-count" aria-label={`${countBy(subject)} dạng bài`}>{countBy(subject)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="grades">
            <h2 id="grades">Theo lớp</h2>
            <div className="grade-grid">
              {GRADES.map((grade) => countBy(undefined, grade) > 0 ? (
                <Link key={grade} href={`/hoc-lieu/?lop=${grade}`} prefetch={false} aria-label={`Lớp ${grade}`}>{grade}</Link>
              ) : (
                <span key={grade} aria-label={`Lớp ${grade} – Đang cập nhật`}>{grade}</span>
              ))}
            </div>
            {missingGrades.length > 0 && (
              <p className="browse-note">Đang cập nhật lớp {new Intl.ListFormat("vi").format(missingGrades.map(String))}.</p>
            )}
          </section>

          <section aria-labelledby="exams">
            <h2 id="exams">Theo kỳ thi</h2>
            <ul className="exam-list">
              {EXAMS.map((track) => (
                <li key={track}>
                  {countBy(undefined, undefined, track) > 0 ? (
                    <Link href={`/hoc-lieu/?nhom=${track}`} prefetch={false}>
                      <GraduationCap size={18} aria-hidden />
                      <span className="grow">{TRACK_INFO[track].name}</span>
                      <ChevronRight size={15} aria-hidden />
                    </Link>
                  ) : (
                    <span className="text-sm text-muted">{TRACK_INFO[track].name} · Đang cập nhật</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </aside>

      <section className="library-documents" aria-labelledby="documents">
        <div className="collection-heading">
          <div>
            <h2 id="documents">Tài liệu trong kho</h2>
            <p className="mt-1 text-sm text-muted">{items.length} dạng bài đã đăng</p>
          </div>
          <Link href="/hoc-lieu/" prefetch={false} className="btn btn-ghost">
            <SlidersHorizontal size={17} aria-hidden /> Lọc tài liệu
          </Link>
        </div>
        <div className="document-grid">
          {items.slice(0, 6).map((item) => <UnitCard key={item.id} item={item} />)}
        </div>
        {items.length > 6 && (
          <Link href="/hoc-lieu/" prefetch={false} className="btn btn-ghost mt-5">
            Xem tất cả tài liệu <ArrowRight size={17} aria-hidden />
          </Link>
        )}
      </section>
    </div>
  );
}
