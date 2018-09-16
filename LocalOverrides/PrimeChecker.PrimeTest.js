PrimeChecker.prototype.primeTest = function (event) {
    var num = $("#inputNum").val();
    var value = Number(num);
    var result = event.data.instance.isPrime(value);
    if (result)
        $("#output").text(value + ' is a prime number.');
    else
        $("#output").text(value + ' is not a prime number.');
}
