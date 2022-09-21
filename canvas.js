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