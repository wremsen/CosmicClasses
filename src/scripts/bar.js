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
    backgroundColor: '#ff9b3c'
  }]
}

const barOptions = {
  scales: {
    x: {
      title: {
        color: '#ff9b3c',
      },
      ticks: {
        color: 'white',
        font: {
          family: 'Courier New',
        },
      },
      grid: {
        color: 'white',
      }
    },
    y: {
      beginAtZero: false,
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
  responsive: true,
  maintainAspectRatio: false
}

let magnitude = new Chart(magnitudeGraph, {type: 'bar', data: magnitudeData, options: barOptions})


const changeBar = (data, color) => {
  magnitude.data.datasets[0].data = data;
  magnitude.data.datasets[0].backgroundColor = color;
  magnitude.update();
}
