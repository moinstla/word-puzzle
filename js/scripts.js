$(function() {
  $("form").submit(function(event) {
    var inputString = $("#input").val()
    var individualLetters = inputString.split("");

    var noVowels = individualLetters.map(function(individualLetter) {
      if (individualLetter === "a" || individualLetter === "e" || individualLetter === "i" || individualLetter === "o" || individualLetter === "u" || individualLetter === "y") {
        return "-";
      } else {
        return individualLetter;
      }
    });

    var finalString = noVowels.join("");
    $("#output").text(finalString);

    event.preventDefault();
  });
});
