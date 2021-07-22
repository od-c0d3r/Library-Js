// All of your book objects are going to be stored in a simple array
let myLibrary = [];
let body = document.body;
let myForm = document.getElementById('myForm');
let newBookBtn = document.createElement('input');
newBookBtn.value = 'Add new book';
newBookBtn.type = 'button';
newBookBtn.onclick = displayForm;
body.insertBefore(newBookBtn, body.children[1]);
myForm.style.display = 'none';

// Book object constructor
function Book(author, title, pages, doneReading) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.doneReading = doneReading;
}

// gonna use it after asking user to enter book name 
function addBookToLibrary() {
    myForm.style.display = 'none';
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    if (document.getElementById('readingt').checked) {
        var reading = document.getElementById('readingt').value;
      }    else {
        var reading = document.getElementById('readingf').value;
      } 
    let newBook = new Book(author, title, pages, reading)
    console.log(newBook);
    myLibrary.push(newBook);
    displayLibrary(myLibrary);
}


// function that loops through the array and displays each book on the page.
function displayLibrary(lib) {
    newBookBtn.style.display = 'block';
    let h1 = document.querySelector('.pageHeader');
    h1.innerHTML = 'Your Library :';
    let bookList = document.querySelector('ul');
    bookList.innerHTML = '';
    
    for (let bookIndex in lib) {
        let bookItem = document.createElement('li');
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove Book';
        removeBtn.onclick = () => {removeFun(bookIndex, lib)};
        bookItem.innerHTML = lib[bookIndex].title;
        bookItem.appendChild(removeBtn);
        bookList.appendChild(bookItem);
    }

    body.appendChild(bookList);
}


function displayForm() {
    newBookBtn.style.display = 'none';
    myForm.style.display = 'block';
    let formBtn = document.getElementById('formBtn');
    formBtn.onclick = addBookToLibrary;
}

function removeFun(index, lib) {
    myLibrary.splice(index,1);
    displayLibrary(lib);
}
