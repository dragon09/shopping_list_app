$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        var toAddNum = $("input[name=quantity]").val();
        $(".list").append("<li class='item'>" + toAddNum + " " + toAdd + "</li>");
    });
    $(document).on("click", ".item", function () {
        $(this).remove();
    });
});
