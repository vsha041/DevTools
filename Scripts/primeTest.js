PrimeChecker.prototype.primeTest = function (event) {
    var num = $("#inputNum").val();
    var value = Number(num);
    var result = event.data.instance.isPrime(value);
    if (result)
        $("#output").text('True');
    else
        $("#output").text('False');
}
