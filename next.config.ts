import type { NextConfig } from "next";

/**
 * Đường dẫn con (subpath) của GitHub Pages: https://hubedunavigator.github.io/tailieu/
 * - Production (npm run build): mặc định "/tailieu".
 * - Dev cục bộ (npm run dev): mặc định "" để chạy ở http://localhost:3000/.
 * - Ghi đè bằng biến NEXT_PUBLIC_BASE_PATH (cho phép giá trị rỗng, xem script "preview").
 */
const override = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = override !== undefined ? override : process.env.NODE_ENV === "production" ? "/tailieu" : "";

const config: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default config;
