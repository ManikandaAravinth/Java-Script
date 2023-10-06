let todo=[];

function addTodo(){

    let td = document.getElementById("newTodo").value;
    let ul =document.getElementById("todoList");
    let li = document.createElement("li");
    let R = document.getElementById("Result");
    li.innerHTML = td;
    ul.appendChild (li);
    R.appendChild(ul);
    document.getElementById("newTodo").value="";

}

let str = {

    input1: document.getElementById("newTodo").value

}

// console.log(typeof(str));

var A = JSON.stringify(str);
// console.log(typeof(A));
localStorage.setItem("xyz",A);
