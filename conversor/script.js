function receiveDate() {
    document.getElementById("btn").addEventListener("click", function () {
        const valorReais = document.getElementById("valorReais").value;
        const valorWons = document.getElementById("valorWons").value;

        if (valorReais) {
            converterReaisParaWons(parseFloat(valorReais));
        } else if (valorWons) {
            converterWonsParaReais(parseFloat(valorWons));
        } else {
            alert("Por favor, insira um valor válido.");
        }
    });
}

function converterReaisParaWons(valorReais) {
    const apiKey = "b25c78d660916690fce27df7";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/BRL`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const taxaCambio = data.conversion_rates.KRW;
            const valorWons = valorReais * taxaCambio;

            document.getElementById("valorWons").value = valorWons.toFixed(2)
        })
        .catch(error => {
            console.error("Erro ao buscar taxa de câmbio:", error);
            alert("Não foi possível realizar a conversão. Tente novamente mais tarde.");
        });
}

function converterWonsParaReais(valorWons) {
    const apiKey = "b25c78d660916690fce27df7";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/BRL`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const taxaCambio = data.conversion_rates.KRW;
            const valorReais = valorWons / taxaCambio;

            document.getElementById("valorReais").value = valorReais.toFixed(2);
        })
        .catch(error => {
            console.error("Erro ao buscar taxa de câmbio:", error);
            alert("Não foi possível realizar a conversão. Tente novamente mais tarde.");
        });
}