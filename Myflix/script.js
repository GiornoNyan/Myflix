
const img = document.querySelector(".card-img-top");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");

const apik = "361c7ea3";

const API_key = 'api_key=54901842d4614635e02b1fde6b5a6032';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_key;

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const card = document.querySelector('.card-container');




init(API_URL)

function init(url) {
    fetch(url).then(res => res.json())
    .then(data => {
        // console.log(data.results)
        showdata(data.results);
    })
}

function showdata(movies) {
    movies.forEach(movie => {
        const {title,overview,poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('col-lg-4','col-md-6','col-12');
        ;
        
        movieEl.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${IMG_URL + poster_path}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${title}</h5>
                      <p class="card-text">${overview.slice(0,300)}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
          
        
        </div>
        `
        card.appendChild(movieEl);
        
        
        
    })
}