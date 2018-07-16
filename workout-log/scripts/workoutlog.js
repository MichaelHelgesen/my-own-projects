let programs = createPrograms('program')
let workoutlog = createPrograms('workoutlog')


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

// Listen for button press to add program.
document.querySelector('#program-selector').addEventListener('change', (event) => {
    
    event.preventDefault()

    fillSelector("#session-selector", sessionSelector(programs))

    programSelectorValue = event.target.value

    console.log(programSelectorValue)
    
})

const sessionSelector = (array) => {
    const test = document.querySelector('#program-selector').value 
    const test2 = array.findIndex(element => element.name.toLowerCase().trim().replace(/\s+/g, '') === test) 
    return array[test2].sessions
}

fillSelector("#program-selector", programs)

fillSelector("#session-selector", sessionSelector(programs))

let programSelectorValue =  document.querySelector('#program-selector').value

const editSessionLink = document.querySelector('#session-link')

const test = () => {
    return document.querySelector('#program-selector').value
}

editSessionLink.href = `/add_session.html#${test()}`

console.log(programSelectorValue)