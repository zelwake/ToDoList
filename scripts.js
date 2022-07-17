let item = ""

$("button").click(() => {
    item = $("input").val();
    $("ul").append($(`<li> ${item}</li>`));
})