// Run code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item (li) for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add a class to the list item for consistent styling
        taskItem.classList.add('task-item');

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Add class for styling the remove button

        // Add an event listener to the "Remove" button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the "Remove" button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value = '';

        // Optionally, add a temporary highlight effect for the newly added task
        taskItem.classList.add('highlight');
        setTimeout(() => {
            taskItem.classList.remove('highlight');
        }, 1000); // Remove the highlight class after 1 second
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
