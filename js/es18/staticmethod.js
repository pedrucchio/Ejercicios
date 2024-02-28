class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    static fromObject(obj){
        const pers = new Person(obj.firstName,obj.lastName);
        return pers;
    }
    }
    
    const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
    };
    
    const person = Person.fromObject(obj);
    console.log(person.firstName + " " + person.lastName);