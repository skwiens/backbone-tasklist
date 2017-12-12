// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';

import Task from './models/task';
import TaskList from './collections/task_list';

// import TaskView from './views/task_view';
import TaskListView from './views/task_list_view';

const taskList = new TaskList();
// let taskTemplate;

// const renderList = function(taskList) {
//   const $taskList = $('#todo-items');
//   $taskList.empty();
//
//   taskList.forEach((task) => {
//     const taskView = new TaskView({
//       model: task,
//       template: _.template($('#task-template').html()),
//       tagName: 'li',
//       className: 'task',
//     });
//
//     // append needs an html element. render returns this, so you must attach it to $el (or el).
//     $taskList.append(taskView.render().$el);
//
//   });

  //   taskHtml.find('.delete').click({task: task}, (params) => {
  //     //console.log(params.data);
  //     const task = params.data.task;
  //     taskList.remove(task);
  //
  //     updateStatusMessageWith(`The task "${task.get('task_name')}" has been deleted`)
  //   });
  //
  //   taskHtml.on('click', '.toggle-complete', {task: task}, function(params) {
  //     params.data.task.set('is_complete', !params.data.task.get('is_complete'));
  //     $(this).closest('.task').toggleClass('is-complete')
  //   });
  // });

// }



// old way

// const renderList = function(taskList) {
//   const $taskList = $('#todo-items');
//   $taskList.empty();
//
//   // task attributes are any attributes that we have defined to the task, they will be returned as a hash. They do not need to be defined in the model, they can be defined anywhere in the code or when instantiating
//   taskList.forEach((task) =>{
//     const taskHtml = $(taskTemplate(task.attributes));
//     $taskList.append(taskHtml);
//
//     // first param of .click => optional pass through this information of task: task through params... then we access it through params.data and we had already assigned this as task.
//
//     //How could you make use of closures here?
//     taskHtml.find('.delete').click({task: task}, (params) => {
//       //console.log(params.data);
//       const task = params.data.task;
//       taskList.remove(task);
//       // set and get to get and set attribtues... can't just call the attribute.
//       updateStatusMessageWith(`The task "${task.get('task_name')}" has been deleted`)
//     });
//
//     taskHtml.on('click', '.toggle-complete', {task: task}, function(params) {
//       // one line is to modify the model, the other is the model the appearance on the screen.
//       params.data.task.set('is_complete', !params.data.task.get('is_complete'));
//       $(this).closest('.task').toggleClass('is-complete')
//     });
//   });
// }

// helper method for updating the DOM with the status from a hash
// const updateStatusMessageFrom = (messageHash) => {
//   $('#status-messages').empty();
//   _.each(messageHash, (messageType) => {
//     messageType.forEach((message) => {
//       $('#status-messages').append($(`<li>${message}</li>`));
//     })
//   });
//   $('#status-messages').show();
// }

// helper method for updating the DOM with the status from a string
// const updateStatusMessageWith = (message) => {
//   $('#status-messages').empty();
//   $('#status-messages').append($(`<li>${message}</li>`));
//   $('#status-messages').show();
// }

// const addNewTask = function(event) {
//   event.preventDefault();
//
//   const taskData ={};
//   ['task_name', 'assignee'].forEach( (field) => {
//     const val = $(`input[name=${field}]`).val();
//     if (val != '') {
//       taskData[field] = val;
//     }
//   });
//   const newTask = new Task(taskData);
//
//   if (newTask.isValid()) {
//     taskList.add(newTask);
//     updateStatusMessageWith(`New task added: ${newTask.get('task_name')}`);
//   } else {
//     updateStatusMessageFrom(newTask.validationError);
//   }
// }

$(document).ready( () => {
  // taskTemplate = _.template($('#task-template').html());

  // $('#add-task-form').submit(addNewTask);

    // Why does this belong in $(document).ready ?
  const taskListView = new TaskListView({
    model: taskList,
    template: _.template($('#task-template').html()),
    el: 'main'
  });

  taskListView.render();

  // not needed because of the listenTo change in the view
  // taskList.on('update', renderList, taskList);

  taskList.add(new Task({task_name: "Put rendering logic in Backbone Views", assignee: "Me"}));
  taskList.add(new Task({task_name: "Put handling events in Backbone Views", assignee: "Me"}));
  taskList.add(new Task({task_name: "Eat a tasty thing"}));
});
