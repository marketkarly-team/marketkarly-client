const mainSwiper = new Swiper('.swiper-recommend', {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-recommend-button-next',
    prevEl: '.swiper-recommend-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  lazy: {
    loadPrevNext: true // 이전, 다음 이미지는 미리 로딩
  },

  a11y: {
    containerRoleDescriptionMessage: '추천 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }
});

const mainSwiper2 = new Swiper('.swiper-best-price', {
  slidesPerView: 4,
  spaceBetween: 18,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-best-price-button-next',
    prevEl: '.swiper-best-price-button-prev'
  },
  lazy: {
    loadPrevNext: true
  },

  a11y: {
    containerRoleDescriptionMessage: '가격 할인 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }

});


const asideSwiper = new Swiper('.aside-swiper', {
  direction: 'vertical',
  slidesPerView: 3,
  grid: {
    column: 2,
  },

  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.aside-swiper-button-next',
    prevEl: '.aside-swiper-button-prev',
  },
  lazy: {
    loadPrevNext: true
  },

  a11y: {
    containerRoleDescriptionMessage: '최근 본 상품',
    nextSlideMessage: '다음 슬라이드 버튼 입니다',
    prevSlideMessage: '이전 슬라이드 버튼 입니다',
  }
});


