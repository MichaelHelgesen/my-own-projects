const locationID = location.hash.substring(1)

arrayID = locationID

let programs = createPrograms()

let findProgram = programs.findIndex(findSession) 

let currentProgram = programs[findProgram]

function findSession(element) {
    return element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID;
  }

// Listen for button press to add program.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        currentProgram.sessions.push(
            {
                name: input.value,
                exercises: []
            }
        )
        input.value = ''
        saveProgram(programs)
        renderPrograms(currentProgram.sessions)
    } else {
        alert('You need to enter a workout name')
    } 
    
})  

renderPrograms(currentProgram.sessions)

console.log(currentArray)