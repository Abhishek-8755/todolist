let todoList = [
    {
        item:'',
        dueDate:''
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    //query select karli
    let dateElement = document.querySelector("#todo-date");

    let todoItem = inputElement.value;//yaha value agyi
    let todoDate = dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});//yaha se value ko push kar rahe hai
    inputElement.value = '';//value lene ke baad empty kardiya
    dateElement.value='';
    displayItems();  //yehesiliye hai kyuki displaykarna hai.
}
function displayItems() {
    let containerElement = document.
        querySelector(".todo-container");
        let newHtml = '';
        for (let i = 0; i < todoList.length; i++) {
            let {item,dueDate} = todoList[i];


        newHtml += `
       <span>${item}</span>
              <span>${dueDate}</span>

       <button class='btn-delete' onClick="todoList.splice(${i},1);displayItems();">Delete</button>
       `;
    }
    containerElement.innerHTML = newHtml;

}