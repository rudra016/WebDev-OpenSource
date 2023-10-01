const API_KEY = 'api_key=99f0222b78a735aebdf7e104bd6f2dd4';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL+'/search/movie?'+API_KEY;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const genres =[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];
const tagsel = document.getElementById('tags');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');
var currentPage = 1;
var nextPage =2;
var prevPage = 3;
var lastURL = '';
var totalPage = 100;
 
var selectedgenre = []
setGenre();
function setGenre(){
tagsel.innerHTML = '';
genres.forEach(genre =>{
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id = genre.id;
        t.innerHTML = genre.name;
        t.addEventListener('click',()=>{
            if(selectedgenre.length==0){
                selectedgenre.push(genre.id);
            }else{
                if(selectedgenre.includes(genre.id)){
                    selectedgenre.forEach((id,idx)=>{
                        if(id==genre.id){
                            selectedgenre.splice(idx,1);
                        }
                    })
                }else{
                    selectedgenre.push(genre.id);
                }
            }
            console.log(selectedgenre);
         getMovies(API_URL+'&with_genres='+encodeURI(selectedgenre.join(',')));
         highlightsel();
        })
        tagsel.append(t);
    })
}
function highlightsel(){
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag=>{
        tag.classList.remove('highlight');
    })
    clearbtn();
    if(selectedgenre.length!=0){
    selectedgenre.forEach(id=>{
        const highlighttag = document.getElementById(id);
        highlighttag.classList.add('highlight');
    })
}
}
function clearbtn(){
    let clearbtn = document.getElementById('clear');
    if(clearbtn){
        clearbtn.classList.add('highlight');
    }else{
        let clear = document.createElement('div');
        clear.classList.add('tag','highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear X';
        clear.addEventListener('click',()=>{
            selectedgenre = [];
            setGenre();
            getMovies(API_URL);
        })
        tagsel.append(clear);
    }


    
}

getMovies(API_URL);

function getMovies(url){
    lastURL = url;
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.results.length!==0){
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage+1;
            prevPage = currentPage-1;
            totalPage = data.total_pages;
            current.innerText = currentPage;
            if(currentPage<=1){
                prev.classList.add('disabled');
                next.classList.remove('disabled');
            }else if(currentPage>=totalPage){
                prev.classList.remove('disabled');
                next.classList.add('disabled');
            }else{
                prev.classList.remove('disabled');
                next.classList.remove('disabled');

            }
            tagsel.scrollIntoView({behavior:'smooth'})
        }else{
            main.innerHTML=`<h1 class="noresul">No Results Found</h1>`;
        }
        
    })

}

function showMovies(data){
    main.innerHTML = '';
    data.forEach(movie => {
        const {title,poster_path,vote_average,overview,id}=movie;
        const moviel = document.createElement('div');
        moviel.classList.add('movie');
        moviel.innerHTML=`
        <img src="${poster_path? IMG_URL+poster_path:"http://via.placeholder.com/1080x1500"}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/>
                <button class="know-more" id="${id}">Know more</button>
            </div>
        
        `
        main.appendChild(moviel);
        document.getElementById(id).addEventListener('click',()=>{
            console.log(id);
            openNav(movie);
        })
    });
}
const overlaycontent = document.getElementById('overlay-content');
function openNav(movie) {
    let id = movie.id;
    fetch(BASE_URL+'/movie/'+id+'/videos?'+API_KEY).then(res=>res.json()).then(videoData=>{
        console.log(videoData);
        if(videoData){
            document.getElementById("myNav").style.width = "100%";
            if(videoData.results.length>0){
                var embed =[];
                var dots = [];
                
                videoData.results.forEach((video,idx)=>{
                    let {name,key,site}=video
                    if(site=='YouTube'){
                    embed.push(`
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    `)
                    dots.push(`
                    <span class ="dot">${idx+1}</span>
                    `)
                }
                })
                var content = `
                
                <h1 class="noresul">${movie.original_title}</h1>
                <br/>
                ${embed.join('')}
                <br/>
                <div class="dots">${dots.join('')}</div>
                `
                
                overlaycontent.innerHTML = content;
                activeSlide=0;
                showVideos();
            }else{
                overlaycontent.innerHTML = `<h1 class="noresul">No Results Found</h1>`;
            }
        }
    })
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var activeSlide =0;
  var totalvideos = 0;
  function showVideos(){
    let embedclasses = document.querySelectorAll('.embed');
    let dots = document.querySelectorAll('.dot');
    totalvideos=embedclasses.length;
    embedclasses.forEach((embedTag,idx)=>{
        if(activeSlide==idx){
            embedTag.classList.add('show')
            embedTag.classList.remove('hide')
        }else{
           
            embedTag.classList.add('hide')
            embedTag.classList.remove('show')
        }
    })
    dots.forEach((dot,indx)=>{
        if(activeSlide==indx){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    })
  }
  const leftArrow = document.getElementById('left-arrow')
  const rightArrow = document.getElementById('right-arrow')
  leftArrow.addEventListener('click',()=>{
    if(activeSlide>0){
        activeSlide --;
    }else{
    activeSlide = totalvideos-1;
    }
    showVideos();
  })

  rightArrow.addEventListener('click',()=>{
    if(activeSlide<(totalvideos-1)){
        activeSlide ++;
    }else{
activeSlide = 0;
    }
    showVideos();
  })
function getColor(vote){
    if(vote>=8){
        return 'green';
    }else if(vote>3 && vote<8){
        return 'yellow';
    }else{
        return 'red';
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchterm = search.value;
    selectedgenre = [];
    setGenre();
    if(searchterm){
        getMovies(SEARCH_URL+'&query='+searchterm);
    }else{
        getMovies(API_URL);
    }

})
prev.addEventListener('click',()=>{
    if(prevPage>0){
        pageCall(prevPage);
    }
})

next.addEventListener('click',()=>{
    if(nextPage<=totalPage){
        pageCall(nextPage);
    }
})

function pageCall(page){
    let urlSplit = lastURL.split('?');
    let quertPara = urlSplit[1].split('&');
    let key = quertPara[quertPara.length - 1].split('=');
    if(key[0]!='page'){
        let url = lastURL+'&page='+page;
        getMovies(url);
    }else{
        key[1]  = page.toString();
        let a = key.join('=');
        quertPara[quertPara.length-1] = a;
        let b = quertPara.join('&');
        let url = urlSplit[0]+'?'+b;
        getMovies(url);
    }

}