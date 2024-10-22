document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".toggleButtonR").forEach(button => {
        button.addEventListener("click", function () {
            const reportContent = this.closest('.report-header').nextElementSibling;
            console.log("Button clicked!"); // Kiểm tra sự kiện click
            if (reportContent.style.display === "none" || !reportContent.style.display) {
                reportContent.style.display = "block"; // Hiển thị div full với display là block
            } else {
                reportContent.style.display = "none"; // Ẩn div full
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart')?.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Thang 1', 'Thang 2', 'Thang 3', 'Thang 4', 'Thang 5'],
            datasets: [{
                label: 'Số khách hàng',
                data: [5, 4, 3, 6, 3],
                backgroundColor: [
                    '#ffddcc', '#ffaa00', '#66c2ff', '#cccccc', '#ff9999'
                ],
                borderColor: [
                    '#ffddcc', '#ffaa00', '#66c2ff', '#cccccc', '#ff9999'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) { return value.toLocaleString(); }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Example usage: updating the chart data dynamically
    document.getElementById('locbaocao')?.addEventListener('click', function () {
        chart.data.datasets[0].data = [5, 3, 9, 2, 10];
        chart.update();
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('chart-1')?.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Thang 1', 'Thang 2', 'Thang 3', 'Thang 4', 'Thang 5'],
            datasets: [{
                label: 'Số khoản vay',
                data: [5, 4, 3, 6, 3],
                backgroundColor: [
                    '#ffddcc', '#ffaa00', '#66c2ff', '#cccccc', '#ff9999'
                ],
                borderColor: [
                    '#ffddcc', '#ffaa00', '#66c2ff', '#cccccc', '#ff9999'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) { return value.toLocaleString(); }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Example usage: updating the chart data dynamically
    document.getElementById('locbaocao')?.addEventListener('click', function () {
        chart.data.datasets[0].data = [4, 5, 3, 7, 8];
        chart.update();
    });

});


