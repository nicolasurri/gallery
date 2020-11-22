// Swiper

new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: "slide",
    loop: true,
    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 600px
        700: {
            slidesPerView: 2,
        },
        // when window width is >= 950px
        950: {
            slidesPerView: 3,
        },
        // when window width is >= 1300px
        1300: {
            slidesPerView: 4,
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// Popmotion from CodePen https://codepen.io/popmotion/pen/mqKyjd?editors=0010

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });