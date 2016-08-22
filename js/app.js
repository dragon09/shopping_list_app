$(document).ready(function () {
    $("#button").click(function () {

        var toAdd = $("input[name=checkListItem]").val();
        // var toAddNum = $("input[name=quanity]").val();
//         $(document).on("keydown", function(e) {
//           if(e.keyCode === 13) {
//             getInput();
//   }
// });


        $('.list').append('<input type="checkbox" name="myCheckbox" />');
        // $(".list").append("<li class='item'>" + toAddNum + " " + toAdd + "</li>");
        $(".list").append("<li class='item'>" + toAdd + " " + "</li>");
        // $("#list").click(function() {
        $(document).on("click", "item", function () {
            $(this).wrap("<strike>");
        })

        // })
});


//     // $("#quantity").val("");
//     // $("#product").val("");
//
    $(document).on("click", ".item", function () {
        $(this).remove();

    });



});
