const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3587287e55556084244f6774a7502075&page=1'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3587287e55556084244f6774a7502075&query="'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}