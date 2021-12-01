// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

let state = {
    inputContent: []
}

function renderTodoListItem(stateInputParam) {

    // const sectionEl = document.querySelector('.todo-section')
    
    //Get the ul from html in todo section
    const ulEl = document.querySelector('.todo-list')
    // const formEl = document.querySelector('.add-item')
    // const valueInput = document.getElementsByClassName("text-input").value
    
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
    // stateCheckBoxParam = inputEl.checked
    divEl1.append(inputEl)

    //create another div
    const divEl2 = document.createElement('div')
    divEl2.setAttribute('class', 'text-section')

    //create an p
    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'text')
    pEl.textContent = stateInputParam[stateInputParam.length - 1]
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

    // btnEl1.addEventListener('click', function (event) {

    // })

    //event for second button delete
    btnEl2.addEventListener('click', function (event) {
        liEl.remove()
    })

    //event for checkbox if is clicked
    inputEl.addEventListener('click', function (event) {

        if (inputEl.checked === true) {
            renderTodoListItemCompleted(stateInputParam)
            liEl.remove()
        }

    })
}

function renderTodoListItemCompleted(stateInputParam) {

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
    // stateCheckBoxParam = inputEl.checked
    divEl1.append(inputEl)

    //create another div
    const divEl2 = document.createElement('div')
    divEl2.setAttribute('class', 'text-section')

    //create an p
    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'text')
    pEl.textContent = stateInputParam[stateInputParam.length - 1]
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

    // btnEl1.addEventListener('click', function (event) {

    // })

    //event for second button delete
    btnEl2.addEventListener('click', function (event) {
        liEl.remove()
    })

    inputEl.addEventListener('click', function (event) {

        if (inputEl.checked === true) {
            renderTodoListItem(stateInputParam)
            liEl.remove()
        }

    })
}

function  renderDisplayTodoListItem() {
    //Get the form value
    const formEl = document.querySelector('.add-item')

    //events for the form this has a subevent
    formEl.addEventListener('submit', function (event) {
        
        const inputEl = document.querySelector('.text-input')
       
        state.inputContent.push(inputEl.value)

        event.preventDefault()
        renderTodoListItem(state.inputContent)
        
    })
}

function render() {
    renderDisplayTodoListItem()
}

function removeCompletedSection() {
    const checkboxInput = document.querySelector(".show-completed-checkbox")

        checkboxInput.addEventListener('click', function (event) {
            const completedList = document.querySelector('section .completed-list')

            if (checkboxInput.checked === false) {
                completedList.style.display = 'none'
            }

            else {
                completedList.style.display = 'block'
                renderTodoListItemCompleted()
            }

        })

}

render()
removeCompletedSection()