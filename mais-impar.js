function maisimpar() {
  var imp = 0;

  for (var i = 1; imp < 1000;) {
    console.log(imp);

    imp = imp + i;

    i = i + 2;
  }
}

maisimpar();
