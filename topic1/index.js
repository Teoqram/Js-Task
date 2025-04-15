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





// let pet = "golden retriever";
// let pet2 = pet.toUpperCase()
// console.log(pet2);

// // _________1^butun herfleri boyuk edir

// let question = "Can you solve this problem?";

// let question2 = question.length;
// console.log(question2);
// // _________2^ uzunugun tapir

// let activity = "This game is boring";

// let activity2 = activity.replace("boring", "exciting")
// console.log(activity2);

// // __________3^ sozun yerini yeni soz ile deyisir 

// let headline = "Choose Your Adventure!";

// let headline2 = headline.substring(12, 22);
// console.log(headline2);

// // __________4^ necenci indexde yerlesdiyine gore sou cxarmaq 


// let desserts = ["Ice Cream", "Pie", "Pudding"];

// let desserts2 = "Cake";
// desserts.push(desserts2);

// console.log(desserts);

// // _________5^ cakeni push eddim desertslerin arasina 


// let cities = ["London", "New York", "Tokyo"];

// let cities2 = cities.includes("Tokyo");

// console.log(cities2);


// //_________6^ inculudes metodu true false qaytarir 


// let cars = ["Sedan", "Coupe"];
// let trucks = ["Pickup", "SUV"];

// let car = cars.concat(trucks)

// console.log(car);

// //_________7^ concat iki arrayi birlesdirir 

// let dessert = ["Ice Cream", "Pie", "Pudding", "Cake"];

// let index = dessert.indexOf("Pie")
// console.log(index);

// //________8^ indexOf indexsin necenci yerde yerlesdiyin logda gosterir 


// let word = "Technology";

// let string = word.split("").reverse().join("");

// console.log(string);


//_________9^  Split arrayi setrlere cevirdi reverse tersine cevirdi joinde tekrar setire sevirdi

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4])); // Output: 10



// function factorial(n) {
//     let sum = 0;
//     for (let i = 0; i < n.length; i++) {
//         sum += n[i];
//     }
//     return sum;
// }

// console.log(factorial([1*2*3*4*5])); // Output: 120  buda duzdu amma asagdaki dogrusudu 



// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n ; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // Output: 120  facrorial 5 i 120 edir hesablamasi beledir 






// function number (numbers) {
//     let max = numbers[0]

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];

//         }


//     }
//     return max;


// }
// console.log(number([3, 7, 8, 9, 5])); // Output: 9  funcsia ile en boyuk reqemi gosterir asagidaki novude var

// function findMax(arr) {
//     return Math.max(...arr);
// }

// console.log(findMax([3, 7, 2, 8, 5])); // Output: 8  bu da en boyuk reqemi gosterir




// function reverseString(str) {
//     let arr2 = str.split("").reverse().join("");
//     return arr2;
// }

// console.log(reverseString("hello")); // olleh stringi tersine cevirir split arraye cevirir reverse tersine cevirir join ise tekrar stringe cevirir


// function isPrime(n) {
//     if (n <= 1) return false; // 1 və ondan kiçiklər sadə deyil
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false; // Əgər tam bölünürsə, sadə deyil
//     }
//     return true; // Heç bir ədədə tam bölünməyibsə, sadədir
// }

// console.log(isPrime(7));   // Output: true
// console.log(isPrime(4));   // Output: false
// console.log(isPrime(29));  // Output: true
// console.log(isPrime(100)); // Output: false


// function countVowels(str) {
//     let count = 0;  
//     let vowels = "aeiou";  

//     for (let i = 0; i < str.length; i++) {  
//         let char = str[i].toLowerCase();  
//         if (vowels.indexOf(char) !== -1) {  
//             count++;  
//         }
//     }

//     return count;  
// }

// console.log(countVowels("javascript")); // Output: 3  bu funksiya ile stringin icindeki samitlerin sayini gosterir

