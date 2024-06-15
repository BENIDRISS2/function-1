/*Exercice 1:

Écrire un script qui demande à l’utilisateur 2 nombres, et d’afficher le résultat de la multiplication de ces 2 nombres au clic sur le bouton “voir résultat 

exemple avec 4 et 5: "4 multiplié par 5 vaut 20" */


let button=document.getElementById('submit');
let affresult=document.getElementById('check')

document.getElementById('multiplication').addEventListener('submit',function (event) {
    event.preventDefault();

    let number1 = parseInt(document.querySelector('.leInputEmail1').value);
let number2 = parseInt(document.querySelector('#exampl').value);
let resultat=number1*number2;
affresult.innerHTML=`${number1} multiplié par ${number2} = ${resultat}`;
    console.log(resultat)
})
/*__________________________________________________________________________________________________ */
/*Écrire un script qui demande à l’utilisateur d’ajouter un nombre n. Calculer  le modulo de ce nombre par 4 et afficher le résultat dans une phrase comme suit:"Si l'on divise 21 par 4 , le reste est de 1" */
let phrase=document.getElementById('chack')
document.getElementById('moduloForm').addEventListener('submit',function (event) {
    event.preventDefault();
    let numberajoute=parseInt(document.querySelector('#nombre-ajoute').value);
    let modulbi= numberajoute%4;
    phrase.innerHTML=`si l'on divise ${numberajoute} par 4 le reste est de ${modulbi}`
    console.log(phrase)
    
})
// factoriser un nombre
let facteur = document.getElementById('chuck');
document.getElementById('calcu-facto').addEventListener('submit', function (event) {
    event.preventDefault();
    let numberajoute = Number(parseInt(document.querySelector('#factorisera').value));

    if (isNaN(numberajoute) || numberajoute < 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numberajoute; i++) {
        factorial *= i;
    }

    facteur.innerHTML = "La factorielle de " + numberajoute + " est " + factorial;
});