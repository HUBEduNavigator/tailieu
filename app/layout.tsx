import type { Metadata, Viewport } from "next";
import "@fontsource/be-vietnam-pro/latin-400.css";
import "@fontsource/be-vietnam-pro/latin-ext-400.css";
import "@fontsource/be-vietnam-pro/vietnamese-400.css";
import "@fontsource/be-vietnam-pro/latin-600.css";
import "@fontsource/be-vietnam-pro/latin-ext-600.css";
import "@fontsource/be-vietnam-pro/vietnamese-600.css";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-ext-600.css";
import "@fontsource/fraunces/vietnamese-600.css";
import "@fontsource/noto-sans/latin-400.css";
import "@fontsource/noto-sans/latin-ext-400.css";
import "@fontsource/noto-sans/greek-400.css";
import "@fontsource/noto-sans/latin-600.css";
import "@fontsource/noto-sans/latin-ext-600.css";
import "@fontsource/noto-sans/greek-600.css";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "HUB EduNavigator | Cẩm nang làm bài thi";
const description =
  "Cẩm nang Toán, Ngữ văn và Tiếng Anh giúp học sinh nhận diện dấu hiệu trong đề thi, chọn cách làm và kiểm tra giới hạn áp dụng.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hubedunavigator.github.io/tailieu/"),
  title: { default: title, template: "%s | HUB EduNavigator – Học liệu" },
  description,
  openGraph: { title, description, type: "website", locale: "vi_VN", siteName: "HUB EduNavigator" },
};

export const viewport: Viewport = { themeColor: "#182b45", width: "device-width", initialScale: 1 };

const themeScript = `try{var t=localStorage.getItem('tailieu-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="site-body">
        <a href="#main" className="skip">Bỏ qua để tới nội dung chính</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
