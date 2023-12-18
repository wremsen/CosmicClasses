const proxima = {
    absolute_magnitude: "15.49",
    apparent_magnitude: "11.05",
    constellation: "Centaurus",
    declination: "−62° 40′ 46.1″",
    distance_light_year: "4.22",
    name: "Proxima Centauri",
    right_ascension: "14h 29m 42.95s",
    spectral_class: "M5.5V"
}

const magnitudeGraph = document.getElementById("magnitudeChart");

const magnitudeData = {
  labels: ["Apparent Magnitude", "Absolute Magnitude"],
  datasets: [{
    data: [11.05, 15.49],
    backgroundColor: 'orange'
  }]
}

const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black',
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  responsive: false
}

let magnitude = new Chart(magnitudeGraph, {type: 'bar', data: magnitudeData, options: barOptions})
  