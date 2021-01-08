let i = 0;
const idNum = document.getElementById('idNum');
const coment = document.getElementById('coment');
const status = document.getElementById('status');

document.getElementById('addBtn').addEventListener('click',() => {

  const userTask = document.getElementById('userTask');

  const addIdnum  = () => {  
    const p = document.createElement('p');
    p.textContent = i;
    idNum.appendChild(p);
    i ++;
  };
  
  const addComent = () => {
    const p = document.createElement('p');
    p.textContent = userTask.value;
    coment.appendChild(p);
    userTask.value = '';
  };

  const addStatus = () => {
    const br = document.createElement('br');
    const input = document.createElement('input');
    input.type = 'button';
    input.value = '作業中';
    input.className = 'mtr';
    status.appendChild(br);
    status.appendChild(input);
  };

  const addStatus2 = () => {
    const input = document.createElement('input');
    input.type = 'button';
    input.value = '削除';
    input.className = 'mtr';
    status.appendChild(input);
  };



  addIdnum();
  addComent();
  addStatus();
  addStatus2();
});