// function countVowels(str){
//     let vowels ="aeiou";
//     let count = 0;
//     for(let i =0; i< str.length; i++){
//         let char = str[i].toLowerCase();
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;

// }
// console.log(countVowels("javascript")); // Output: 3 ordki samitlerin sayini gosterir



// function printEvens(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// printEvens(10); // Output: 2, 4, 6, 8, 10  bu funksiya ile cut ededleri gosterir  

// function printEvens(n) {
//         for (let i = 2; i <= n; i+=2) {

//                 console.log(i);

//         }
//     }
//     printEvens(10); bununla da cut ededleri gosterir 2 den baslayib 2 2 artirir 

// function sumDigits(num) {
//     let numString = num.toString();
//     let sum = 0;

//     for (let i = 0; i < numString.length; i++) {
//         sum += parseInt(numString[i]); //parseInt stringi reqeme cevirir ve sum+= in acmasi sum = sum + parseInt(numString[i]) olur
//     }
//     return sum;
// }
// console.log(sumDigits(123)); // Output: 6  bu funksiya ile reqemlerin toplamini gosterirn



// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }


// }
// multiplicationTable(3)  // Output: 3 x 1 = 3, 3 x 2 = 6, bu funksiya ile reqemlerin vuraglarini gosterir




// function fizzBuzz(num) {

//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);

//         }

//     }
// }
// fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz  bu funksiya ile 3 e bolunenlere fizz 5 e bolunenlere buzz 3 ve 5 e bolunenlere fizz


// function performOperation(num1, callback) {
//    callback(num1);
//     }
//     function callbackFunc(num) {
//         console.log("Number;" + num);

//     }
//     performOperation(9, callbackFunc); // Output: Number: 5  bu funksiya ile callback funksiyasi cagirir ve num1 i gosterir 

// function transformArray(arr, callback) {
//     return arr.map(callback);
// }
// function callbackFunc(num) {
//     return num * 2;
// }
// const numbers = [1, 2, 3];
// const newArr = transformArray(numbers, callbackFunc);
// console.log(newArr);
// Output: [2, 4, 6, 8, 10]  bu funksiya ile arrayin icindeki reqemleri 2 ile vurur ve yeni array yaradir


// function transformArrayForLoop(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// }

// function callbackFunc(num) {
//     return num * 2;
// }

// const numbers = [1, 2, 3];

// console.log(transformArrayForLoop(numbers, callbackFunc)); 
// Output: [2, 4, 6]
// bu funksiya ile arrayin icindeki reqemleri 2 ile vurur ve yeni array yaradir for loop ile yazilmisdir


// function transformArrayForEach(arr, callback) {
//     let result = [];
//     arr.forEach( nu => {
//         result.push(callback(nu));
//     });
//     return result;
// }

// function callbackFunc(num) {
//     return num * 2;
// }

// const numbers = [1, 2, 3];

// console.log(transformArrayForEach(numbers, callbackFunc)); 
// Output: [2, 4, 6]
// bu funksiya ile arrayin icindeki reqemleri 2 ile vurur ve yeni array yaradir forEach ile yazilmisdir


// function filterArray(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;

// }
// function callbackFunc(num) {
//     return num % 2 === 0;
// }

// const newArr= filterArray([1, 2, 3, 4, 5], callbackFunc); // Output: [2, 4]  bu funksiya ile arrayin icindeki reqemleri 2 ye bolunenleri gosterir
// console.log(newArr); 


// function filterArray(arr, callback) {
//     return arr.filter(callback);
//     }

// function callbackFunc(num) {
//     return num % 2 === 0;
// }

// const newArr= filterArray([1, 2, 3, 4, 5], callbackFunc); // Output: [2, 4]  bu funksiya ile arrayin icindeki reqemleri 2 ye bolunenleri gosterir filter ile yazilmisdir
// console.log(newArr); 



