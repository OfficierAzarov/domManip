/*  document.getElementByID est 
    notre lien entre index.html et script.js.
    Il s'agit d'une méthode de l'objet document.
    Cette méthode prend comme argument un id et retourne 
    un élément du DOM (généré par le navigateur à partir de index.html).*/

/* Il faut être certain que le DOM de l'index.html soit complètement généré par le navigateur avant que le script.js ne s'exécute.
Pour cela, on va enrober tout notre code dans une fonction init(), puis lier celle-ci à window.onload. */ 

window.onload = init; // Indique au navigateur que la function init() ne sera exécutée que lorque toute la page sera chargée.

function init() {

    // *********************************************************************************************** //
    // ********************************* Manipulations de base  ************************************** //
    // *********************************************************************************************** //

    const brian = document.getElementById('brian');
    const brenda = document.getElementById('brenda');
    const jeanMichel = document.getElementById('jean-michel');


    /*  Les 3 éléments DOM sont désormais associés à des variables
        manipulables en JS. On va pouvoir faire 2 types d'actions :
        1) Changer un attribut de l'élément
        2) Lire un attribut (= une propriété) de l'élément */

    // 1) Changer le contenu de l'élément / l'attribut d'un élément :

    // On peut changer le contenu HTML de l'élément...
    brian.innerHTML = 'Brian : "Finalement, je veux bien des nuggets en plus !"';

    // ... ou un de ses attributs de style, par exemple la couleur du texte.
    // Pour ça, on va SETter l'attribut :
    // brian.setAttribute('style', 'color:blue');   // !    commentez cette ligne quand vous testerez 
                                                    //      la partie 2, car sinon brian restera toujours bleu !
                                                    //      (en effet, js prend le pas (override) sur le css)


    // 2) Lire un attribut (= une propriété) de l'élément :

    // Pour lire la valeur d'un attribut de l'élément, on associe cet attribut à une variable
    const commandeBrian = brian.innerHTML;
    console.log("Brian a dit " + commandeBrian);

    // Pour lire la valeur d'un attribut, on va le GETter :
    const jeanMichelClass = jeanMichel.getAttribute('class');

    /* Pour lire la valeur d'un attribut CSS, si le style est défini dans une balise
    dans l'index.html (css dit "inline"), on peut utiliser : const colorBrianText = brian.style.color.
    Mais si le css est défini dans un fichier à part (style.css par exemple), il faut passer 
    par la fonction getComputedStyle :*/
    const style = getComputedStyle(brian); // récupère toutes les propriétés de style de l'élément
    console.log("La couleur du texte de l'élément brian est " + style.color);
    console.log("Le background-color de l'élément brian est " + style.backgroundColor);

    // *********************************************************************************************** //
    // *************************** Events et manipulations de classes ******************************** //
    // *********************************************************************************************** //

    // ! attention, commentez bien la ligne 35 avant de continuer, sinon brian restera en bleu

    // Quand on clique sur le bouton "Clients pénibles", on veut que tous les clients bruyants
    // soient marqués comme clients pénibles. Voici comment faire :

    const button = document.getElementById('filter-clients');
    button.addEventListener('click', function() {
        console.log("button is ok")  // permet de vérifier que l'event est bien déclenché au clic

        // on va sélectionner les éléments ayant la classe client-bruyant (soit brian et brenda)
        // ces éléments seront associés à la variable const clientsBruyants sous forme d'un tableau
        const clientsBruyants = document.getElementsByClassName('client-bruyant');

        console.log(clientsBruyants); // permet de vérifier qu'on a bien les éléments brian et brenda dans le tableau
        // on boucle dans le tableau afin d'ajouter la classe "client-penible" chaque élément tour à tour
        // la classe "client-penible" est définie dans le css => elle a un color: red.
        for(let i = 0; i < clientsBruyants.length; i++) {
            clientsBruyants[i].classList.add('client-penible');
        }
    });


    // Quand on clique sur le bouton "Inverser", on veut que tous les clients pénibles perdent leur classe
    // "client-penible" et que tous les éléments qui n'avaient la classe "client-penible" la reçoivent :
    const buttonReserve = document.getElementById('reverse-clients');
    buttonReserve.addEventListener('click', function() {
        console.log("buttonReset is ok"); // permet de vérifier que l'event est bien déclenché au clic

        const allClients = document.querySelectorAll('p'); // on sélectionne tous les éléments <p>

        for(let i = 0; i < allClients.length; i++) {
            if(allClients[i].classList.contains('client-penible')) {
                allClients[i].classList.remove('client-penible');
            } else {
                allClients[i].setAttribute('class', 'client-penible');
            }
        }

    });

    // Cliquez plusieurs fois sur les boutons "clients pénibles" et "inverser" : 
    // vous allez noter un comportement étrange : la première fois, tout se passe comme prévu, 
    // puis non ! Ouvrez l'inspecteur et observez quelles classes s'ajoutent et s'enlève quand vous
    // cliquez sur les boutons - cela correspond exactement à ce qui est codé dans nos eventListener :)
    // Une fois que vous avez compris la logique, essayez de bidouiller le code pour obtenir un vrai toggle !
};