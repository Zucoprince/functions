function multioito() {
  var num = 4;
  var mult = 12;
  var limit = 1000;

  for (mult; num <= limit;) {
    console.log(num);

    num = num + mult;

    mult = mult + 8;
  }
}
multioito();
