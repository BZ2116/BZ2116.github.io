// 轮播图功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;
let carouselInterval; // 保存计时器 ID

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function startCarousel() {
    // 如果已有计时器，先清除
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    carouselInterval = setInterval(nextImage, 10000); // 每10秒切换一次图片
}

// 初始化
showImage(currentIndex);
startCarousel();
