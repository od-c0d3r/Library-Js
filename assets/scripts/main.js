const myLibrary = [];
const { body } = document;
const newBookBtn = document.createElement('input');
const myForm = document.getElementById('myForm');
newBookBtn.value = 'Add new book';
newBookBtn.type = 'button';

function Book(author, title, pages, doneReading) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.doneReading = doneReading;
}

function displayLibrary(lib) {
  newBookBtn.style.display = 'block';
  const h1 = document.querySelector('.pageHeader');
  h1.innerHTML = 'Your Library :';
  const bookList = document.querySelector('ul');
  bookList.innerHTML = '';
  Object.keys(lib).forEach((bookIndex) => {
    function toggleRead(index, lib) {
      if (lib[index].doneReading === true) {
        lib[index].doneReading = false;
      } else {
        lib[index].doneReading = true;
      }
      displayLibrary(lib);
    }

    function removeBook(index, lib) {
      myLibrary.splice(index, 1);
      displayLibrary(lib);
    }
    const bookItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const readToggle = document.createElement('button');
    removeBtn.innerHTML = 'Remove Book';
    removeBtn.onclick = () => { removeBook(bookIndex, lib); };
    readToggle.innerHTML = 'Toggle Read';
    readToggle.onclick = () => { toggleRead(bookIndex, lib); };
    bookItem.innerHTML = `Title : ${lib[bookIndex].title}<br> Read : ${lib[bookIndex].doneReading}<br>`;
    bookItem.appendChild(removeBtn);
    bookItem.appendChild(readToggle);
    bookList.appendChild(bookItem);
  });
  body.appendChild(bookList);
}

function addBookToLibrary() {
  myForm.style.display = 'none';
  let reading;
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  if (document.getElementById('readingt').checked) {
    reading = document.getElementById('readingt').value;
  } else {
    reading = document.getElementById('readingf').value;
  }
  const newBook = new Book(author, title, pages, reading);
  myLibrary.push(newBook);
  displayLibrary(myLibrary);
}

function displayForm() {
  newBookBtn.style.display = 'none';
  myForm.style.display = 'block';
  const formBtn = document.getElementById('formBtn');
  formBtn.onclick = addBookToLibrary;
}

newBookBtn.onclick = displayForm;

body.insertBefore(newBookBtn, body.children[1]);
myForm.style.display = 'none';