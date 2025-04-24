const bt = document.getElementById("boutonTest");
const nbclick = document.getElementById("nb");
let cpt=0;

bt.addEventListener('click', function (){
    cpt++;
    cpt==10 ? alert('vous avez cliqué !'): null;
    nbclick.innerText=cpt;
    //console.log(cpt);
});


//Q1: Detecter un click sur un bouton
//------------------------------------------------//
const pos = document.getElementById("ps");

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    pos.innerText = "" + x + " | " + y;
    //console.log(`Souris : X = ${x}, Y = ${y}`);
});


//Q2: Afficher les coordonnées de la souris
//------------------------------------------------//
const lien = document.getElementById("lien");

lien.addEventListener("click", function(){
    event.preventDefault();
    alert('laisse tomber ca fonctionne pas ! ');
});


//Q3: Bloquer la consultation d'un lien
//------------------------------------------------//
for (let i=0; i<=20; i+=2){
    //console.log(i);
}

let i=0;
const list = document.getElementById("list");

while (i<=20) {
    //console.log(i+=2);
    list.innerText+=i+'\n'; //+= add items
    i+=2;
}


//Q4: Afficher la liste des nombres pairs de 0 -> 20
//------------------------------------------------//
//let n = prompt("Entrer un chifre : ");
const sum = document.getElementById("sum");
let n=5;
let tmp = 0;
11
for (let i=1; i<=n; i++){
    tmp=tmp+i;
}
sum.innerText = `la Somme de 1 à ${n} est: ${tmp}`
//console.log(`la Somme de 1 a ${n} est : ${tmp}`);// ${} interpollation utilisation variable dans affichage


//Q5: Afficher la somme des nombres de 1 à n
//------------------------------------------------//
//let nb = prompt("table du ? : ");
let nb= 5;
let res=0;

const t = document.getElementById("table");


//console.log(`Table du ${n}: `);
t.innerText=`Tables du ${nb}: \n`;
for (let i=0; i<10; i++){
    res=nb*i;
    //console.log(`${i} * ${n} = ${res}`);
    t.innerText+=`${i} * ${nb} = ${res}\n`;
}


//Q6: Affiche la table complète de multiplication
//------------------------------------------------//
let st = "EH BAH VOILA !";
let tmpS = '';

const display = document.getElementById("display");

for (let i = st.length-1; i>=0; i--) {
    tmpS += st[i]; //tmp = tmp + i
}
//console.log(`${st} => ${tmpS}`);
display.innerText=`${st} => ${tmpS}`;


//Q7: Inverser une chaine de caractere
//------------------------------------------------//
for (let i=0; i<50; i++){
    if(i%3 == 0){console.log("Fizz")}
    else if(i%5 == 0){console.log("Buzz")}
    else if(i%3 && i%5 == 0){console.log("FizzBuzz")}
    else{console.log(i)}
}


//
//------------------------------------------------//