const proximaCent = document.getElementById("sunOne");
const lacaille = document.getElementById("sunTwo");
const lalande = document.getElementById("sunThree");
const ross = document.getElementById("sunFour");
const teegarden = document.getElementById("sunFive");
const gliese570 = document.getElementById("sunSix");
const luyten = document.getElementById("sunSeven");

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

    let scatterData = {x: rightAsc, y: declination};
    
    changeBar(magnitude);
    changeDistance(distance);
    updateScatter(scatterData);


    } catch (error) {
        console.log(error);
        }
}

proximaCent.addEventListener('click', async () => {
    try {
        await changeData('proxima');
    } catch(error) {
        console.log(error);
    }
});

lacaille.addEventListener('click', async () => {
    try {
        await changeData('lacaille');
    } catch(error) {
        console.log(error);
    }
});

lalande.addEventListener('click', async () => {
    try {
        await changeData('lalande');
    } catch(error) {
        console.log(error);
    }
});

ross.addEventListener('click', async () => {
    try {
        await changeData('ross 248');
    } catch(error) {
        console.log(error);
    }
});

teegarden.addEventListener('click', async () => {
    try {
        await changeData('teegarden');
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

