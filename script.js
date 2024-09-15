// 轮播图功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 5000); // 每3秒切换一次图片

showImage(currentIndex);
