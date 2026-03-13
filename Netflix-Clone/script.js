function fetchmovie(url, dom_element,path_type){
    fetch(url)
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("something went wrong")
        }
    }).then(data =>{
        showmovies(data, dom_element, path_type)
        
    }).catch(error =>{
        console.log(error)
    })
 }

function showmovies(movies, dom_element, path_type){

    let movieEl=document.querySelector(dom_element)
    console.log(movies.results)
    for(let movie of movies.results){
      
        let imageEl=document.createElement('img')
        imageEl.setAttribute("data-id",movie.id)
        imageEl.src=`https://image.tmdb.org/t/p/original${movie[path_type]}`
        movieEl.appendChild(imageEl)
    }
 }
function   getorginals (){
    let url='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

    fetchmovie(url,'.original__movies','poster_path');

}

function   treanding (){
    let url='https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

    fetchmovie(url,'#trending','backdrop_path');

}

function   toprated (){
    let url='https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

    fetchmovie(url,'#top_rated','backdrop_path');

}

window.onload=()=>{
    getorginals();
    treanding ()
    toprated()
}  
  
  
  