var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour = "";

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  randomChosenColour = buttonColours[randomNumber];
  var randomColourId = "#" + randomChosenColour;
  gamePattern.push(randomChosenColour);
  var thecolour = randomChosenColour+".mp3";
//   console.log(thecolour);

  $(randomColourId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var thecolour = randomChosenColour+".mp3"
 $(randomColourId).on("click", function(){
    var thecolour = randomChosenColour+".mp3";
    // var audio = $(thecolour);
 })
}
nextSequence();
