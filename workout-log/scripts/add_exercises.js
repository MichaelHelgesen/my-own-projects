const locationID = location.hash.substring(1).split('_')
let programs = createPrograms()


// Need to figure out this!
let findProgram1 = programs.findIndex(findSession1)

let currentProgram1 = programs[findProgram1]

function findSession1(element) {
    return element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID[0];
  }

let findProgram2 = currentProgram1.sessions.findIndex(findSession2)

let currentProgram = currentProgram1.sessions[findProgram2]

function findSession2(element) {
    return element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID[1];
  }

console.log(currentProgram1)
console.log(currentProgram)



// Listen for button press to add program.
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
        alert('You need to enter a workout name')
    } 
    
})  

console.log(locationID)