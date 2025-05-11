document.addEventListener('DOMContentLoaded', function() {
    const testDriveBtn = document.getElementById('test-drive-btn');
    const infoBtn = document.getElementById('info-btn');
    const serviceBtn = document.getElementById('service-btn');
    const submitBtn = document.getElementById('submit-btn');
    const galleryInfoBtn = document.getElementById('gallery-info-btn');
    const reviewBtn = document.getElementById('review-btn');

    if (testDriveBtn) {
        testDriveBtn.addEventListener('click', function() {
            alert('Test sürüşü talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.');
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            alert('Bilgi talebiniz alındı! Ekibimiz kısa sürede sizinle iletişime geçecek.');
        });
    }

    if (serviceBtn) {
        serviceBtn.addEventListener('click', function() {
            alert('Servis randevu talebiniz alındı! Size en kısa sürede dönüş yapacağız.');
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
        });
    }

    if (galleryInfoBtn) {
        galleryInfoBtn.addEventListener('click', function() {
            alert('Galeri hakkında bilgi talebiniz alındı! Size en kısa sürede dönüş yapacağız.');
        });
    }

    if (reviewBtn) {
        reviewBtn.addEventListener('click', function() {
            alert('Yorumunuzu paylaşmak için teşekkürler! İletişim formunu kullanarak düşüncelerinizi bize iletebilirsiniz.');
        });
    }
});