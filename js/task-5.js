// fetch("https://restcountries.com/v3.1/name/peru").then(res => res.json()).then(res => console.log(res))


// https://restcountries.com/v3.1/name/${value}




//fetch() запит на сервер!!








const URL = "https://pixabay.com/api/";
const API_KEY = "55396511-9fa47eb753a2484966d5aafba";
const orient = "horizontal";
const page = 1;
const limit = 9;
let search = ""

const listRef = document.querySelector(".list")  
const searchRef = document.querySelector(".search-input")



function getImagesApi(search){
    return fetch(`${URL}?key=${API_KEY}&orientation=${orient}&page=${page}&per_page=${limit}&q=${search}`)
    .then((res) => res.json()) 
}

searchRef.addEventListener("input", _.debounce((event) => {
    search = event.target.value.trim();
    
    getImagesApi(search).then((res) => {
        listRef.innerHTML = ""; 
        createItems(res.hits);
    });
}, 500));  

function createItems (array) {
    const item = array.map(({largeImageURL, tags}) => {
        return ` <li class="item">
    <img src="${largeImageURL}" alt="${tags}"  class="picture">
  </li>`
    }).join("")
    listRef.insertAdjacentHTML("beforeend", item)
}









































