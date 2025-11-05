document.addEventListener('DOMContentLoaded', () => {
  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const SliderDom = carouselDom.querySelector('.carousel .list');
  const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

  let timeRunning = 600;
  let isAnimating = false;

  function setActiveThumbnail() {
    const thumbs = Array.from(thumbnailBorderDom.querySelectorAll('.item'));
    thumbs.forEach((thumb, i) => {
      if (i === 0) thumb.classList.add('active-thumb');
      else thumb.classList.remove('active-thumb');
    });
  }

  function showSlider(type) {
    if (isAnimating) return;
    isAnimating = true;

    const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    thumbnailItemsDom.forEach(t => t.classList.remove('active-thumb'));

    if (type === 'next') {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add('next');
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add('prev');
    }

    setTimeout(() => {
      carouselDom.classList.remove('next', 'prev');
      setActiveThumbnail();
      isAnimating = false;
    }, timeRunning);
  }

  nextDom.addEventListener('click', () => showSlider('next'));
  prevDom.addEventListener('click', () => showSlider('prev'));

  function onThumbnailClick(e) {
    if (isAnimating) return;

    const thumbs = Array.from(thumbnailBorderDom.querySelectorAll('.item'));
    const clicked = e.currentTarget;
    const n = thumbs.length;
    let pos = thumbs.indexOf(clicked);
    if (pos <= 0) return;

    const forward = pos;
    const backward = n - pos;
    const useNext = forward <= backward;
    const steps = useNext ? forward : backward;
    const direction = useNext ? 'next' : 'prev';

    let step = 0;
    const stepInterval = () => {
      if (step >= steps) return;
      showSlider(direction);
      step++;
      setTimeout(stepInterval, timeRunning + 30);
    };
    stepInterval();
  }

  function bindThumbnailHandlers() {
    const thumbs = thumbnailBorderDom.querySelectorAll('.item');
    thumbs.forEach((t) => {
      t.style.cursor = 'pointer';
      t.removeEventListener('click', onThumbnailClick);
      t.addEventListener('click', onThumbnailClick);
    });
  }

  bindThumbnailHandlers();

  const observer = new MutationObserver(() => {
    bindThumbnailHandlers();
    setActiveThumbnail();
  });
  observer.observe(thumbnailBorderDom, { childList: true });

  document.addEventListener('keydown', (e) => {
    if (isAnimating) return;
    if (e.key === 'ArrowRight') showSlider('next');
    if (e.key === 'ArrowLeft') showSlider('prev');
  });

  let touchStartX = 0;
  let touchEndX = 0;
  carouselDom.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  carouselDom.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) < 50 || isAnimating) return;
    if (swipeDistance < 0) showSlider('next');
    else showSlider('prev');
  });

  setActiveThumbnail();
});
