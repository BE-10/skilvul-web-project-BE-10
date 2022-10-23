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

    data.forEach(function (jobs) {
      console.log(jobs.title);
      const cards = `
      <div class="card p-3 mb-5 mt-2">
        <div>
          <img class="card-img-top" src="https://asset.kompas.com/crops/x6Fz7jwP6jfFi9lUqk4nGFR5A2M=/1135x0:6669x3689/750x500/data/photo/2022/02/09/620369c5b2b3a.jpg" alt="Card image cap">
        </div>
        <div class="heading mt-3">
          <h4 class="mb-0">${jobs.title}</h4>
        </div>
        <div class="card-body mt-3 smaller">
          <h6>${jobs.titleDesc}</h6>
        </div>
        <div class="ftcards">
          <a href="#" class="btn btn-primary">Lihat Deskripsi</a>
        </div>
      </div>`

      const elements = document.createElement('div');
      elements.innerHTML = cards;
      elements.className = "col-md-4 d-flex align-items-stretch";
      contentContainer.appendChild(elements);
    });
})
}

  main();