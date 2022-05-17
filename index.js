var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
// First Image
var randomImage1 = document.querySelector(".img1");
var call1 = "images/" + "dice" + player1 + ".png";
randomImage1.setAttribute("src", call1);
// second image 
var randomImage2 = document.querySelector(".img2");
var call2 = "images/" + "dice" + player2 + ".png";
randomImage2.setAttribute("src", call2);
// Result
if ( player1 > player2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if ( player2 > player1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else if (player1 === player2){
    document.querySelector("h1").innerHTML = "Draw";
} 

