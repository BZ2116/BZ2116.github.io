// 导航菜单交互功能
const menuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-menu');

// 为菜单图标添加点击事件
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation();
  navMenu.classList.toggle('active');
});

// 点击菜单项后关闭菜单并跳转
navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navMenu.classList.remove('active');
  }
});

// 点击菜单外部关闭菜单
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});

// 轮播图功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;
let carouselInterval;

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
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
  carouselInterval = setInterval(nextImage, 10000);
}

// 初始化轮播图
showImage(currentIndex);
startCarousel();
