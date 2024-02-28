class Person {
    firstName = "";
    lastName = "";
    age = 0;

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newValue){
        this.firstName = newValue;
    }

    set lastName(newValue){
        this.lastName = newValue;
    }

    set age(newValue){
        this.age = newValue;
    }

    get firstName(){
        return this.firstName;
    }

    get lastName(){
        return this.lastName;
    }

    get age(){
        return this.age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);