// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
//     console.log("hello world");
// })



import Example from "./scripts/example";

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
    })
    .catch(err => {
        console.log(`error ${err}`)
});


