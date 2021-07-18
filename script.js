var counter = 0;

let yeah = document.querySelector('.yee');
yeah.style.display = 'none';

let plural = document.querySelector('.plural');
plural.style.display = 'none';

let doit = document.querySelector('.doit');

// Delete task method 2
let getUl = document.querySelector('#task-list ul');

getUl.addEventListener('click', (e) => {

    if( e.target.className === 'material-icons'){
        e.target.parentElement.remove();
        counter--;
        document.querySelector('.counter').innerHTML = counter;

        if(counter === 0){
          yeah.style.display = 'block';
          doit.style.display = 'none';
        }

        if(counter == 1){
          plural.style.display = 'none';
        }
        
    }
})

// add task
let getAddTask = document.forms['add-task'];

getAddTask.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = getAddTask.querySelector('input[type=text]').value;
    // console.log(value);

    if(value !== ''){
        let setLi = document.createElement('li');
        let setSpanName = document.createElement('span');
        let setDoneBtn = document.createElement('i');
        setSpanName.setAttribute('class', 'name');
        // setDoneBtn.setAttribute('class', 'delete');
        setDoneBtn.setAttribute('class', 'material-icons');

        console.log(setDoneBtn.innerHTML);

        // take the setUl from above
        getUl.appendChild(setLi);
        
        // add content
        setLi.appendChild(setSpanName).innerHTML = value;
        setLi.appendChild(setDoneBtn).innerHTML = 'delete';

        counter++;
        document.querySelector('.counter').innerHTML = counter;



        if(counter >= 1){
          yeah.style.display = 'none';
          doit.style.display = 'block';
        }

        if(counter > 1){
          plural.style.display = 'initial';
        }
        
    } else {
        alert('Please enter your task !!!');
    }
  let getInput = document.querySelector("#addTask");
  getInput.value = ""
})

