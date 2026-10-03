const convertButton = document.getElementById("convertButton")

const currencySelect = document.querySelector(".convertPara")
const currencySelectDe = document.querySelector(".convertDe")


async function convertValues() {

    const inputCurrencyValue = Number(
        document.querySelector(".input-currency").value
    )

    const convertToConvert = document.querySelector(".pValor")
    const convertConverted = document.querySelector(".pValorSaida")


    // Pegando as cotações

    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
    )

    const data = await response.json()

    const dolarToday = Number(data.USDBRL.bid)
    const euroToday = Number(data.EURBRL.bid)
    const librasToday = Number(data.GBPBRL.bid)
    const bitcoinToday = Number(data.BTCBRL.bid)




    let valorEmReal


    if (currencySelectDe.value == "real") {

        valorEmReal = inputCurrencyValue

    } else if (currencySelectDe.value == "dolar") {

        valorEmReal = inputCurrencyValue * dolarToday

    } else if (currencySelectDe.value == "euro") {

        valorEmReal = inputCurrencyValue * euroToday

    } else if (currencySelectDe.value == "libras") {

        valorEmReal = inputCurrencyValue * librasToday

    } else if (currencySelectDe.value == "bitcoin") {

        valorEmReal = inputCurrencyValue * bitcoinToday
    }


 

    let valorConvertido


    if (currencySelect.value == "real") {

        valorConvertido = valorEmReal

    } else if (currencySelect.value == "dolar") {

        valorConvertido = valorEmReal / dolarToday

    } else if (currencySelect.value == "euro") {

        valorConvertido = valorEmReal / euroToday

    } else if (currencySelect.value == "libras") {

        valorConvertido = valorEmReal / librasToday

    } else if (currencySelect.value == "bitcoin") {

        valorConvertido = valorEmReal / bitcoinToday
    }


  

    if (currencySelectDe.value == "real") {

        convertToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelectDe.value == "dolar") {

        convertToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectDe.value == "euro") {

        convertToConvert.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectDe.value == "libras") {

        convertToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelectDe.value == "bitcoin") {

        convertToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue)
    }



    if (currencySelect.value == "real") {

        convertConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorConvertido)

    } else if (currencySelect.value == "dolar") {

        convertConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)

    } else if (currencySelect.value == "euro") {

        convertConverted.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)

    } else if (currencySelect.value == "libras") {

        convertConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)

    } else if (currencySelect.value == "bitcoin") {

        convertConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(valorConvertido)
    }
}




function changeCurrency() {

    const currencyName = document.querySelector(".currencyName")
    const currencyImg = document.querySelector(".moeda2")


    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/dollar.png"

    } else if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    } else if (currencySelect.value == "libras") {

        currencyName.innerHTML = "Libras"
        currencyImg.src = "./assets/libra.png"

    } else if (currencySelect.value == "bitcoin") {

        currencyName.innerHTML = "BTC"
        currencyImg.src = "./assets/bitcoin.png"

    } else {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }
    convertValues()
}




function changeCurrencyDe() {

    const currencyName = document.querySelector(".boxEntrada p")
    const currencyImg = document.querySelector(".moeda1")


    if (currencySelectDe.value == "dolar") {

        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/dollar.png"

    } else if (currencySelectDe.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    } else if (currencySelectDe.value == "libras") {

        currencyName.innerHTML = "Libras"
        currencyImg.src = "./assets/libra.png"

    } else if (currencySelectDe.value == "bitcoin") {

        currencyName.innerHTML = "BTC"
        currencyImg.src = "./assets/bitcoin.png"

    } else {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
}




function abrirCambio() {

    const box = document.getElementById("boxCambio")

    const moedaDe = document.querySelector(".convertDe")
    const moedaPara = document.querySelector(".convertPara")
    const valor = document.querySelector(".input-currency")
    const mensagemErro = document.querySelector(".mensagemErro")


    mensagemErro.textContent = ""


    if (moedaDe.value === "") {

        mensagemErro.textContent = "Selecione uma moeda de origem."
        return

    }


    if (moedaPara.value === "") {

        mensagemErro.textContent = "Selecione uma moeda de destino."
        return

    }


    if (valor.value === "") {

        mensagemErro.textContent = "Digite um valor."
        return

    }


    if (Number(valor.value) <= 0) {

        mensagemErro.textContent = "Digite um valor maior que zero."
        return

    }

    if (moedaDe.value === moedaPara.value) {

        mensagemErro.textContent = "As moedas devem ser diferentes."
        return

    }

    changeCurrencyDe()
    changeCurrency()

    convertValues()

    box.classList.add("ativa")
}
currencySelect.addEventListener("change", changeCurrency)
currencySelectDe.addEventListener("change", changeCurrencyDe)