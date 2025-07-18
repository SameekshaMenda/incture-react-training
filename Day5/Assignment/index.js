

function addTask(){
    let display = document.getElementById("display");
    let value = display.setAttribute("display", "setTask");
    console.log(value);
    
}

function deleteTask()
{
    let display = document.getElementById("display");
    display.value = '';
}