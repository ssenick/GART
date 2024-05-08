//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false,
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}

function sliders_bild_callback(params) {}
/*
let slider_about = new Swiper(".body-cards-prices__wrapper", {
  observer: true,
  observeParents: true,
  slidesPerView: 2.5,
  slidesPerGroup: 1,
  spaceBetween: 0,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: ".about__more .more__item_next",
    prevEl: ".about__more .more__item_prev",
  },
  
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	
});
*/
//========================================================================================================================================================
const differencesSlider = document.querySelector('.body-cards-prices__wrapper_one');
const differencesSliderTwo = document.querySelector('.body-cards-prices__wrapper_two');
let sliderOnePipe;
let sliderOnePipeTwo;
function mobileSlider() {
  if (window.innerWidth <= 991.98 && differencesSlider.dataset.mobile == 'false') {
    sliderOnePipe = new Swiper('.body-cards-prices__wrapper_one', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 18,
      speed: 800,
      //touchRatio: 0,
      //initialSlide: 1,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.navigation__pagination_one-pipe',
        clickable: true,
      },
      // Arrows
      navigation: {
        nextEl: '.navigation__arrow_one-pipe.navigation__arrow_next',
        prevEl: '.navigation__arrow_one-pipe.navigation__arrow_prew',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1.8,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.5,
          centeredSlides: true,
          initialSlide: 1,
        },
      },

      on: {
        lazyImageReady: function () {
          ibg();
        },
      },
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
    });
    differencesSlider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 991.98) {
    differencesSlider.dataset.mobile = 'false';

    if (differencesSlider.classList.contains('swiper-container-initialized')) {
      sliderOnePipe.destroy();
    }
  }
}
function mobileSliderTwo() {
  if (window.innerWidth <= 991.98 && differencesSliderTwo.dataset.mobile == 'false') {
    sliderOnePipeTwo = new Swiper('.body-cards-prices__wrapper_two', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 18,
      speed: 800,
      //touchRatio: 0,
      initialSlide: 1,
      centeredSlides: true,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.navigation__pagination_two-pipe',
        clickable: true,
      },
      // Arrows
      navigation: {
        nextEl: '.navigation__arrow_two-pipe.navigation__arrow_next',
        prevEl: ' .navigation__arrow_two-pipe.navigation__arrow_prew',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
        },
        414: {
          slidesPerView: 1.6,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1.8,
        },
        768: {
          slidesPerView: 2.5,
          centeredSlides: true,
          initialSlide: 1,
        },
      },

      on: {
        lazyImageReady: function () {
          ibg();
        },
      },
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
    });
    differencesSliderTwo.dataset.mobile = 'true';
  }
  if (window.innerWidth > 991.98) {
    differencesSliderTwo.dataset.mobile = 'false';
    if (differencesSliderTwo.classList.contains('swiper-container-initialized')) {
      sliderOnePipeTwo.destroy();
    }
  }
  //========================================================================================================================================================
  //========================================================================================================================================================
}
mobileSlider();
mobileSliderTwo();
window.addEventListener('resize', () => {
  mobileSlider();
  mobileSliderTwo();
});
