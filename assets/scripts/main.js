// All of your book objects are going to be stored in a simple array
let myLibrary = [];
body = document.querySelector('.body')

// Book object constructor
function Book(name) {
    this.name = name
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
