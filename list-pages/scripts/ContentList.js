// urls endpoint
const url = `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/`;

// image url
const imageUrl = (dir) => `./images/${dir}`;

const contentContainer = document.getElementById('content');

function main() {
  fetch(url)
  .then(async (result) => {
    // result case
    const data = await result.json();

    console.log(data);

  contentContainer.innerHTML = '';

    data.forEach(jobs => {
      const cards = `
      <div class="card p-3 mb-5 mt-2" id="">
        <div class="icon"> <img src=" "></div>
        <div class="heading mt-3">
          <h4 class="mb-0">${jobs.tittle}</h4>
        </div>
        <div class="mt-3 smaller">
          <h6>${jobs.tittleDesc}</h6>
        </div>
      </div>`

      const elements = document.createElement('div');
      elements.innerHTML = cards;
      elements.className = "col-md-4";
      contentContainer.appendChild(elements);
    });
})
}

  main();