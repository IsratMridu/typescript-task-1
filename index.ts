const title = <HTMLInputElement>document.querySelector('#title')!;
const description = <HTMLInputElement>document.querySelector('#description')!;
const start = <HTMLInputElement>document.querySelector('#start')!;
const due = <HTMLInputElement>document.querySelector('#due')!;
const priority = <HTMLInputElement>document.querySelector('#priority')!;

interface TaskInfo {
    Title: string,
    Description: string,
    Start: string,
    Due: string,
    Priority: string
}


let taskList: TaskInfo[] = [];
   
 

function addTask(event: Event){
    event.preventDefault();
   
   if(title.value === ''){
       alert('Enter Title');

   }
   else if(description.value === ''){
       alert('Enter Description');

   }
   else if(start.value === ''){
       alert('Enter Start Date');
   }
   else if(due.value === ''){
       alert('Enter Due Date');
   }
   else if(priority.value === ''){
       alert('Select Priority');
   }
   else{
 
   

    var taskInfo : TaskInfo = {
        Title:  title.value,
        Description: description.value,
        Start: start.value,
        Due: due.value,
        Priority: priority.value
    
    
    }
    

    
    taskList.push(taskInfo);
 
    title.value = '';
    description.value = '';
    start.value ='';
    due.value = '';
    priority.value='';
    
    // console.log(taskList);
    showArray(taskList);
    


    
}
    

    
   
}

function showArray(ARRAY: TaskInfo[]){
    let ans: number = Array.length; 
  let todoList = document.getElementById('todoList');
  let grids = document.createElement('div');
  grids.classList.add('card');
  let count = document.getElementById('listCount');
  
  
  ARRAY.map(item=> {
  
    grids.innerHTML = `
    <h1>Title: ${item.Title}</h1>
    <h3>Description: ${item.Description}</h3>
    <h3>Start Date: ${item.Start}</h3>
    <h3>Due Date: ${item.Due}</h3>
    <h3>Priority: ${item.Priority}</h3>
    `
  });
  todoList?.appendChild(grids);
  
  
}