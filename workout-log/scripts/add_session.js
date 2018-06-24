const locationID = location.hash.substring(1)
let programs = createPrograms()

renderPrograms()

const sessions = () => {
    programs.forEach((item, index) => {
        item.sessions = []
    })
}

//sessions()

 const addSessions = () => {
    programs.forEach((item, index) => {
        item.sessions.push({
            name: 'push2'
        })
    })
}

addSessions() 

console.log(programs)