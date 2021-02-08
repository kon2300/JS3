  const radioAllSelector = document.getElementById('radio-all-selector');
  const radioWorkingSelector = document.getElementById('radio-working-selector');
  const radioDoneSelector = document.getElementById('radio-done-selector');
  const workingTask = document.getElementsByClassName('working-task');
  const doneTask = document.getElementsByClassName('done-task');
  
  const category = document.getElementsByName('category');
  category.forEach(elem => {
    elem.addEventListener('click',(elem) => {
      elem.target.closest('input');
      todoShow();
    });
  });

  const todoShow = () => {
    const workingTasks = Array.prototype.slice.call(workingTask);
    workingTasks.forEach(wTodo => {
      if (radioAllSelector.checked) {
          wTodo.style.display = ''; 
      }  else if (radioWorkingSelector.checked) {
        wTodo.style.display = '';
      }  else if (radioDoneSelector.checked) {
        wTodo.style.display = 'none';
      }
    });
    
    const doneTasks = Array.prototype.slice.call(doneTask);
    doneTasks.forEach(dTodo => {
      if (radioAllSelector.checked) {
          dTodo.style.display = ''; 
      }  else if (radioWorkingSelector.checked) {
        dTodo.style.display = 'none';
      }  else if (radioDoneSelector.checked) {
        dTodo.style.display = '';
      }
    });
  };


  const addBtn = document.getElementById('add-btn');
  const myTodo = document.getElementById('my-todo');
  let increaseNum = 0;

  addBtn.addEventListener('click',() => {
    const userTask = document.getElementById('user-task');

    const tableRecode = document.createElement('tr');
    tableRecode.className = 'working-task';
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
        action.parentNode.className = 'done-task';
      } else {
        action.textContent = '作業中';
        action.parentNode.className = 'working-task';
      }
      category.forEach(elem => {
        todoShow();
      });
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

    category.forEach(elem => {
      todoShow();
    });
  });