const active_zone = document.getElementsByClassName("todo-active-zone")[0];
const task_text_input = document.querySelector("input");

const todo_indicator_digit = document.querySelector(".digit-indicator")
const todo_indicator_digit2 = document.querySelector(".digit-indicator2")
const todo_indicator_digit3 = document.querySelector(".digit-indicator3")
task_count = 0

todo_indicator_digit.innerHTML = "0"
todo_indicator_digit2.innerHTML = "0"
todo_indicator_digit3.innerHTML = "0"
document.querySelector(".performance-completed-digit").innerHTML = "0"
document.querySelector(".performance-total-digit").innerHTML = "0"


function add_task() {
    task_count++
    
    const text = task_text_input.value.trim();

    const task = document.createElement('div');
    task.className = "todo-active-tab";
    const taskText = document.createElement("p");
    taskText.textContent = text;
    const task_dlt_btn = document.createElement("button");
    task_dlt_btn.onclick = () => {
        task.remove()
        update_stats()
    };
    
    
    
    task.appendChild(task_dlt_btn);
    task.appendChild(taskText);
    active_zone.appendChild(task);
    
    task_text_input.value = "";
    update_stats()
    
    
    requestAnimationFrame(() => {
        task.classList.add("show");
    });
}

function update_stats(){
    const active_tasks = active_zone.querySelectorAll(".todo-active-tab");
    const active_taskCount = active_tasks.length;
    
    todo_indicator_digit.innerHTML = task_count
    todo_indicator_digit2.innerHTML = active_taskCount
    todo_indicator_digit3.innerHTML = Number(task_count) - Number(active_taskCount)

    document.querySelector(".performance-completed-digit").innerHTML = Number(task_count) - Number(active_taskCount)
    document.querySelector(".performance-total-digit").innerHTML = task_count
}
