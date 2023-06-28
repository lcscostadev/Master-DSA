const todos = [
    {
        id: 1,
        title: "Complete project",
        completed: false,
        priority: "High"
    },
    {
        id: 2,
        title: "Attend meeting",
        completed: true,
        priority: "Medium"
    },
    {
        id: 3,
        title: "Buy groceries",
        completed: false,
        priority: "Low"
    }
];

// Display all incomplete tasks
const incompleteTasks = todos.filter(todo => !todo.completed);
console.log(incompleteTasks);
// Output:
// [
//   {
//     id: 1,
//     title: "Complete project",
//     completed: false,
//     priority: "High"
//   },
//   {
//     id: 3,
//     title: "Buy groceries",
//     completed: false,
//     priority: "Low"
//   }
// ]

// Get the titles of all completed tasks
const completedTaskTitles = todos
    .filter(todo => todo.completed)
    .map(todo => todo.title);
console.log(completedTaskTitles);
// Output: ["Attend meeting"]

// Find a specific task by its ID
const taskId = 2;
const foundTask = todos.find(todo => todo.id === taskId);
console.log(foundTask);
// Output:
// {
//   id: 2,
//   title: "Attend meeting",
//   completed: true,
//   priority: "Medium"
// }

// Update the priority of a task
const taskToUpdate = todos.find(todo => todo.id === taskId);
if (taskToUpdate) {
    taskToUpdate.priority = "High";
}
console.log(todos);
  // Output:
  // [
  //   {
  //     id: 1,
  //     title: "Complete project",
  //     completed: false,
  //     priority: "High"
  //   },
  //   {
  //     id: 2,
  //     title: "Attend meeting",
  //     completed: true,
  //     priority: "High"
  //   },
  //   {
  //     id: 3,
  //     title: "Buy groceries",
  //     completed: false,
  //     priority: "Low"
  //   }
  // ]
