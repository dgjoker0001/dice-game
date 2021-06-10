// generating first random number between 1 and 6 integer
var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

// string concatenation for changing dice image
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomImage1);

// generating second random number between 1 and 6 integer
var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

// string concatenation for changing dice image
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomImage2);

// condition for declaring winner
if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = "🏆 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins 🏆";
}
else{
  document.querySelector(".container h1").innerHTML = "🏆 Draw ! 🏆";
}

document.querySelector(".container p").classList.remove("invisible");
