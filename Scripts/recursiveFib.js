(function () {
    
    function computeRecursiveFib(n) {
        if (n < 2) {
            return n;
        }
        return computeRecursiveFib(n - 1) + computeRecursiveFib(n - 2);
    }

    var calcFib = function () {
        var num = $("#inputFib").val();
        var value = Number(num);
        var result = computeRecursiveFib(value);
        $("#output").text('Fibonacci number ' + num + ' is ' + result);
    }

    $("#btnCalculateFib").click(calcFib);

})();