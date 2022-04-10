var random_Numbers = Math.floor(Math.random()*6)+1;
var random_Numbers2 = Math.floor(Math.random()*6)+1;
var randomDiceNumbers ="dice"+ random_Numbers+ ".png";
var randomDiceNumbers2 ="dice"+ random_Numbers2+ ".png";
var randomNumbersSource2="images/"+randomDiceNumbers2;

var randomNumbersSource="images/"+randomDiceNumbers;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomNumbersSource);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumbersSource2);

if(randomDiceNumbers > randomDiceNumbers2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomDiceNumbers === randomDiceNumbers2){
  document.querySelector("h1").innerHTML="Draw";
}
else if(randomDiceNumbers < randomDiceNumbers2){
  document.querySelector("h1").innerHTML="Player 2 Wins🚩 ";
}
