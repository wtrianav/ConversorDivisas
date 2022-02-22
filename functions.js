function loadCurrencies() {
  let currencies = [
    "USD - Dólar estadounidense",
    "MXN - Peso mexicano",
    "COP - Peso colombiano",
    "EUR - Euro",
    "GBP - Libra esterlina",
  ];
  let fromselect = document.getElementById("from-currency");
  let toselect = document.getElementById("to-currency");

  let i = 1;
  currencies.forEach((element) => {
    let option1 = document.createElement("option");
    option1.text = element;
    option1.value = i;
    fromselect.appendChild(option1);

    let option2 = document.createElement("option");
    option2.text = element;
    option2.value = i;
    toselect.appendChild(option2);
    i++;
    console.log(option1);
  });
}

function convertCurrency() {
  let amount = parseFloat(document.getElementById("amount").value);
  let fromCurrency = document.getElementById("from-currency").value;
  let toCurrency = document.getElementById("to-currency").value;
  console.log(amount, fromCurrency, toCurrency);

  let resultado = 0;

  // Convirtiendo de desde USD
  if (fromCurrency == "1") {
    // de USD a MXN
    if (toCurrency == "2") {
      resultado = amount * 20.54;
    }

    // de USD a COP
    else if (toCurrency == "3") {
      resultado = amount * 3925.99;
    }

    // de USD a EUR
    else if (toCurrency == "4") {
      resultado = amount * 0.88;
    }

    // de USD a GBP
    else if (toCurrency == "5") {
      resultado = amount * 0.74;
    }
  }

  // Convirtiendo de desde MXN
  else if (fromCurrency == "2") {
    // de MXN a USD
    if (toCurrency == "1") {
      resultado = amount * 0.049;
    }

    // de MXN a COP
    else if (toCurrency == "3") {
      resultado = amount * 191.12;
    }

    // de MXN a EUR
    else if (toCurrency == "4") {
      resultado = amount * 0.043;
    }

    // de MXN a GBP
    else if (toCurrency == "5") {
      resultado = amount * 0.036;
    }
  }

  // Convirtiendo de desde COP
  else if (fromCurrency == "3") {
    // de COP a USD
    if (toCurrency == "1") {
      resultado = amount * 0.00025;
    }

    // de COP a MXN
    else if (toCurrency == "2") {
      resultado = amount * 0.0052;
    }

    // de COP a EUR
    else if (toCurrency == "4") {
      resultado = amount * 0.00022;
    }

    // de COP a GBP
    else if (toCurrency == "5") {
      resultado = amount * 0.00019;
    }
  }

  // Convirtiendo de desde EUR
  else if (fromCurrency == "4") {
    // de EUR a USD
    if (toCurrency == "1") {
      resultado = amount * 1.14;
    }

    // de EUR a MXN
    else if (toCurrency == "2") {
      resultado = amount * 23.31;
    }

    // de EUR a COP
    else if (toCurrency == "3") {
      resultado = amount * 4456.12;
    }

    // de EUR a GBP
    else if (toCurrency == "5") {
      resultado = amount * 0.84;
    }
  }

  // Convirtiendo de desde GBP
  else if (fromCurrency == "5") {
    // de GBP a USD
    if (toCurrency == 1) {
      resultado = amount * 1.36;
    }

    // de GBP a MXN
    else if (toCurrency == "2") {
      resultado = amount * 27.88;
    }

    // de GBP a COP
    else if (toCurrency == "3") {
      resultado = amount * 5327.68;
    }

    // de GBP a EUR
    else if (toCurrency == "4") {
      resultado = amount * 1.2;
    }
  }

  document.getElementById("resultado").innerHTML =
    "Resultado: $" + resultado.toFixed(2);
}
