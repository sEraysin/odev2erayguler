document.addEventListener('DOMContentLoaded', function() {
    const testDriveBtn = document.getElementById('test-drive-btn');
    const infoBtn = document.getElementById('info-btn');
    const serviceBtn = document.getElementById('service-btn');
    const submitBtn = document.getElementById('submit-btn');
    const galleryInfoBtn = document.getElementById('gallery-info-btn');
    const reviewBtn = document.getElementById('review-btn');
    const offerBtn = document.getElementById('offer-btn');
    const testDriveSubmitBtn = document.getElementById('test-drive-submit-btn');
    const hybridBtn = document.getElementById('hybrid-btn');
    const accessoryBtn = document.getElementById('accessory-btn');
    const subscribeBtn = document.getElementById('subscribe-btn');

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

    if (offerBtn) {
        offerBtn.addEventListener('click', function() {
            alert('Teklif talebiniz alındı! Size özel fırsatlarımız için kısa sürede iletişime geçeceğiz.');
        });
    }

    if (testDriveSubmitBtn) {
        testDriveSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Test sürüşü randevu talebiniz alındı! Seçtiğiniz tarihte sizinle iletişime geçeceğiz.');
        });
    }

    if (hybridBtn) {
        hybridBtn.addEventListener('click', function() {
            alert('Hibrit ve elektrikli araçlar hakkında bilgi talebiniz alındı! Size en kısa sürede dönüş yapacağız.');
        });
    }

    if (accessoryBtn) {
        accessoryBtn.addEventListener('click', function() {
            alert('Aksesuar bilgi talebiniz alındı! Özelleştirme seçenekleri için sizinle iletişime geçeceğiz.');
        });
    }

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            alert('Bültenimize abone oldunuz! Honda Dünyası’nın yeniliklerinden haberdar olacaksınız.');
        });
    }
});