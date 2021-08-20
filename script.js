// formats moment for todays day 
let currentDate = moment().format('dddd, MMMM Do')

// context of getting it from element 
document.getElementById('currentDay').textContent = currentDate

let presentHour = moment().hour()

// listener for on click function when clicked creates a task with inner html
document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Please Enter a Task")
  }
  // inner html has task input and delete box
  else {
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    // removes task from list when variable is clicked from parentNode
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }
    // when task deleted state reset and everything is cleared for next day
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      }
    }
    // defines task based on input value of text 
    document.querySelector("#newtask input").value = "";
  }
}
