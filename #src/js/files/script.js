//========================================================================================================================================================
let deapthMap = document.querySelector(".deapth-maps");
let deapthMapsContainer = document.querySelector(".deapth-maps__container");
function opacityMap() {
  if (deapthMapsContainer.classList.contains("_active")) {
    deapthMap.classList.add("_visability");
  } else {
    deapthMap.classList.remove("_visability");
  }
}
opacityMap();
//========================================================================================================================================================

const translate = document.querySelectorAll("._translate");
const translate2 = document.querySelectorAll("._translate-2");
const section = document.querySelector(".technics");
let tr = document.querySelector("._tr");
let section_height = section.offsetHeight;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    translate.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `rotate(-${scroll * speed + 40}deg)`;
    });
    translate2.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `rotate(${scroll * speed + 100}deg)`;
    });
  });

//========================================================================================================================================================
let cardsStages = document.querySelectorAll(".cards-stages_one");
let cardStages = document.querySelectorAll(".card-stages_one");
if (cardsStages) {
  for (let index = 0; index < cardStages.length; index++) {
    const element = cardStages.length;
    const indexElrment = cardStages[index];
    if (element > 9 || element < 9) {
      console.log("Зачем ломаешь мне версту?))");
      indexElrment.classList.add("_more");
    } else {
      indexElrment.classList.remove("_more");
    }
  }
}
//========================================================================================================================================================
//========================================================================================================================================================
(function () {
  const consultant = document.querySelector(".page__consultant");
  window.onscroll = () => {
    if (window.pageYOffset > 1000) {
      consultant.classList.add("_active");
    } else {
      consultant.classList.remove("_active");
    }
  };
})();
//========================================================================================================================================================dqa
let item_1 = document.querySelector(".control-page__item_drilling");
let item_2 = document.querySelector(".control-page__item_experience");
let item_3 = document.querySelector(".control-page__item_technics");
let item_4 = document.querySelector(".control-page__item_features");
let item_5 = document.querySelector(".control-page__item_warranty");
let item_6 = document.querySelector(".control-page__item_result");
let item_7 = document.querySelector(".control-page__item_prices");
let item_8 = document.querySelector(".control-page__item_deapth-maps");
let item_9 = document.querySelector(".control-page__item_term");
let item_10 = document.querySelector(".control-page__item_order");
let item_11 = document.querySelector(".control-page__item_footer");

let block_1 = document.querySelector(".drilling");
let block_2 = document.querySelector(".experience");
let block_3 = document.querySelector(".technics");
let block_4 = document.querySelector(".features");
let block_5 = document.querySelector(".warranty");
let block_6 = document.querySelector(".result");
let block_7 = document.querySelector(".prices");
let block_8 = document.querySelector(".deapth-maps");
let block_9 = document.querySelector(".term");
let block_10 = document.querySelector(".order");
let block_11 = document.querySelector(".footer");

function controls() {
  if (block_1.classList.contains("_active")) {
    item_1.classList.add("_active");
  } else {
    item_1.classList.remove("_active");
  }

  if (block_2.classList.contains("_active")) {
    item_2.classList.add("_active");
  } else {
    item_2.classList.remove("_active");
  }

  if (block_3.classList.contains("_active")) {
    item_3.classList.add("_active");
  } else {
    item_3.classList.remove("_active");
  }

  if (block_4.classList.contains("_active")) {
    item_4.classList.add("_active");
  } else {
    item_4.classList.remove("_active");
  }

  if (block_5.classList.contains("_active")) {
    item_5.classList.add("_active");
  } else {
    item_5.classList.remove("_active");
  }

  if (block_6.classList.contains("_active")) {
    item_6.classList.add("_active");
  } else {
    item_6.classList.remove("_active");
  }

  if (block_7.classList.contains("_active")) {
    item_7.classList.add("_active");
  } else {
    item_7.classList.remove("_active");
  }

  if (block_8.classList.contains("_active")) {
    item_8.classList.add("_active");
  } else {
    item_8.classList.remove("_active");
  }

  if (block_9.classList.contains("_active")) {
    item_9.classList.add("_active");
  } else {
    item_9.classList.remove("_active");
  }

  if (block_10.classList.contains("_active")) {
    item_10.classList.add("_active");
  } else {
    item_10.classList.remove("_active");
  }

  if (block_11.classList.contains("_active")) {
    item_11.classList.add("_active");
  } else {
    item_11.classList.remove("_active");
  }
}
controls();

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// Append the 'script' element to 'head'

/*
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  tr.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px) ";
});
*/
//========================================================================================================================================================

/*

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

*/

//========================================================================================================================================================
//движение бг

//========================================================================================================================================================

//========================================================================================================================================================
//Навешивание класа при клике на блок
//========================================================================================================================================================
/*
//Навешивание класа при клике на блок
let userIcon = document.querySelector('.user-act-header');
let userMenu = document.querySelector('.user-act-header__list');
userIcon.addEventListener("click", function (e) {
	userMenu.classList.toggle('_active');
});
//уберает класс при клике в любом другом месте, кроме этого болка и дочерних элеменов
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-act-header')) {
		userMenu.classList.remove('_active');
	}
});
*/
//========================================================================================================================================================
//========================================================================================================================================================

//========================================================================================================================================================
//присвоение класса при скроле
// для навешивания BG+ что бы меню стало видно
//========================================================================================================================================================
/*
(function (){
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	}
}());
*/

//========================================================================================================================================================
//прокрутка при клике  start=======
//========================================================================================================================================================

// Scroll to anchors (плавный скрол по странице)
// нажимая на навигационное меню идет плавный скрол этой часте на странице
// нужно указать класс главнего блока (.header)+ в html в навигацию каждему
// элементу добавить класс (js-scroll), и привязать все по ID
//

/*
(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - (1.8 * headerElHeight) ;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
		  	if (burger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
*/

//========================================================================================================================================================
//прокрутка при клике  end=======
//========================================================================================================================================================

//========================================================================================================================================================
// Прокрутка при клике
//========================================================================================================================================================
//Добавляем в html к пунктам навигации дата атрибут "data-goto= ".class к обьекту или модификатор класса" "(с тойчкой),
//также добавляем теже класс или модификатор обьекту к которому хоти докрутить
//
//const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//(поиски всех обьектов с классом ".menu__link" у которых есть [data-goto]
/*
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			//прокрутка с бургер меню с закрытием его	
			if (burger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			//отключение работы ссылки
			e.preventDefault();
		}
	}
}
//========================================================================================================================================================
//навигация в футере
const footerLinks = document.querySelectorAll('.footer__link[data-goto]');
if (footerLinks.length > 0) {
	footerLinks.forEach(footerLink => {
		footerLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const footerLink = e.target;
		if (footerLink.dataset.goto && document.querySelector(footerLink.dataset.goto)) {
			const gotoBlock = document.querySelector(footerLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			//прокрутка с бургер меню с закрытием его	


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			//отключение работы ссылки
			e.preventDefault();
		}
	}
}
*/
//========================================================================================================================================================
//========================================================================================================================================================
