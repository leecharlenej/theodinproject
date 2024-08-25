let index = 2;

function Book(index, title, author, pages, status) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this .info =  function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status ? "read": "not read yet"}`;
    };
}

function addBookToLibrary(myLibraryArr) {
    let bookFields = ['title', 'author', 'pages', 'read'];
    let newBook = new Book();

    for (i in bookFields) {
        console.log(i);
        newBook[bookFields[i]] = prompt(`${bookFields[i]}`);
    };

    myLibraryArr.push(newBook);
    
}

const theHobbit = new Book(0, 'The Hobbit', 'J.R.R. Tolkien', 295, true);
const harryPotter = new Book(1, 'Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 320, true);
const janeEyre = new Book(2, 'Jane Eyre', 'Charlotte Brontë', 290, false);

console.log(theHobbit.info());
console.log(harryPotter.info());
console.log(janeEyre.info());

const myLibrary = [theHobbit, harryPotter, janeEyre];
console.log(myLibrary);

function getBookInfo (libraryArr) {
    for (let i=0; i<libraryArr.length; i++) {
        console.log(libraryArr[i]);
    }
}

let allBooksHTML = '';
myLibrary.forEach(function(book) {
    allBooksHTML += `
<div class="book">
    <hr>
    <div class="book-header">
        <div class="title">${book.title}</div>
        <div class="author">by ${book.author}</div>
        <div class="pages">${book.pages} pages</div>
        <div class="status" data-index="${book.index}">[${book.status ? 'read' : 'not read'}]</div>
    </div>
    <hr>
    <div class="book-footer">
         <div class="icons">
            <button class="deleteButton" data-index="${book.index}"><img src="assets/img/book-remove.svg">
            <span class="icon-caption">Delete</span></button>
        </div>

        <div class="icons">
            <button class="readButton" data-index="${book.index}"><img src="assets/img/book-edit.svg">
            <span class="icon-caption">Read</span></button>
        </div>
    </div>
</div>`
});

document.getElementById("allBooks").innerHTML = allBooksHTML;

/* ================================
   First 3 books: Change status and delete
   ================================ */

let currentReadButtonsList= document.querySelectorAll(".readButton");

for (let i=0; i<currentReadButtonsList.length; i++){
    currentReadButtonsList[i].addEventListener("click", function() {
        const bookIndex_str= this.getAttribute('data-index');
        const bookIndex_num = Number(bookIndex_str);
        changeReadStatus(bookIndex_num);
    });
}

function changeReadStatus (bookIndex) {
    const book = myLibrary.find(book => book.index === bookIndex);
    console.log(book);
    book.status = !book.status;

    // Update the DOM to reflect the change
    const statusElement = document.querySelector(`.status[data-index='${bookIndex}']`);
    statusElement.textContent = `[${book.status ? 'read' : 'not read'}]`;
}

let currentDeleteButtonsList= document.querySelectorAll(".deleteButton");

for (let i=0; i<currentDeleteButtonsList.length; i++){
    currentDeleteButtonsList[i].addEventListener("click", function() {
        const bookIndex_str= this.getAttribute('data-index');
        const bookIndex_num = Number(bookIndex_str);
        console.log(bookIndex_num);
        deleteBook(bookIndex_num);
    });
}

function deleteBook(bookIndex){
    const bookIndexInArray = myLibrary.findIndex(book => book.index === bookIndex);
    myLibrary.splice(bookIndexInArray, 1);
    console.log(`Book with index ${bookIndex} removed from myLibrary.`);

    const bookElement = document.querySelector(`.book .status[data-index='${bookIndex}']`).closest('.book');
    if (bookElement) {
        bookElement.remove();
    }
}

/* ================================
   Add book modal
   ================================ */

let newLibrary = [];

const addBookButton = document.querySelector("#addBookButton");
const formDialog = document.querySelector("#formDialog");
const formDialogBody = document.querySelector("#formDialogBody")

addBookButton.addEventListener("click", () => {
    formDialog.showModal();
});

const addButton = formDialog.querySelector("#addButton");
const actionOutcome = document.querySelector(".action-outcome");

formDialog.addEventListener("close", (e) => {

    formDialogBody.reset();

    actionOutcome.innerHTML =
      formDialog.returnValue === "cancel"
        ? "No book added!"
        : `You added:<br>${formDialog.returnValue}.`;
    console.log(formDialog.returnValue);
  });

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    index++;
    console.log(`New index: ${index}`);

    const title = DOMPurify.sanitize(formDialog.querySelector("input[name='title']").value);
    const author = DOMPurify.sanitize(formDialog.querySelector("input[name='author']").value);
    const pages = DOMPurify.sanitize(formDialog.querySelector("input[name='pages']").value);
    const status = DOMPurify.sanitize(formDialog.querySelector("input[name='status']:checked").value);

    const newBook = new Book (index, title, author, pages, status);
    myLibrary.push(newBook);

    let newBookHTML = '';
    newBookHTML += `
<div class="book">
    <hr>
    <div class="book-header">
        <div class="title">${newBook.title}</div>
        <div class="author">by ${newBook.author}</div>
        <div class="pages">${newBook.pages} pages</div>
        <div class="status" data-index="${newBook.index}">[${newBook.status ? 'read' : 'not read'}]</div>
    </div>
    <hr>
    <div class="book-footer">
         <div class="icons">
            <button class="deleteButton" data-index="${newBook.index}"><img src="assets/img/book-remove.svg">
            <span class="icon-caption">Delete</span></button>
        </div>

        <div class="icons">
            <button class="readButton" data-index="${newBook.index}"><img src="assets/img/book-edit.svg">
            <span class="icon-caption">Read</span></button>
        </div>
    </div>
</div>`

    document.getElementById("allBooks").innerHTML += newBookHTML;

    const newReadButton = document.querySelector(`.readButton[data-index='${newBook.index}']`);
    console.log(newReadButton);
    newReadButton.addEventListener("click", function() {
        changeReadStatus(newBook.index);
    });

    const newDeleteButton = document.querySelector(`.deleteButton[data-index='${newBook.index}']`);
    console.log(newDeleteButton);
    newDeleteButton.addEventListener("click", function() {
        deleteBook(newBook.index);
    });




    formDialog.close(`${newBook.title}`);
});


/* ================================
   Book icons
   ================================ */



