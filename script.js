let listContainer = document.getElementById("list-container");
let addButton = document.getElementById("btn");
let input = document.getElementById("input-box");
let list = document.getElementById("list-container");
const sound = new Audio("ding.mp3");

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    if (e.target.classList.contains("checked")){
      sound.currentTime = 0;
      sound.play();
    }
    saveData();
  } else if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("edit-btn")){
    if (input.value === ''){
    input.value = e.target.parentElement.firstChild.textContent;
    input.focus();
    e.target.parentElement.remove();
    saveData();
    }
}});

function addItem(){
  if (input.value !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = "";
    document.getElementById("warning").classList.add("exist");

    let remove = document.createElement("span");
    remove.classList.add("remove-btn");
    remove.innerHTML = "\u00d7";
    newItem.appendChild(remove);

    let edit = document.createElement("span");
    edit.classList.add("edit-btn");
    edit.innerHTML = "&#9998";
    newItem.appendChild(edit);
  } else {
    document.getElementById("warning").classList.remove("exist");
  }
  saveData();
}

addButton.addEventListener("click", addItem);
input.addEventListener("keydown", function(e) {
  if(e.key === "Enter") {
    addItem();
  }
})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
// localStorage.clear();
showTask();

