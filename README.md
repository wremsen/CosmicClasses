# Interstellar Neighbors

## Background

[Live link!](https://wremsen.github.io/CosmicClasses/)

Interstellar Neighbors is a data visualization project focusing on some of the nearest planetary star systems to our solar system - our neighbors so-to-speak. The key focus of this project was to take a look at the nearest stars that have robust planetary systems, possible destinations in the cosmos for far future humans to visit.

By plugging into the Stars API from API Ninjas, Interstellar Neighbors fetches data and characteristics of these far away stars.

## Functionality & MVPs

With Interstellar Neighbors you can:

- Click on various stars to view their data

In order to retrieve the star's data, we make a fetch request to the API and save the various data points to use as we update our charts and graphs.

```js
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

    let name = data[0].name
    let spectralClass = data[0].spectral_class
    let constellation = data[0].constellation

    
    changeBar(magnitude);
    changeDistance(distance);
    updateScatter(scatterData);
    updateMisc(name, spectralClass, constellation);


    } catch (error) {
        console.log(error);
        }
}
```

We then simply invoke the functions changeBar, changeDistance, updateScatter, and updateMisc (defined in our chart files) with the data we retrieved from our fetch rquest. Thanks to some nifty, built-in functionality from Chart.js, our charts update with the relevant information.


## Technologies

List the technologies, frameworks, and tools I used in this project. 

- Chart.js
- Stars API (API Ninjas)

## Future Features

- Changes to star buttons: Instead of fetching an indiviual star's data - cycle through stars of similar classes
- Implement a more robust "distance" chart: represent to-scale distance of selected star
- Search functionality: search for a star by specific properties
- Styling tweaks and adjustments
