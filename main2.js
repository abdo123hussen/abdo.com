document.addEventListener('DOMContentLoaded', function() {
    // تغيير الصورة الرئيسية عند النقر على الصور المصغرة
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // إزالة الفعال من جميع الصور المصغرة
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // إضافة الفعال للصورة المختارة
            this.classList.add('active');
            
            // تغيير الصورة الرئيسية
            mainImage.src = this.src.replace('100x100', '600x600');
        });
    });
    
    // تغيير التبويبات
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // إزالة الفعال من جميع الأزرار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // إضافة الفعال للزر والمحتوى المختار
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // زيادة ونقصان الكمية
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');
    
    decreaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    // تقييم النجوم
    const ratingStars = document.querySelectorAll('.rating-input i');
    
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // تحديث النجوم
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // إضافة إلى السلة
    const addToCartBtn = document.querySelector('.add-to-cart');
    
    addToCartBtn.addEventListener('click', function() {
        const cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + parseInt(quantityInput.value);
        
        // يمكنك هنا إضافة كود لإرسال البيانات للسلة عبر Ajax
        alert('تمت إضافة المنتج إلى سلة التسوق');
    });
});