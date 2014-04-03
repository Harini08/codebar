/* Exercise 1: Wish list */

$(document).ready(function(){

 $(document).on('click', 'button', function(){
  var itemToAdd = $("#item").val();
  addToList(itemToAdd);
  $("#item").val("");
  });

  function addToList(item){
    $("ol#items").append("<li>" + item + "</li>")
  };
  addToList("build a website");
});
