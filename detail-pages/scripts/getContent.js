const param = new URLSearchParams(window.location.search);
const id = param.get('id');

const url = (id) => `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/${id}`;

const elemImage = document.getElementById("image");
const elemTitle = document.getElementById("title");
const elemTitleDesc = document.getElementById("title-desc");
const elemContentTitle = document.getElementById("content-title");
const elemContentDesc = document.getElementById("content-desc");

const imageUrl = (dir) => `./images/${dir}`;

fetch(url(id))
.then(async (result) => {
  const data = await result.json();

  console.log(data);

  elemImage.setAttribute("src", toString(imageUrl(data.image)));
  console.log(data.image);
  elemTitle.textContent = data.title;
  elemTitleDesc.innerHTML = data.titleDesc;
  elemContentTitle.textContent = data.contentTitle;
  elemContentDesc.innerHTML = data.contentDesc;

  console.log("content loaded successfully");
})
.catch((error) => {
  elemTitle.innerText = "Error";
  console.log(error);
});