// const companies = [
//     { name: "Whelp", category: "Development", start: 2002, end: 2021 },
//     { name: "ByQr", category: "Finance", start: 1998, end: 2023 },
//     { name: "Marandi", category: "Design", start: 2012, end: 2022 },
//     { name: "Kapital", category: "Technology", start: 1992, end: 2015 },
//     { name: "Pasha", category: "Retail", start: 1999, end: 2005 },
//     { name: "Rabite", category: "Finance", start: 2006, end: 2009 },
//     { name: "Irshad", category: "Development", start: 2004, end: 2021 },
//     { name: "AzGranata", category: "Design", start: 1993, end: 2011 },
//     { name: "AzerSun", category: "Development", start: 1997, end: 2001 },
//     { name: "Veyseloglu", category: "Design", start: 1988, end: 2018 }
// ];

// const ages = [30, 22, 16, 33, 32, 45, 63, 34, 24, 21, 27, 10, 19, 55];


// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }  // bu funksiya ile arrayin icindeki name leri gosterir for loop ile yazilmisdir



// const companies = [
//     { name: "Whelp", category: "Development", start: 2002, end: 2021 },
//     { name: "ByQr", category: "Finance", start: 1998, end: 2023 },
//     { name: "Marandi", category: "Design", start: 2012, end: 2022 },
//     { name: "Kapital", category: "Technology", start: 1992, end: 2015 },
//     { name: "Pasha", category: "Retail", start: 1999, end: 2005 },
//     { name: "Rabite", category: "Finance", start: 2006, end: 2009 },
//     { name: "Irshad", category: "Development", start: 2004, end: 2021 },
//     { name: "AzGranata", category: "Design", start: 1993, end: 2011 },
//     { name: "AzerSun", category: "Development", start: 1997, end: 2001 },
//     { name: "Veyseloglu", category: "Design", start: 1988, end: 2018 }
// ];

// const ages = [30, 22, 16, 33, 32, 45, 63, 34, 24, 21, 27, 10, 19, 55];

// function printCompanyNamesFor(companies) {
//     for (let i = 0; i < companies.length; i++) {
//         console.log(companies[i].name);
//     }
// }

// // Funksiyanı çağır
// printCompanyNamesFor(companies); // bu funksiya ile arrayin icindeki name leri gosterir for loop ile yazilmisdir

// function printCompanyNamesForEach(companies) {
//     companies.forEach(company => {
//         console.log(company.name);
//     });
// }

// // Funksiyanı çağır
// printCompanyNamesForEach(companies); // bu funksiya ile arrayin icindeki name leri gosterir forEach ile yazilmisdir

// function getCompanyNamesMap(companies) {
//     return companies.map(company => company.name);
// }

// // Funksiyanı çağır və nəticəni log et
// console.log(getCompanyNamesMap(companies)); // bu funksiya ile arrayin icindeki name leri gosterir map ile yazilmisdir


// function getCompanyYears(companies) {
//     return companies.map(company => company.end - company.start);
// }

// // Funksiyanı çağır və nəticəni çap et
// console.log(getCompanyYears(companies)); // bu funksiya ile arrayin icindeki end ve startlari cixir ve yeni array yaradir map ile yazilmisdir

// function getCompanyYears(companies) {
//     companies.forEach(company => {console.log(company.end - company.start);
//     }

//     );
// }

// console.log(getCompanyYears(companies)); // bu funksiya ile arrayin icindeki end ve startlari cixir ve yeni array yaradir forEach ile yazilmisdir

// function printCompanyYearsForEach(companies) {
//     companies.forEach(company => {
//         console.log(`${company.name}: ${company.end - company.start} il`);
//     });
// }

// // Funksiyanı çağır
// printCompanyYearsForEach(companies); // bu funksiya ile arrayin icindeki end ve startlari cixir ve yeni array yaradir forEach ile yazilmisdir ve name ile birlikde cixir




// function maxAges(age) {
//     return Math.max(...age);

