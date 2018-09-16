PrimeChecker.prototype.isPrime = function (inputNumber) {
    if (inputNumber == 2) {
        return true;
    }
    if (inputNumber == 0 || inputNumber == 1) {
        return false;
    }
    var i = 0;
    var squareRoot = Math.sqrt(inputNumber);
    for (i = 2; i < squareRoot; i++) {
        if (inputNumber % i == 0) {
            return false;
        }
    }

    return true;
}