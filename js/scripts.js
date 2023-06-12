function TaskList() {
    this.items = {};
}

let taskList = new TaskList();

TaskList.prototype.addTask = function(task) {
    this.items[task.name] = task;
}
TaskList.prototype.removeTask = function(task) {
    if (this.items[task.name] === undefined) {
    return false;
}
    delete this.items[task.name];
    return true;
};

 function Task(name, location, description) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.completed = false;
 }

Task.prototype.isComplete = function(yes) {
    if (yes !== false) {
        this.completed = true;
        return true;
    }
    return false;
}