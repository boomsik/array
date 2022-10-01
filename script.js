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

//Random selection//

//Math.random();
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random()*10);
console.log(Math.random()*100);
console.log(Math.random()*1000);

//Math.floor();//
console.log(Math.floor(9.9999));
console.log(Math.floor(6.7535));
console.log(Math.floor(3.1412));

console.log(Math.floor(Math.random() * 4));

var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
var randomIndex = Math.floor(Math.random() * 4);
// console.log(randomWords[randomIndex]);
console.log(randomWords[Math.floor(Math.random() * 4)]);

var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
    ];
    // Мне выпить еще молочного коктейля?
    console.log(phrases[Math.floor(Math.random() * 5)]); 
    // Мне пора делать домашнюю работу?
    console.log(phrases[Math.floor(Math.random() * 5)]); 
    
    //Генератор случайных дразнилок
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    // Выбор случайной части тела из массива randomBodyParts:
    var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
    // Выбор случайного прилагательного из массива randomAdjectives:
    var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
     // Выбор случайного слова из массива randomWords:
    var randomWord = randomWords[Math.floor(Math.random() * 5)];
    // Соединяем случайные строки в предложение:
    var randomInsult = "У тебя " + randomBodyPart + " словно " +  randomAdjective + " " + randomWord + "!!!";
   console.log(randomInsult);

   //Homework//
//    #1. Новые дразнилки
//     Сделайте генератор случайных дразнилок со своим набором 
//     слов.
        var randomBodyParts = ["рот", "ухо", "лицо"];
        var randomAdjectives = ["сранная", "ущербная", "никчемная"];
        var randomWords = ["тараканище", "жирафина", "псина", "жабина", "жучина"];
        // Выбор случайной части тела из массива randomBodyParts:
        var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
        // Выбор случайного прилагательного из массива randomAdjectives:
        var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
        // Выбор случайного слова из массива randomWords:
        var randomWord = randomWords[Math.floor(Math.random() * 5)];
        // Соединяем случайные строки в предложение:
        var randomInsult = "У тебя " + randomBodyPart + " словно " +  randomAdjective + " " + randomWord + "!!!";
        console.log(randomInsult);

// #2. Изощренные дразнилки
// Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа: «У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]». 
// Подсказка: нужно будет создать еще один массив.

            var randomBodyParts = ["рот", "ухо", "лицо", "нос", "бровь"];
            var randomAdjectives = ["сранная", "ущербная", "никчемная", "длинная", "волосатая"];
            var randomWords = ["таракана", "жирафa", "псины", "жабы", "слона"];
            var randomAnimal = ["хвост","лапа","шея","ухо"]
            // Выбор случайной части тела из массива randomBodyParts:
            var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
            // Выбор случайного прилагательного из массива randomAdjectives:
            var randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
            // Выбор случайного слова из массива randomWords:
            var randomWord = randomWords[Math.floor(Math.random() * 5)];

            var randomAnimal = randomAnimal[Math.floor(Math.random() * 5)];
            // Соединяем случайные строки в предложение:
            var randomInsult = "У тебя " + randomBodyPart + " еще более " +  randomAdjective + " чем " + randomAnimal  + " y " + randomWord +  "!!!";
            console.log(randomInsult);

            // #3. Оператор + или join?
            // Сделайте две версии своего генератора дразнилок: одна пусть 
            // использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью join. Какой вариант вам больше нравится и почему?
            var randomBody = ["body","head","leg","hand","face"];
            var randomInsult = ["worthless","flattened","Smelly"];//никчемный,расплющенный,вонючий
            var randomAnimalss = ["cockroach","toad","beetle stink","poop"];
            var randomBodies = randomBody[Math.floor(Math.random() * 3)];
            var randomInsults = randomInsult[Math.floor(Math.random() * 3)];
            var randomAnimalsss = randomAnimalss[Math.floor(Math.random() * 4)]
            var randomWords = " Your " + randomBodies + " even more " + randomInsults + " than a " + randomAnimalsss + "!!!";
            console.log(randomWords);
       
            // #4. Соединение чисел
            // Как с помощью метода join превратить массив [3, 2, 1] в строку 
            // "3 больше, чем 2 больше, чем 1"?
        
            var numbers = [3,2,1];
            console.log(numbers.join(" больше, чем "));
            
        