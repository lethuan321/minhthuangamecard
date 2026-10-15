1. Mở `index.html` trực tiếp hoặc truy cập `http://localhost/MinhThuanGameCard/` khi Apache/XAMPP đang chạy; không cần cài dependencies hay build.
2. Sửa `CONFIG` và `CARDS` ở đầu `script.js` để đổi liên hệ, tài khoản nhận tiền, nội dung, mẫu đơn, mệnh giá và giá bán; bố cục và nhãn giao diện ở `index.html`.
3. TODO: điền `CONFIG.payment.holder` bằng tên người nhận đã xác nhận; khi để trống, trang yêu cầu khách kiểm tra với shop.
4. TODO: điền `CONFIG.siteUrl` (HTTPS) và `CONFIG.socialImage` nếu có ảnh chia sẻ được phép sử dụng; canonical chỉ xuất hiện khi có URL thật.
5. TODO: xác nhận ưu đãi mua nhiều, giờ hỗ trợ, thời gian giao mã và chính sách xử lý/hoàn tiền; hiện không hứa giao tự động hoặc phục vụ 24/7.
6. Facebook dùng link được cung cấp: trang sao chép đơn rồi mở Facebook; khách tự dán và gửi. Giỏ đơn lưu theo phiên trình duyệt, không có backend hay xác minh thanh toán.
7. Deploy: GitHub Pages dùng thư mục gốc; Netlify/Vercel chọn static, không build, publish/output `.`; cần Internet cho Google Fonts, Lenis, GSAP và Three.js, chức năng giỏ vẫn chạy nếu CDN lỗi.
8. Thêm `?debug` để xem Lenis/3D/FPS; DevTools: `window.lenis` phải là object. Giảm chuyển động giữ Lenis 0,6s và cảnh 3D tĩnh; `QA.md` ghi kiểm thử và giới hạn file://, `brand-spec.md` ghi thiết kế.
