const locationID = location.hash.substring(1)
let programs = createPrograms()

renderPrograms()



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


// addSessions()

console.log(locationID)