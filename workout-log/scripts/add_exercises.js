const locationID = location.hash.substring(1)
let programs = createPrograms()

let findProgram = programs.findIndex(findSession) 

let currentProgram = programs[findProgram]


function findSession(element) {
    return element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID;
  }

  console.log(locationID)

// Listen for button press to add program.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        currentProgram.sessions.push(
            {
                name: input.value
            }
        )
        input.value = ''
        saveProgram(programs)
        renderPrograms(currentProgram.sessions)
    } else {
        alert('You need to enter a workout name')
    } 
    
})  

//renderPrograms(currentProgram.sessions)

//console.log(testing(currentProgram.sessions))

console.log(findProgram)
console.log(currentProgram)
console.log(programs)
console.log(locationID)