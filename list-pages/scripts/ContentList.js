// urls endpoint
const url = `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/`;

const contentContainer = document.getElementById('content');

function getUrlSearch(query) {
  return `https://634811ba0484786c6e90f2f2.mockapi.io/jobs?title=${query}`;
}

document.getElementById('searchInput').addEventListener('input', search);

function search() {
  const searchValue = document.getElementById('searchInput').value;

  console.log(searchValue);
  if (!searchValue || searchValue !== '' || searchValue !== ' ') {

  fetch(getUrlSearch(searchValue))
  .then(async (result) => {
    // result case
    const data = await result.json();

    console.log(data);

    if (Array.isArray(data)) {
      contentContainer.innerHTML = '';

    data.forEach(function (jobs) {
      console.log(jobs.title);
      const cards = `
      <div class="card p-3 mb-5 mt-2">
        <div>
          <img class="card-img-top img-fluid imagefits" src="../detail-pages/images/${jobs.image}" alt="Card image cap">
        </div>
        <div class="heading mt-3">
          <h4 class="mb-0">${jobs.title}</h4>
        </div>
        <div class="card-body mt-3 smaller">
          <h6>${jobs.titleDesc}</h6>
        </div>
        <div class="ftcards">
          <a href="../detail-pages/content.html?id=${jobs.id}" class="btn btn-primary">Lihat Deskripsi</a>
        </div>
      </div>`

      const elements = document.createElement('div');
      elements.innerHTML = cards;
      elements.className = "col-md-4 d-flex align-items-stretch";
      contentContainer.appendChild(elements);
      });
    }
    })
  }
}

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
          <img class="card-img-top img-fluid imagefits" src="../detail-pages/images/${jobs.image}" alt="Card image cap">
        </div>
        <div class="heading mt-3">
          <h4 class="mb-0">${jobs.title}</h4>
        </div>
        <div class="card-body mt-3 smaller">
          <h6>${jobs.titleDesc}</h6>
        </div>
        <div class="ftcards">
          <a href="../detail-pages/content.html?id=${jobs.id}" class="btn btn-primary">Lihat Deskripsi</a>
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