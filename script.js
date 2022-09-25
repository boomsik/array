var animals =  ["cat","dog","pig"];
 console.log(animals[0]);
animals.push("tiger");
console.log(animals.length);
animals.unshift("mouse");
console.log(animals.length);
console.log(animals[4]);
console.log(animals[0]);
console.log(animals.length);
console.log(animals[0]);
console.log(animals[4]);
var lastAnimal = animals.pop();
console.log(lastAnimal);
var firstAnimal = animals.shift();
console.log(firstAnimal);
animals.push(lastAnimal);
animals.unshift(firstAnimal);
console.log(animals[0]);
console.log(animals[4]);


var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);


// var listBooksViktor = ["Harry Potter", "Lord of the Rings","Sword and fire"];
// console.log(listBooksViktor.length);
// console.log(listBooksViktor[0]);
// listBooksViktor.push("481 degrees Fahrenheit");
// console.log(listBooksViktor.length);
// listBooksViktor.unshift("dog's heart");
// console.log(listBooksViktor.length);
// console.log(listBooksViktor);

// var listBooksJulia = ["Alchemist","Dracula","Alice in wonderland"];
// console.log(listBooksJulia.length);
// console.log(listBooksJulia[0]);
// listBooksJulia.push("The Master and Margarita");
// console.log(listBooksJulia.length);
// listBooksJulia.unshift("How to Stop Being a Sheep");
// console.log(listBooksJulia.length);
// console.log(listBooksJulia);

// var listViktorAndJulia = listBooksViktor.concat(listBooksJulia);
// console.log(listViktorAndJulia);




var listBooksViktor = ["Harry Potter", "Lord of the Rings","Sword and fire"];
console.log(listBooksViktor.length);
console.log(listBooksViktor[0]);
listBooksViktor.push("481 degrees Fahrenheit");
let firstAddedBookViktor = listBooksViktor[3];
console.log(listBooksViktor.length);
listBooksViktor.unshift("dog's heart");
let secondAddedBookViktor = listBooksViktor[0];
console.log(listBooksViktor.length);
console.log(listBooksViktor);
console.log(firstAddedBookViktor);
console.log(secondAddedBookViktor);

var listBooksJulia = ["Alchemist","Dracula","Alice in wonderland"];
console.log(listBooksJulia.length);
console.log(listBooksJulia[0]);
listBooksJulia.push("The Master and Margarita");
let firstAddedBookJulia = listBooksJulia[3];
console.log(listBooksJulia.length);
listBooksJulia.unshift("How to Stop Being a Sheep");
let secondAddedBookJulia = listBooksJulia[0];
console.log(listBooksJulia.length);
console.log(listBooksJulia);
console.log(firstAddedBookJulia);
console.log(secondAddedBookJulia);

var addedBooksViktorAndJulia = [firstAddedBookViktor,secondAddedBookViktor,firstAddedBookJulia,secondAddedBookJulia];
console.log(addedBooksViktorAndJulia);
















var pigs = ["pig1","pig2","pig3"];
pigs.push("pig5");
var pigVlad = pigs[3];
console.log(pigVlad);




var pigindex = pigs.push("pig4");
var addedPig = pigs[pigindex];
console.log(pigindex);
console.log(pigs);
console.log(addedPig);
