// v=window.localStorage.getItem('myemail')
// console.log("===",v);
// document.getElementById('my-email').innerHTML=v

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=943695765e13b0d3defc9759caa9f210&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=943695765e13b0d3defc9759caa9f210&query=";
const movieBox = document.querySelector("#movie-box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(url);


const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "./assets/missing.jpg" : imgPath + result.poster_path;
            
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Description:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            movieBox.appendChild(box)
        }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(searchApi + event.target.value)
        } else {
            getMovies(url);
        }
    }
)