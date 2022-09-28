//Selectors
const secBtn = document.querySelector(".buttons");
const game = document.querySelector(".game");
const addWords = document.querySelector(".btnAddWords");
let gameArea = document.querySelector(".forca").getContext("2d");
let words = ["PROGRAMACAO", "CODAR", "ALURA", "ONE", "ORACLE", "JAVASCRIPT", "PALAVRA", "FORCA", "CHALLENGE", "JOGO"];
let wordSelected  = "";

let lettersErro = [];

let letters = [];
let error = 6;

let winsCount = 0;

//Functions

function randomWord(){
  let word =  words[Math.floor(Math.random() * words.length)];
  wordSelected = word;
  console.log(wordSelected);
}

function checkLetter(key){
  let status = false;
  if(key >= 65 && letter.indexOf(key) || key <= 90 && letter.indexOf(key)){
    letters.push(key);
    console.log(key);
    console.log(letters);
    return status;
  }else{
    status = true;
    letters.push(key);
    console.log(key);
    console.log(letters);
    return status;
  }
}

function erroCounter(letter){
  error -= 1;
  drawDoll();
}



function start(){
  randomWord();
  drawGame();
  drawLines();
  switchDiv();
  drawDoll();

  let lastLetter = "";
  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    if(letter != lastLetter){
    if(checkLetter(letter) && wordSelected.includes(letter)){
      for(let i = 0; i < wordSelected.length; i++){
        if(wordSelected[i] === letter){
          writeCorrectLetter(i);
          winsCount++;
          lastLetter = letter;
        }
      }
      
    }else{
      erroCounter(letter);
      writeErroLetter(letter, error);
    }
    if(error <= 0){
        showDefeat();
        document.onkeydown = "";
        setTimeout(reload, 1000);
    }else if(winsCount == wordSelected.length){
      showWin();
      document.onkeydown = "";
      setTimeout(reload, 1000);
    }
  }
  }
 
  
}


function addNewWords(){
    alert("Função ainda não disponivel. :(")
}

function switchDiv(){
    secBtn.style.display = "none";
    game.style.display = "block";
}



