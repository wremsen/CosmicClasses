// const sunOne = document.getElementById("sunOne");

// const updateData = async () => {
//     let options = {
//         method: 'GET',
//         headers: { 'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ' }
//       }
//     let url = 'https://api.api-ninjas.com/v1/stars?name=proxima'


//       try {
//         const res = await fetch(url, options);
//         const data = await res.json();

//         if (!res.ok) {
//             console.log('error')
//             return
//         }

//         console.log(data[0].name);
//       } catch (error) {
//         console.log(error);
//       }
// }

// sunOne.addEventListener('click', updateData);

// let options = {
//     method: 'GET',
//     headers: { 'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ' }
//   }
// let url = 'https://api.api-ninjas.com/v1/stars?name=proxima'


  
  
// fetch(url,options)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         console.log(typeof data[0].distance_light_year);
//         return data[0].name;
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
// });