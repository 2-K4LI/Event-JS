let tab=[];

//init tab
for (let i=0; i<10; i++){
    tab[i]=Math.round(Math.random()*100);
}
console.log(`tableau initial: ${tab}`);


//sort tab
let i=0;
let tmp=0;
let state=true;

tab.sort();

console.log(`tableau trie: ${tab}`);
