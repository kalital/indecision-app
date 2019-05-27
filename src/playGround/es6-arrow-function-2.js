


const add = function (a, b) {
    console.log(arguments)
    return a + b ;
};

console.log(add(6, 6, 100));

//arguments object - no longer bound with arrow functions

// const adds = (a, b) => {
//     console.log(arguments)
//     return a + b
// };
// console.log(adds(20, 30, 20))

//this keyword with arrow functions

const user = {
    name: 'Khalid',
    cities: ['Ndjmena', 'Krasnodar', 'Mosscow'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in  ${city}!?`)
        // return this.cities.forEach((city) => `${this.name} has lived in  ${city}!?` /*console.log(`${this.name} has lived in  ${city}!?`)*/ )
    }
};

console.log(user.printPlacesLived());



// Challenge area

const multiplier = {
    numbers: [10, 20, 30],
    multiplayBy: 3,
    multiplay () {
       return this.numbers.map((num) => this.multiplayBy * num)
    }
}
console.log(multiplier.multiplay())




























