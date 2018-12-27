$(document).ready(function(){
  $('#userAnswers').submit(function(event){
    var idTags = ['nOne', 'nTwo']

    var userInput = idTags.map(function(idTags){
      return ($('input#' + idTags).val()) *2;
    });
;
    $('.mult').text(userInput)
    event.preventDefault();
  });
});
