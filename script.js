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

 var listViktorAndJulia = listBooksViktor.concat(listBooksJulia,addedBooksViktorAndJulia);
 console.log(listViktorAndJulia);



var colors = ["красный", "зеленый", "синий"];
console.log(colors.indexOf("синий"));
console.log(colors.indexOf("зеленый"));

var insects = ["Пчела", "Муравей", "Пчела", "Пчела", "Муравей"];
console.log(insects.indexOf("Пчела"));


// Превращаем массив в строку

// var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
// console.log(boringAnimals.join());

var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
console.log(boringAnimals.join("-"));
console.log(boringAnimals.join("*"));
console.log(boringAnimals.join("и"));
console.log(boringAnimals.join(" и "));
console.log(boringAnimals.join(" или "));

var myNames = ["Николас", "Эндрю", "Максвелл", "Морган"];
console.log(myNames.join(" "));

var ages = [11, 14, 79];
console.log(ages.join(" "));

var landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");
console.log(landmarks);
landmarks.pop();
//"Дом подруги"
landmarks.pop();
//"Моя бывшая школа"
landmarks.pop();
//"Приют для кошек"
console.log(landmarks);
landmarks.pop();
//"Пожарная станция"
landmarks.pop();
//"Протекающий гидрант"
landmarks.pop();
//"Мигающий фонарь"
console.log(landmarks);
landmarks.pop();
//"Дорожка к дому"
landmarks.pop();
//"Мой дом"
console.log(landmarks);