const proximaCent = document.getElementById("sunOne");
const lacaille = document.getElementById("sunTwo");

const changeData = async () => {
    let options = {
        method: 'GET',
        headers: { 'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ' }
    }
    let url = `https://api.api-ninjas.com/v1/stars?name=proxima`

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

proximaCent.addEventListener('click', changeData);
lacaille.addEventListener('click', changeData);