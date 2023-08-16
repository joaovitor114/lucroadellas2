document.getElementById("calculator-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const valorCusto = parseFloat(document.getElementById("valorCusto").value);

    const lucro1 = calcularLucro(valorVenda, valorCusto, 0.01);
    const lucro7 = calcularLucro(valorVenda, valorCusto, 0.074);

    const percent1 = calcularPorcentagem(lucro1, valorVenda);
    const percent7 = calcularPorcentagem(lucro7, valorVenda);

    document.getElementById("profit1").textContent = lucro1.toFixed(2);
    document.getElementById("percent1").textContent = percent1.toFixed(2) + "%";

    document.getElementById("profit7").textContent = lucro7.toFixed(2);
    document.getElementById("percent7").textContent = percent7.toFixed(2) + "%";
});

document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("valorVenda").value = "";
    document.getElementById("valorCusto").value = "";
    document.getElementById("profit1").textContent = "";
    document.getElementById("percent1").textContent = "";
    document.getElementById("profit7").textContent = "";
    document.getElementById("percent7").textContent = "";
});

function calcularLucro(venda, custo, taxa) {
    const valorImposto = venda * 0.04;
    const valorTaxaCartao = venda * taxa;
    const lucro = venda - (custo + valorImposto + valorTaxaCartao);
    return lucro;
}

function calcularPorcentagem(valor, total) {
    return (valor / total) * 100;
}
