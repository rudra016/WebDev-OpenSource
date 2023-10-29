const addBook = document.getElementById("add-book");
const screen = document.querySelector(".screen");
const diagbox = screen.querySelector(".dialog-box");
const closediag = document.getElementById("close");

// dialog box
const bookName = document.getElementById("bookName");
const author = document.getElementById("author");
const pageread = document.getElementById("pageRead");
const complete = document.getElementById("complete");
const submit = document.querySelector(".book-submit");
const board = document.querySelector(".inner-border");

addBook.addEventListener("click",()=>{
    screen.classList.remove("invisible");
})
closediag.addEventListener("click",()=>{
    screen.classList.add("invisible");
})

let myLibrary = [];

class Book {
    constructor(name, author, page, read) {
        this.name = name;
        this.author = author;
        this.page = page;
        this.read = read;
    }
}

function addBookToLibrary(name,author,page,complete) {
    let book = new Book(name,author,page,complete);
    if(name == "" || author == "");
    else{
        myLibrary.push(book);
    }
}

submit.addEventListener("click",()=>{
    addBookToLibrary(bookName.value,author.value,pageread.value,complete.checked);
    screen.classList.add("invisible");
    bookName.value = "";
    author.value = "";
    pageread.value = 0;
    complete.checked = false;
    reloadLibrary();
})
let cardContent = "";
function reloadLibrary(){
    for (let index = 0; index < myLibrary.length; index++) {
        let complete = `<input type="checkbox" name="complete" id="complete" checked>`;
        if(myLibrary[index].read != true){
            complete = `<input type="checkbox" name="complete" id="complete">`;
        }
        cardContent +=`
        <div data-index=${index} class="card">
        <p>${myLibrary[index].name}</p>
        <p>${myLibrary[index].author}</p>
        <p>Page Read: ${myLibrary[index].page}</p>
        <div class="check">
            <label for="complete">Complete?</label>
            ${complete}
        </div>
        <p class="remove-btn">Remove</p>
        </div>
        `;
    }
    board.innerHTML = cardContent;
    cardContent = ""
}
board.addEventListener("click",(e)=>{
    if(e.target.className == "remove-btn"){
       deleteIndex = e.target.parentElement.getAttribute("data-index");
       myLibrary.splice(deleteIndex,1);
    }
    reloadLibrary();
});
board.addEventListener("click",(e)=>{
    checkIndex = e.target.parentElement.parentElement.getAttribute("data-index");
    myLibrary[checkIndex].read = !myLibrary[checkIndex].read;
    reloadLibrary();
})