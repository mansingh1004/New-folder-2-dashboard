const ctx3 = document.getElementById('polararea');

  const polararea= new Chart(ctx3, {
  type: 'polarArea',
  data: {
    labels: ['C', 'C++', 'JAVA', 'PYTHON', 'C#', 'FULL STACK'],
    datasets: [{
      label: 'Knowledge of Emplooye',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});