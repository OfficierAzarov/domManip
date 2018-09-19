document.getElementById('my-id');


const brian = document.getElementById('brian');
const brenda = document.getElementById('brenda');
const jeanMichel = document.getElementById('jean-michel');

brian.innerHTML = 'Brian : "Finalement, je veux des nuggets en plus !!"';
// brian.setAttribute('style', 'color: green');

// brian.setAttribute('class', 'client-penible');

const commandeBrenda = brenda.innerHTML;
console.log(commandeBrenda);

const style = getComputedStyle(brian);
console.log(style.color);

// attribuer la classe "client-penible" à brian, brenda, jean-michel :



const button = document.getElementById('filter-clients');
button.addEventListener('click', function() {

    // const brendaByClass = document.getElementsByClassName('client-bruyant');
    // brendaByClass[0].setAttribute('class', 'client-penible');

    const clientsBruyants = document.getElementsByClassName('client-bruyant');
    console.log(clientsBruyants);
    for(let i = 0; i < clientsBruyants.length; i++) {
        clientsBruyants[i].setAttribute('class', 'client-penible');
        // clientsBruyants[i].classList.add('client-penible');
    }
});

const buttonReset = document.getElementById('reverse-clients');
buttonReset.addEventListener('click', function() {
    console.log("buttonReset is ok");
    const clientsPeniblesReverse = document.querySelectorAll('p');
    for(let i = 0; i < clientsPeniblesReverse.length; i++) {
        if(clientsPeniblesReverse[i].classList.contains('client-penible')) {
            clientsPeniblesReverse[i].classList.remove('client-penible');
        } else {
            clientsPeniblesReverse[i].setAttribute('class', 'client-penible');
        }
    }

});

// if(les elements ont la classe client-penible) {
//     enlever classe client-penible
// } else {
//     ajouter classe client pénible
// }

// element.classList.remove("mystyle");
// element.classList.contains(class);
