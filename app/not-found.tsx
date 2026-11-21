import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-20 text-center">
      <h1 className="text-3xl md:text-4xl">Không tìm thấy trang</h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">Về trang chủ để chọn môn và chuyên mục thực hành.</p>
      <Link prefetch={false} href="/" className="btn btn-primary mt-6">Về trang chủ</Link>
    </div>
  );
}
