function fibo() {
  var num1 = 0;
  var num2 = 1;
  var num3;
  var clientNumber = 12;
  var bool = false;

  while (num1 < num2) {
    num3 = num1 + num2;
    num2 = num2 + num3;
    num1 = num3;

    if (clientNumber == num2) {
      console.log("O número está presente no Fibonacci");
      bool = true;
    }
  }
  if (bool == false) {
    console.log("O número não está presente no Fiboonacci");
  }
}

fibo();
