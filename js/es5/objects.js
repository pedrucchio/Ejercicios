const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  let person2 = person1;
  // const person2 = {...person1};
  person2.firstName = "Simon"
  // Modify the property `firstName` of the `person2` in "Simon".

  // la razon por la que al copiar normalmente cambia el original es porque lo que se 
  // copia es la referencia al original por lo que al cambiar la copia como esta por \ referencia se 
  // cambia tambien el original
  
  console.log(person1);
  console.log(person2);