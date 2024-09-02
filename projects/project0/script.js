const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let counter = 0

function newTodo() {
  counter++

  todoName = document.getElementById('todo-name')

  let li = document.createElement('li')
  li.className = classNames.TODO_ITEM

  let todoText = todoName.value ? todoName.value : counter + 'º TODO'
  li.innerHTML = `<span class="${classNames.TODO_TEXT}">${todoText}</span>`
  li.innerHTML += `<input type="checkbox" class="${classNames.TODO_CHECKBOX}" id="checkbox-${counter}">`

  list.appendChild(li)

  todoName.value = ''
  todoName.focus()
}
