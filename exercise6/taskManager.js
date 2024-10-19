class Task {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }
}

const tasks = [];

function addTask() {
  const name = prompt("Enter the task name: ");
  const description = prompt("\nEnter task description: ");
  const dueDate = prompt("\nEnter due date (yyyy-mm-dd): ");
  const newTask = new Task(name, description, dueDate);
  tasks.push(newTask);
  console.log("The task added successfully");
}

function showTasks(tasks) {
  tasks.forEach((task, index) => {
    const status = task.completed ? "Done" : "Not complete";
    console.log(`${index + 1}.[${status}] ${task.name} => (Task Description: ${task.description}) (Due: ${task.dueDate}) \n`);
  });
}

function listAllTasks() {
  console.log("****** All Tasks ******");
  if (tasks.length == 0) {
    console.log("There are no tasks to show.");

    return;
  }
  showTasks(tasks);
}

function listCompletedTasks() {
  console.log("****** Completed Tasks ******\n");
  const completedTasks = tasks.filter(task => task.completed);
  if (completedTasks.length > 0) {
    showTasks(completedTasks);
  } else {
    console.log("There are no completed tasks.");
  }
}

function markAsDone() {
  const taskNumber = parseInt(prompt("Enter the task number you want to mark as done: "), 10);
  if (taskNumber < 1 || taskNumber > tasks.length)
    console.log("Invalid task number.");
  else {
    tasks[taskNumber - 1].completed = true;
    console.log(`\nTask "${tasks[taskNumber - 1].name}" marked as done.`);
  }
}

function deleteTask() {
  const taskNumber = parseInt(prompt("Enter the task number you want to delete: "), 10);
  if (taskNumber < 1 || taskNumber > tasks.length)
    console.log(`\nTask number ${taskNumber} not found.`);
  else {
    tasks.splice(taskNumber - 1, 1);
    console.log("\nTask deleted successfully.");
  }
}

function clearAllTasks() {
  tasks.splice(0, tasks.length);
  console.log("All tasks deleted.");
}

function changeDescription() {
  const taskNumber = parseInt(prompt("Enter the task number to change its description: "), 10);
  if (taskNumber < 1 || taskNumber > tasks.length)
    console.log(`\nTask number ${taskNumber} not found.`);
  else {
    const newDescription = prompt("\nEnter the new description for the task: ");
    tasks[taskNumber - 1].description = newDescription;
    console.log(`\nDescription for task "${tasks[taskNumber - 1].name}" has been changed.`);
  }
}

function searchForTaskByName() {
  const taskName = prompt("Enter the task name to search for: ");
  console.log("\n");

  const searchResult = tasks.filter(task => task.name.toLowerCase().includes(taskName.toLowerCase()));

  if (searchResult.length > 0) {
    showTasks(searchResult);
  } else {
    console.log(`\nNo tasks found with the name "${taskName}".`);
  }
}

function exitTaskManager() {
  console.log("Task Manager Closed")
}

function showMenu(choice) {
  console.log('\n***************************');
  console.log('Welcome to JS TASK-MANAGER');
  console.log('***************************');
  console.log('Select an action:');
  console.log('1) Add a new task');
  console.log('2) List all tasks');
  console.log('3) List completed tasks');
  console.log('4) Mark a task as done');
  console.log('5) Delete a task');
  console.log('6) Clear all tasks');
  console.log('7) Change a task description');
  console.log('8) Search by Task Name');
  console.log('9) Exit');
  console.log('***************************');
}

showMenu();

let isExit=false;

do{
  const choice = parseInt(prompt("What's your choice? "), 10);
  console.log("\nYou entered: " + choice);
  switch (choice) {
    case 1:
      addTask();
      break;
    case 2:
      listAllTasks();
      break;
    case 3:
      listCompletedTasks();
      break;
    case 4:
      markAsDone();
      break;
    case 5:
      deleteTask();
      break;
    case 6:
      clearAllTasks();
      break;
    case 7:
      changeDescription();
      break;
    case 8:
      searchForTaskByName();
      break;
    case 9:
      exitTaskManager();
      isExit=true;
      break;
    default:
      console.log('Invalid choice.');
      showMenu();
      break;
  }

}while(!isExit);

