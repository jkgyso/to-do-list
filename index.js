const currentDay = document.querySelector('#day');
const currentDate = document.querySelector('#date');
const currentTime = document.querySelector('#time');
const input = document.querySelector('input');
const addTaskButton = document.querySelector('#add-task');
const taskList = document.querySelector('ul');
const filterButtons = document.querySelector('#filter-section');;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const showTimeAndDate = () => {

    const dateStr = new Date().toDateString();
    const trimDate = dateStr.split(' ').slice(1).join(' ');

    currentTime.textContent = new Date().toLocaleTimeString('en-US');
    currentDay.textContent = `Happy ${days[new Date().getDay()]}!`;
    currentDate.textContent = trimDate;

}


const getInputValue = () => {
    const inputValue = input.value.trim();
    if(inputValue) {
        createTask(inputValue);
        input.value = ''
    } 
}

const createTask = textValue => {
    const task = document.createElement('li');
    // task.style.display = 'flex';
    // task.style.gap = '0.6em';

    const span = document.createElement('span');
    span.textContent = textValue;


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    task.appendChild(checkbox);
    task.appendChild(span);

    taskList.appendChild(task);
}

const filterTasks = filterType => {
    const items = taskList.querySelectorAll('li');

    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]')
        const isChecked = checkbox.checked; 

        const shouldShow = filterType === 'all' || (filterType === 'completed' && isChecked) || (filterType === 'pending' && !isChecked);

        item.style.display = shouldShow ? 'flex' : 'none';

    })
}

const handleFilter = event => {

    const buttonId = event.target.id;
    if(event.target.classList.contains('filter')) {
        filterTasks(buttonId);
    }
}

window.addEventListener('DOMContentLoaded', showTimeAndDate);
addTaskButton.addEventListener('click', getInputValue);
filterButtons.addEventListener('click', handleFilter);