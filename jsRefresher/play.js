

//objects
const person = {
    name: 'felipe',
    age: 20,
    greet: function () {
        console.log('Hi, i am ' + this.name)
    }
}
person.greet()

//arrow functions

const algumaFuncao =  () => {
    return ' '
}

//other ways arrow functions
const add = (a, b) => a + b
const addOne = a => a + 1
const addRandom = () => 1 + 2
const algumaCoisa = function (){ }

//using let & const
const carName = 'Corolla'
let carKm = '180km'

//code sintax
var name = "felipe"
var age = '20'
var hight = '2,10m'

function showInfo(){
    return `My name is ${name}, I'm ${age} and my hight is ${hight}`
}

