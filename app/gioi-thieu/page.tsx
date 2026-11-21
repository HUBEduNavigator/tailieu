import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = { title: "Về cẩm nang" };

export default function AboutPage() {
  return (
    <div className="container-x practice-page">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Về cẩm nang" }]} />
      <header className="practice-heading">
        <h1>Về cẩm nang</h1>
        <p>HUB EduNavigator giúp học sinh luyện cách ra quyết định khi làm bài Toán, Ngữ văn và Tiếng Anh.</p>
      </header>
      <section className="about-practice">
        <h2>Cách thực hành</h2>
        <p>Chọn một chuyên mục, đọc tình huống và thử chọn cách làm. Phản hồi giải thích lựa chọn của bạn. Khi mở lời giải, hãy chú ý giới hạn áp dụng để biết lúc nào nên đổi cách ở đề khác.</p>
        <Link prefetch={false} href="/#chuyen-muc" className="btn btn-primary">
          Chọn chuyên mục <ArrowRight size={17} aria-hidden />
        </Link>
      </section>
    </div>
  );
}
