function calcular(){
    let wattscomput = document.getElementById("computador").value
    let tempocomput = document.getElementById("tempo1").value
    let quantidade1 = document.getElementById("quantidade1").value
    let resultado1 = ((wattscomput * quantidade1) * tempocomput) / 1000
    let valor1 = resultado1 * 0.72
    document.getElementById("result1").textContent = "O gasto do computador foi de " + resultado1 + " kWh = R$ " + valor1.toFixed(2) 
    
    let wattsimpre = document.getElementById("impressora").value
    let tempoimpre = document.getElementById("tempo2").value
    let quantidade2 = document.getElementById("quantidade2").value
    let resultado2 = ((wattsimpre * quantidade2) * tempoimpre) / 1000
    let valor2 = resultado2 * 0.72
    document.getElementById("result2").textContent = "O gasto da impressora foi de: " + resultado2 + " kWh = R$ " + valor2.toFixed(2) 
    
    let wattslamp = document.getElementById("lampadas").value
    let tempolamp = document.getElementById("tempo3").value
    let quantidade3 = document.getElementById("quantidade3").value
    let resultado3 = ((wattslamp * quantidade3) * tempolamp) / 1000
    let valor3 = resultado3 * 0.72
    document.getElementById("result3").textContent = "O gasto das lâmpadas foi de: " + resultado3 + " kWh =  R$ " + valor3.toFixed(2) 

    let total = resultado1 + resultado2 + resultado3
     let valortotal = valor1 + valor2 + valor3
    document.getElementById("total").textContent = "O total de energia gasto foi de: " + total.toFixed(2) + " kWh = R$ " + valortotal.toFixed(2) 

     gerarGrafico();
}
let grafico;

function gerarGrafico() {
    const texto1 = document.getElementById("result1").textContent;
    const texto2 = document.getElementById("result2").textContent;
    const texto3 = document.getElementById("result3").textContent;

    const match1 = texto1.match(/([\d.]+)\s*kWh/);
    const match2 = texto2.match(/([\d.]+)\s*kWh/);
    const match3 = texto3.match(/([\d.]+)\s*kWh/);

    const consumo1 = match1 ? parseFloat(match1[1]) : 0;
    const consumo2 = match2 ? parseFloat(match2[1]) : 0;
    const consumo3 = match3 ? parseFloat(match3[1]) : 0;

    const ctx = document.getElementById('graficoConsumo').getContext('2d');

    if (grafico) {
        grafico.destroy();
    }

    grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Computador', 'Impressora', 'Lâmpada'],
            datasets: [{
                label: 'Consumo Diário (kWh)',
                data: [consumo1, consumo2, consumo3],
                backgroundColor: [
                    'rgba(40, 75, 50, 0.7)',
                    'rgba(57, 160, 80, 0.7)',
                    'rgba(0, 248, 21, 0.7)'
                ],
                borderColor: [
                    'rgba(40, 75, 50, 0.7)',
                    'rgba(57, 160, 80, 0.7)',
                    'rgba(0, 248, 21, 0.7)'
                ],
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kWh (quilowatt-hora)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}