// }
// const ages = [30, 22, 16, 33, 32, 45, 63, 34, 24, 21, 27, 10, 19, 55];
// const max = maxAges(ages);
// console.log("en boyuk yas ", max); // bu funksiya ile arrayin icindeki en boyuk reqemi gosterir Math.max ile yazilmisdir   


// function filterEvenNumbers(numbers) {
//     return numbers.filter(function(num) {
//         return num % 2 === 0;
//     });
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log( `Even numbers:  ${filterEvenNumbers(numbers)}`); // bu funksiya ile arrayin icindeki cut reqemleri gosterir filter ile yazilmisdir filter metodu ile yazilmisdir



// function filterEvenNumbers(numbers) {
//     return numbers.filter(function(num) {
//         return num % 2 !== 0;
//     });
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log( `Even numbers:  ${filterEvenNumbers(numbers)}`) // bu funksiya ile arrayin icindeki tek reqemleri gosterir filter ile yazilmisdir filter metodu ile yazilmisdir


// function removeDuplicates(arr) {
//     return arr.filter(function(item, index) {
//         return arr.indexOf(item) === index;
//     });
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6];
// console.log(removeDuplicates(numbers)); // bu funksiya ile arrayin icindeki tek reqemleri gosterir filter metodu ile yazilmisdir ve tek olanlari gosterir


// function greet(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Samir")); // Output: Hello, Samir!  bu funksiya ile name i gosterir ve hello ile birles  ve logda gosterir


// function createCounter() {
//     let counter = 0;
//     return function count () {
//         counter++;
//         return counter;
//     };

// }
// let sumCount = createCounter();
// console.log(sumCount());
// console.log(sumCount());
// console.log(sumCount()); // bu funksiya ile counteri artirir ve logda gosterir 

// function multiplierClosure(initialValue) {
//     return function(factor) {
//         initialValue *= factor;
//         return initialValue;
//     };
// }

// const multiplyBy = multiplierClosure(5); // Başlanğıc dəyəri 5
// console.log(multiplyBy(2)); // 5 * 2 = 10
// console.log(multiplyBy(3)); // 10 * 3 = 30
// console.log(multiplyBy(4)); // 30 * 4 = 120  bu funksiya ile reqemleri vurur ve logda gosterir


// function A(num){
//     function B(a){

//         return a*num;
//     }
//     return B

// }

// let result = A(2);
// console.log(result(3)); // bu funksiya ile numu vurur ve logda gosterir





// function countVowels(str) {
//     let vowels = "aeiou";
//     return str
//         .toLowerCase()
//         .split("") // Sətiri hərflərə parçalayır
//         .filter(char => vowels.includes(char)) // Yalnız saitləri saxlayır
//         .length; // Saitlərin sayını qaytarır
// }

// // Test
// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("JavaScript")); // 3
// console.log(countVowels("AEIOU")); // 5 bu funksiya ile stringin icindeki saitlerin sayini gosterir ve logda gosterir


// function countVowels(str) {
//     let vowels = "aeiou";

//     // 1. Sətiri kiçik hərfə çeviririk
//     let lowerStr = str.toLowerCase();

//     // 2. Sətiri hərflərə parçalayırıq
//     let charArray = lowerStr.split("");

//     // 3. Hər bir elementi yoxlayıb sait olub-olmadığını müəyyən edirik
//     let vowelArray = charArray.filter(function (char) {
//         return vowels.includes(char);
//     });

//     // 4. Saitlərin sayını hesablayırıq
//     let vowelCount = vowelArray.reduce(function (count, char) {
//         return count + 1;
//     }, 0);

//     return vowelCount;
// }

// // Testlər
// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("JavaScript")); // 3
// console.log(countVowels("AEIOU")); // 5
// console.log(countVowels("Coding is Fun!")); // 5 bu funksiya ile stringin icindeki saitlerin sayini gosterir ve logda gosterir


