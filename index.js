var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //image/dice1.png - image/dice6.png

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDice2Image = "dice" + randomNumber2 + ".png";

var randomImage2Source = "images/" + randomDice2Image;

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImage2Source);

var title = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  title.innerHTML = "Draw!";
} else {
  title.innerHTML = "Player 2 Wins! 🚩";
}