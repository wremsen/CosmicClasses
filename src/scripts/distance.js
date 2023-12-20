Chart.defaults.color = '#FFFFFF';
const distanceGraph = document.getElementById("distanceChart");

const distanceData = {
  labels: ["Distance (Lightyears)"],
  datasets: [{
    data: [0],
    backgroundColor: '#ff9b3c'
  }]
}

const distanceOptions = {
  scales: {
    x: {
      max: 20,
      beginAtZero: true,
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'white',
      }
    },
    y: {
      grid: {
        color: 'white',
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'white',
      }
    }
  },
  responsive: true,
  indexAxis: "y"
}
  
let distance = new Chart(distanceGraph, {type: 'bar', data: distanceData, options: distanceOptions})


const changeDistance = (data) => {
  distance.data.datasets[0].data = data;
  distance.update();
}
