import type { LearningUnit } from "@/lib/schema";
import { unit as toan06 } from "./toan/06/phep-tinh-so-nguyen";
import { unit as toan06Ch } from "./toan/06/ucln-bcnn-bai-toan-thuc-te";
import { unit as toan09 } from "./toan/09/ptb2-viete-tham-so";
import { unit as toan12 } from "./toan/12/cuc-tri-ham-bac-ba";
import { unit as van06 } from "./van/06/doc-hieu-van-ban-truyen";
import { unit as van12 } from "./van/12/nlxh-tai-va-tam";
import { unit as anh06 } from "./anh/06/pron-i-ngan-dai";
import { unit as anh06Gram } from "./anh/06/hien-tai-don-trang-tu-tan-suat-duoi-s-es";
import { unit as anh12 } from "./anh/12/doc-dien-thong-bao";

/**
 * ĐĂNG KÝ ĐƠN VỊ HỌC LIỆU.
 * Thêm học liệu mới = tạo tệp dữ liệu trong content/<môn>/<lớp>/, import vào đây,
 * rồi ghi vào CONTENT_REGISTRY.json. Không cần sửa giao diện.
 */
export const UNITS: LearningUnit[] = [toan06, toan06Ch, toan09, toan12, van06, van12, anh06, anh06Gram, anh12];
