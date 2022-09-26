$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1100: {
        items: 2,
      },

      1400: {
        items: 3,
        loop: false,
      },
    },
  });
});

// Sticky Header on Scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Counter
const counters = document.querySelectorAll(".number");
const speed = 200;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.round(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
