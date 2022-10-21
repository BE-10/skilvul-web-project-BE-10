const url = (k) = `url${k}`;
const key = document.getElementById("key");

const imageUrl = (dir) => `./images/${dir}`;

fetch(url(id))
.then(async (result) => {
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
  elemImage.setAttribute("src", "https://via.placeholder.com/150");
  elemTitle.innerText = "Error";
  console.log(error);
});