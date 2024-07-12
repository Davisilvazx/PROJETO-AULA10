const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}>
            <label for="task${index}" class="${task.completed ? 'completed' : ''}">${task.name}</label>
            <button class="delete-btn" onclick="removeTask(${index})">Remover</button>
        `;
        taskList.appendChild(li);
        const checkbox = li.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });
    });
}
function addTask(name) {
    tasks.push({ name, completed: false });
    renderTasks();
}
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        addTask(taskName);
        taskInput.value = '';
    }
});
renderTasks();
