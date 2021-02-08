let increaseNum = 0;
const myTodo = document.getElementById('my-todo');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click',() => {
  const userTask = document.getElementById('user-task');

  const tableRecode = document.createElement('tr');
  myTodo.appendChild(tableRecode);

  const todoId = document.createElement('td');
  todoId.textContent = increaseNum;

  const todoComment = document.createElement('td');
  todoComment.textContent = userTask.value;

  const statusBtn = document.createElement('button');
  statusBtn.textContent = '作業中';
  statusBtn.addEventListener('click', (elem) => {
    const action = elem.target.closest('button');
    if (action.textContent === '作業中') {
      action.textContent = '完了';
    } else {
      action.textContent = '作業中';
    }
  });


  const eraseBtn = document.createElement('button');
  eraseBtn.textContent = '削除';  
  eraseBtn.addEventListener('click', (elem) => {
    const tr = elem.target.closest('tr');
    tr.parentNode.removeChild(tr);
    
    const taskList = myTodo.getElementsByTagName('tr');
    increaseNum = 0;
    Array.from(taskList, tr => {
      tr.getElementsByTagName('td')[0].textContent = increaseNum;
      increaseNum ++;
    });
  });

  tableRecode.appendChild(todoId);
  tableRecode.appendChild(todoComment);
  tableRecode.appendChild(statusBtn);
  tableRecode.appendChild(eraseBtn);

  userTask.value = '';
  increaseNum ++;
});