const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


async function getUser(username){    // takes username
    try{
        // fetches data using API asynchronously using Axios
        const { data } = await axios(APIURL + username) // object destructuring 

        // another way of writing :: allows to directly extract `data` prop from res object
        // const response = await axios (APIURL + username)
        // const data = response.data
        createUserCard(data) 
        getRepos(username)
    }
    catch(err)
    { 
        // if the user profile doesn't exist
        if(err.response.status == 404){
            createErrorCard('No profile with this username') // func
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios (APIURL + username + '/repos?sort=created')
        // used to make a specific API request to fetch repos associated with the given username and sort them by creation date in ascending order.
        addReposToCard(data)
    } catch (err){
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user){
    const userId = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML =
    `
    <div class="card">
    <div><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></div>
    <div class="user-info">
    <h2>${userId}</h2>
    ${userBio}
    <ul>
        <li><b>${user.followers} </b><strong>Followers</strong></li>
        <li><b>${user.following}</b><strong>Following</strong></li>
        <li><b>${user.public_repos}</b><strong>Repos</strong></li>
    </ul>
    <div id="repos"></div> 
    </div>
    </div>
    `
    main.innerHTML= cardHTML
}

function createErrorCard(msg){
    const cardHTML=`
    <div class="card">
    <h1>${msg}</h1>
    </div>`
    main.innerHTML=cardHTML
}

function addReposToCard(repos){
    const reposEl= document.getElementById('repos') // gets from createUserCard
    // repos is an array
    repos.slice(0,5).forEach(repo =>{
        const repoEl =  document.createElement('a') // creates an anchor element
        repoEl.classList.add('repo') // adds CSS class `repo` to newly created anchor element
        repoEl.href= repo.html_url // sets href of anchor to html_url
        repoEl.target='_blank'
        repoEl.innerHTML=repo.name
        reposEl.appendChild(repoEl) // appends newly created anchor element to reposEl (which has id = repos)
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = search.value
    if(user)
    {
        getUser(user) // above func is there
        search.value=''
    }
})

