// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const todoList = require('../data/todoList.js');

// Sample table is a dummy table for validation purposes


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {



    app
        .route("/api/todoList")
        .get((req, res) => {
            res.json(
                todoList
            )
        })
        .post((req, res) => {
            // this route creates a todo
            const id = todoList.length;
            const todoText = req.body.todoList;
            todoList.push({
                id,
                text: todoText
            });
            res.json({
                todoList,
                message: "Sucessfully added todo!"
            });
        })
        .put((req, res) => {
            const id = parseInt(req.query.id);
            const newText = req.body.todoUpdate;

            const todoToUpdate = todoList.find(todoList => todoList.id === id);

            let message = "Failed to update todo!";

            if (todoToUpdate) {
                todoToUpdate.text = newText;
                message = "Todo successfully updated";
            }

            res.json({
                todoList,
                message
            });
        })
        .delete((req, res) => {
            console.log(req.body);
            const id = parseInt(req.query.id);
            const indexToDelete = todoList.findIndex(todoList => todoList.id === id);
            let message = "Failed to delete todo!";
            if (indexToDelete !== -1) {
                message = "Todo successfully deleted";
                todoList.splice(indexToDelete, 1);
            }
            res.json({
                todoList,
                message
            });
        });
}