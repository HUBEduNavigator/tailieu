import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = { title: "Về kho học liệu và cách kiểm chứng" };

export default function AboutPage() {
  return (
    <div className="container-x page-shell">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Về kho học liệu" }]} />
      <div className="mt-4 max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl">Về kho học liệu và cách kiểm chứng</h1>
        <p className="text-lg text-muted">
          Kho học liệu này là một phần của hệ sinh thái HUB EduNavigator, dành cho học sinh lớp 6–12 theo chương trình GDPT 2018 ở ba môn Toán học, Ngữ văn và Tiếng Anh.
        </p>

        <section>
          <h2 className="section-title">Cách tổ chức</h2>
          <p>Chọn môn, rồi chọn quyết định bạn muốn luyện. Mỗi chuyên mục mở bằng một tình huống để bạn tự thử trước khi xem gợi ý, cách làm và giới hạn áp dụng. Danh mục vẫn cho phép tra cứu các bài đã xuất bản theo lớp và kỳ thi.</p>
        </section>

        <section>
          <h2 className="section-title">Mỗi dạng bài có gì</h2>
          <p>
            Mục tiêu, kiến thức tiên quyết, dấu hiệu nhận biết, mô hình câu hỏi, kiến thức trọng tâm, phương pháp (có nêu vì sao và điều kiện áp dụng), ví dụ giải chi tiết, biến thể, lỗi sai thường gặp, nguồn căn cứ và các liên kết tới dạng bài liên quan.
          </p>
        </section>

        <section>
          <h2 className="section-title">Mức độ kiểm chứng</h2>
          <p>
            Học liệu có nhãn <strong>Đã tự kiểm</strong> kèm cách kiểm tra và những điểm còn cần đối chiếu. Nhãn <strong>Đã thẩm định</strong> dành cho bài đã qua thẩm định. Thông tin kiểm chứng và nguồn tham khảo nằm ở cuối mỗi bài. Chúng tôi không trích dẫn văn học hay nguồn mà chưa chắc xuất xứ, và không đăng lại nội dung sách giáo khoa có bản quyền.
          </p>
        </section>

        <section>
          <h2 className="section-title">Các mục chưa có</h2>
          <p>
            Những lớp, chủ đề hay nhóm học liệu chưa có bài được ghi là “Đang cập nhật theo lộ trình”. Nội dung mới chỉ được thêm sau khi đã soạn và thẩm định.
          </p>
        </section>

        <p>
          <Link prefetch={false} href="/hoc-lieu/" className="btn btn-primary">Tra cứu dạng bài</Link>
        </p>
      </div>
    </div>
  );
}
