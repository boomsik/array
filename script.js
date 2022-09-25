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


var listBooksViktor = ["Harry Potter", "Lord of the Rings","Sword and fire"];
console.log(listBooksViktor.length);
console.log(listBooksViktor[0]);
listBooksViktor.push("481 degrees Fahrenheit");
console.log(listBooksViktor.length);
listBooksViktor.unshift("dog's heart");
console.log(listBooksViktor.length);
console.log(listBooksViktor);

var listBooksJulia = ["Alchemist","Dracula","Alice in wonderland"];
console.log(listBooksJulia.length);
console.log(listBooksJulia[0]);
listBooksJulia.push("The Master and Margarita");
console.log(listBooksJulia.length);
listBooksJulia.unshift("How to Stop Being a Sheep");
console.log(listBooksJulia.length);
console.log(listBooksJulia);

var listViktorAndJulia = listBooksViktor.concat(listBooksJulia);
console.log(listViktorAndJulia);