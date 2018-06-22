const program = function (name, id = 0) {
    this.name = name,
    this.id = id
 /*    this.age = 4,
    this.sessions = [{
        name: 'Pull 1',
        excercises: [{
            name: 'Ring dip'
        }, {
            name: 'Archer Pushup'
        }]
    }, {
        name: 'Push 2'
    }] */
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

// The array to hold the different programs
let programs = createPrograms()

// Save programs to local storage
const saveProgram = (program) => {
    localStorage.setItem('program', JSON.stringify(program))
}

// Listen for button press.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        programs.push(new program(input.value))
        input.value = ''
        saveProgram(programs)
        renderPrograms()
    } else {
        alert('You need to enter a workout name')
    } 
    
})  

// DOM elements for each individual program
const generateToDOM = (program) => {
    
    // Creating the DOM elements
    const programDiv = document.createElement('label')
    const containerEl = document.createElement('div')
    const button = document.createElement('button')
    const programName = document.createElement('span')

    // Setup the program container
    programDiv.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    programDiv.appendChild(containerEl)

    // Setup the button
    button.textContent = 'x'
    button.classList.add('button', 'button--text')
    button.addEventListener('click', () => {
        console.log('delete item')
    })

    // Setup name
    programName.textContent = program.name

    // Add name to container
    containerEl.appendChild(programName)

    // Add button to container
    containerEl.appendChild(button)
    
    return programDiv
}

// Render the programs
const renderPrograms = () => {
    
    document.querySelector('#content').innerHTML = ''
    
    programs.forEach((program) => {
        document.querySelector('#content').appendChild(generateToDOM(program))
    })
} 

renderPrograms()