// function countVowels(str) {
//     const vowels = "aeiou";
//     const vowelArray = str.toLowerCase().split('').filter(char => vowels.includes(char));
//     return vowelArray.lenght;
// }

// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("JavaScript")); // 3 bu funksiya ile stringin icindeki saitlerin sayini gosterir ve logda gosterir


// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// }
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false  bu funksiya ile stringin tersine cevirir ve logda gosterir

// const isPalindrome = (str) => {

// return str == str.split("").reverse().join("") ? true : false olada biler olmayada
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false  bu funksiya ile stringin tersine cevirir ve logda gosterir

// const companies = [
//     { name: 'Whelp', category: 'Development', start: 2002, end: 2021 },
//     { name: 'ByQr', category: 'Finance', start: 1998, end: 2023 },
//     { name: 'Marandi', category: 'Design', start: 2012, end: 2022 },
//     { name: 'Kapital', category: 'Technology', start: 1992, end: 2015 },
//     { name: 'Pasha', category: 'Retail', start: 1999, end: 2005 },
//     { name: 'Rabite', category: 'Finance', start: 2006, end: 2009 },
//     { name: 'Irshad', category: 'Development', start: 2004, end: 2021 },
//     { name: 'AzGranata', category: 'Design', start: 1993, end: 2011 },
//     { name: 'AzerSun', category: 'Development', start: 1997, end: 2001 },
//     { name: 'Veyseloglu', category: 'Design', start: 1988, end: 2018 }
// ];


// companies.forEach (company => {
//     console.log(` ${company.name} sikerti ${company.category} ${company.start} - ${company.end}`);
// }) // bu funksiya ile arrayin icindeki name leri gosterir forEach ile yazilmisdir

// for (let i = 0; i < companies.length; i++) {
//     console.log(` ${companies[i].name} sikerti ${companies[i].category} ${companies[i].start} - ${companies[i].end}`);
// } // bu funksiya ile arrayin icindeki name leri gosterir for loop ile yazilmisdir


// companies.map(function (company) {
//     console.log(` ${company.name} sikerti ${company.category} ${company.start} - ${company.end}`); // bu funksiya ile arrayin icindeki name leri gosterir map ile yazilmisdir   
// }) 

// for(let names of companies){
//     console.log(` ${names.name} sikerti ${names.category} ${names.start} - ${names.end}`); // bu funksiya ile arrayin icindeki name leri gosterir for loop ile yazilmisdir
// }   // for ofla yazilib



// const company = companies.filter((categorys) => (categorys.category === "Development") );

// console.log(company); 


// const company = companies.filter((categorys) => {
// console.log(categorys.category == "Development");

// });

// console.log(company);  // filter ile tapdiq 

// companies.map(function (company) {
//     console.log(` ${company.name} sikerti ${company.end - company.start} yasinda fealiyyetini dayandirib`); // bu funksiya ile arrayin icindeki name leri gosterir map ile yazilmisdir   
// })

// let arr =companies.map((el) => {


//     return `${el.name} ${el.end - el.start} `
// })
// console.log(arr);  endeen starti cxir

// const sortedDataDesc = companies.sort((a, z) => a.year - z.year);

// console.log(sortedDataDesc); 


// const companies = [
//     { name: 'Whelp', category: 'Development', start: 2002, end: 2021 },
//     { name: 'ByQr', category: 'Finance', start: 1998, end: 2023 },
//     { name: 'Marandi', category: 'Design', start: 2012, end: 2022 },
//     { name: 'Kapital', category: 'Technology', start: 1992, end: 2015 },
//     { name: 'Pasha', category: 'Retail', start: 1999, end: 2005 },
//     { name: 'Rabite', category: 'Finance', start: 2006, end: 2009 },
//     { name: 'Irshad', category: 'Development', start: 2004, end: 2021 },
//     { name: 'AzGranata', category: 'Design', start: 1993, end: 2011 },
//     { name: 'AzerSun', category: 'Development', start: 1997, end: 2001 },
//     { name: 'Veyseloglu', category: 'Design', start: 1988, end: 2018 }
// ];


