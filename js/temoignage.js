const strapiUrl = "http://90.110.218.245:5001";

const endPointArticles = "/api/container-temoignages?populate=*";

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