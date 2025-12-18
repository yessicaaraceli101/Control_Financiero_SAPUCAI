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
    '#1e88e5', // azul
    '#fbc02d', // amarillo
    '#43a047'  // verde
  ],
  barThickness: 50,      // 🔹 barras más finas
  maxBarThickness: 60,   // 🔹 límite de grosor
  categoryPercentage: 0.6, // 🔹 menos ancho de categoría
  barPercentage: 0.7       // 🔹 más aire entre barras
}]

  },
  options: {
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: {
      grid: {
        display: false   // 🔹 menos ruido visual
      }
    },
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