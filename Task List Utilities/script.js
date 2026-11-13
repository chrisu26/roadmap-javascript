

function addTask(tasks, title){
  
  let newId = tasks.length + 1;
  let newTasks = tasks;
  
  let newTask = {
      id: newId,
      title: title,
      completed: false
  }
  
  newTasks.push(newTask);
  
  return newTasks;  
  
}


function completeTask(tasks, taskId){
  
  let newTasks = tasks;
  
  for (let i = 0; i < tasks.length; i++){
      let idNumber = tasks[i].id;
      if (idNumber === taskId){
        newTasks[i].completed = true;       
      }
    newTasks[i].completed = tasks[i].completed;
  }
  
  return newTasks;

}

function removeTask(tasks, taskId){
  
  let newTasks = tasks.filter((task) => task.id !== taskId);
  
  return newTasks;
  
}


function countIncompleteTasks(tasks){
  let x = 0;
  for (let i = 0; i < tasks.length; i++){
      
      if (tasks[i].completed){
        x += 1;
      }
    
    x += 0;
    
  }
  
  return x;
  
}



const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];
const withNewTask = addTask(tasks, 'Build task utilities');

console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);

console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
