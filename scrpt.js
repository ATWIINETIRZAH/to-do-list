// Get references to HTML elements
const addButton = document.getElementById('addButton');   // The "Add" button
const taskInput = document.getElementById('taskInput');   // The input field for entering tasks
const taskList = document.getElementById('taskList');     // The list element for displaying tasks

// Add an event listener to the "Add" button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the trimmed task text from the input field
    const taskText = taskInput.value.trim();
    
    // Check if the task text is not empty
    if (taskText !== '') {
        // Create a new list item element
        const li = document.createElement('li');
        
        // Set the content of the list item using a template literal
        li.innerHTML = `${taskText}<button class="deleteButton">Delete</button>`;
        
        // Add the list item to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';

        // Get a reference to the "Delete" button within the new list item
        const deleteButton = li.querySelector('.deleteButton');
        
        // Add an event listener to the "Delete" button
        deleteButton.addEventListener('click', () => {
            // Remove the corresponding list item when the "Delete" button is clicked
            taskList.removeChild(li);
        });
    }
}
