//objects
const person = {
    name: 'felipe',
    age: 20,
    greet: function () {
        console.log('Hi, i am ' + this.name)
    }
}
person.greet()

