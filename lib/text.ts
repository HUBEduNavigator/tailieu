/** Chuẩn hóa tiếng Việt để tìm kiếm: bỏ dấu, hạ chữ thường, đ → d. */
export function normalizeVi(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Tạo slug ASCII từ chuỗi tiếng Việt. */
export function slugify(input: string): string {
  return normalizeVi(input)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Đường dẫn trang chi tiết (slug = id viết thường). */
export const unitSlug = (id: string) => id.toLowerCase();
export const unitHref = (id: string) => `/bai/${unitSlug(id)}/`;

/** Tách chuỗi đã chuẩn hóa thành các từ (chữ và số), dùng cho tìm kiếm theo đầu từ. */
export function words(input: string): string[] {
  return normalizeVi(input).split(/[^a-z0-9]+/).filter(Boolean);
}
