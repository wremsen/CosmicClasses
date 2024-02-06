Chart.defaults.color = '#FFFFFF';
const distanceGraph = document.getElementById("distanceChart");

const distanceData = {
  labels: [""],
  datasets: [{
    data: [0],
    backgroundColor: '#ff9b3c'
  }]
}

const distanceOptions = {
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: 'white'
      },
      grid: {
        color: 'white'
      },
      title: {
        display: true,
        text: 'Distance (Lightyears)',
        color: 'white',
        font: {
          family: 'Courier New',
        },
      }
    },
    y: {
      grid: {
        color: 'white'
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


const changeDistance = (data, color) => {
  distance.data.datasets[0].data = data;
  distance.data.datasets[0].backgroundColor = color;
  distance.update();
}
