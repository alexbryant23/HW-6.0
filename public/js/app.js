todoList = [];

function pagesetup() {
    $('#todo').click(function (e) {
        e.preventDefault();
        console.log(e.target.id);
    });
}

window.onload = function () {
    $.ajax({
            url: "./api/todoList",
            method: "GET"

        })
        .then(response => {
            const todoList = response.todoList;
            const todoListHTML = todoList.map(
                todoList => `
                <li id= ${todoList.id} >${todoList.text}</li>
                `
            ).join("");
            $('#todo').html(todoListHTML)
            pagesetup();
        });
};