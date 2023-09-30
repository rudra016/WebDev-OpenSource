const inputBox= document.querySelector(".inputfield input");
const addBtn= document.querySelector(".inputfield button");
const TodoList= document.querySelector(".TodoList");

inputBox.onkeyup =()=>{
    let userData = inputBox.value; //getting user value
    if (userData.trim() != 0){
        addBtn.classList.add("active");

    }
    else{
        addBtn.classList.remove("active");
    }
}



showtasks(); 


addBtn.onclick =()=>{
    let userData =  inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo"); 
    if(getLocalStorage == null){ 
        listArr =[]; 
    }
    else{
        listArr = JSON.parse(getLocalStorage);

    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //js to json
    showtasks();
}

function showtasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); 
    if(getLocalStorage == null){
        listArr =[]; 
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newlitag = '';
    listArr.forEach((element, index) => {
        newlitag += `<li> ${element} <span onclick = "deleteTask(${index})";><i class="fas fa-trash-alt"></i></span></li>`;
    });
    TodoList.innerHTML = newlitag; 
    inputBox.value="";
}

function deleteTask(index){
 
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);//delete index 

    localStorage.setItem("New Todo", JSON.stringify(listArr)); //js to json
    showtasks();
}