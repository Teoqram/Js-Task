// let arr1 = [7, 9, 0, -2];
// let arr2 = [ [6], 3, 4, 6 ,7];

// console.log(arr1.slice(0,1)[0]);
// console.log(arr2.slice(0,1)[0][0]); slice ile arraydan say cxarma

// let list = [9,8,7,6,5,4,3,2,1]
// let result = list.join('-')
// console.log(result);  join metodu




// let students = ["Samir", "Rasim", "Hazrat", "Fatali"];
// let studentName = "Sr";
// let data = students.includes(studentName); includes metodu true/folse qaytarir boolean 


// let result = data


// ? `${studentName} is a student`
// : students.push(studentName); push bir arraydan o biri arraya string number her sey push edir


// console.log( studentName + " Has been added to the student list ");





// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.reverse();

// console.log(result);  reverse arrayi tersine cevirir arrayi deyisir




// let arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

// let result = arr.flat(); flat arrayin icindeki arraylari acib hamisini bir yere yigir

// console.log(result);



// let arr = ["samir", "natiq", "hezret", "rasim"];
// console.log(arr[arr.length - 1] + " is last student in the class");

// let list = ["samir", "natiq", "hezret"];
// console.log(`${list[list.length - 1]} is last student in the class`); elementin icindeki last childi tapir sonuncu elementi logda gosterir 



// const string = "Hello world";


// const stringLenght = string.length;

// console.log(stringLenght);  sayini tapmaq ucun sade usuldur 



// function getLength(str) {
//     return str.length;  // stringin uzunluğunu qaytarır
//   }

//   const word = "hello";  // "hello" stringini word dəyişkəninə mənimsədik
//   console.log(getLength(word));  // 5  buda str ile





// let elementCount = 5;
// let element = 11;
// let result = new Array(elementCount).fill(element);
// console.log(result); 11 elementi 5 defe tekrar etdi logda

// let text = "javascript"
// let result = text.charAt(0).toUpperCase() + text.slice(1)  //charAt stringin icindeki indexi tutur, toUpperCase herifi boyudur, text.slice eyer 1 ci elementin yerne tekce J yazacaqdi
// console.log(result);



// let userName = "jhon doe"

// let result = userName.toUpperCase()

// console.log(result); butun herfleri boyuk edir  asagidakida qisa yazilisdir 



// let userName = "jhon doe"
// console.log(userName.toUpperCase()); ^^^^


// let weather = "today is a sunny day "

// console.log(weather.replace("sunny", "rainy")); replacenin icinde qeyd edib deyismek oliur stringi

// let weather = "today is a sunny day "

// console.log(weather.replace("sunny","rainy")); sunny sozun deyisdi replace. amma icinde basqa sunnyde olsa idi onuda deysecekdi


// let string = "JavaScript is a funny language"

// console.log(string.split(" ")); split metodu stringleri splitin icindeki emelyata gore deyisir 



// let fruits = ["Apple", "Banana", "Mango"]; // Başlanğıc meyvələr
// let newFruit = "Orange"; // Əlavə ediləcək meyvə

// // Yeni meyvəni array-ə əlavə edirik
// fruits.push(newFruit);

// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// // Axtarılacaq meyvə
// let searchedFruit = "Orange";

// // Əgər meyvə array-də varsa, tapıldığını çap et, yoxdursa, tapılmadığını yaz
// if (fruits.includes(searchedFruit)) {
//     console.log(`Axtardığınız meyvə "${searchedFruit}" tapıldı.`);
// } else {
//     console.log(`Axtardığınız meyvə  tapılmadı.`);
// }




// let arr1 = [ "jone","jame"]
// let arr2 = ["doe","simit"]



// let newArr = arr1.concat(arr2)

// newArr.shift(); ilk elementi silir
// newArr.pop();   son elementi silir

// // newArr.splice(0,1)
// // newArr.splice(-1,1) ayri arrayda gosterir 
// // let newArr1 = newArr.slice(1,-1) yeni array yaradib icine atir

// console.log(newArr);




// let arr1 = "javascript" Arrayin sırasını dəyişmək (reverse())

// let arr2 = arr1.split("").reverse().join("");   Stringi array-ə çevirmək (split(""))
// console.log(arr2); Arrayi yenidən string-ə çevirmək (join(""))


