// const proxima = {
//     absolute_magnitude: "15.49",
//     apparent_magnitude: "11.05",
//     constellation: "Centaurus",
//     declination: "−62° 40′ 46.1″",
//     distance_light_year: "4.22",
//     name: "Proxima Centauri",
//     right_ascension: "14h 29m 42.95s",
//     spectral_class: "M5.5V"
// }

const magnitudeGraph = document.getElementById("magnitudeChart");

const magnitudeData = {
  labels: ["Apparent Magnitude", "Absolute Magnitude"],
  datasets: [{
    data: [0, 0],
    backgroundColor: '#fa4334'
  }]
}

const barOptions = {
  scales: {
    x: {
      title: {
        color: '#fa4334',
      },
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'white',
      }
    },
    y: {
      max: 18,
      beginAtZero: true,
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'white',
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  responsive: true
}

let magnitude = new Chart(magnitudeGraph, {type: 'bar', data: magnitudeData, options: barOptions})


const changeBar = (data) => {
  magnitude.data.datasets[0].data = data;
  magnitude.update();
}
