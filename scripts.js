let item = ""
let todoNumber = 1

$("#buttonAdd").on( "click", function() {
    item = $("input").val();
    $("ul").append($(`<li id="todo-${todoNumber}"> ${item}</li>`));
    todoNumber++;
    console.log(todoNumber);
})

$(`#todo-${todoNumber}`).on("click", "li", function() {
    $(`#todo-${todoNumber}`).css("text-decoration", "line-through")
})