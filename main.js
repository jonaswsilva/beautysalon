// DOM Document Object Model

/* Abre e fecha o menu quando clicar no humburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, fechar o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials corroucel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  /* Ajuste no carroucel conforme o tamanho do dispositivo. vide documentation! */
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReview: Mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
/* Declaração de cada uma das classes e items a serem revelados com o scroll */
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botao voltar para o topo */
const backButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backButton.classList.add('show')
  } else {
    backButton.classList.remove('show')
  }
}

/* menu ativo conforme a sessao visivel na pagina */
const sections = document.querySelectorAll('main section[id]')
function activationMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointStop = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointStop) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* 
window.pageYOffset = deslocamento do Y
window.innerHeight = tamanho total da pagina

*/

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activationMenuAtCurrentSection()
})
