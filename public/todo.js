$(function(){
    let addtodobtn = $('#AddTodo')
    let newtodobox = $('#NewTodo')
    let todolistbox = $('#TodoList')

    addtodobtn.click(function() {
        console.log("Button was Clicked")
        let newTodo = newtodobox.val()

        $.post(
            '/todos/',
            {task : newTodo},
            function(data) {
                todolistbox.empty();
                for(todo of data) {
                    todolistbox.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })
})