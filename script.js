// script.js

function toggleComplete(button) {
    const listItem = button.parentElement;
    const span = listItem.querySelector('span');

    if (listItem.classList.contains('completed')) {
        span.textContent = '❌';  // Cross mark
        button.textContent = 'Incomplete';
        listItem.classList.remove('completed');
    } else {
        span.textContent = '✔';  // Check mark
        button.textContent = 'Complete';
        listItem.classList.add('completed');
    }
}