Chart.defaults.elements.point.backgroundColor = 'blue';
Chart.defaults.elements.point.radius = 5;

const scatterGraph = document.getElementById("scatterPlot");

const scatterData = {
    datasets: [{
        data: [{}],
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
    }
}


let scatterChart = new Chart(scatterGraph, {type: 'scatter', data: scatterData, options: scatterOptions})


const updateScatter = (data) => {
    scatterChart.data.datasets[0].data[0] = data;
    scatterChart.update();
}

