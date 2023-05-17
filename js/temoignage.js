const strapiUrl = "http://85.169.220.243:5001";

const endPointArticles = "/api/container-temoignages?populate=*";
const endPointAvis = "/api/conteneur-avis?populate=*";

let articlesContainer = document.getElementById('conteneur-temoignage');
console.log("ok");

/*
    Récupère la liste d'articles depuis Strapi
 */
async function loadArticles() {

    //  Javascript demande à Strapi de lui fournir le JSON des articles
    let response = await fetch(strapiUrl + endPointArticles);

    //  Si on a pu récupérer le JSON correctement
    if (response.ok) {

        //  Ici, on récupère le contenu au format JSON
        let json = await response.json();

        //  On boucle sur chacun des articles contenus dans le JSON
        for (let article of json.data) {

            console.log(article);
            let container = document.createElement('div');
            container.className = 'temoignage'
            articlesContainer.appendChild(container)

            let h1 = document.createElement('h1');
            h1.innerHTML = article.attributes.titreTemoignage;
            container.appendChild(h1);

            let visuel = document.createElement('img');
            visuel.src = strapiUrl + article.attributes.imageTemoignage.data.attributes.formats.thumbnail.url;
            container.appendChild(visuel);

            ;

        }

    //  Si on n'a pas pu récupérer le JSON pour n'importe quelle raison
    } else {
        alert("Erreur lors de la récuparation des articles : " + response.status);
    }
}

loadArticles();



//______________________________ avis __________________

let avisContainer = document.getElementById('conteneur-avis');
console.log("ok");

/*
    Récupère la liste d'articles depuis Strapi
 */
async function loadAvis() {

    //  Javascript demande à Strapi de lui fournir le JSON des articles
    let response = await fetch(strapiUrl + endPointAvis);

    //  Si on a pu récupérer le JSON correctement
    if (response.ok) {

        //  Ici, on récupère le contenu au format JSON
        let json = await response.json();

        //  On boucle sur chacun des articles contenus dans le JSON
        for (let article of json.data) {

            console.log(article);
            let containers = document.createElement('div');
            containers.className = 'avis'
            avisContainer.appendChild(containers)

            let date = document.createElement('h2');
            date.innerHTML = article.attributes.date;
            containers.appendChild(date);

            let personne = document.createElement('h3');
            personne.innerHTML = article.attributes.personne;
            containers.appendChild(personne);

            let trajet = document.createElement('h4');
            trajet.innerHTML = article.attributes.trajet;
            containers.appendChild(trajet);

            let titreTexteDescription = document.createElement('h6');
            titreTexteDescription.innerHTML = article.attributes.titreTextDescription;
            containers.appendChild(titreTexteDescription);

            let texteDescription = document.createElement('h5');
            texteDescription.innerHTML = article.attributes.texteDescription;
            containers.appendChild(texteDescription);

            ;

        }

    //  Si on n'a pas pu récupérer le JSON pour n'importe quelle raison
    } else {
        alert("Erreur lors de la récuparation des articles : " + response.status);
    }
}

loadAvis();