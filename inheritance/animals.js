class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    doNoise() {
        throw new Error('you have to Implement this method')
    }
}

class Dog extends Animal {
    doNoise() {
        console.log('waff waff')

    }
}

const myAnimal = new Animal('fake')

myAnimal.doNoise()

const myDog = new Dog('Buddy')

myDog.doNoise()