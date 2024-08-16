const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(17));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);

