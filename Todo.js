let todoList=JSON.parse(localStorage.getItem("todoList"))||
              [
                {
                  item:'CSS',
                  dueDate:'2025-05-17'
                },
                {
                  item:'HTML',
                  dueDate:'2025-05-07'
                }
              ];
displayItems();
document.getElementById('todoinput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});
function addTodo(){
  let inputElement=document.getElementById('todoinput');
  let dateElement=document.getElementById('todo-date');

  let todoItem=inputElement.value.trim();
  let todoDate=dateElement.value;

  if(todoItem==='' || todoDate===''){
    alert("please fill both the fields!!");
    return;
  }

  todoList.push({item:todoItem,dueDate:todoDate});

  localStorage.setItem("todoList",JSON.stringify(todoList));

  inputElement.value='';
  dateElement.value='';
  displayItems();
}
function displayItems(){
  let containerElement=document.querySelector(".todo-container");let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let todoItem=todoList[i].item;
    let dueDate=todoList[i].dueDate;
    newHtml+=`
    
    <span>${todoItem}</span>
    <span>${dueDate}</span>

    <button class='deletebutton' onclick='deleteTodo(${i})'>Delete</button>
  `;
   
}
containerElement.innerHTML=newHtml;
}
function deleteTodo(index){
  todoList.splice(index,1);
  localStorage.setItem("todoList",JSON.stringify(todoList));
  displayItems();
}

