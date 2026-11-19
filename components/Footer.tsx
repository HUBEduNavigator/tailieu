import Link from "next/link";
import { HOME_URL } from "./Header";

export function Footer() {
  return (
    <footer className="mt-16 bg-navy px-5 pb-12 pt-12 text-white">
      <div className="container-x grid gap-8 !px-0 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">HUB EduNavigator</p>
          <p className="mt-2 text-white/80">Định hướng tự học, bứt phá tương lai.</p>
          <p className="mt-3 text-white/70">Kho học liệu tự học và ngân hàng dạng bài cho học sinh lớp 6–12, theo chương trình GDPT 2018.</p>
        </div>
        <div>
          <p className="font-semibold">Liên kết</p>
          <ul className="mt-3 space-y-2 text-white/90">
            <li><a className="underline underline-offset-4" href={HOME_URL}>Trang chủ HUB EduNavigator</a></li>
            <li><Link className="underline underline-offset-4" href="/gioi-thieu/">Về kho học liệu và cách kiểm chứng</Link></li>
            <li><Link className="underline underline-offset-4" href="/hoc-lieu/">Tra cứu dạng bài</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Quyền riêng tư</p>
          <p className="mt-3 text-white/80">
            Trang này không có máy chủ và không thu thập thông tin cá nhân. Lựa chọn sáng/tối được lưu trên chính trình duyệt của bạn.
          </p>
        </div>
      </div>
      <p className="container-x mt-8 border-t border-white/20 !px-0 pt-5 text-sm text-white/70">© 2026 HUB EduNavigator</p>
    </footer>
  );
}
