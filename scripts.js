// Hiển thị nút "Quay lại đầu trang" khi người dùng cuộn xuống
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
};

// Xử lý sự kiện khi nhấp vào nút "Quay lại đầu trang"
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Thêm hiệu ứng khi hover vào các phần tử highlight
    const highlightElements = document.querySelectorAll('.highlight-add, .highlight-remove');
    highlightElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Thêm hiệu ứng khi click vào các card trên trang chủ
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            // Nếu người dùng không click vào button
            if (!e.target.classList.contains('button') && !e.target.closest('.button')) {
                // Lấy link từ thẻ a trong card-footer
                const link = this.querySelector('.card-footer a').getAttribute('href');
                window.location.href = link;
            }
        });
    });
}); 