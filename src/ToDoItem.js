const ToDoItem = function(title, description, dueDate, priority){
    this.description = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
};

export default ToDoItem;