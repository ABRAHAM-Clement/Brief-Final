
/* strapi carrousels  Début */
 let url = 'http://90.110.218.245:5001'

 fetch("http://90.110.218.245:5001/api/carrousel2s?populate=*")
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
// ___________________________________________________________________
// const strapiUrl = "http://localhost:5001";

// const endPointArticles = "/api/carrousel2s?populate=*";

// let articlesContainer = document.getElementById('carrousel2');

// /*
//     Récupère la liste d'articles depuis Strapi
//  */
// async function loadArticles() {

//     //  Javascript demande à Strapi de lui fournir le JSON des articles
//     let response = await fetch(strapiUrl + endPointArticles);

//     //  Si on a pu récupérer le JSON correctement
//     if (response.ok) {

//         //  Ici, on récupère le contenu au format JSON
//         let json = await response.json();

//         //  On boucle sur chacun des articles contenus dans le JSON
//         for (let article of json.data) {

//             console.log(article);

//             let h1 = document.createElement('h1');
//             h1.innerHTML = article.attributes.Titre;
//             articlesContainer.appendChild(h1);

//             let resume = document.createElement('p');
//             resume.innerHTML = article.attributes.Resume;
//             articlesContainer.appendChild(resume);

//             let visuel = document.createElement('img');
//             visuel.src = strapiUrl + article.attributes.Visuel.data.attributes.formats.thumbnail.url;
//             articlesContainer.appendChild(visuel);

//         }

//     //  Si on n'a pas pu récupérer le JSON pour n'importe quelle raison
//     } else {
//         alert("Erreur lors de la récuparation des articles : " + response.status);
//     }
// }

// loadArticles();