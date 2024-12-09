const todoList = [{
  name:'make dinner',
  dueDate:'2022-12-22'},
  {name:'wash dishes',
    dueDate:'2000-11-16'}
  ];

  renderTodoList();

function renderTodoList(){

    let todolistHTML ='';

    todoList.forEach((todoObject,index)=>{
      const{ name, dueDate } = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      " class ="delete-todo-button">Delete</button>
    `;
    todolistHTML +=html;
    })

    console.log(todolistHTML);
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
  }

function addTodo(){
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;

      const dateInputElement = document.querySelector('.js-due-date-input');
      const dueDate = dateInputElement.value;

      todoList.push({
        //name: name,
        //dueDate: dueDate,
        //shorty hand for th eabove assuming names are identical
        name,
        dueDate});
      inputElement.value='';
      renderTodoList();
}

function jsloop(){
  const nums = [1,2,3];
  const numsDoubled = [];
  let total = 0;
  for (let i = 0; i<nums.length;i++){
  const num = nums[i];
  total += num;
  }

  for (let i = 0; i<nums.length;i++){
    const num = nums[i];
    numsDoubled.push(num * 2);
  }

}