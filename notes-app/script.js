
// function to display data stored in the local storage
const displayNotes = (() => {
    let notesObj
    let notesString = localStorage.getItem('notes')

    if (notesString == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notesString)
    }

    let html = ''


    notesObj.forEach((element, index) => {
        html += `
            <div class="card mx-4 my-2 bg-dark text-white thatsMyNote" style="width: 18rem;">
                <div class="card-body">
                    <h6>${element.time}</h6>
                    <p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                    <button id="${index}" onclick=editNotes(this.id) class="btn btn-warning">Edit</button>
                    <button id="${index}" onclick=deleteNotes(this.id) class="btn btn-danger">Delete</button>
                </div>
            </div>
        `
    });

    let noteEle = document.getElementById('notes')
    if (notesObj.length != 0) {
        noteEle.innerHTML = html
    } else {
        noteEle.innerHTML = '<h3 style="text-align: center; color: grey;">Nothing to display</h3>'
    }
})

// function to delete a note
const deleteNotes = ((index) => {
    let notesObj
    let notesString = localStorage.getItem('notes')

    if (notesObj == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notesString)
    }

    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))

    displayNotes()
})

// function to edit a note
const editNotes = (index) => {
    let notesObj;
    let notesString = localStorage.getItem('notes');

    if (notesString == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notesString);
    }

    let editedText = prompt('Edit your note:', notesObj[index].text);

    if (editedText !== null) {
        notesObj[index].text = editedText;
        localStorage.setItem('notes', JSON.stringify(notesObj));
        displayNotes();
    }
};

let addBtn = document.getElementById('addBtn')
// event listener will add user input into the local storage
addBtn.addEventListener('click', function () {
    let notesObj
    let addNote = document.getElementById('addNote')
    let notesString = localStorage.getItem('notes')

    if (notesString == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notesString)
    }

    // add date
    let now = new Date
    let dateTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`

    // pushing into local storage
    let tempObj = { text: addNote.value, time: dateTime }
    notesObj.push(tempObj)
    localStorage.setItem('notes', JSON.stringify(notesObj))

    addNote.value = ''
    displayNotes()
})


let search = document.getElementById('search')
search.addEventListener('input', ((e) => {
    let inputText = search.value

    // if the inputText is empty, the statement returns an empty html
    if (inputText == '') {
        document.getElementById('noMatches').innerHTML = ''
    }

    let countNone = 0
    let cards = document.getElementsByClassName('thatsMyNote')

    Array.from(cards).forEach((ele) => {
        let cardText = ele.getElementsByTagName('p')[0].innerText
        if (cardText.includes(inputText)) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none'
            countNone++
            if (countNone === cards.length) {
                document.getElementsById('noMatches').innerHTML = `<h3 style="text-align: center; color: grey;">No matches found</h3>`
            } else {
                document.getElementsById('noMatches').innerHTML = ''
            }
        }
    })

    // if it matches all the elements
    if (countNone === 0) {
        document.getElementById('noMatches').innerHTML = ''
    }
}))

displayNotes()