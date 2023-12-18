// const proximaStats = {
//     absolute_magnitude: "15.49",
//     apparent_magnitude: "11.05",
//     constellation: "Centaurus",
//     declination: "−62° 40′ 46.1″",
//     distance_light_year: "4.22",
//     name: "Proxima Centauri",
//     right_ascension: "14h 29m 42.95s",
//     spectral_class: "M5.5V"
// }

// Chart.defaults.elements.point.backgroundColor = 'blue';
// Chart.defaults.elements.point.radius = 3;

// const starData = [
//     { x: 14.49, y: -62}
// ]

// const scatterData = {
//     data: {
//         datasets: [{
//             label: "Declination & Right Ascension",
//             data: [{x: 14.49, y: 62}, {x: 10, y: 70}],
//             backgroundColor: "black"
//         }]
//     }
// }

// const scatterOptions = {
//     scales: {
//         x: {
//             type: 'linear',
//             position: 'bottom',
//             min: 0,
//             max: 24,
//             title: {
//                 display: true,
//                 text: 'Right Ascension'
//             }
//         },
//         y: {
//             type: 'linear',
//             position: 'left',
//             beginAtZero: true,
//             // min: -90,
//             max: 90,
//             title: {
//                 display: true,
//                 text: 'Declination'
//             }
//         },
//         responsive: false
//     }
// }

Chart.defaults.elements.point.backgroundColor = 'blue';
Chart.defaults.elements.point.radius = 5;

const scatterGraph = document.getElementById("scatterPlot");

const scatterData = {
    datasets: [{
        data: [{x: 14.49, y: -87}],
        label: 'Declination & Right Ascension'
    }],
  };

const scatterOptions = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: 24,
            title: {
                display: true,
                align: 'end',
                text: 'Right Ascension (Hours)',
            }
        },
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: false,
            min: -100,
            max: 100,
            title: {
                display: true,
                text: 'Declination'
            }
        },
        responsive: false
    }
}


const scatterChart = new Chart(scatterGraph, {type: 'scatter', data: scatterData, options: scatterOptions})

