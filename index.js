let characters = [ "`","~","!","@","#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "{",
  "}",
  ";",
  "'",
  ",",
  ".",
  "/",
  ":",
  "+",
];
let letters = [
  "q",
  "w",
  "s",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m"
];
let capital = [
  "Q",
  "H",
  "X",
  "I",
  "J",
  "S",
  "Q",
  "S",
  "F",
  "W",
  "V",
  "D",
  "B",
  "K",
  "O",
  "G",
  "I",
  "O",
  "F",
  "P",
  "C",
];
let password1 = [];
let password2 = [];

let password1_el = document.getElementById("pass1")
let password2_el = document.getElementById("pass2")
const main_btn = document.getElementById("main-btn")

main_btn.addEventListener("click", function () { 
  for (i = 0; i < 4; i++) {
    let c1 = capital[Math.floor(Math.random() * capital.length + 1)];
    let c2 = letters[Math.floor(Math.random() * letters.length + 1)];
    let c3 = characters[Math.floor(Math.random() * characters.length + 1)];
    let c4 = Math.floor(Math.floor(Math.random() * 9 + 1));

    password1.push(c1, c2, c3, c4);
  }

  for (i = 0; i < 4; i++) {
    let c1 = capital[Math.floor(Math.random() * capital.length + 1)];
    let c2 = letters[Math.floor(Math.random() * letters.length + 1)];
    let c3 = characters[Math.floor(Math.random() * characters.length + 1)];

    password2.push(c1, c2, c3);
  }

  password1_el.value = password1.join("");
  password2_el.value = password2.join("");




})
     

    

