let programs = createPrograms('program')
let workoutlog = createPrograms('workoutlog')

// Fill the program selector with option items.
const fillSelector = (selector, array) => {
    const selectorID = document.querySelector(selector)
    const arrayID = array
    selectorID.innerHTML = ''
    const optionItem = document.createElement('option')

    arrayID.forEach((program) => {
        selectorID.appendChild(program)
    })
}



// Listen for button press to add program.
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const input = document.querySelector('#add-program')

    // Check to see if input has value
    if (input.value) {
        workoutlog.push(input.value)
        input.value = ''
        saveProgram('workoutlog', workoutlog)
        //renderPrograms(workoutlog)
    } else {
        alert('You need to enter a workout name')
    } 
    
}) 

console.log(workoutlog)
console.log(programs)
fillSelector('#program-selector', programs)