import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-20 text-center">
      <h1 className="text-3xl md:text-4xl">Không tìm thấy trang</h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">Đường dẫn này không tồn tại trong kho học liệu. Bạn có thể quay lại trang chủ hoặc tra cứu dạng bài.</p>
      <p className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Về trang chủ</Link>
        <Link href="/hoc-lieu/" className="btn btn-ghost">Tra cứu dạng bài</Link>
      </p>
    </div>
  );
}
