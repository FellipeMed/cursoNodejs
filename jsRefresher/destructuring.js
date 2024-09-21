// destructuring in objects
const person = {
    name: 'Felipe',
    age: 20,
    height: '2,10m'
}

const printName = ({ name }) => {
    console.log(name)
}

printName(person)

//other way

const { name, age } = person
console.log(name, age)

//destructuring in arrays 

const hobbies = ['sports', 'cooking', 'box']

const [hobby1, hobby2] = hobbies //in arrays does not matter the const name, hobby is associate with position 0 of the array, because arrays does not have names
console.log(hobby1, hobby2)