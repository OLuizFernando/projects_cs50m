const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCounter = 0

function newTodo() {
  itemCounter++

  const todoName = document.getElementById('todo-name')

  let li = document.createElement('li')
  li.className = classNames.TODO_ITEM

  const todoText = todoName.value ? todoName.value : `${itemCounter}º TODO`
  li.innerHTML = `<span class="${classNames.TODO_TEXT}">${todoText}</span>`
  li.innerHTML += `<input type="checkbox" class="${classNames.TODO_CHECKBOX}" value="${itemCounter}">`

  list.appendChild(li)

  // Clear the input field and focus for the next item
  todoName.value = ''
  todoName.focus()

  // Update the counters and add the listener to the new checkbox
  updateCountSpans()
  addCheckboxListener(li.querySelector(`.${classNames.TODO_CHECKBOX}`))
}

// Update the counters
function updateCountSpans() {
  itemCountSpan.innerHTML = itemCounter
  uncheckedCountSpan.innerHTML = itemCounter - countChecked()
}

// Count how many checkboxes are checked
function countChecked() {
  const checkboxes = document.getElementsByClassName(classNames.TODO_CHECKBOX)
  const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length
  return checkedCount
}

// Add event listener to the checkbox to update counts on check/uncheck
function addCheckboxListener(checkbox) {
  checkbox.addEventListener('change', updateCountSpans)
}