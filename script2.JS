let fin='- - - - - - - - - -';

let a=5;
let b=10;

console.log(a+b);
console.log(fin);


//EX1: Operation en console
//------------------------------------------------//
let s='42';
let s_to_nb=parseInt(s);
let res= s_to_nb*2;

console.log(res);
console.log(fin);


//EX2: Recuperer un string, et le multiplier par 2
//------------------------------------------------//
let t=7;

console.log("Table du "+t+":");
for (let i=0; i<=10; i++){
    console.log(t+" x "+i+" = "+t*i);
}
console.log(fin);


//EX3: Afficher table multiplication
//------------------------------------------------//
let tmp=0;

for (let i=1; i<=100; i++){
    tmp+=i;
}
console.log(tmp);
console.log(fin);


//EX4: Somme des 100 premiers nb
//------------------------------------------------//
let age= 17;
let cond= age > 18 ? "Majeur !" : "mineur"; //Ternary opration -> (test ? Yes :non)

console.log(cond);
console.log(fin);


//EX5: majeur ou mineur ? with Ternary operation
//------------------------------------------------//
let list= [18, 20, 12, 13, 3, 8, 9, 10, 11];
let note =list[Math.floor(Math.random()*list.length)];

if (note < 10){
    console.log(note + " Insufisant");
}

else if (note < 12){
    console.log(note + " Passable");
}

else if (note < 14){
    console.log(note + " Assez Bien");
}

else if (note < 16){
    console.log(note + " Bien");
}

else if(note >= 16){
    console.log(note + " Tres Bien");
}
console.log(fin);


//EX6: Donner com d'une note, dans un tableau
//------------------------------------------------//
let cpt=0;
let numMyster= Math.floor((Math.random()*100)+1);
console.log(numMyster);
let numSaisi = null;

//setTimeout(() => {
//while (numSaisi != numMyster){
//    numSaisi= parseInt(prompt("Saisir un chiffre Entre 1 et 100 : "));
//
//    if (numSaisi < numMyster){
//        console.log("Trop Petit !");
//        cpt++;
//    }
//    if (numSaisi > numMyster){
//        console.log("Trop Grand !");
//        cpt++;
//    }
//    else if (numSaisi == numMyster){
//        console.log("Bravo !");
//        cpt==0 ? `Vous avez reussi du 1er Coup !` : `Vous avez reussi en ${cpt} Coups !`
//    }
//    
//}
//}, 2000)


//Gamme: Juste Prix !
//------------------------------------------------//