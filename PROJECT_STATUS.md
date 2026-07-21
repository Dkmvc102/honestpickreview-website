# HonestPickReview.com — Project Status

_Last updated: 2026-07-21_

## 1. Đã hoàn thành

### Hạ tầng & Deploy
- Site dựng bằng **Astro** (static output), deploy lên **Tenten.vn Vibe Code Hosting** (Plesk-based).
- Chuyển từ deploy qua **Upload ZIP** sang **Git Repo** (GitHub) sau nhiều lần ZIP deploy fail không rõ nguyên nhân.
- Repo GitHub: `https://github.com/Dkmvc102/honestpickreview-website` — **Public** (không phải Private).
- File khởi động Node.js đổi tên từ `app.js` → **`server.mjs`** (xem mục Quyết định quan trọng bên dưới).
- `package.json` script `start`: `node server.mjs`.
- Google Analytics (GA4) đã gắn — Measurement ID `G-7T04BGMSNB`. Privacy Policy đã cập nhật để công khai việc dùng GA4.
- `.claude/rules/` đã tách từ `AGENTS.md` thành 2 file: `dev-server.md`, `astro-documentation.md` (AGENTS.md giữ nguyên, không xóa).

### Cấu trúc nội dung (Content Collections)
- 4 collection: `reviews`, `bestof`, `blog`, `compare`.
- Danh mục (categories) hiện có 11: Home & Kitchen, Electronics, Fitness & Outdoor, Tools & DIY, Baby & Kids, Beauty & Personal Care, Health & Supplements, Fashion & Accessories, Automotive, Pet Care, Hobbies & Entertainment — mở rộng dần theo thực tế sản phẩm nghiên cứu, không định sẵn từ đầu.

