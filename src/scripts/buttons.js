const tenLac = document.getElementById("sunOne");
const pCyg = document.getElementById("sunTwo");
const vega = document.getElementById("sunThree");
const kic = document.getElementById("sunFour");
const hdfourteen = document.getElementById("sunFive");
const gliese570 = document.getElementById("sunSix");
const luyten = document.getElementById("sunSeven");


Array.prototype.mySample = function() {
    return this[Math.floor(Math.random() * this.length)];
}

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

const updateSunColor = (newColor) => {
    var sunOElement = document.querySelector('.sunO');
    sunOElement.style.backgroundColor = newColor;
  
    
    var styleElement = document.getElementById('sun-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'sun-styles';
      document.head.appendChild(styleElement);
    }
  
    var keyframes = `
      @keyframes rays {
        0% {
          box-shadow: 
            0 0 0 0px ${newColor}80, 
            0 0 0 20px ${newColor}80, 
            0 0 0 60px ${newColor}20, 
            0 0 0 80px ${newColor}10,
            0 0 40px 100px ${newColor}10;
          z-index: 9;
        }
  
        100% {
          box-shadow: 
            0 0 0 20px ${newColor}80,
            0 0 0 60px ${newColor}20, 
            0 0 0 80px ${newColor}10, 
            0 0 0 100px ${newColor}00,
            0 0 40px 100px ${newColor}10;
          z-index: 9;
        }
      }
    `;
  
    styleElement.innerHTML = keyframes;
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


classOStars = ['10 lac', '14 Cep', 'AE Aur', 'α Cam', 'ly aur', 'UW CMa']

tenLac.addEventListener('click', async () => {
    try {
        let myStar = classOStars.mySample();
        await changeData(myStar);
        await updateSunColor('#88cafb')
    } catch(error) {
        console.log(error);
    }
});

classBStars = []

pCyg.addEventListener('click', async () => {
    try {
        await changeData('P Cyg');
        await updateSunColor('#d4ecfc');
    } catch(error) {
        console.log(error);
    }
});

classAStars = []

vega.addEventListener('click', async () => {
    try {
        await changeData('vega');
        await updateSunColor('#fbf9ff');
    } catch(error) {
        console.log(error);
    }
});

classFStars = []

kic.addEventListener('click', async () => {
    try {
        await changeData('KIC 8');
        await updateSunColor('#f9fdcc');
    } catch(error) {
        console.log(error);
    }
});

classGStars = []

hdfourteen.addEventListener('click', async () => {
    try {
        await changeData('HD 147513');
        await updateSunColor('#fcf764');
    } catch(error) {
        console.log(error);
    }
});

classKStars = []

gliese570.addEventListener('click', async () => {
    try {
        await changeData('gliese 570');
        await updateSunColor('#f8c000');
    } catch(error) {
        console.log(error);
    }
});

classMStars = []

luyten.addEventListener('click', async () => {
    try {
        await changeData('luyten');
        await updateSunColor('#fa4234');
    } catch(error) {
        console.log(error);
    }
});

