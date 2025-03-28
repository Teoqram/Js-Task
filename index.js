function randomEl(arr) {
    const rIndex = Math.floor(Math.random() * arr.length);
    return arr[rIndex];
}
const words = ['hello', 'world', 'foo', 'bar'];
const guessWord = randomEl(words).split(""); // Gizli sözü hərflərə böl
let hiddenWord = guessWord.map(() => "_"); // Başlanğıcda bütün hərfləri "_" ilə əvəz et
let lives = 5; // Oyunçunun canları
let guessedLetters = []; // Artıq daxil edilmiş hərfləri izləmək üçün

while (hiddenWord.includes("_") && lives > 0) {

    alert(`Sizin gizli sözünüz: ${hiddenWord.join(" ")}`);
    
    let letter = prompt("Bir hərf daxil edin:");

    // Boş giriş və ya ləğv edilməni yoxla
    if (!letter) {
        alert("Düzgün bir hərf daxil edin!");
        continue;
    }

    letter = letter.toLowerCase(); // Böyük və kiçik hərf fərqini aradan qaldır

    // Əgər oyunçu artıq bu hərfi daxil edibsə
    if (guessedLetters.includes(letter)) {
        alert(`Siz artıq "${letter}" hərfini daxil etmisiniz! Daxil etdiyiniz Herfler : ${guessedLetters.join(", ")}`);
        continue;
    }

    guessedLetters.push(letter); // Yeni daxil edilən hərfi siyahıya əlavə et

    if (guessWord.includes(letter)) {
        // Bütün uyğun indeksləri tap və dəyiş
        guessWord.forEach((char, index) => {
            if (char === letter) {
                hiddenWord[index] = letter;
            }
        });
    } else {
        lives--; // Səhv tahmin canı azaldır
        alert(`Səhv tahmin! Qalan can: ${lives}`);
    }
}

// Oyun bitdi
if (!hiddenWord.includes("_")) {
    alert(`Təbriklər! Söz tapıldı: ${hiddenWord.join("")}`);
} else {
    alert(`Uduzdunuz! Düzgün söz: ${guessWord.join("")}`);
}

// Yenidən oynamaq istəyirsiniz?
if (confirm("Yenidən oynamaq istəyirsiniz?")) {
   startGAme(); // Oyunu yenidən başladır
}
startGAme(); // Oyunu yenidən başladır

