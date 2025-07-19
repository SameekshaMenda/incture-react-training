

const Tasks = [];


function getTask(){
      let output = "";
      Tasks.forEach( (task,index)=>{

        output += `<li>
        <input type="checkbox" onchange="markComplete(this)">
        <span>${task}</span>
        <button class="delete" onclick="deleteTask(${index})"> Delete</button></li>`;
      })

      document.getElementById("list").innerHTML= output;
}


function createTask(){
    let input = document.getElementById("input");
    Tasks.push(input.value);
    console.log(Tasks);
    input.value = "";
    // document.getElementById("list").innerText = Tasks;  //will return array as a string 
    getTask();
  
    
}

function deleteAllTask()
{
    Tasks.length = 0;
    getTask();
}

function deleteTask(index) {
  Tasks.splice(index, 1);
  getTask();
}

function markComplete(checkbox) {
  const span = checkbox.nextElementSibling;
  span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  span.style.color = checkbox.checked ? " rgb(138, 80, 220)" : "black";
}