const player1 = Math.floor(Math.random() * 6) + 1;
const player2 = Math.floor(Math.random() * 6) + 1;
// First Image
const randomImage1 = document.querySelector(".img1");
const call1 = "images/" + "dice" + player1 + ".png";
randomImage1.setAttribute("src", call1);
// second image 
const randomImage2 = document.querySelector(".img2");
const call2 = "images/" + "dice" + player2 + ".png";
randomImage2.setAttribute("src", call2);
// Result
if ( player1 > player2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if ( player2 > player1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else if (player1 === player2){
    document.querySelector("h1").innerHTML = "Draw";
} 

