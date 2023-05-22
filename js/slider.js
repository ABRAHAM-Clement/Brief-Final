
/* strapi carrousels  Début */
 let url = 'http://85.169.220.243:5001'

 fetch("http://85.169.220.243:5001/api/carrousel2s?populate=*")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        let eltCarrousels = document.querySelector('.slider')

        for (let slide of value.data) {
            console.log(slide);
             let eltCarrousel = document.createElement('div')
              eltCarrousels.appendChild(eltCarrousel)
              eltCarrousel.classList.add('slide')         
              eltCarrousel.style.cssText = 'background: url( ' + url + slide.attributes.ImagesCarrousel.data.attributes.url + ' ) no-repeat center top/cover ';  
              eltCarrousels.firstElementChild.classList.add('current')

        }

    })
    .catch(function (err) {

    }); 

/* strapi carrousels  Fin */

/* Carrousel */

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 4000;
let slideInterval;
let eltCarrouselSelect = document.querySelector('.slider')

const nextSlide = () => {
  // recuperer la class current
  const current = document.querySelector('.current');
  // Retirer la class current
  current.classList.remove('current');
  // Vérifier la diapo suivante
  if (current.nextElementSibling) {
    // Ajouter current à la prochaine diapo
    current.nextElementSibling.classList.add('current');
  } else {
    // Ajouter current au début
    eltCarrouselSelect.firstElementChild.classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // recuperer la class current
  const current = document.querySelector('.current');
  // Retirer la class current
  current.classList.remove('current');
  // Vérifier la diapo précédente
  if (current.previousElementSibling) {
    // Ajouter current à la diapo précédente
    current.previousElementSibling.classList.add('current');
  } else {
    // Ajouter current à la fin
    eltCarrouselSelect.lastElementChild.classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// les bouttons
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // temps entre les slides
  slideInterval = setInterval(nextSlide, intervalTime);
}
