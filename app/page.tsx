import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeSearch } from "@/components/HomeSearch";
import { SubjectIcon } from "@/components/SubjectIcon";
import { getCatalog } from "@/lib/content";
import { guides, subjectIntros } from "@/lib/guides";
import { SUBJECT_INFO } from "@/lib/labels";
import { SUBJECTS } from "@/lib/schema";

export default function HomePage() {
  return <div className="container-x handbook">
    <header className="handbook-cover">
      <div><h1>Cẩm nang<br />làm bài thi</h1>
        <p>Nhận ra dấu hiệu dễ bỏ sót, thử một cách làm và biết khi nào cần đổi cách.</p>
      </div>
      <aside className="cover-question">
        <small>Thử sức · Ngữ văn</small>
        <h2>Một câu thơ có thể chứng minh được đến đâu?</h2>
        <p>Thử chọn luận điểm phù hợp với lời bàn về chữ tâm của Nguyễn Du.</p>
        <Link prefetch={false} href="/mon/van/ngu-lieu-dan-chung/">Thử chọn dẫn chứng <ArrowRight size={18} /></Link>
      </aside>
    </header>
    <h2 className="handbook-heading">Chọn môn học</h2>
    <div className="desk-grid">{SUBJECTS.map(s => <section key={s} className={'desk desk-'+s}>
      <SubjectIcon subject={s} /><h3><Link prefetch={false} href={'/mon/'+s+'/'}>{SUBJECT_INFO[s].name}</Link></h3>
      <p>{subjectIntros[s]}</p><ul>{guides[s].map(g => <li key={g.slug}><Link prefetch={false} href={'/mon/'+s+'/'+g.slug+'/'}>{g.title}<ArrowRight size={16} /></Link></li>)}</ul>
    </section>)}</div>
    <section className="archive-search"><div><h2>Tra cứu học liệu đã xuất bản</h2><p>Tìm ví dụ, ngữ liệu và bài tập trong kho.</p></div><HomeSearch items={getCatalog()} /></section>
  </div>;
}
