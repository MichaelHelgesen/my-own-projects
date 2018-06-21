const program = function (name, id) {
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
    const inputData = ''

    // Check to see if input has value
    if (input.value) {
        programs.push(new program(input.value))
        input.value = ''
        saveProgram(programs)
    } else {
        alert('You need to enter a workout name')
    } 
    
})  

// DOM elements for each individual program

// Render the program

// Save todos to localStorage