// let fruits = ["apple", "banana", "pie", "applepie"]
// console.log(fruits.indexOf("banana")); // 1 idexOf necenci indexde yerlesdiyin tapir




// let count = [1, 2, 3, 4]
// let say = 0

// for (let i = 0; i < count.length; i++) {
//     say += count[i]

// }
// console.log(say);


// let counts = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < counts.length; i++) {   
//     sum += counts[i]
// }
// console.log(sum); ///logda cavab 15 olur forun toplama usulu

// ________
// let counts = [1, 2, 3, 4]
// let sum = 0
// for (num of counts) {   
//     sum += num bunun acmasi sum= sum+numun qisaldilmisidir 
// }
// console.log(sum); bu qisa varyantidi 


// let result = 1
// for (let i = 1; i <= 5; i++) {
//     result *= i
// }
// console.log(result);

// let result =1;
// let i=1;
// while(i<= 5){
//     result *= i;
//     i++;

// }
// console.log(result); buda While metodudur 


// let numbers = [3, 7, 8, 9, 5]

// let max = numbers[0]

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];


//     }

// }
// console.log(max); icindeki en boyuk reqemi gosterir



// let word = "hello"

// let word2 = ""
// for (let i = word.length - 1; i >= 0; i--) {  <<<bu yazdigimiz sozu tersine cevirir
//     word2 = word2 + word[i]



// }
// console.log(word2);


// let numbers = [34, 2, 3, 64, 24, 66, 10, 8, 12,]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {     2 e bolunurse tru bolunmurse false cut tek ededler
//         console.log(numbers[i], true);
//     } else {
//         console.log(numbers[i], false);
//     }

// }


// alert("OYUNA XOŞ GƏLMİSİNİZ!!!")

// let answer1 = prompt("Dünyanın ən böyük okeanı hansıdır?")
// if (answer1.toLowerCase() === "sakit okean") {
//     alert("✅ Düzgün cavab!");
// } else {
//     alert("❌ Səhv cavab! Doğru cavab: Sakit Okean!");
// }


// let answer2 = prompt("Dünyanın ən sürətli quşu hansıdır?")
// if (answer2.toLowerCase() === "qartal") {
//     alert("✅ Düzgün cavab! Əla gedirsiz!!");

// } else {
//     alert("❌ Səhv cavab! Doğru cavab: Qartal!!");
// }

// alert("Son suala Hazirsan?")

// let answer3 = prompt("Dünyanın ən hündür binası hansıdır?")
// if (answer2.toLowerCase() === "burj khalifa") {
//     alert("✅ Düzgün cavab! Sadəcə Alqışlayıram səni!!");

// } else {
//     alert("❌ Səhv cavab! Doğru cavab: Burj Khalifa!!")

// }

// alert("Qoşulduğun üçün təşəkkür edirik!!")    Alert Prompt mesajlari ile question game 





let pet = "golden retriever";
let pet2 = pet.toUpperCase()
console.log(pet2);

// _________1^butun herfleri boyuk edir

let question = "Can you solve this problem?";

let question2 = question.length;
console.log(question2);
// _________2^ uzunugun tapir

let activity = "This game is boring";

let activity2 = activity.replace("boring", "exciting")
console.log(activity2);

// __________3^ sozun yerini yeni soz ile deyisir 

let headline = "Choose Your Adventure!";

let headline2 = headline.substring(12, 22);
console.log(headline2);

// __________4^ necenci indexde yerlesdiyine gore sou cxarmaq 


let desserts = ["Ice Cream", "Pie", "Pudding"];

let desserts2 = "Cake";
desserts.push(desserts2);

console.log(desserts);

// _________5^ cakeni push eddim desertslerin arasina 


let cities = ["London", "New York", "Tokyo"];

let cities2 = cities.includes("Tokyo");

console.log(cities2);


//_________6^ inculudes metodu true false qaytarir 


let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];

let car = cars.concat(trucks)

console.log(car);

//_________7^ concat iki arrayi birlesdirir 

let dessert = ["Ice Cream", "Pie", "Pudding", "Cake"];

let index = dessert.indexOf("Pie")
console.log(index);

//________8^ indexOf indexsin necenci yerde yerlesdiyin logda gosterir 


let word = "Technology";

let string = word.split("").reverse().join("");

console.log(string);


//_________9^  Split arrayi setrlere cevirdi reverse tersine cevirdi joinde tekrar setire sevirdi
























































































