const param = new URLSearchParams(window.location.search);
const id = param.get('id');

const url = (id) = `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/${id}`;

const elemImage = document.getElementById("image");
const elemTitle = document.getElementById("title");
const elemTitleDesc = document.getElementById("title-desc");
const elemContentTitle = document.getElementById("content-title");
const elemContentDesc = document.getElementById("content-desc");

const imageUrl = (dir) => `./images/${dir}`;

fetch(url(id))
.then((result) => {
  elemImage.setAttribute("src", imageUrl(result.image));
  elemTitle.textContent = result.title;
  elemTitleDesc.innerHTML = result.titleDesc;
  elemContentTitle.textContent = result.elemContentTitle;
  elemContentDesc.innerHTML = result.elemContentDesc;

  console.log("content loaded successfully");
})
.catch((error) => {
  elemTitle.innerText = "Error";
  console.log(error);
});