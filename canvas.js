function drawGame(){
    gameArea.lineWidth = 8;
    gameArea.lineCap = "round";
    gameArea.lineJoin = "round";
    gameArea.fillStyle = "#E9ECF8";
    gameArea.strokeStyle = "#0A3871";



    gameArea.fillRect(0, 0, 1200, 800);
    gameArea.beginPath();
    gameArea.moveTo(900, 500);
    gameArea.lineTo(650, 500);

    gameArea.moveTo(700,500)
    gameArea.lineTo(700,100)

    gameArea.moveTo(850,100)
    gameArea.lineTo(700,100)

    gameArea.stroke();
    gameArea.closePath();

}



function drawLines(){
    gameArea.lineWidth = 8;
    gameArea.lineCap = "round";
    gameArea.lineJoin = "round";
    gameArea.fillStyle = "#E9ECF8";
    gameArea.strokeStyle = "#0A3871";

    let widthLine = 600 / wordSelected.length;
    for(let i = 0; i < wordSelected.length; i++){
        gameArea.moveTo(500 + (widthLine * i), 640);
        gameArea.lineTo(550 + (widthLine * i), 640);
    }
    gameArea.stroke();
    gameArea.closePath();
}

function writeCorrectLetter(index){
    gameArea.font = "bold 52px Ariel";
    gameArea.linaCap = "round";
    gameArea.fillStyle = "#0A3871";
    gameArea.lineWidth = 6;
    let widthLetter = 600 / wordSelected.length;
    gameArea.fillText(wordSelected[index], 505 + (widthLetter * index), 620);

}

function writeErroLetter(letter, error){
    gameArea.font = "bold 40px Ariel";
    gameArea.linaCap = "round";
    gameArea.fillStyle = "#0A3871";
    gameArea.lineWidth = 6;
    gameArea.fillText(letter, 920 + (-50 * error), 720, 40)
}

function drawDoll(){
    gameArea.lineWidth = 8;
    gameArea.lineCap = "round";
    gameArea.lineJoin = "round";
    gameArea.strokeStyle = "#0A3871";

    if(error === 6){
    gameArea.moveTo(850,100);
    gameArea.lineTo(850,171);
    }
    if(error === 5){
    gameArea.moveTo(900, 230);
    gameArea.arc(850, 230, 50, 0, Math.PI * 2);
    }
    if(error === 4){
    gameArea.moveTo(850,389);
    gameArea.lineTo(850,289);
    }
    if(error === 3){
    gameArea.moveTo(850,389);
    gameArea.lineTo(800,450);
    }
    if(error === 2){
    gameArea.moveTo(850,389);
    gameArea.lineTo(890,450);
    }
    if(error === 1){
    gameArea.moveTo(850,330);
    gameArea.lineTo(800,389);
    }
    if(error === 0){
    gameArea.moveTo(850, 330);
    gameArea.lineTo(890, 389);
    }
    gameArea.stroke()
    gameArea.closePath()

}
function showWin(){
    gameArea.font = "bold 42px Ariel";
    gameArea.lineWidth = 6;
    gameArea.lineCap = "round"
    gameArea.lineJoin = "round"
    gameArea.fillStyle = "blue"
    gameArea.fillText("Fim de jogo, você VENCEU!", 520, 80);
}

function showDefeat(){
    gameArea.font = "bold 42px Ariel";
    gameArea.lineWidth = 6;
    gameArea.lineCap = "round"
    gameArea.lineJoin = "round"
    gameArea.fillStyle = "red"
    gameArea.fillText("Fim de jogo, você PERDEU!", 520, 80);
  }
  

function reload(){
    location.reload();
}

