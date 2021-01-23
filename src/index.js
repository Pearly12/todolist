import { initial } from 'lodash';
import css from './style.css';
// import ToDoItem from './ToDoItem.js';
import DOMStuff from './DOMStuff.js';


const ToDoItem = function(title, description, dueDate, priority){
    this.description = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
};
//create to do item
// const testItem = new toDoItem('test', 'do the test', Date, 'high');
const itemTitle = document.getElementById('item-title');
const itemDesc = document.getElementById('item-desc');
const itemDate = document.getElementById('item-date');
const lowPriority = document.getElementById('lowPriority');
const medPriority = document.getElementById('medPriority');
const highPriority = document.getElementById('highPriority');

const newItemButton = document.getElementById('new-item-button');
newItemButton.addEventListener('click', revealForm);

const addItemButton = document.getElementById('submit-item');
addItemButton.addEventListener('click', createItem);

function revealForm(){
    const addItemForm = document.getElementById('add-item-form');
    addItemForm.classList.add('active');
}

function createItem(){
    console.log();

    let priority = "low";
    if(lowPriority.checked){
        priority = "low";
    }else if(medPriority.checked){
        priority = 'med';
    }else{
        priority = 'high';
    }

    let item = new ToDoItem(itemTitle.value, itemDesc.value, itemDate.value, priority);
    console.log(item);
};