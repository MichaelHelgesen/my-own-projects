let programs = createPrograms('program')
let workoutlog = createPrograms('workoutlog')

// Listen for program HTML selector change.
document.querySelector('#program-selector').addEventListener('change', (event) => {
    
    event.preventDefault()

    // Fill the session selector based on chosen program in program selector.
    fillSelector("#session-selector", findSession(programs))

    // Dynamicly change the href of the edit sessions link.
    editSessionLink.href = `/add_session.html#${event.target.value}`
    
    programSelectorValue = event.target.value

    console.log(programSelectorValue)
})

// Listen for add workout button press. 
document.querySelector('#add-program-button').addEventListener('click', (event) => {
    
    event.preventDefault()

    const newLog = new Program(programSelectorValue)

    newLog.sessions.push(programSelectorValue)

    workoutlog.push(newLog)

    saveProgram('workoutlog', workoutlog)
    
    renderPrograms(workoutlog)
})

// Fill the program and session selectors with option items.
const fillSelector = (selector, array) => {
    const selectorItem = document.querySelector(selector)
    selectorItem.innerHTML = ''
    
    array.forEach((item) => {
        const option = document.createElement('option')
        option.textContent = ''
        option.textContent = item.name 
        selectorItem.appendChild(option)
    })
}

// Find the corresponding sessions array for the chosen program.
const findSession = (array) => {
    const selectorValue = document.querySelector('#program-selector').value 
    const findProgram = array.findIndex(element => element.name.toLowerCase().trim().replace(/\s+/g, '') === selectorValue) 
    return array[findProgram].sessions
}

// Choose the array items to fill the program selector.
fillSelector("#program-selector", programs)

// Choose the array items to fill the session selector based on chosen program.
fillSelector("#session-selector", findSession(programs))

// Get the value of the program selector.
let programSelectorValue =  document.querySelector('#program-selector').value

// Get the edit sessions link.
const editSessionLink = document.querySelector('#session-link')

// Set the href of the edit sessions link.
editSessionLink.href = `/add_session.html#${programSelectorValue}`

// Render the workout log.
renderPrograms(workoutlog)

console.log(workoutlog)

console.log(programSelectorValue)