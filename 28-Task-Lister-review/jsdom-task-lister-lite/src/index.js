document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  
  form.addEventListener('submit', formSubmit)
});

function formSubmit(event) {
  event.preventDefault()

  const tasksList = document.getElementById('tasks')
  // Creating a new list item
  const newItem = document.createElement('li')
  let input = document.querySelector('#new-task-description').value
  newItem.innerText = input
  // Creating a new button
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'DELETE'
  deleteButton.addEventListener('click', deleteItem)
  newItem.append(deleteButton)
  // Adding styling to list item
  const priority = document.getElementById('new-task-priority').value
  newItem.classList.add(priority)
  // newItem.style.backgroundColor = priority
  tasksList.append(newItem)
  event.target.reset()
}

function deleteItem(event) {
  console.log('deleting item...')
  event.target.parentElement.remove()
}