// All of your book objects are going to be stored in a simple array
let myLibrary = [];
body = document.body
let newBookBtn = document.createElement('input');
newBookBtn.value = 'Add new book';
newBookBtn.onclick = addBookToLibrary;
newBookBtn.type = 'button'
body.appendChild(newBookBtn);

// Book object constructor
function Book(author, title, pages, doneReading) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.doneReading = doneReading
}

// gonna use it after asking user to enter book name 
function addBookToLibrary() {
    let name = window.prompt("Please Enter Book name: ");
    let newBook = new Book(name)
    myLibrary.push(newBook);
    displayLibrary(myLibrary)
}


// function that loops through the array and displays each book on the page.
function displayLibrary(lib) {
    let h1 = document.querySelector('.pageHeader');
    h1.innerHTML = 'Your Library :';
    let bookList = document.querySelector('ul');
    bookList.innerHTML = ''
    
    for (let book in lib) {
        let bookItem = document.createElement('li');
        bookItem.innerHTML = lib[book].name;
        bookList.appendChild(bookItem);
    }

    body.appendChild(bookList);
}
