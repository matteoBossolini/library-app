const myLibrary = [];
const addBookButton = document.getElementById("newBookButton");
const table = document.getElementById("libraryTableBody");

function Book(name, author) {
    this.name = name;
    this.author = author;
    this.read = false;
}

Book.prototype.changeStatus = function(element) {
    this.read = !this.read;
    element.innerHTML = this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function viewLibrary() {
    table.innerHTML = "";
    myLibrary.map((book, index) => {
        table.innerHTML += `<tr><td>${book.name}</td><td>${book.author}</td><td><button data-book="${index}">${book.read}</button></td></tr>`;
    });
}

// quando il form viene inviato
addBookButton.addEventListener("click", addNewBook, false);

function addNewBook(event) {
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const book = new Book(name, author);
    addBookToLibrary(book);
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    viewLibrary();
    event.preventDefault();
}

// controlla quando si schiaccia bottone "read"
table.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        clickStatus(event.target);
    }
})

function clickStatus(element) {
    let index = element.getAttribute("data-book");
    myLibrary[index].changeStatus(element);
}