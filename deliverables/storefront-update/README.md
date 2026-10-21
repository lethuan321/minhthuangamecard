1. Mở `index.html` trực tiếp hoặc truy cập `http://localhost/MinhThuanGameCard/` khi Apache/XAMPP đang chạy; không cần cài dependencies hay build.
2. Sửa `CONFIG` và `CARDS` ở đầu `script.js` để đổi liên hệ, tài khoản nhận tiền, nội dung, mẫu đơn, mệnh giá và giá bán; bố cục và nhãn giao diện ở `index.html`.
3. TODO: điền `CONFIG.payment.holder` bằng tên người nhận đã xác nhận; khi để trống, trang yêu cầu khách kiểm tra với shop.
4. TODO: điền `CONFIG.siteUrl` (HTTPS) và `CONFIG.socialImage` nếu có ảnh chia sẻ được phép sử dụng; canonical chỉ xuất hiện khi có URL thật.
5. TODO: xác nhận ưu đãi mua nhiều, giờ hỗ trợ, thời gian giao mã và chính sách xử lý/hoàn tiền; hiện không hứa giao tự động hoặc phục vụ 24/7.
6. Facebook dùng link được cung cấp: trang sao chép đơn rồi mở Facebook; khách tự dán và gửi. Giỏ đơn lưu theo phiên trình duyệt, không có backend hay xác minh thanh toán.
7. Deploy: GitHub Pages dùng thư mục gốc; Netlify/Vercel chọn static, không build, publish/output `.`; cần Internet cho Google Fonts, Lenis, GSAP và Three.js, chức năng giỏ vẫn chạy nếu CDN lỗi.
8. Thêm `?debug` để xem Lenis/3D/FPS; DevTools: `window.lenis` phải là object. Giảm chuyển động giữ Lenis 0,6s và cảnh 3D tĩnh; `QA.md` ghi kiểm thử và giới hạn file://, `brand-spec.md` ghi thiết kế.


## Optional SePay QR checkout

`CONFIG.sepay.enabled` is `false` by default. Link the configured bank account in SePay before enabling it. Eligible purchases use a public QR image; smaller denominations and mixed carts retain the Facebook flow. Confirmation remains manual via the customer's bill. No browser-side check marks a transfer paid.

A future serverless endpoint such as `/api/sepay-webhook` must:

1. Verify SePay's API-key authentication header using a secret held only on the server; reject unauthorized callbacks.
2. Match the received orderCode and exact integer amount against a pending order stored by the server. A production checkout must first create that pending order server-side.
3. Handle duplicate callbacks idempotently, then mark the matched order paid. Do not trust browser totals or a customer's screenshot as automatic confirmation.

Keep all authentication credentials and webhook verification on the server. The current frontend does not implement that endpoint or automatic fulfillment.
