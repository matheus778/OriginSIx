const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

// back-to-top
const btnBackToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  activateMenuLinks();
  //deixa visivel o botão para voltar para o topo
  if (window.scrollY > 800) {
    btnBackToTop.classList.add("show");
  } else {
    btnBackToTop.classList.remove("show");
  }

  // coloca sombra no header ao realizar scroll
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// depoimentos Slider
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// scrollreveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials`,
  { interval: 100 }
);
scrollReveal.reveal(
  "#contact .text, #contact .links, footer .brand, footer .social"
);

// menu ativo conforme a seção visivel da pagina
const sections = document.querySelectorAll("main section[id]");

function activateMenuLinks() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  }
}