### Nội dung review từ Google Sheet (50 dự án đầu)
- **22/50 brand đã có bài review** (dạng `reviews` collection — có rating/pros/cons/specs, không phải blog chung chung).
- **1 brand bị bỏ qua có chủ đích**: ETHA Natural Botanicals (bán kratom — rủi ro pháp lý, bị cấm ở nhiều bang Mỹ/quốc gia).
- **9/22 bài đã viết lại theo tiêu chí mới** (`tieu_chi_viet_bai_review_san_pham.txt` — bridge page/landing page affiliate): NutriQ, JenniBag, Bro Glo, Double Oak Essentials, Bond & Mason, SnoreLessNow, MicroVitamin, EcoWise Wellness, HBD.
- **13/22 bài còn lại vẫn ở dạng cũ** (chưa có social proof thật/Trustpilot, chưa đủ 1000-1500 từ): Slacker, Baking Steel, FITCAMX, TOLEVITA, Sunstone, Royal Clips, Express Garage Doors, Desert Does It (batch 2) + TheLibraryCloset, Stitchingcover, Healflux, Organics Nature, MIRANEST (batch 3).
- **28/50 brand trong sheet chưa được viết** (từ Baking Steel trở về batch tiếp theo trong danh sách gốc — thực ra đã cover tới brand #24 Hobby Shopy sẽ là điểm bắt đầu tiếp theo, xem mục Bước tiếp theo).
- **Link affiliate**: đã cập nhật link ref thật (`sca_ref=...`) từ `Link Ref.txt` cho 16 bài (không tìm thấy ref cho: Slacker, Baking Steel, Desert Does It, HBD — 3 brand đầu vẫn dùng link thường, HBD dùng link thường vì không có trong file ref).

## 2. Trạng thái từng phần

| Phần | Trạng thái |
|---|---|
| Deploy/hosting (Tenten + Git) | ✅ Hoạt động ổn định |
| GA4 tracking | ✅ Đã gắn, chờ xác nhận nhận dữ liệu |
| Danh mục (categories) | ✅ Đủ dùng cho 22 brand hiện tại, sẽ phát sinh thêm |
| 9 bài theo tiêu chí mới | ✅ Hoàn chỉnh (research thật, 1000+ từ, CTA x3, link ref) |
| 13 bài còn ở dạng cũ | ⚠️ Cần viết lại theo tiêu chí mới |
| 28 brand chưa viết | ⏳ Chưa bắt đầu |
| Ảnh sản phẩm | ⚠️ Đa số dùng ảnh tải từ site gốc (1-2 ảnh/bài), không phải ảnh tự chụp |
| Banner quảng bá trang chủ | ❌ Chưa làm (mới chỉnh gradient nền hero, chưa có banner riêng) |
| Affiliate disclosure banner (toàn site) | ❌ Đang ẩn theo yêu cầu người dùng, dù nhiều bài đã có link affiliate thật |

## 3. Bước tiếp theo

1. **Viết lại 13 bài batch 2 + batch 3** theo tiêu chí mới (research Trustpilot/social proof thật, 1000-1500 từ, 3 CTA, link ref nếu có trong `Link Ref.txt`).
2. **Tiếp tục viết brand #24 trở đi** trong Google Sheet (Hobby Shopy, ANCEL, lubluelu, Cottonique, DTWOOO, Canadian Protein, Octopied Mind, CANMAKEUSA, Gaucho Ninja, Old Time Sports, Aviationtag... — sheet có tổng ~90+ dòng, mới duyệt 50 dòng đầu).
3. Cân nhắc lại **affiliate disclosure banner** trước khi site có nhiều bài chứa link affiliate thật hơn — hiện đang ẩn toàn site theo yêu cầu, nhưng đây là rủi ro tuân thủ cần theo dõi.
4. Cân nhắc thêm banner quảng bá riêng ở trang chủ nếu người dùng vẫn muốn (đã hỏi trước đó, chưa chốt thiết kế).
5. Dò lại 16 bài đã gắn link ref — xác nhận link hoạt động đúng (không bị lỗi 404/expired) trước khi traffic thật vào site.

## 4. Quyết định quan trọng & lý do

- **Đổi `app.js` → `server.mjs`**: Tenten dùng 1 file `app.js` làm launcher/control-wrapper nội bộ (chứa logic Start/Stop/Restart qua `.deploy-state`) và **luôn ghi đè file này mỗi lần Đồng bộ**, mặc định tìm code thật ở `server.mjs`. Đặt code thật trong `app.js` khiến nó liên tục bị ghi đè và mất tác dụng — đổi tên khớp đúng quy ước của Tenten là cách sửa triệt để, không phải hack tạm.
- **Chuyển ZIP deploy → Git deploy**: ZIP deploy liên tục fail (permission lỗi trên thư mục có ký tự đặc biệt như `[category]`, symlink không tương thích khi giải nén trên Linux). Git deploy ổn định hơn và cho phép cập nhật nội dung nhanh hơn (không cần zip/upload thủ công mỗi lần).
- **Repo GitHub để Public thay vì Private**: Private repo yêu cầu xác thực lại qua GitHub Device Flow **mỗi lần** bấm Đồng bộ trên Tenten — gây phiền hà lặp lại. Đánh đổi: code (bao gồm nội dung bài viết) công khai, nhưng không có secret/credential nào bị lộ (đã dọn sạch trước khi push).
- **Bỏ qua ETHA Natural Botanicals (kratom)**: rủi ro pháp lý thật (bị cấm ở nhiều bang Mỹ, cảnh báo an toàn từ FDA) — quyết định của người dùng sau khi được tư vấn.
- **Không ép rating ≥ 4 sao, không bịa số liệu Trustpilot**: người dùng ban đầu muốn vậy để tăng chuyển đổi, nhưng bị từ chối vì đây là hành vi quảng cáo sai sự thật, rủi ro pháp lý (luật EU/Đức) và rủi ro bị mạng affiliate khóa tài khoản. Thống nhất phương án trung dung: rating phản ánh đúng dữ liệu thật tìm được, không đào sâu tiêu cực, có thể bỏ qua **con số Trustpilot cụ thể** nếu quá thấp nhưng vẫn giữ mục Cons trung thực (nhẹ nhàng, không nghiêm trọng).
- **EcoWise Wellness — nêu rõ cáo buộc lab test 0% creatine**: đây là cáo buộc gian lận thành phần (khác với phàn nàn dịch vụ thông thường), nên dù người dùng ban đầu muốn viết tích cực và bỏ qua, mình vẫn giữ nguyên tắc nêu trung lập trong Cons + khuyên người đọc tự kiểm tra Certificate of Analysis — để tránh site quảng bá sản phẩm có nghi vấn gian lận mà không cảnh báo.
- **Ẩn affiliate disclosure banner toàn site**: theo yêu cầu người dùng dù nhiều bài đã có link affiliate thật — đã cảnh báo rủi ro tuân thủ, người dùng chấp nhận. Cần xem lại trước khi site có traffic lớn.
