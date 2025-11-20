```javascript
// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 滚动视差效果
window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  }
});

// 按钮点击问候
document.querySelector('.btn-primary').addEventListener('click', () => {
  alert('指挥官，你好！雪风随时准备守护你nanoda！');
});

// 欢迎Console消息
console.log('欢迎来到雪风的个人网站，指挥官！由雪风大人精心制作nanoda！');
```