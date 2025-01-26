document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Pass 'false' to prevent duplicate saving
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task to the list
    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert('Please enter a valid task!');
            return;
        }

        // Create task list item (li)
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.classList.add('task-item');

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Remove task logic
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
            saveTasks(); // Update Local Storage after removal
        };

        // Append remove button to task item
        taskItem.appendChild(removeButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Save to Local Storage if specified
        if (save) {
            saveTasks();
        }

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Event listener for "Enter" key in the input field
    taskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
