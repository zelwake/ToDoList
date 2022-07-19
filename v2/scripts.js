let item = ""
let todoNumber = 1

$("#buttonAdd").on( "click", function() {
    item = $("input").val();
    $("ul").append($(`<li id="todo-${todoNumber}"> ${item}</li>`));
    todoNumber++;
})

/*works on first item only, crosses every single item that has been generated so far*/
$('li').on("click", function() {
    $('li').css("text-decoration", "line-through")
})


/* doesnt work at all
$(`#todo-${todoNumber}`).on("click", "li", function() {
    $(`#todo-${todoNumber}`).css("text-decoration", "line-through")
})

*/