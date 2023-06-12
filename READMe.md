Describe: toDoList()

Test: "It will add entered task to the tasks property.:
Code: let newList = new toDoList("wash the dishes")
Output: newList {
    tasks: "wash the dishes"
}

Describe: Task

Test: " it will add name, location and description of task"
code: let task1 = new Task("Dishes", "kitchen", "wash the dishes")
Output: task1 {
    name: Dishes,
    location: kitchen,
    description: wash the dishes,
}

Describe: addTask 

Test: "It will add a new task object to the property tasks in our list object"
code: task1 {
    name: Dishes,
    location: kitchen,
    description: wash the dishes,
}
taskList.addTask(task1);
Output: taskList {
    tasks: {
        Dishes {},
    },
}