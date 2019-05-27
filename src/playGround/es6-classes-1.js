class Person {

  constructor(name = 'anonymous', age = 0) {
      this.name = name  
      this.age = age
  }
  getGretting() {
      return `Hi. I am  ${this.name}!`
  }
   getDescribtions() {
       return `${this.name} is ${this.age} years old`
   }

};

class Student extends Person {
   constructor(name, age, major) {
       super(name, age);
       this.major = major
   }
//    hasMajor() {
//        return !!this.major;
//    }
    getDescribtions() {
        let descriptions = super.getDescribtions();
       
        if (this.major) {
            descriptions+= ` His major is ${this.major}`;
        }
       
        return descriptions;
    }
}

class Traveler extends Person {
    constructor(name, age , homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGretting() {
        let greeting = super.getGretting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting;

    }

}

//Traveler -> Person
//Add support for homeLocation
// 1. Hi, I am Khalid Issa. I'm visiting from Maroua
// 2. Hi, I am Khalid Issa



const me = new Traveler('Khalid', 36, 'Landon');
console.log(me.getGretting());

const other = new Traveler( undefined, undefined, 'No where');
console.log(other.getGretting())