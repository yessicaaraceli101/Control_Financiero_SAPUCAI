const ingresos = 20503000;
const egresos = 8455000;
const sapucai = 6700000;

// Mostrar en tarjetas
document.getElementById('ingresos').innerText = ingresos.toLocaleString();
document.getElementById('egresos').innerText = egresos.toLocaleString();
document.getElementById('sapucai').innerText = sapucai.toLocaleString();

// =====================
// GRÁFICO NUEVO (LIMPIO)
// =====================
new Chart(document.getElementById('graficoResumenManual'), {
  type: 'bar',
  data: {
    labels: ['Ingresos', 'Egresos', 'Sapucai'],
    datasets: [{
      data: [ingresos, egresos, sapucai],
      backgroundColor: [
        '#1e88e5', // azul - Ingresos
        '#fbc02d', // amarillo - Egresos
        '#43a047'  // verde - Sapucai
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          }
        }
      }
    }
  }
});