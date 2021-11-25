// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

const state = {

    todoInput : '',
    showCompleted: true,

    todos: [
    {
        text: 'Go shopping',
        completed: false
    },
    //etc other objects inside array
    ]

}

function createTodoListItem(formInputParam) {

    // const sectionEl = document.querySelector('.todo-section')
    
    //Get the ul from html in todo section
    const ulEl = document.querySelector('.todo-list')
    const formEl = document.querySelector('.add-item')
    const valueInput = document.getElementsByClassName("text-input").value
    
    //create li for todo
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'todo')

    //create a div
    const divEl1 = document.createElement('div')
    divEl1.setAttribute('class', 'completed-section')

    //create an input type checkbox
    const inputEl = document.createElement('input')
    inputEl.setAttribute('class', 'completed-checkbox')
    inputEl.setAttribute('type', 'checkbox')
    divEl1.append(inputEl)

    //create another div
    const divEl2 = document.createElement('div')
    divEl2.setAttribute('class', 'text-section')

    //create an p
    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'text')
    pEl.textContent = formInputParam
    divEl2.append(pEl)

    //create another div
    const divEl3 = document.createElement('div')
    divEl3.setAttribute('class', 'button-section')

    //create buttons
    const btnEl1 = document.createElement('button')
    btnEl1.setAttribute('class', 'edit')
    btnEl1.textContent = 'Edit'

    //create buttons
    const btnEl2 = document.createElement('button')
    btnEl2.setAttribute('class', 'delete')
    btnEl2.textContent = 'Delete'
    divEl3.append(btnEl1, btnEl2)

    //appending the whole elemnts to li
    liEl.append(divEl1, divEl2, divEl3)

    ulEl.append(liEl)

    // sectionEl.append(ulEl)
}

function createTodoListItemCompleted() {

    // const sectionEl = document.querySelector('.completed-section')

    //Get the ul from html in todo section
    const ulEl = document.querySelector('.completed-list')

    //create li for todo
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'todo completed')

    //create a div
    const divEl1 = document.createElement('div')
    divEl1.setAttribute('class', 'completed-section')

    //create an input type checkbox
    const inputEl = document.createElement('input')
    inputEl.setAttribute('class', 'completed-checkbox')
    inputEl.setAttribute('type', 'checkbox')
    divEl1.append(inputEl)

    //create another div
    const divEl2 = document.createElement('div')
    divEl2.setAttribute('class', 'text-section')

    //create an p
    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'text')
    pEl.textContent = 'Go shopping'
    divEl2.append(pEl)

    //create another div
    const divEl3 = document.createElement('div')
    divEl3.setAttribute('class', 'button-section')

    //create buttons
    const btnEl1 = document.createElement('button')
    btnEl1.setAttribute('class', 'edit')
    btnEl1.textContent = 'Edit'

    //create buttons
    const btnEl2 = document.createElement('button')
    btnEl2.setAttribute('class', 'delete')
    btnEl2.textContent = 'Delete'
    divEl3.append(btnEl1, btnEl2)

    //appending the whole elemnts to li
    liEl.append(divEl1, divEl2, divEl3)

    ulEl.append(liEl)

    // sectionEl.append(ulEl)
}

function  displayTodoListItem() {
    //Get the form value
    const formEl = document.querySelector('.add-item')

    //events for the form this has a subevent
    formEl.addEventListener('submit', function (event) {
        const inputEl = document.querySelector('.text-input')
        let formInput = inputEl.value

        event.preventDefault()
        createTodoListItem(formInput)
    })
}

function removeCompletedSection() {
    const checkboxInput = document.querySelector(".show-completed-checkbox")

        checkboxInput.addEventListener('click', function (event) {

            if (checkboxInput.checked === false) {
                const completedList = document.querySelector('.completed-list')
                completedList.innerHTML = ''
            }

            else {
                createTodoListItemCompleted()
            }

        })

}

displayTodoListItem()
createTodoListItemCompleted()
removeCompletedSection()
