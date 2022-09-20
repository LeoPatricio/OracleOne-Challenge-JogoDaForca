//Selectors
const secBtn = document.querySelector(".buttons");
const game = document.querySelector(".game");
const addWords = document.querySelector(".btnAddWords");
let word = ["PROGRAMACAO", "CODAR", "ALURA", "ONE", "ORACLE", "JAVASCRIPT", "PALAVRA", "FORCA", "CHALLENGE", "JOGO"];

//Functions
function start(){
  switchDiv();
}

function addNewWords(){
    alert("Função ainda não disponivel. :(")
}

function switchDiv(){
    secBtn.style.display = "none";
    game.style.display = "block";
}