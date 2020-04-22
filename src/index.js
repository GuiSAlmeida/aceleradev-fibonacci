'use strict'
let result = [];

const fibonacci = () => {
    let fibo = 0;
    let prev = 1;
    let aux = 0;

    while(fibo <= 350){
        result.push(fibo);
        aux = fibo;
        fibo = fibo + prev;
        prev = aux;
    };

    return result;
};

const isFibonnaci = (num) => {
    const hasNumber = fibonacci();
    return hasNumber.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}