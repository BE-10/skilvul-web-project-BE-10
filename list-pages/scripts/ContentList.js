<<<<<<< HEAD
// urls endpoint
const url = (id) => `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/${id}`;

// image url
const imageUrl = (dir) => `./images/${dir}`;

const id = [];
for (let i = 1; i <= 4; i++) {
  id.push(i);
}

const contentContainer = document.getElementById('content');

for (let i = 0; i < 4; i++) {
fetch(url(id[i]))
.then(async (result) => {
  // result case
  const data = await result.json();

  console.log(data);

  const cards = `
    <div class="card p-3 mb-5 mt-2">
      <div class="icon"> <img src="${data.image}"></div>
      <div class="heading mt-3">
        <h4 class="mb-0">${data.title}</h4>
      </div>
      <div class="mt-3 smaller">
        <h6>${data.titleDesc}</h6>
      </div>
    </div>`

  const elements = document.createElement('div');
  elements.innerHTML = cards;
  elements.className = "col-md-4";
  contentContainer.appendChild(elements);
})
}





// const url = `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/1`;

// const contentContainer = document.getElementById('content');

// async function main() {
//   const response = await fetch(url);
//   const result = await response.json();

//   const data = result.results;

//   console.log(data)

//   contentContainer.innerHTML = '';
  
//   data.forEach(function (jobs) {
    // const cards = `
    // <div class="col-md-4">
    //   <div class="card p-3 mb-2">
    //     <div class="d-flex justify-content-between">
    //       <div class="d-flex flex-row align-items-center">
    //         <div class="icon"> <img class="imgicon" src="${jobs.image}></div>
    //           <div class="ms-2 c-details">
    //             <h6 class="mb-0">${jobs.titleDesc}</h6>
    //           </div>
    //           <div class="mt-5">
    //             <h3 class="heading">${jobs.title}</h3>
    //             <div class="mt-5">
    //               <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>`

    // const elements = document.createElement('div');
    // elements.innerHTML = cards;
    // contentContainer.appendChild(elements);
//   });
// }

=======
// urls endpoint
const url = (id) => `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/${id}`;

// image url
const imageUrl = (dir) => `./images/${dir}`;

const id = [];
for (let i = 1; i <= 4; i++) {
  id.push(i);
}

const contentContainer = document.getElementById('content');

for (let i = 0; i < 4; i++) {
fetch(url(id[i]))
.then(async (result) => {
  // result case
  const data = await result.json();

  console.log(data);

  const cards = `
    <div class="card p-3 mb-5 mt-2">
      <div class="icon"> <img src="${data.image}"></div>
      <div class="heading mt-3">
        <h4 class="mb-0">${data.title}</h4>
      </div>
      <div class="mt-3 smaller">
        <h6>${data.titleDesc}</h6>
      </div>
    </div>`

  const elements = document.createElement('div');
  elements.innerHTML = cards;
  elements.className = "col-md-4";
  contentContainer.appendChild(elements);
})
}





// const url = `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/1`;

// const contentContainer = document.getElementById('content');

// async function main() {
//   const response = await fetch(url);
//   const result = await response.json();

//   const data = result.results;

//   console.log(data)

//   contentContainer.innerHTML = '';
  
//   data.forEach(function (jobs) {
    // const cards = `
    // <div class="col-md-4">
    //   <div class="card p-3 mb-2">
    //     <div class="d-flex justify-content-between">
    //       <div class="d-flex flex-row align-items-center">
    //         <div class="icon"> <img class="imgicon" src="${jobs.image}></div>
    //           <div class="ms-2 c-details">
    //             <h6 class="mb-0">${jobs.titleDesc}</h6>
    //           </div>
    //           <div class="mt-5">
    //             <h3 class="heading">${jobs.title}</h3>
    //             <div class="mt-5">
    //               <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>`

    // const elements = document.createElement('div');
    // elements.innerHTML = cards;
    // contentContainer.appendChild(elements);
//   });
// }

>>>>>>> 29779fed37bff1f24ab29819c86a9a38c5a17d2f
// main();