// const company = companies.filter((categorys) => (categorys.start >= 1998 && categorys.end <2014 ) );

// console.log(company);

// const company = companies.filter((categorys) => (categorys.end - categorys.start == 25));

// console.log(company);


// const reverseSorted = companies.sort((a, z) => a.name.localeCompare(z.name));
// console.log(reverseSorted);





// const numbers = [1,2,3,4,5,6];

// const [first, second, ...rest] = numbers;

// console.log(first); // 10
// console.log(second); // 20
// console.log(rest);

//   const car = {
//     make: "Tayota",
//     model: "Carola",
//     year: "2020",
//     color: "red"

//   };

//   const { make, model , year } = car

//   console.log(make);   // Output: Toyota
// console.log(model);  // Output: Camry
// console.log(year);   // Output: 2020

// function printUser({ name, job }) {
//         console.log(`${name} is a ${job}`);
//       }

//       const user = {
//             name: "Telman",
//             age: 25,
//             job: "developer"
//           };

//           printUser(user); // "Telman is a developer" 


// function Person(name, age) {
//     this.name = name
//     this.age = age
// }


// Person.prototype.greet = function () {
//     console.log(`HEllo my name is ${this.name} and, I'm ${this.age} years old `);


// }

// const user1 = new Person("Telman", 26);
// const user2 = new Person("Izzet", 25);


// user1.greet()
// user2.greet()


// const user = {
//     ad: "Telman",
//     surname: "Amirbecoff"
// };

// const { ad: userName, surname, country = 'uncnown' } = user;

// console.log(userName);
// console.log(surname);
// console.log(country);


// const data = {
//     errors: [
//         {
//             status: "403",
//             source: { pointer: "/data/attributes/secretPowers" },
//             detail: "Editing secret powers is not authorized on Sundays."
//         },
//         {
//             status: "422",
//             source: { pointer: "/data/attributes/volume" },
//             detail: "Volume does not, in fact, go to 11."
//         },
//         {
//             status: "500",
//             source: { pointer: "/data/attributes/reputation" },
//             title: "The backend responded with an error",
//             detail: "Reputation service not responding after three requests."
//         },
//         {
//             status: "403",
//             source: { pointer: "/data/attributes/secretPowers" },
//             detail: "Duplicate error with the same pointer and status."
//         },
//         {
//             status: "999",
//             source: { pointer: "/data/attributes/invalid" },
//             detail: "This is an invalid status error."
//         }
//     ]
// }; // output {id: '403 ' ,status: '403 ', source: {…}, detail: 'Duplicate error with the same pointer and status.'}


// const newErreorMassage = data.errors.slice().reverse().find(error => error.status === "403")

// console.log(newErreorMassage);

// let result = Object.entries(data.errors)
// let arr1 = []
// for (let arr of result) {
//     const elId = arr[0]
//     const elObj = arr[1]
//     const data1 = {
//         id: elId,
//         ...elObj
//     }
//     arr1.push(data1)
// }


// arr1.map(el => {
//     return el.status == "500" ? console.log("Error 500 detected", el) : ""
// });
// arr1.map(el => {
//     return el.source.pointer.includes('secretPower') ? console.log(el.source.pointer.replace('secretPower', 'Baku')) : ""

// });  

// let total = arr1.reduce( (sum,el) =>{
//     return sum+Number(el.status)
// },0 )
// console.log(total);



// etDay();
// console.log(dayOfWeek);const currentDate = new Date();
// const dayOfMonth = currentDate.getDate();
// console.log(dayOfMonth);

// const currentYear = new Date();
// const year = currentYear.getFullYear();
// console.log(year); 

// const currentMonth = new Date();
// const month = currentMonth.getMonth() +1;
// console.log(month);

