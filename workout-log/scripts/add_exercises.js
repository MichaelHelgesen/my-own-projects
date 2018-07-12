// Get the identifiers from URL
const locationID = location.hash.substring(1).split('_')

// Get programs from local storage.
let programs = createPrograms()

// Find the first and second array in which current session lives.
const firstArray = findArray(programs, locationID[0])
const secondArray = findArray(programs[firstArray].sessions, locationID[1])

function findArray(array, locationID) {
    return array.findIndex(element => element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID) 
}

const currentProgram = programs[firstArray].sessions[secondArray]

// Listen for button press to add exercises.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        currentProgram.exercises.push(
            {
                name: input.value
            }
        )
        input.value = ''
        saveProgram(programs)
        renderPrograms(currentProgram.exercises)
    } else {
        alert('You need to enter an exercise name')
    } 
    
})  

// Render the exercises to DOM
renderPrograms(currentProgram.exercises)
