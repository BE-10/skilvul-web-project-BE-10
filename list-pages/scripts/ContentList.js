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
      <div class="card p-3 mb-5 mt-2" id="content${i}">
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