import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Catalog } from "@/components/Catalog";
import { getCatalog } from "@/lib/content";

export const metadata: Metadata = { title: "Tra cứu dạng bài" };

export default function HocLieuPage() {
  return (
    <div className="container-x py-8">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Tra cứu dạng bài" }]} />
      <h1 className="mt-4 mb-2 text-3xl md:text-4xl">Tra cứu dạng bài</h1>
      <p className="mb-6 max-w-3xl text-muted">
        Lọc kết hợp theo môn, lớp, nhóm học liệu, chủ đề và mức độ; hoặc gõ từ khóa (có dấu hay không dấu đều được).
      </p>
      <Suspense fallback={<p className="text-muted">Đang tải bộ lọc…</p>}>
        <Catalog items={getCatalog()} />
      </Suspense>
    </div>
  );
}
