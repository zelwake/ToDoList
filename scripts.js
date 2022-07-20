let item = ""
let todoNumber = 1

$("#buttonAdd").click(function () {
    item = $("input").val();
    $("ul").append($(`<li id="todo-${todoNumber}" class="listItem"> ${item}</li>`));
    todoNumber++;
});

$(`ul`).on("click", "li.listItem", function () {
    var id = $(this).attr("id");
    $("#" + id).css("text-decoration", "line-through")
})