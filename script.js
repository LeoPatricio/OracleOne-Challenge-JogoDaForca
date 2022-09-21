//Selectors
const secBtn = document.querySelector(".buttons");
const game = document.querySelector(".game");
const addWords = document.querySelector(".btnAddWords");
let gameArea = document.querySelector(".forca").getContext("2d");
let words = ["PROGRAMACAO", "CODAR", "ALURA", "ONE", "ORACLE", "JAVASCRIPT", "PALAVRA", "FORCA", "CHALLENGE", "JOGO"];
let wordSelected  = "";

//Functions

function randomWord(){
  let word =  words[Math.floor(Math.random() * words.length)];
  wordSelected = word;
  console.log(wordSelected);
}

function start(){
  randomWord();
  drawGame();
  drawLines();
  switchDiv();

}

function addNewWords(){
    alert("Função ainda não disponivel. :(")
}

function switchDiv(){
    secBtn.style.display = "none";
    game.style.display = "block";
}
