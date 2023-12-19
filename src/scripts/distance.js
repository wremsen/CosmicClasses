const distanceGraph = document.getElementById("distanceChart");

const distanceData = {
  labels: ["Distance From Sun"],
  datasets: [{
    data: [0],
    backgroundColor: 'orange'
  }]
}

const distanceOptions = {
  scales: {
    y: {
      beginAtZero: true,
      max: 10,
      ticks: {
        color: 'orange',
      }
    }
  },
  plugins: {
    legend: {
      display: false,
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
