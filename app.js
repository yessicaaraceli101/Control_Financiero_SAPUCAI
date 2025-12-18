const ingresos = 20503000;
const egresos = 8455000;
const sapucai = 6700000;

// Mostrar en tarjetas
document.getElementById('ingresos').innerText = ingresos.toLocaleString();
document.getElementById('egresos').innerText = egresos.toLocaleString();
document.getElementById('sapucai').innerText = sapucai.toLocaleString();
document.getElementById('balance').innerText =
  (ingresos - egresos).toLocaleString();


// =====================
// GRÁFICO 1: INGRESOS / EGRESOS / SAPUCAI
// =====================
new Chart(document.getElementById('graficoIngresos'), {
  type: 'bar',
  data: {
    labels: ['Ingresos', 'Egresos', 'Sapucai'],
    datasets: [{
      data: [ingresos, egresos, sapucai]
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      }
    }
  }
});


// =====================
// GRÁFICO 2: EGRESOS vs SAPUCAI
// =====================
new Chart(document.getElementById('graficoMedio'), {
  type: 'pie',
  data: {
    labels: ['Egresos', 'Sapucai'],
    datasets: [{
      data: [egresos, sapucai]
    }]
  }
});
