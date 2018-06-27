const locationID = location.hash.substring(1)
let programs = createPrograms()

function findFirstLargeNumber(element) {
    return element.name.toLowerCase().trim().replace(/\s+/g, '') === locationID;
  }

const findSession = () => {
    programs.findIndex((program, index) => {
        return program.name.toLowerCase().trim().replace(/\s+/g, '') === locationID
    })
}

console.log(programs.findIndex(findFirstLargeNumber))



 const addSessions = () => {
    programs.forEach((item, index) => {
        item.sessions.push(
            {
                name: 'test'
            },
            {
                name: 'tototo'
            }
        )
    })
}

 //addSessions()

 //renderPrograms(programs[0].sessions)