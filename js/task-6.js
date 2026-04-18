const API_KEY = "55396511-9fa47eb753a2484966d5aafba";
const URL = "https://pixabay.com/api/";
let query = "dog";
const type = "horizontal"
let page = 1;
let per_page = 6;




const listRef = document.querySelector(".list")
const loadMoreBtn = document.querySelector(".btn")



function getImages() {
  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=${type}&orientation=horizontal&page=${page}&per_page=${per_page}`
  ).then((res) => res.json());
}

getImages().then((res) => {
  createImagesItems(res.hits);
});

function createImagesItems(array) {
  const item = array
    .map(({ largeImageURL, tags }) => {
      return `
        <li class="item">
          <img src="${largeImageURL}" alt="${tags}" width="300">
        </li>`;
    })
    .join("");

//   listRef.innerHTML = item;
  listRef.insertAdjacentHTML("beforeend", item)
}


loadMoreBtn.addEventListener("click", () => {
  page += 1;
  getImages().then((res) => {

    const totalPages = Math.ceil(res.totalHits / per_page)
    console.log(totalPages);
    console.log(page);
    
    if(page >= totalPages){
        loadMoreBtn.style.display = "none"
        return
    }



    createImagesItems(res.hits)
    
  })
})






























































