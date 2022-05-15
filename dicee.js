function randomDicee(){
    return Math.floor(Math.random()*6)+1;
}

var player1 = randomDicee();
var player2 = randomDicee();

document.querySelector(".img1").setAttribute("src","images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + player2 + ".png");

if(player1 > player2){
    document.querySelector("h1").textContent = "🥰Player1 Wins!"
}else if (player1 < player2){
    document.querySelector("h1").textContent = "Player2 Wins🥰!"
}else{
    document.querySelector("h1").textContent = "🎲Draw Again!"
}
