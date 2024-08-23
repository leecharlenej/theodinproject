function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this .info =  function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read": "not read yet"}`;
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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 320, true);
const janeEyre = new Book('Jane Eyre', 'Charlotte Brontë', 290, false);

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
