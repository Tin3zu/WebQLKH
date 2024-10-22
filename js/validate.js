

// Xử lý form đăng nhập
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();  // Ngăn hành động submit mặc định

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "admin123") {
        window.location.href = "/sua/baocao.html";
    } else if (email === "team@example.com" && password === "team123") {
        window.location.href = "/sua/sodienthoai/sodienthoai.html";
    } else {
        alert("Sai thông tin đăng nhập, vui lòng thử lại");
    }
});

// Xử lý form quên mật khẩu
document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (e) {
    e.preventDefault();  // Ngăn hành động submit mặc định

    const email = document.getElementById('email').value;

    // Kiểm tra email hợp lệ
    if (email === "admin@example.com"||email === "team@example.com") {
        // Hiển thị thông báo thành công
        document.getElementById('successMessage').style.display = 'block';

        // Sau một vài giây, chuyển đến trang nhập mã xác nhận
        setTimeout(() => {
            window.location.href = 'nhapmaxacnhan.html';  // Chuyển đến trang nhập mã
        }, 2000);
    } else {
        alert("Email không hợp lệ. Vui lòng thử lại.");
    }
});

// Xử lý form nhập mã xác nhận
document.getElementById('verifyCodeForm')?.addEventListener('submit', function (e) {
    e.preventDefault();  // Ngăn hành động submit mặc định

    const verificationCode = document.getElementById('verificationCode').value;

    // Giả lập kiểm tra mã xác nhận
    if (verificationCode === "123456") {
        document.getElementById('successMessage').style.display = 'block';

        // Sau một vài giây, chuyển đến trang nhập mã xác nhận
        setTimeout(() => {
            window.location.href = 'datmatkhau.html';  // Chuyển đến trang nhập mã
        }, 2000);
    } else {
        alert("Mã xác nhận không hợp lệ. Vui lòng thử lại.");
    }
});

// Xử lý form đặt lại mật khẩu
document.getElementById('resetPasswordForm')?.addEventListener('submit', function (e) {
    e.preventDefault();  // Ngăn hành động submit mặc định

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Kiểm tra mật khẩu có khớp hay không
    if (newPassword === confirmPassword) {
        // Hiển thị thông báo thành công
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';

        // Sau 2 giây, chuyển hướng người dùng về trang đăng nhập
        setTimeout(() => {
            window.location.href = 'dangnhap.html';  // Chuyển hướng tới trang đăng nhập
        }, 2000);
    } else {
        // Hiển thị lỗi nếu mật khẩu không khớp
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }
});