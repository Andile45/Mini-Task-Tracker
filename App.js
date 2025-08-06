// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

const root = document.getElementById("root");
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "center";
root.style.alignItems = "center";
root.style.backgroundColor = "lightyellow";
root.style.border = "1px solid black";
root.style.margin = "10%";
root.style.marginInline = "20%";
root.style.borderRadius = "30px";
root.style.boxShadow = "10px 10px 36px 2px rgba(0,0,0,0.75)";

const body = document.querySelector("body");
body.style.backgroundImage = "url('asset/unnamed.png')";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";

const heading = document.createElement("h1");
heading.textContent = "Mini Task Tracker";
heading.style.textAlign = "center";
heading.style.fontFamily = "Arial, Helvetica, sans-serif";
root.appendChild(heading);

const div = document.createElement("div");
div.id = "inputBtn";
div.style.display = "flex";
div.style.gap = "8px";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
root.appendChild(div);

let input = document.createElement("input");
input.type = "text";
input.id = "task";
input.placeholder = "Enter task";
input.style.border = "2 solid #90D5FF";
// input.style.marginInline = "5%";
input.style.padding = "20px";
input.style.borderRadius = "10px";
input.style.width = "80%";
input.style.fontFamily = "Arial, Helvetica, sans-serif";

div.appendChild(input);

const taskBtn = document.createElement("button");
taskBtn.textContent = "Add Task ➕";
taskBtn.style.cursor = "pointer";
taskBtn.style.backgroundColor = "#90D5FF";
taskBtn.style.borderRadius = "9px";
taskBtn.style.padding = "10px";
taskBtn.style.fontFamily = "Arial, Helvetica, sans-serif";

div.appendChild(taskBtn);

const taskList = document.createElement("ul");
root.appendChild(taskList);

const taskRemaining = document.createElement("p");
taskRemaining.style.fontFamily = "Arial, Helvetica, sans-serif";
taskRemaining.id = "taskLeft";

root.appendChild(taskRemaining);

let availTasks = 0;
//adding task function
taskBtn.addEventListener("click", () => {
  let userInput = input.value.trim();

  if (userInput === "") {
    alert("Task Cannot be empty");
    return;
  }

  const listItem = document.createElement("li");
  listItem.style.padding = "15px";
  listItem.style.listStyle = "none";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkB";

  const span = document.createElement("span");
  span.textContent = userInput;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task ❌";
  delBtn.style.borderRadius = "10px";
  delBtn.style.padding = "6px";
  delBtn.style.marginInline = "10px";
  delBtn.style.cursor = "pointer";
  delBtn.style.backgroundColor = "#90D5FF";
  delBtn.id = "delBtn";

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(delBtn);
  taskList.append(listItem);

  function updateTaskCount() {
    availTasks = taskList.querySelectorAll(
      "li input[type='checkbox']:not(:checked)"
    ).length;
    taskRemaining.textContent = `There are ${availTasks} tasks Remaining`;
  }
  //updating availTasks

  updateTaskCount();

  //clearing user inputs
  input.value = "";

  //Handing the checkbox
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";

      updateTaskCount();
    } else {
      span.style.textDecoration = "none";

      updateTaskCount();
    }
  });

  //   delete button function

  delBtn.addEventListener("click", () => {
    updateTaskCount();
    listItem.remove();

    updateTaskCount();
  });
});
