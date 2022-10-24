const param = new URLSearchParams(window.location.search);
const id = param.get('id');

// urls endpoint
const url = (id) => `https://634811ba0484786c6e90f2f2.mockapi.io/jobs/${id}`;

// element
const elemImage = document.getElementById("image");
const elemTitle = document.getElementById("title");
const elemTitleDesc = document.getElementById("title-desc");
const elemContentTitle = document.getElementById("content-title");
const elemContentDesc = document.getElementById("content-desc");

// image url
const imageUrl = (dir) => `./images/${dir}`;

fetch(url(id))
.then(async (result) => {
  // result case
  const data = await result.json();

  console.log(data);

  elemImage.setAttribute("src", imageUrl(data.image));
  console.log(data.image);
  elemTitle.textContent = data.title;
  elemTitleDesc.innerHTML = data.titleDesc;
  elemContentTitle.textContent = data.contentTitle;
  elemContentDesc.innerHTML = data.contentDesc;

  console.log("content loaded successfully");
})
.catch((error) => {
  // error case
  elemImage.setAttribute("src", "https://via.placeholder.com/150");
  elemTitle.innerText = "Error";
  console.log(error);
});