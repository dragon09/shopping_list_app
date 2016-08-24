$(document).ready(function () {
    $("#button").click(function () {

        var toAdd = $("input[name=checkListItem]").val();
        // var toAddNum = $("input[name=quanity]").val();
//         $(document).on("keydown", function(e) {
//           if(e.keyCode === 13) {
//             getInput();
//   }
// });

$(".list").append(
  '<input type="checkbox" class="check">' +
  '<li class="item">' +
  '<span>' +
    $("#product").val() +
    '</span>' +
    '<br />' +
    '</li>');

$("input:checkbox").click(function () {
  var $this = $(this);
  if (this.checked) {
    $this.parent().addClass('completed');

  } else {
    $this.parent().removeClass('completed');
  }
});

// <input[type=checkbox]:checked + label.strikethrough{
//   text-decoration: line-through;
// }
//
// .input-item {
//   color: black;
// }
        // $('.list').append('<input type="checkbox" name="myCheckbox" />');
        // // $(".list").append("<li class='item'>" + toAddNum + " " + toAdd + "</li>");
        // $(".list").append("<li class='item'>" + toAdd + " " + "</li>");
        // // $("#list").click(function() {
        // $(document).on("click", "item", function () {
        //     $(this).wrap("<strike>");
        // })

        // })
});


//     // $("#quantity").val("");
//     // $("#product").val("");
//
    $(document).on("click", ".item", function () {
      $(this).prev().remove();
        $(this).remove();
    });
});
