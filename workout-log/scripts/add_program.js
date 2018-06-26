// The array to hold the different programs
let programs = createPrograms()

// Listen for button press to add program.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        programs.push(new Program(input.value))
        input.value = ''
        saveProgram(programs)
        renderPrograms(programs)
    } else {
        alert('You need to enter a workout name')
    } 
    
})  

renderPrograms(programs)