// function squre(a) {
//     return a * a
// }

// const squreArrow = a => a * a
// const sqr = squre(9)
// const sqra = squreArrow(9)
// console.log(sqr)
// console.log(sqra)


const getFirstName = (name, i) => {

    return name.split(' ')[i]
}

const getFirstNameAr = (name) => name.split(' ')[1]

console.log(getFirstName('Khalid Issa', 1))
console.log(getFirstNameAr('Ali Issa'))

