/* Exercise 1: Wish list */

$(document).ready(function(){

 $(document).on('click', 'button', function(){
  var itemToAdd = $("#item").val();
  addToList(itemToAdd);
  $("#item").val("").focus();
  });

  function addToList(item){
    $("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span>" + "</li>")
  };
  addToList("build a website");
});

  $(document).on('click','.label', function(){
    var parent_node = $(this).parent();
    parent_node.addClass(".complete").append("<span class='label success'>Done!</span>");
    $(this).remove();
  })

