import Example from "./scripts/example";
import Star from "./scripts/star.js";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    // debugger;
    new Example(main);
    console.log("hello world");
});

let options = {
    method: 'GET',
    headers: { 'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ' }
  }
  
let url = 'https://api.api-ninjas.com/v1/stars?name=proxima'
  
  
fetch(url,options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(typeof data[0].distance_light_year)
    })
    .catch(err => {
        console.log(`error ${err}`)
});




