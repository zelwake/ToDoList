let item = ""
let todoNumber = 1

$("#buttonAdd").click(function () {
    item = $("input").val();
    $("ul").append($(`
                <li class="text">
                    <span id="text_${todoNumber}" class="todoListItem">${item}</span>
                    <img id="del_${todoNumber}" src="delete.svg" class="deleteButton" alt="">
                    <img id="done_${todoNumber}" src="done.svg" class="doneButton" alt="">
                </li>
                `));
    todoNumber++;
});

$(`ul.li`).on("click", "img.doneButton", function () {
    var id = $(this).attr("id");
    $("#" + id).css("text-decoration", "line-through")
})