const tenLac = document.getElementById("sunOne");
const pCyg = document.getElementById("sunTwo");
const vega = document.getElementById("sunThree");
const kic = document.getElementById("sunFour");
const hdfourteen = document.getElementById("sunFive");
const gliese570 = document.getElementById("sunSix");
const luyten = document.getElementById("sunSeven");

myColors = {
    'O': ['#88cafb', '136, 202, 251'],
    'B': ['#d4ecfc'],
    'A': ['#fbf9ff'],
    'F': ['#f9fdcc'],
    'G': ['#fcf764'],
    'K': ['#f8c000'],
    'M': ['#fa4234'],
}

const changeData = async (name) => {

    let url = `https://api.api-ninjas.com/v1/stars?name=${name}`;
    let options = {
        method: 'GET',
        headers: { 'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ' }
    }

    try {
    const res = await fetch(url, options);
    const data = await res.json();
        
    if (!res.ok) {
        console.log('error')
            return
    }
        
    let magnitude = [data[0].apparent_magnitude, data[0].absolute_magnitude];
    let distance = [data[0].distance_light_year];
    let rightAsc = parseFloat(data[0].right_ascension.slice(0, 2));
    let declination = (data[0].declination.slice(0, 3));
    
    if (declination[0] === '+') {
        declination = declination.slice(1);
    } else {
        declination = parseFloat(declination.slice(1) * -1);
    }
    

    if (magnitude[1][0] === '−') {
        let absMag = magnitude.pop();
        let absNum = parseFloat(absMag.slice(1) * -1);
        magnitude.push(absNum);
    }

    

    let scatterData = {x: rightAsc, y: declination};

    let name = data[0].name;
    let spectralClass = data[0].spectral_class;
    let constellation = data[0].constellation;
    let colors = myColors[spectralClass[0]];
    let colorOne = colors[0];
    let colorTwo = colors[1];

    if (magnitude[1][0] === '-') {
        let absMag = magnitude.pop();
        let absNum = parseFloat(absMag.slice(1) * -1);
        magnitude.push(absNum);
    }

    
    changeBar(magnitude, colorOne);
    changeDistance(distance, colorOne);
    updateScatter(scatterData, colorOne);
    updateMisc(name, spectralClass, constellation);


    } catch (error) {
        console.log(error);
    }
}


const updateMisc = (name, stellarClass, constellation) => {
    let miscContainer = document.getElementById('miscContainer')

    while (miscContainer.firstChild) {
        miscContainer.removeChild(miscContainer.firstChild);
    }

    let nameLi = document.createElement("ul");
    let stellarLi = document.createElement("ul");
    let constLi = document.createElement("ul");

    nameLi.textContent = "Name: " + name;
    stellarLi.textContent = "Class: " + stellarClass;
    constLi.textContent = "Constellation: " + constellation;

    miscContainer.appendChild(nameLi);
    miscContainer.appendChild(stellarLi);
    miscContainer.appendChild(constLi);
}


tenLac.addEventListener('click', async () => {
    try {
        await changeData('10 lac');
    } catch(error) {
        console.log(error);
    }
});

pCyg.addEventListener('click', async () => {
    try {
        await changeData('P Cyg');
    } catch(error) {
        console.log(error);
    }
});

vega.addEventListener('click', async () => {
    try {
        await changeData('vega');
    } catch(error) {
        console.log(error);
    }
});

kic.addEventListener('click', async () => {
    try {
        await changeData('KIC 8');
    } catch(error) {
        console.log(error);
    }
});

hdfourteen.addEventListener('click', async () => {
    try {
        await changeData('HD 147513');
    } catch(error) {
        console.log(error);
    }
});

gliese570.addEventListener('click', async () => {
    try {
        await changeData('gliese 570');
    } catch(error) {
        console.log(error);
    }
});

luyten.addEventListener('click', async () => {
    try {
        await changeData('luyten');
    } catch(error) {
        console.log(error);
    }
});

