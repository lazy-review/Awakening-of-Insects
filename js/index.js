// 春考倒计时
// 设置春考日期（根据实际考试日期修改）
const examDate = new Date('2026-01-06T00:00:00'); // 日期

function updateCountdown() {
    const now = new Date();
    const diff = examDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<p>春考已经开始！加油！</p>';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 初始化倒计时
updateCountdown();
// 每秒更新一次
setInterval(updateCountdown, 1000);

// ******************************************//
// setInterval(changeProverb, 5000);

// // 随机雷电效果增强
// function randomLightning() {
//     const lightning = document.querySelector('.lightning');
//     lightning.style.animation = 'none';
//     void lightning.offsetWidth; // 触发重绘
//     lightning.style.animation = `lightning ${15 + Math.random() * 10}s infinite`;
// }

// setInterval(randomLightning, 20000);

// 轮播图功能
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
const navContainer = document.getElementById('carousel-nav');
let currentSlide = 0;

// 创建导航点
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    navContainer.appendChild(dot);
});

// 跳转到指定幻灯片
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// 更新轮播图状态
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // 更新导航点状态
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// 自动轮播
function autoPlay() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

// 每5秒自动切换
let slideInterval = setInterval(autoPlay, 5000);

// 鼠标悬停暂停
carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
carousel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoPlay, 5000);
});


// 移动端菜单切换(响应式)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 返回顶部按钮功能
const backToTopButton = document.getElementById('backToTop');

// 监听滚动事件
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// 平滑滚动到顶部
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});