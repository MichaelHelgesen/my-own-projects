const program = function (name, id = 0) {
    this.name = name,
    this.id = uuidv4(),

    this.sessions = [{
        name: 'Pull 1',
        excercises: [{
            name: 'Ring dip'
        }, {
            name: 'Archer Pushup' 
        }]
    }, {
        name: 'Push 1'
    }] 
}

// Create program array from localStorage
const createPrograms = () => {
    const programJSON = localStorage.getItem('program')

    try {
        return programJSON ? JSON.parse(programJSON) : []
    } catch (e) {
        []
    }
}

// Save programs to local storage
const saveProgram = (program) => {
    localStorage.setItem('program', JSON.stringify(program))
}

// DOM elements for each individual program
const generateToDOM = (program) => {
    
    // Creating the DOM elements
    const programDiv = document.createElement('div')
    const containerEl = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')
    const programName = document.createElement('span')

    // Setup the program container
    programDiv.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    programDiv.appendChild(containerEl)

    // Setup the delete button
    deleteButton.textContent = 'x'
    deleteButton.classList.add('button', 'button--text')
    deleteButton.addEventListener('click', () => {
        deleteProgram(program.id)
        saveProgram(programs)
        renderPrograms()
    })

    // Setup the edit button
    editButton.textContent = 'Edit'
    editButton.classList.add('button', 'button--text')
    editButton.addEventListener('click', () => {
        location.assign(`/add_session.html#${program.name}`)
    })

    // Setup name
    programName.textContent = program.name

    // Add name to container
    containerEl.appendChild(programName)

    // Add edit button to container
    containerEl.appendChild(editButton)

    // Add delete button to container
    containerEl.appendChild(deleteButton)

    return programDiv
}

// Render the programs
const renderPrograms = () => {
    
    const contentDIV = document.querySelector('#content')
    contentDIV.innerHTML = ''
    
    if (programs.length > 0) {
        programs.forEach((program) => {
            contentDIV.appendChild(generateToDOM(program))
        })
    } else {
        contentDIV.innerHTML ='<span>No programs made</span>'
    }
} 

// Delete a program
const deleteProgram = ((programID) => {
    const index = programs.findIndex((item) => item.id === programID)
    if (index > -1) {
        programs.splice(index, 1)
    }
})