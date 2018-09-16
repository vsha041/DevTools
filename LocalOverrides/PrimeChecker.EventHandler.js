(function(){
    var primeChecker = new PrimeChecker();
    $("#btnCheckPrime").on('click', {instance : primeChecker}, primeChecker.primeTest);
})();