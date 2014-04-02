/* Exercise 1: Wish list */

$(document).ready(function(){

 $(document).on('click', 'button', function(){
  var itemToAdd = $("#item").val();
  addToList(itemToAdd);
  });

  function addToList(item){
    $("ol#items").append("<li>" + item + "</li>")
  };
  addToList("build a website");

});
