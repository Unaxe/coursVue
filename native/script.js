const charactersContainer = document.getElementById("characters-container");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
const page = document.getElementById("page");

var films = fetch("https://api.disneyapi.dev/characters").then((response) =>
  response.json().then(useData)
);

const useData = (resp) => {
  console.log(resp);
  charactersContainer.innerHTML = "";
  resp.data.forEach((character) => {
    const container = document.createElement("div");
    container.classList.add("character-container");
    const name = document.createElement("h2");
    const image = document.createElement("img");
    name.innerText = character.name;
    image.src = character.imageUrl;
    container.appendChild(name);
    container.appendChild(image);
    charactersContainer.appendChild(container);
  });
  if (resp.nextPage) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }
  if (resp.previousPage) {
    previousButton.style.display = "block";
  } else {
    previousButton.style.display = "none";
  }
  return resp;
};

const fetchNextPage = async () => {
  films.then((resp) => {
    console.log(resp);
    if (resp.nextPage) {
      films = fetch(resp.nextPage).then((response) =>{
        page.innerText = parseInt(page.innerText) + 1;
        return response.json().then(useData)}
      );
    }
  });
};

const fetchPreviousPage = async () => {
  films.then((resp) => {
    console.log(resp);
    if (resp.previousPage) {
      films = fetch(resp.previousPage).then((response) => {
        page.innerText = parseInt(page.innerText) - 1;
        return response.json().then(useData);
      });
    }
  });
};

nextButton.addEventListener("click", fetchNextPage);
previousButton.addEventListener("click", fetchPreviousPage);

