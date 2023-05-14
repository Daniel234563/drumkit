$(document).ready(function () {
  var numberOfButtons = $(".drum").length; // Lagrer antall knapper

  // Løkke som legger til klikkfunksjon for hver knapp
  for (var i = 0; i < numberOfButtons; i++) {
    $(".drum")[i].addEventListener("click", function () {
      var buttonLetter = this.innerHTML;
      playSound(buttonLetter);
    });
  }

  $(document).keydown(function (event) {
    var buttonLetter = event.key;
    playSound(buttonLetter);
  });

  // Funksjon for å spille av lyden basert på knappens bokstav
  function playSound(buttonLetter) {
    var audio;
    switch (buttonLetter) {
      case "a":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "w":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/snare.mp3");
        break;
      case "k":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "l":
        audio = new Audio("sounds/kick-bass.mp3");
        break;
    }
    if (audio) {
      audio.play();
    }
  }
});
