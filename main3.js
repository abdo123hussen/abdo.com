document.addEventListener('DOMContentLoaded', function() {
    // تنشيط/إلغاء تنشيط الأسئلة الشائعة
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // إغلاق جميع الإجابات الأخرى
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // فتح/إغلاق السؤال الحالي
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج عبر Ajax
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك في أقرب وقت.');
            contactForm.reset();
        });
    }
    
    // يمكنك إضافة المزيد من الوظائف هنا
    // مثل التحقق من صحة البيانات قبل الإرسال
});