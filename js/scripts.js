$(document).ready(function(){
  $('#userAnswers').submit(function(event){
    var idTags = ['wOne', 'wTwo']

    var upperCaseInput = idTags.map(function(idTags){
      var userInput = $('input#' + idTags).val();
      return userInput.toUpperCase();
    });
    $('.upperCase').text(upperCaseInput)
    event.preventDefault()
  });
});