// const currentDay = new Date();
// const dayOfWeek = currentDay.g // Datelerle bagli tapsiriq 


// function countDays() {

//     const userInput = prompt("Tarixi YYYY-MM-DD formatında daxil et:");

//     const userDate = new Date(userInput)
//     if (isNaN(userDate)) {
//         alert("Tarix düzgün daxil edilməyib.");
//         return;
//       }
//       const currentDate = new Date();

//       const differenceInTime = currentDate.getTime() - userDate.getTime();
//       const differenceInDays = Math.abs(Math.floor(differenceInTime / (1000 * 60 * 60 * 24)));
//       alert(`${differenceInDays} gün fərq var.`);

// }

// countDays();

// const userInput1 = prompt("Tarixi YYYY-MM-DD formatında daxil et-1");
// const userInput2 = prompt("Tarixi YYYY-MM-DD formatında daxil et-2");
// function countDaysDiference() {

//     let userDate1 = new Date(userInput1);
//     let userDate2 = new Date(userInput2);
//     let finalDay = Math.abs(
//         Math.floor((userDate1 - userDate2) / (1000 * 60 * 60 * 24))
//     )
//     isNaN(userDate1 || userDate2)
//         ? alert("yalniz reqem")
//         : alert(`${finalDay} ferq`)

// }

// countDaysDiference(); //datelerle hesablama alertde tarixden taix cxmaq




// const text = document.querySelector('#intro').innerText = ' bu metn deyisdi '


// console.log(text);  metni deyismek 

// const text = document.querySelector('#intro')

// const newText =text.innerText = ' bu metn deyisdi '


// console.log(newText); // bele yoluda var 



// const boxes = document.querySelectorAll('.box');
// console.log(boxes);

// for ( let i = 0 ; i < boxes.length; i++){
//     boxes[i].innerText = ' this a new box '
// } // for ile yazmisiq 


// const boxes = document.querySelectorAll('.box');
// console.log(boxes);

// boxes.forEach(function(box) {
//     box.innerText = 'this is a new box';
// }); forEach ile yazilisidir bu 

// const listItems = document.querySelectorAll('ul li');

// listItems.forEach(item => {
//     item.innerText = 'List Item Updated13';
// });

// const listItems = document.querySelectorAll('li');

// // for( let i = 0 ; i < listItems.length; i++){
// //     listItems[i].innerText = ' this a new list '

// // }

// Array.from(listItems).forEach((el) => {
//     el.innerText = ' this neww content '

// });

// const headers = document.querySelectorAll('#hello');

// headers.forEach((header) => {
//     if (header.innerText === 'salam') {
//         header.innerText = 'sağol';
//     }
// });


// const headers = document.querySelectorAll('#hello');

// for (let i = 0; i < headers.length; i++) {
//     if (headers[i].innerText === 'salam') {
//         headers[i].innerText = 'sağol';
//     }


// }


// const newEl = document.querySelector("#welcomeText");
// let newEl2 = newEl.innerHTML = "Hello Wisitor!";


// for (let i = 0; i < newEl2.length; i++) {
//     newEl2[i].innerText = "Welcome to my website!"

// }


// const newEl = document.querySelector("#welcomeText");

// // Əvvəlcə mətni yazırıq
// newEl.innerText = "Hello Wisitor!";

// // Sonra dövr qurub mətni dəyişirik
// let text = "Welcome to my website!";
// let i = 0;

// let interval = setInterval(() => {
//     if (i < text.length) {
//         newEl.innerText = text.substring(0, i + 1); // hər dəfə bir hərf əlavə olunur
//         i++;
//     } else {
//         clearInterval(interval); // dövr dayandırılır
//     }
// }, 100); // 100 ms fasilə ilə yazır MARAGLI TEMNADI


// const changeItem = document.querySelector('#itemList')

// changeItem.innerHTML = '<ul><li>Item 1</li><li>Item 2</li></ul>'




































































































































