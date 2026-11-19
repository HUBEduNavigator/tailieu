import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Catalog } from "@/components/Catalog";
import { UnitCard } from "@/components/UnitCard";
import { getCatalog } from "@/lib/content";

export const metadata: Metadata = { title: "Danh mục học liệu" };

export default function HocLieuPage() {
  const items = getCatalog();
  return (
    <div className="container-x page-shell">
      <Breadcrumb items={[{ label: "Khám phá", href: "/" }, { label: "Danh mục" }]} />
      <header className="page-intro">
        <h1>Danh mục học liệu</h1>
        <p>Tìm theo từ khóa có dấu hoặc không dấu, rồi thu hẹp kết quả bằng bộ lọc.</p>
      </header>
      <Suspense fallback={
        <div className="document-grid">{items.map((item) => <UnitCard key={item.id} item={item} />)}</div>
      }>
        <Catalog items={items} />
      </Suspense>
    </div>
  );
}
