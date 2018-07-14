function Program(name, id = 0) {
    this.name = name.trim(),
    //this.id = uuidv4(),
    //this.id = name.toLowerCase().trim().replace(/\s+/g, '')
    this.sessions = [] 
}

// The array from the different subpages set in renderPrograms.
// Created to easier reuse code. 
let currentArray = []

// The array ID from the different items on the subpages. Used to display names of program and
// sessions and to know where the different items belong in the main object.
let arrayID

// Create program array from localStorage
const createPrograms = (key) => {
    const programJSON = localStorage.getItem(key)

    try {
        return programJSON ? JSON.parse(programJSON) : []
    } catch (e) {
        []
    }
}

// Save programs to local storage
const saveProgram = (key, program) => {
    localStorage.setItem(key, JSON.stringify(program))
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
        deleteProgram(program.name)
        saveProgram('program', programs)
        renderPrograms(currentArray)
    })

    // Setup the edit button
    editButton.textContent = 'Edit'
    editButton.classList.add('button', 'button--text')
    editButton.addEventListener('click', () => {
        if (!document.location.hash) {
            location.assign(`/add_session.html#${program.name.toLowerCase().trim().replace(/\s+/g, '')}`)
        } else if (document.location.pathname === '/add_session.html') {
            location.assign(`/add_exercises.html#${arrayID}_${program.name.toLowerCase().trim().replace(/\s+/g, '')}`)
        } 
    })

    // Setup name
    programName.textContent = program.name

    // Add name to container
    containerEl.appendChild(programName)

    // Add edit button to container
    if (document.location.pathname != '/add_exercises.html') {
        containerEl.appendChild(editButton)
    }

    // Add delete button to container
    containerEl.appendChild(deleteButton)

    return programDiv
}

// Render the programs
const renderPrograms = (array) => {
    currentArray = array
    const contentDIV = document.querySelector('#content')
    contentDIV.innerHTML = ''

    if (array.length > 0) {
        if (document.location.hash) {
            contentDIV.innerHTML = arrayID
        }

        array.forEach((program) => {
            contentDIV.appendChild(generateToDOM(program))
        })
    } else {
        contentDIV.innerHTML = arrayID + '<p>No entries yet.</p>'
    }
} 

// Delete a program
const deleteProgram = ((programID) => {
    const index = currentArray.findIndex((item) => item.name === programID)
    if (index > -1) {
        currentArray.splice(index, 1)
    }
})