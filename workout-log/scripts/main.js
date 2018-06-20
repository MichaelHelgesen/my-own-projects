const program = function (name) {
    this.name = name
}

const newProgram = new program('Body By Rings Phase #1')

const newProgram2 = new program('Body By Rings Phase #2')

const arrayOfPrograms = []

arrayOfPrograms.push(newProgram)

arrayOfPrograms.push(newProgram2)

console.log(arrayOfPrograms)

// Array of objects:

/* const people = [{
    name: 'Mikke',
    age: 38
}, {
    name: 'Per',
    age: 34
}, {
    name: 'Ane',
    age: 23
}] */