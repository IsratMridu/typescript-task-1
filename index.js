"use strict";
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const start = document.querySelector('#start');
const due = document.querySelector('#due');
const priority = document.querySelector('#priority');
let taskList = [];
function addTask(event) {
    event.preventDefault();
    if (title.value === '') {
        alert('Enter Title');
    }
    else if (description.value === '') {
        alert('Enter Description');
    }
    else if (start.value === '') {
        alert('Enter Start Date');
    }
    else if (due.value === '') {
        alert('Enter Due Date');
    }
    else if (priority.value === '') {
        alert('Select Priority');
    }
    else {
        var taskInfo = {
            Title: title.value,
            Description: description.value,
            Start: start.value,
            Due: due.value,
            Priority: priority.value
        };
        taskList.push(taskInfo);
        title.value = '';
        description.value = '';
        start.value = '';
        due.value = '';
        priority.value = '';
        // console.log(taskList);
        showArray(taskList);
    }
}
function showArray(ARRAY) {
    let ans = Array.length;
    let todoList = document.getElementById('todoList');
    let grids = document.createElement('div');
    grids.classList.add('card');
    let count = document.getElementById('listCount');
    ARRAY.map(item => {
        grids.innerHTML = `
    <h1>Title: ${item.Title}</h1>
    <h3>Description: ${item.Description}</h3>
    <h3>Start Date: ${item.Start}</h3>
    <h3>Due Date: ${item.Due}</h3>
    <h3>Priority: ${item.Priority}</h3>
    `;
    });
    todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(grids);
}
