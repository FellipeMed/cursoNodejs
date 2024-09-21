const hobbies = ['sports', 'cooking', 'box']

//spread operator
const copiedArray = [...hobbies]
console.log(copiedArray)

//rest operator
const toArray = (...args) => {
    return args
}
console.log(toArray(1, 2, 3, 4)) // as many as you want arguments
