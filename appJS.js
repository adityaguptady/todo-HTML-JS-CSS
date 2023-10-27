var todo = []
var counter = 0

function mockData()
{
    addtoArray(counter++, "Need to buy groceries", true)
    addtoArray(counter++, "Need to complete assignment", false)
    addtoArray(counter++, "Need to eat food", true)
    addtoArray(counter++, "Need to sleep", false)
    updateFrontend()
    console.log(todo)
}

function addtoArray(id, text, completed)
{
    let tempTodo = {
        id: id,
        text: text,
        completed: completed,
    }
    todo.push(tempTodo)
}

function addTodo(event)
{
    console.log("-------------------addTodo-------------------")
    let tempTodoText = document.getElementById("todoText").value
    console.log("Text added: "+tempTodoText)
    console.log(todo)
    let tempTodo = {
        id: counter++,
        text: tempTodoText,
        completed: false,
    }
    todo.push(tempTodo)
    console.log(todo)
    document.getElementById("todoText").value = ""
    //updating Frontend
    updateFrontend()
}

function deleteTodo(id)
{
    console.log("------------------Delete todo------------------")
    console.log("id: "+id)
    todo = todo.filter(element=>{
        //return true / false
        return element.id != id
    })
    
    updateFrontend()
}

function checkboxListener(id)
{
    console.log("id: "+id)
    //console.log(todo)
    todo = todo.map(element=>
        {
            if(element.id == id)
            {
                    element.completed = !element.completed
            }
            return element
        })
    console.log(todo)
    updateFrontend()
}

function updateFrontend()
{
    //updating Frontend
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    todo.forEach(element=>
    {
        if(element.completed)
        {
            todoList.innerHTML += 
                "<li>"+
                    "<input type=\"checkbox\" checked onclick=\"checkboxListener("+element.id+")\"></input><s>"+
                    element.text+
                    "</s>  <button onclick=\"deleteTodo("+element.id+")\">Delete</button>"+
                "</li>"
        }
        else
        {
            todoList.innerHTML += 
                "<li>"+
                    "<input type=\"checkbox\"  onclick=\"checkboxListener("+element.id+")\"></input>"+
                    element.text+
                    "  <button onclick=\"deleteTodo("+element.id+")\">Delete</button>"+
                "</li>"
        }
    })
}