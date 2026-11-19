import Link from "next/link";
import { BookOpen, FunctionSquare, Languages } from "lucide-react";
import { HomeSearch } from "@/components/HomeSearch";
import { UnitCard } from "@/components/UnitCard";
import { countBy, getCatalog } from "@/lib/content";
import { SUBJECT_INFO } from "@/lib/labels";
import { GRADES, SUBJECTS } from "@/lib/schema";

const ICONS = { toan: FunctionSquare, van: BookOpen, anh: Languages } as const;

export default function HomePage() {
  const items = getCatalog();
  return (
    <>
      <section className="border-b border-line bg-surface2/60 px-4 py-14 text-center md:py-20">
        <p className="eyebrow">Kho học liệu tự học · Lớp 6–12 · GDPT 2018</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl md:text-5xl">Tra cứu dạng bài, học phương pháp, hiểu vì sao làm vậy</h1>
        <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg text-muted">
          Toán, Ngữ văn, Tiếng Anh: mỗi dạng bài có dấu hiệu nhận biết, phương pháp kèm điều kiện áp dụng, ví dụ giải chi tiết và những bẫy thường gặp.
        </p>
        <HomeSearch items={items} />
      </section>

      <div className="container-x space-y-14 py-12">
        <section aria-labelledby="mon-hoc">
          <h2 id="mon-hoc" className="section-title">Chọn môn học</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SUBJECTS.map((s) => {
              const Icon = ICONS[s];
              const n = countBy(s);
              return (
                <Link key={s} href={`/mon/${s}/`} className="card block p-6">
                  <Icon aria-hidden size={30} className="text-accenttext" />
                  <h3 className="mt-3 text-2xl">{SUBJECT_INFO[s].name}</h3>
                  <p className="mt-1 text-muted">{SUBJECT_INFO[s].tagline}</p>
                  <p className="mt-3 text-sm font-semibold">{n > 0 ? `${n} dạng bài đã đăng` : "Đang cập nhật theo lộ trình"}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="theo-lop">
          <h2 id="theo-lop" className="section-title">Lối tắt theo lớp</h2>
          <div className="flex flex-wrap gap-3">
            {GRADES.map((g) => {
              const n = countBy(undefined, g);
              return (
                <Link key={g} href={`/hoc-lieu/?lop=${g}`} className="card min-w-[7.5rem] px-4 py-3 text-center">
                  <span className="block font-display text-xl">Lớp {g}</span>
                  <span className="block text-sm text-muted">{n > 0 ? `${n} dạng bài` : "Đang cập nhật"}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="ky-thi">
          <h2 id="ky-thi" className="section-title">Hai kỳ thi trọng tâm</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { track: "tuyen-sinh-10", title: "Tuyển sinh lớp 10", text: "Dạng bài trọng tâm của kỳ thi vào lớp 10." },
              { track: "tot-nghiep-thpt", title: "Tốt nghiệp THPT", text: "Dạng bài theo định dạng đề thi tốt nghiệp THPT theo GDPT 2018." },
            ].map((x) => {
              const n = countBy(undefined, undefined, x.track as "tuyen-sinh-10" | "tot-nghiep-thpt");
              return (
                <Link key={x.track} href={`/hoc-lieu/?nhom=${x.track}`} className="card block p-6">
                  <h3 className="text-2xl">{x.title}</h3>
                  <p className="mt-1 text-muted">{x.text}</p>
                  <p className="mt-3 text-sm font-semibold">{n > 0 ? `${n} dạng bài đã đăng` : "Đang cập nhật theo lộ trình"}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="da-dang">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 id="da-dang" className="section-title">Dạng bài đã đăng</h2>
            <Link href="/hoc-lieu/" className="underline">Xem và lọc tất cả</Link>
          </div>
          <p className="mb-4 text-muted">
            Đây là giai đoạn khởi tạo: kho chỉ đăng một vài dạng bài mẫu đã kiểm chứng cho mỗi môn. Các mục khác đang được cập nhật theo lộ trình.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((it) => (
              <UnitCard key={it.id} item={it} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
