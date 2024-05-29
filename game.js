var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour = "";

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  randomChosenColour = buttonColours[randomNumber];
  var randomColourId = "#" + randomChosenColour;
  gamePattern.push(randomChosenColour);

  $(randomColourId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
nextSequence();
