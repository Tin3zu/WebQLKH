document.querySelector('.sidebar-toggle')?.addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarIcon = document.querySelector('.sidebar-icon');
    sidebar.classList.toggle('show');
    sidebarIcon.classList.toggle('show');
});

// Toggle search bar visibility on mobile
document.querySelector('.btn-outline-custom').addEventListener('click', function (e) {
    const form = document.querySelector('.navbar form');
    form.classList.toggle('search-active');
    e.preventDefault();
});

document.getElementById('listcustomer1')?.addEventListener('click', function () {
    
    window.location.href = '/Xem/lapdanhsach.html';
});


document.getElementById('luuQuanLy')?.addEventListener('click', function () {
    const tenQuanLy = document.getElementById('tenQuanLy').value;
    const vaiTro = document.getElementById('vaiTro').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const email = document.getElementById('email').value;
    const taiKhoan = document.getElementById('taiKhoan').value;
    const matKhau = document.getElementById('matKhau').value;
    const sanHoatDong = document.getElementById('sanHoatDong').value;

    if (tenQuanLy && vaiTro && soDienThoai && email && taiKhoan && matKhau && sanHoatDong) {
        alert("Quản lý đã được lưu thành công!");
        window.location.href = '/Sua/profile/adminprofile.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('suaQuanLy')?.addEventListener('click', function () {
    
    window.location.href = '/Sua/taikhoan/suaQuanLy.html';
});

document.getElementById('suaQL')?.addEventListener('click', function () {
    
    window.location.href = '/Sua/taikhoan/suaQuanLy.html';
});

document.getElementById('themQuanLy')?.addEventListener('click', function () {
    const tenQuanLy = document.getElementById('tenQuanLy').value;
    const vaiTro = document.getElementById('vaiTro').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const email = document.getElementById('email').value;
    const taiKhoan = document.getElementById('taiKhoan').value;
    const matKhau = document.getElementById('matKhau').value;
    const sanHoatDong = document.getElementById('sanHoatDong').value;

    if (tenQuanLy && vaiTro && soDienThoai && email && taiKhoan && matKhau && sanHoatDong) {
        alert("Thông tin quản lý đã được lưu thành công!");
        window.location.href = '/Sua/taikhoan/quanly.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('confirmDeleteManager')?.addEventListener('click', function () {
    alert('Quản lý đã được xóa thành công.');
    window.location.href = '/Sua/taikhoan/quanly.html';
});


document.getElementById('luuNhanVienNV')?.addEventListener('click', function () {
    const tenNhanVien = document.getElementById('tenNhanVien').value;
    const vaiTro = document.getElementById('vaiTro').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const email = document.getElementById('email').value;
    const ngayVaoLam = document.getElementById('ngayVaoLam').value;
    const taiKhoan = document.getElementById('taiKhoan').value;
    const matKhau = document.getElementById('matKhau').value;
    const sanHoatDong = document.getElementById('sanHoatDong').value;

    if (tenNhanVien && vaiTro && soDienThoai && email && ngayVaoLam && taiKhoan && matKhau && sanHoatDong) {
        alert("Nhân viên đã được lưu thành công!");
        window.location.href = '/Sua/profile/teamprofile.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});
document.getElementById('luuNhanVien')?.addEventListener('click', function () {
    const tenNhanVien = document.getElementById('tenNhanVien').value;
    const vaiTro = document.getElementById('vaiTro').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const email = document.getElementById('email').value;
    const ngayVaoLam = document.getElementById('ngayVaoLam').value;
    const taiKhoan = document.getElementById('taiKhoan').value;
    const matKhau = document.getElementById('matKhau').value;
    const sanHoatDong = document.getElementById('sanHoatDong').value;

    if (tenNhanVien && vaiTro && soDienThoai && email && ngayVaoLam && taiKhoan && matKhau && sanHoatDong) {
        alert("Nhân viên đã được lưu thành công!");
        window.location.href = '/Sua/taikhoan/nhanvien.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('suaNV')?.addEventListener('click', function () {
    
    window.location.href = '/Sua/taikhoan/suaNhanVienNV.html';
});
document.getElementById('suaNhanVien')?.addEventListener('click', function () {
    
    window.location.href = '/Sua/taikhoan/suanhanvien.html';
});

document.getElementById('themNhanVien')?.addEventListener('click', function () {
    const tenNhanVien = document.getElementById('tenNhanVien').value;
    const vaiTro = document.getElementById('vaiTro').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const email = document.getElementById('email').value;
    const ngayVaoLam = document.getElementById('ngayVaoLam').value;
    const taiKhoan = document.getElementById('taiKhoan').value;
    const matKhau = document.getElementById('matKhau').value;
    const sanHoatDong = document.getElementById('sanHoatDong').value;

    if (tenNhanVien && vaiTro && soDienThoai && email && ngayVaoLam && taiKhoan && matKhau && sanHoatDong) {
        alert("Thông tin nhân viên đã được lưu thành công!");
        window.location.href = '/Sua/taikhoan/nhanvien.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});



document.getElementById('confirmDeleteEmployee')?.addEventListener('click', function () {
    alert('Nhân viên đã được xóa thành công.');
    window.location.href = '/Sua/taikhoan/nhanvien.html';
});

document.getElementById('luuKhoTriThuc')?.addEventListener('click', function () {
    const tieuDe = document.getElementById('tieuDe').value;
    const noiDung = document.getElementById('noiDung').value;
    const ngayTao = document.getElementById('ngayTao').value;
    const tacGia = document.getElementById('tacGia').value;
    const ngayCapNhat = document.getElementById('ngayCapNhat').value;
    const tuKhoa = document.getElementById('tuKhoa').value;

    if (tieuDe && noiDung && ngayTao && tacGia && ngayCapNhat && tuKhoa) {
        alert("Thông tin kho tri thức đã được lưu thành công!");
        window.location.href = '/Sua/khotrithuc/khotrithuc.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('suaBaiViet')?.addEventListener('click', function () {
    
    window.location.href = '/Sua/khotrithuc/suakhotrithuc.html';
});
document.getElementById('applyKnowledgeFilter')?.addEventListener('click', function () {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var keyword = document.getElementById('keyword').value;
    var creationDateStart = document.getElementById('creationDateStart').value;
    var creationDateEnd = document.getElementById('creationDateEnd').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc kho tri thức!');
    window.location.href = '/Sua/khotrithuc/khotrithuc.html';
    
    // Đóng modal sau khi áp dụng lọc
    var filterKnowledgeModal = bootstrap.Modal.getInstance(document.getElementById('filterKnowledgeModal'));
    filterKnowledgeModal.hide();
});

document.getElementById('themKhoTriThuc')?.addEventListener('click', function () {
    const tieuDe = document.getElementById('tieuDe').value;
    const noiDung = document.getElementById('noiDung').value;
    const ngayTao = document.getElementById('ngayTao').value;
    const tacGia = document.getElementById('tacGia').value;
    const ngayCapNhat = document.getElementById('ngayCapNhat').value;
    const tuKhoa = document.getElementById('tuKhoa').value;

    if (tieuDe && noiDung && ngayTao && tacGia && ngayCapNhat && tuKhoa) {
        alert("Thông tin kho tri thức đã được lưu thành công!");
        window.location.href = '/Sua/khotrithuc/khotrithuc.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('confirmDeleteKnowledge')?.addEventListener('click', function () {
    alert('Thông tin đã được xóa thành công.');
    window.location.href = '/Sua/khotrithuc/khotrithuc.html';
}); 

document.getElementById('applyOfferNV')?.addEventListener('click', function () {
    alert('Đã lập danh sách khách hàng nằm trong ưu đãi');
    window.location.href = '/Xem/lapdanhsach.html';
});

document.getElementById('applyOffer')?.addEventListener('click', function () {
    alert('Đã lập danh sách khách hàng nằm trong ưu đãi');
    window.location.href = '/Sua/uudai/lapdanhsach.html';
});

document.getElementById('luuUuDai')?.addEventListener('click', function () {
    const tenUuDai = document.getElementById('tenUuDai').value;
    const loaiUuDai = document.getElementById('loaiUuDai').value;
    const tyLeGiamLaiSuat = document.getElementById('tyLeGiamLaiSuat').value;
    const ngayBatDau = document.getElementById('ngayBatDau').value;
    const ngayKetThuc = document.getElementById('ngayKetThuc').value;
    const dieuKienApDung = document.getElementById('dieuKienApDung').value;
    const moTa = document.getElementById('moTa').value;

    if (tenUuDai && loaiUuDai && tyLeGiamLaiSuat && ngayBatDau && ngayKetThuc && dieuKienApDung && moTa) {
        alert("Ưu đãi đã được lưu thành công!");
        window.location.href = '/Sua/uudai/uudai.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('applyOfferFilter')?.addEventListener('click', function () {
    var offerName = document.getElementById('offerName').value;
    var offerType = document.getElementById('offerType').value;
    var discountRateMin = document.getElementById('discountRateMin').value;
    var discountRateMax = document.getElementById('discountRateMax').value;
    var offerStartDate = document.getElementById('offerStartDate').value;
    var offerEndDate = document.getElementById('offerEndDate').value;
    var applicationCondition = document.getElementById('applicationCondition').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc ưu đãi!');
    window.location.href = '/Sua/uudai/uudai.html';
    
    // Đóng modal sau khi áp dụng lọc
    var filterOfferModal = bootstrap.Modal.getInstance(document.getElementById('filterOfferModal'));
    filterOfferModal.hide();
});


document.getElementById('themUuDai')?.addEventListener('click', function () {
    const tenUuDai = document.getElementById('tenUuDai').value;
    const loaiUuDai = document.getElementById('loaiUuDai').value;
    const tyLeGiamLaiSuat = document.getElementById('tyLeGiamLaiSuat').value;
    const ngayBatDau = document.getElementById('ngayBatDau').value;
    const ngayKetThuc = document.getElementById('ngayKetThuc').value;
    const dieuKienApDung = document.getElementById('dieuKienApDung').value;
    const moTa = document.getElementById('moTa').value;

    if (tenUuDai && loaiUuDai && tyLeGiamLaiSuat && ngayBatDau && ngayKetThuc && dieuKienApDung && moTa) {
        alert("Ưu đãi đã được lưu thành công!");
        window.location.href = '/Sua/uudai/uudai.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('suaUuDai')?.addEventListener('click', function () {

    window.location.href = '/Sua/UuDai/suaUuDai.html';
});

document.getElementById('confirmDeleteOffer')?.addEventListener('click', function () {
    alert('Ưu đãi đã được xóa thành công.');
    window.location.href = '/Sua/uudai/uudai.html';
});

document.getElementById('luuBangLaiSuat')?.addEventListener('click', function () {
    const rateName = document.getElementById('rateName').value;
    const interestRate = document.getElementById('interestRate').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const rateType = document.getElementById('rateType').value;
    const loanMin = document.getElementById('loanMin').value;
    const loanMax = document.getElementById('loanMax').value;
    const applicableObject = document.getElementById('applicableObject').value;
    const description = document.getElementById('description').value;

    if (rateName && interestRate && startDate && endDate && rateType && loanMin && loanMax && applicableObject && description) {
        alert("Bảng lãi suất đã được lưu thành công!");
        window.location.href = '/Sua/banglaisuat/banglaisuat.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});



document.getElementById('applyRateFilter')?.addEventListener('click', function () {
    var rateName = document.getElementById('rateName').value;
    var rateStartDate = document.getElementById('rateStartDate').value;
    var rateEndDate = document.getElementById('rateEndDate').value;
    var rateType = document.getElementById('rateType').value;
    var loanMin = document.getElementById('loanMin').value;
    var loanMax = document.getElementById('loanMax').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc bảng lãi suất!');
    window.location.href = '/Sua/banglaisuat/banglaisuat.html';
    
    // Đóng modal sau khi áp dụng lọc
    var filterRateModal = bootstrap.Modal.getInstance(document.getElementById('filterRateModal'));
    filterRateModal.hide();
});


document.getElementById('themBangLaiSuat')?.addEventListener('click', function () {
    const tenBangLaiSuat = document.getElementById('tenBangLaiSuat').value;
    const laiSuat = document.getElementById('laiSuat').value;
    const ngayBatDau = document.getElementById('ngayBatDau').value;
    const ngayKetThuc = document.getElementById('ngayKetThuc').value;
    const loaiLaiSuat = document.getElementById('loaiLaiSuat').value;
    const soTienVayToiThieu = document.getElementById('soTienVayToiThieu').value;
    const soTienVayToiDa = document.getElementById('soTienVayToiDa').value;
    const doiTuongApDung = document.getElementById('doiTuongApDung').value;
    const moTa = document.getElementById('moTa').value;

    if (tenBangLaiSuat && laiSuat && ngayBatDau && ngayKetThuc && loaiLaiSuat && soTienVayToiThieu && soTienVayToiDa & doiTuongApDung && moTa) {
        alert("Lãi suất đã được lưu thành công!");
        window.location.href = '/Sua/banglaisuat/banglaisuat.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('confirmDeleteRate')?.addEventListener('click', function () {
    alert('Bảng lãi suất đã được xóa thành công.');
    window.location.href = '/Sua/banglaisuat/banglaisuat.html';
});

document.getElementById('suaBangLaiSuat')?.addEventListener('click', function () {

    window.location.href = '/Sua/BangLaiSuat/suaBangLaiSuat.html';
});

document.getElementById('luuThongBao')?.addEventListener('click', function () {
    const notificationName = document.getElementById('notificationName').value;
    const content = document.getElementById('content').value;
    const creationDate = document.getElementById('creationDate').value;
    const status = document.getElementById('status').value;
    const creatorName = document.getElementById('creatorName').value;

    if (notificationName && content && creationDate && status && creatorName) {
        alert("Thông báo đã được lưu thành công!");
        window.location.href = '/Sua/thongbao/thongbao.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('applyNotificationFilter')?.addEventListener('click', function () {
    var notificationName = document.getElementById('notificationName').value;
    var notificationStartDate = document.getElementById('notificationStartDate').value;
    var notificationEndDate = document.getElementById('notificationEndDate').value;
    var notificationStatus = document.getElementById('notificationStatus').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc thông báo!');
    window.location.href = '/Sua/thongbao/thongbao.html';

    // Đóng modal sau khi áp dụng lọc
    var filterNotificationModal = bootstrap.Modal.getInstance(document.getElementById('filterNotificationModal'));
    filterNotificationModal.hide();
});

document.getElementById('themThongBao')?.addEventListener('click', function () {
    const tenThongBao = document.getElementById('tenThongBao').value;
    const noiDung = document.getElementById('noiDung').value;
    const ngayTao = document.getElementById('ngayTao').value;
    const trangThai = document.getElementById('trangThai').value;
    const tenNguoiTao = document.getElementById('tenNguoiTao').value;

    if (tenThongBao && noiDung && ngayTao && trangThai && tenNguoiTao) {
        alert("Thông báo đã được thêm thành công!");
        // Logic xử lý lưu thông tin ở đây, ví dụ gửi dữ liệu lên server
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('confirmDeleteNotification')?.addEventListener('click', function () {
    alert('Thông báo đã được xóa thành công.');
    window.location.href = '/Sua/thongbao/thongbao.html';
});

document.getElementById('suaThongBao')?.addEventListener('click', function () {

    window.location.href = '/Sua/ThongBao/suaThongBao.html';
});

document.getElementById('luuLichHen')?.addEventListener('click', function () {
    const tenKhachHang = document.getElementById('tenKhachHang').value;
    const tenLichHen = document.getElementById('tenLichHen').value;
    const ngayHen = document.getElementById('ngayHen').value;
    const thoiGianHen = document.getElementById('thoiGianHen').value;
    const diaDiem = document.getElementById('diaDiem').value;
    const noiDung = document.getElementById('noiDung').value;
    const ghiChu = document.getElementById('ghiChu').value;
    const trangThai = document.getElementById('trangThai').value;

    if (tenKhachHang && tenLichHen && ngayHen && thoiGianHen && diaDiem && noiDung && trangThai) {
        alert("Lịch hẹn đã được lưu thành công!");
        window.location.href = '/Sua/lichhen/lichhen.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});

document.getElementById('applyAppointmentFilter')?.addEventListener('click', function () {
    var customerName = document.getElementById('customerName').value;
    var appointmentDateStart = document.getElementById('appointmentDateStart').value;
    var appointmentDateEnd = document.getElementById('appointmentDateEnd').value;
    var statusFilter = document.getElementById('statusFilter').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc lịch hẹn!');
    window.location.href = '/Sua/lichhen/lichhen.html';

    // Đóng modal sau khi áp dụng lọc
    var filterAppointmentModal = bootstrap.Modal.getInstance(document.getElementById('filterAppointmentModal'));
    filterAppointmentModal.hide();
});


document.getElementById('themLichHen')?.addEventListener('click', function () {
    const tenKhachHang = document.getElementById('tenKhachHang').value;
    const tenLichHen = document.getElementById('tenLichHen').value;
    const ngayHen = document.getElementById('ngayHen').value;
    const thoiGianHen = document.getElementById('thoiGianHen').value;
    const diaDiem = document.getElementById('diaDiem').value;
    const noiDung = document.getElementById('noiDung').value;
    const ghiChu = document.getElementById('ghiChu').value;
    const trangThai = document.getElementById('trangThai').value;

    if (tenKhachHang && tenLichHen && ngayHen && thoiGianHen && diaDiem && noiDung && trangThai) {
        alert("Lịch hẹn đã được thêm thành công!");
        // Logic xử lý lưu thông tin ở đây, ví dụ gửi dữ liệu lên server
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('confirmDeleteAppointmentBtn')?.addEventListener('click', function () {
    alert('Lịch hẹn đã được xóa thành công.');
    window.location.href = '/Sua/lichhen/lichhen.html';
});


document.getElementById('luuKhoanVay')?.addEventListener('click', function () {
    const loanName = document.getElementById('loanName').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanTerm = document.getElementById('loanTerm').value;
    const startDate = document.getElementById('startDate').value;
    const maturityDate = document.getElementById('maturityDate').value;
    const paymentSchedule = document.getElementById('paymentSchedule').value;
    const customerName = document.getElementById('customerName').value;

    if (loanName && loanAmount && interestRate && loanTerm && startDate && maturityDate && paymentSchedule && customerName) {
        alert("Khoản vay đã được lưu thành công!");
        window.location.href = '/Sua/khoanvay/khoanvay.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('applyLoanFilter')?.addEventListener('click', function () {
    var loanAmountMin = document.getElementById('loanAmountMin').value;
    var loanAmountMax = document.getElementById('loanAmountMax').value;
    var interestRateMin = document.getElementById('interestRateMin').value;
    var interestRateMax = document.getElementById('interestRateMax').value;
    var loanTermMin = document.getElementById('loanTermMin').value;
    var loanTermMax = document.getElementById('loanTermMax').value;
    var maturityDateStart = document.getElementById('maturityDateStart').value;
    var maturityDateEnd = document.getElementById('maturityDateEnd').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc khoản vay!');
    window.location.href = '/Sua/khoanvay/khoanvay.html';

    // Đóng modal sau khi áp dụng lọc
    var filterLoanModal = bootstrap.Modal.getInstance(document.getElementById('filterLoanModal'));
    filterLoanModal.hide();
});


document.getElementById('themKhoanVay')?.addEventListener('click', function () {
    const tenKhoanVay = document.getElementById('tenKhoanVay').value.trim();
    const soTienVay = document.getElementById('soTienVay').value.trim();
    const laiSuat = document.getElementById('laiSuat').value.trim();
    const thoiHanChoVay = document.getElementById('thoiHanChoVay').value.trim();
    const ngayBatDau = document.getElementById('ngayBatDau').value.trim();
    const ngayDaoHan = document.getElementById('ngayDaoHan').value.trim();
    const kyHanTraNo = document.getElementById('kyHanTraNo').value.trim();
    const tenKhachHang = document.getElementById('tenKhachHang').value.trim();

    // Kiểm tra các trường có được điền đầy đủ không
    if (tenKhoanVay && soTienVay && laiSuat && thoiHanChoVay && ngayBatDau && ngayDaoHan && kyHanTraNo && tenKhachHang) {
        alert("Thêm khoản vay thành công!");
        // Thực hiện các hành động cần thiết, ví dụ gửi dữ liệu lên server
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});


document.getElementById('confirmDeleteLoanBtn')?.addEventListener('click', function () {
    alert('Khoản vay đã được xóa thành công.');
    window.location.href = '/Sua/khoanvay/khoanvay.html';
});


document.getElementById('luuNhacNho')?.addEventListener('click', function () {
    const reminderDate = document.getElementById('reminderDate').value;
    const reminderStatus = document.getElementById('reminderStatus').value;
    const reminderNote = document.getElementById('reminderNote').value;
    const reminderType = document.getElementById('reminderType').value;
    const reminderDetail = document.getElementById('reminderDetail').value;

    if (reminderDate && reminderStatus && reminderNote) {
        alert("Nhắc nhở đã được lưu thành công!");
        window.location.href = '/Sua/NhacNho/NhacNho.html';

    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});
document.getElementById('suaLichHen')?.addEventListener('click', function () {

    window.location.href = '/Sua/LichHen/suaLichHen.html';
});

document.getElementById('suaKhoanVay')?.addEventListener('click', function () {

    window.location.href = '/Sua/KhoanVay/suaKhoanVay.html';
});

document.getElementById('suasodienthoai')?.addEventListener('click', function () {

    window.location.href = '/Sua/sodienthoai/suasodienthoai.html';
});

document.getElementById('suaNhacNho')?.addEventListener('click', function () {

    window.location.href = '/Sua/NhacNho/suaNhacNho.html';
});

document.getElementById('suaKhachHang')?.addEventListener('click', function () {

    window.location.href = '/Sua/khachhang/suakhachhang.html';
});

document.getElementById('confirmDeleteReminder')?.addEventListener('click', function () {
    alert('Nhắc nhở đã được xóa thành công.');
    window.location.href = '/Sua/nhacnho/nhacnho.html';
});

document.getElementById('applyReminderFilter')?.addEventListener('click', function () {
    var appointmentOrLoan = document.getElementById('appointmentOrLoan').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var statusFilter = document.getElementById('statusFilter').value;

    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc nhắc nhở!');
    window.location.href = '/Sua/nhacnho/nhacnho.html';

    // Đóng modal sau khi áp dụng lọc
    var filterReminderModal = bootstrap.Modal.getInstance(document.getElementById('filterReminderModal'));
    filterReminderModal.hide();
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('themNhacNho')?.addEventListener('click', function () {
        const ngayThucHien = document.getElementById('ngayThucHien').value;
        const trangThai = document.getElementById('trangThai').value;
        const ghiChu = document.getElementById('ghiChu').value;

        if (ngayThucHien && trangThai && ghiChu) {
            alert("Thêm nhắc nhở thành công!");
            window.location.href = '/Sua/nhacnho/nhacnho.html';
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    });

    document.getElementById('thongTin')?.addEventListener('change', function () {
        const thongTinContainer = document.getElementById('thongTinContainer');
        thongTinContainer.innerHTML = '';  // Xóa nội dung hiện tại

        if (this.value === 'lichHen') {
            thongTinContainer.innerHTML = `
                <div class="mb-3">
                    <label for="lichHen" class="form-label">Thông Tin Lịch Hẹn</label>
                    <input type="text" class="form-control" id="lichHen" placeholder="Nhập thông tin lịch hẹn">
                </div>
            `;
        } else if (this.value === 'khoanVay') {
            thongTinContainer.innerHTML = `
                <div class="mb-3">
                    <label for="khoanVay" class="form-label">Thông Tin Khoản Vay</label>
                    <input type="text" class="form-control" id="khoanVay" placeholder="Nhập thông tin khoản vay">
                </div>
            `;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('xacNhanXuatBaoCao')?.addEventListener('click', function () {
        var reportSelect = document.getElementById('reportSelect').value.trim();

        if (reportSelect === '') {
            alert('Vui lòng chọn báo cáo trước khi xuất.');
        } else {
            if (confirm('Bạn có chắc chắn muốn xuất báo cáo này không?')) {
                // Thực hiện hành động xuất báo cáo
                alert('Xuất Báo Cáo thành công');
                // Hệ thống lưu báo cáo về máy tính quản lý - Giả định việc lưu báo cáo đã được thực hiện
                console.log('Báo cáo đã được xuất:', reportSelect);

                // Đóng modal sau khi xuất thành công
                var exportReportModal = document.getElementById('exportReportModal');
                var modal = bootstrap.Modal.getInstance(exportReportModal);
                modal.hide();
            } else {
                // Thông báo hủy xuất báo cáo
                alert('Hủy xuất Báo Cáo thành công');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('themBaoCao')?.addEventListener('click', function () {
        // Lấy giá trị từ các input
        var tenBaoCao = document.getElementById('tenBaoCao').value.trim();
        var loaiBieuDo = document.getElementById('loaiBieuDo').value.trim();
        var ngayTaoBaoCao = document.getElementById('ngayTaoBaoCao').value.trim();

        // Lấy tất cả các giá trị tham số
        var thamSoValues = [];
        document.querySelectorAll('#thamSoContainer select').forEach(select => {
            thamSoValues.push(select.value.trim());
        });

        // Kiểm tra các trường có được điền đầy đủ không
        if (tenBaoCao === '' || loaiBieuDo === '' || ngayTaoBaoCao === '') {
            alert('Vui lòng điền đầy đủ thông tin trước khi thêm.');
        } else {
            // Thực hiện hành động thêm báo cáo
            alert('Thêm Báo Cáo thành công');
            console.log({
                tenBaoCao,
                loaiBieuDo,
                thamSoValues,
                ngayTaoBaoCao
            });
            // Đóng modal sau khi thêm thành công
            var addReportModal = document.getElementById('addReportModal');
            var modal = bootstrap.Modal.getInstance(addReportModal);
            modal.hide();

        }
    });

    document.getElementById('themThamSo')?.addEventListener('click', function () {
        var newThamSo = document.createElement('select');
        newThamSo.className = 'form-control mt-2';
        newThamSo.innerHTML = `
            <option value="">Chọn tham số</option>
            <option value="parameter1">Tham số 1</option>
            <option value="parameter2">Tham số 2</option>
        `;
        document.getElementById('thamSoContainer').appendChild(newThamSo);
    });
});




// Lắng nghe sự kiện click vào biểu tượng thông báo
document.querySelectorAll('.notification-icon')?.forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        const popup = this.nextElementSibling; // Tìm popup kế bên
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';

        // Đóng popup của nhắc nhở nếu đang mở
        document.querySelectorAll('.reminder-icon + .notification-popup').forEach(reminderPopup => {
            reminderPopup.style.display = 'none';
        });
    });
});
// Lắng nghe sự kiện click vào biểu tượng nhắc nhở
document.querySelectorAll('.reminder-icon')?.forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        const popup = this.nextElementSibling; // Tìm popup kế bên
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';

        // Đóng popup của thông báo nếu đang mở
        document.querySelectorAll('.notification-icon + .notification-popup').forEach(notificationPopup => {
            notificationPopup.style.display = 'none';
        });
    });
});

// Đóng pop-up khi nhấn ra ngoài
window.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-link-bar') && !event.target.closest('.notification-popup')) {
        document.querySelectorAll('.notification-popup').forEach(popup => {
            popup.style.display = 'none';
        });
    }
});

// Lắng nghe sự kiện click cho nút toggle
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidebar-toggle')?.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.full-sidebar').forEach(fullSidebar => {
                const iconSidebar = document.querySelector('.icon-sidebar');
                const mainContent = document.querySelector('.main-content');

                if (fullSidebar.classList.contains('collapsed')) {
                    fullSidebar.classList.remove('collapsed');
                    iconSidebar.classList.remove('show');
                    mainContent.classList.remove('expanded');
                } else {
                    fullSidebar.classList.add('collapsed');
                    iconSidebar.classList.add('show');
                    mainContent.classList.add('expanded');
                }
            });
        });
    });
});

document.getElementById('listcustomer')?.addEventListener('click', function () {

    window.location.href = '/Sua/uudai/lapdanhsach.html';
});
document.getElementById('luuthongtin')?.addEventListener('click', function () {
    // Lấy giá trị từ các trường
    var customerName = document.getElementById('customerName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var salary = document.getElementById('salary').value.trim();
    var companyName = document.getElementById('companyName').value.trim();
    var companyGroup = document.getElementById('companyGroup').value.trim();
    var status = document.getElementById('status').value;
    var firstCallDate = document.getElementById('firstCallDate').value;
    var lastCallDate = document.getElementById('lastCallDate').value;
    var birthDate = document.getElementById('birthDate').value;
    var note = document.getElementById('note').value.trim();

    // Kiểm tra xem các trường có được điền đầy đủ hay không
    if (!customerName || !phoneNumber || !salary || !companyName || !companyGroup || !status || !firstCallDate || !lastCallDate || !birthDate || !note) {
        alert('Vui lòng điền đầy đủ tất cả các thông tin.');
    } else {

        alert('Thông tin đã được lưu thành công.');
        window.location.href = '/Sua/khachhang/khachhang.html';
    }
});

document.getElementById('applyFilter')?.addEventListener('click', function () {
    // Hiển thị thông báo khi áp dụng lọc
    alert('Đã áp dụng bộ lọc!');
    window.location.href = '/Sua/khachhang/khachhang.html';

    // Đóng modal sau khi áp dụng lọc
    var filterModal = new bootstrap.Modal(document.getElementById('filterModal'));
    filterModal.hide();
});


document.getElementById('themhhachhang')?.addEventListener('click', function () {

    const tenKhachHang = document.getElementById('tenKhachHang').value;
    const soDienThoai = document.getElementById('soDienThoai').value;
    const luong = document.getElementById('luong').value;
    const tenCongTy = document.getElementById('tenCongTy').value;
    const nhomCongTy = document.getElementById('nhomCongTy').value;
    const trangThaiHoSo = document.getElementById('trangThaiHoSo').value;
    const ngayGoiDauTien = document.getElementById('ngayGoiDauTien').value;
    const ngayGoiCuoiCung = document.getElementById('ngayGoiCuoiCung').value;
    const ngaySinh = document.getElementById('ngaySinh').value;
    const ghiChu = document.getElementById('ghiChu').value;
    if (tenKhachHang && soDienThoai && luong && tenCongTy && nhomCongTy && ngayGoiDauTien && ngayGoiCuoiCung && ngaySinh && ghiChu && trangThaiHoSo) {
        alert("Thêm khách hàng thành công!");
        window.location.href = '/Sua/khachhang/khachhang.html';
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");

    }

});


document.getElementById('confirmDeleteBtn')?.addEventListener('click', function () {
    alert('Khách hàng đã được xóa thành công.');
    window.location.href = '/Sua/khachhang/khachhang.html';
});


document.getElementById('luuthongtin')?.addEventListener('click', function () {
    // Lấy giá trị từ các input
    var soDienThoai = document.getElementById('soDienThoai').value.trim();
    var trangThai = document.getElementById('trangThai').value.trim();
    var ghiChu = document.getElementById('ghiChu').value.trim();

    // Kiểm tra các trường có được điền đầy đủ không
    if (soDienThoai === '' || trangThai === '' || ghiChu === '') {
        alert('Vui lòng điền đầy đủ thông tin trước khi lưu.');
    } else {

        var phoneRegex = /^[0-9]{9,11}$/; // Ví dụ: số điện thoại phải từ 9 đến 11 chữ số
        if (!phoneRegex.test(soDienThoai)) {
            alert('Vui lòng nhập số điện thoại hợp lệ.');
        } else {
            // Thực hiện hành động lưu thông tin
            alert('Lưu thông tin thành công');
            // Điều hướng đến trang khác sau khi lưu thành công
            window.location.href = '/Sua/sodienthoai/sodienthoai.html';
        }
    }
});



let selectedRow = null; // Biến lưu trữ hàng được chọn

// Khi nhấn nút "Xóa"
document.querySelectorAll('.delete-item')?.forEach(item => {
    item.addEventListener('click', function () {
        selectedRow = this.getAttribute('data-row'); // Lấy giá trị của hàng cần xóa
        // Hiển thị modal xác nhận
        var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
        deleteModal.show();
    });
});

// Khi nhấn nút "Xác Nhận" trong modal
document.getElementById('confirmDelete')?.addEventListener('click', function () {
    if (selectedRow) {
        alert('Xóa hàng Số Điện Thoại thành công');
        window.location.href = '/Sua/sodienthoai/sodienthoai.html';
    }
});



// Lấy modal element và button
var uploadFileModal = new bootstrap.Modal(document.getElementById('uploadFileModal'));
var uploadFileBtn = document.getElementById('uploadFileBtn');

// Khi nhấn nút "Tải file", hiển thị modal
uploadFileBtn.onclick = function () {
    uploadFileModal.show();
}

// Thêm sự kiện cho form upload file
document.getElementById('uploadFileForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form nạp lại trang

    // Logic xử lý file tải lên
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        alert('File "' + fileInput.files[0].name + '" đã được chọn.');
        // Thực hiện logic tải file lên ở đây (ví dụ: gửi file tới server)
    } else {
        alert('Vui lòng chọn một file.');
    }
});



// Đảm bảo đúng ID của form và phần tử file
document.getElementById('uploadFileForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn không tải lại trang

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var validExtensions = ['xls', 'xlsx']; // Các định dạng file hợp lệ

    if (file) {
        var fileName = file.name;
        var fileExtension = fileName.split('.').pop().toLowerCase();

        // Kiểm tra định dạng file
        if (validExtensions.includes(fileExtension)) {
            alert('File "' + fileName + '" hợp lệ và đã sẵn sàng để tải lên.');
        } else {
            alert('Vui lòng chọn file Excel với định dạng .xls hoặc .xlsx');
        }
    } else {
        alert('Vui lòng chọn một file.');
    }
});


document.getElementById('themsodienthoai')?.addEventListener('click', function () {
    // Lấy giá trị từ các input
    var soDienThoai = document.getElementById('soDienThoai').value.trim();
    var trangThai = document.getElementById('trangThai').value.trim();
    var ghiChu = document.getElementById('ghiChu').value.trim();

    // Kiểm tra các trường có được điền đầy đủ không
    if (soDienThoai === '' || trangThai === '' || ghiChu === '') {
        alert('Vui lòng điền đầy đủ thông tin trước khi thêm.');
    } else {
        // Thực hiện hành động thêm số điện thoại
        alert('Thêm SĐT thành công');

        // Đóng modal sau khi thêm thành công
        var addPhoneModal = document.getElementById('addPhoneModal');
        var modal = bootstrap.Modal.getInstance(addPhoneModal);
        modal.hide();


    }
});





document.getElementById('suasodienthoai')?.addEventListener('click', function () {
    window.location.href = '/Sua/sodienthoai/suasodienthoai.html';
});

// Lắng nghe sự kiện click vào biểu tượng thông báo
document.querySelectorAll('.notification-icon').forEach(icon => {
    icon.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        const popup = this.nextElementSibling; // Tìm popup kế bên
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';

        // Đóng popup của nhắc nhở nếu đang mở
        document.querySelectorAll('.reminder-icon + .notification-popup').forEach(reminderPopup => {
            reminderPopup.style.display = 'none';
        });
    });
});



document.querySelectorAll('.delete-item')?.forEach(item => {
    item.addEventListener('click', function () {
        selectedRow = this.getAttribute('data-row'); // Lấy giá trị của hàng cần xóa
        // Hiển thị modal xác nhận
        var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
        deleteModal.show();
    });
});

 
