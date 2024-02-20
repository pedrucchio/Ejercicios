function multiplyByTwo(number) {
    function inner() {
        number = number * 2;
        return number;
    }
    return inner;
}

console.log(multiplyByTwo(4)());