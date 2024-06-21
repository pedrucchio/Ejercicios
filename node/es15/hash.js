const bcrypt = require('bcryptjs');

async function hashPassword(password){
    const hashPassword = await bcrypt.hash(password,10)
    return(hashPassword)
}

async function comparedPassword(plainPassword,hashedPassword) {
    const match = await bcrypt.compare(plainPassword,hashedPassword)
    return match
}

async function passwordLogic() {
    const password = "abc31";
    const result = await hashPassword(password);
    console.log(result);
    const isSamePassword = await comparedPassword(password,result);
    console.log(isSamePassword);
}

passwordLogic();