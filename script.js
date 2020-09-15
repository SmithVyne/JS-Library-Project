const dummyBooks = [
  {
    author: "Mark Twain",
    title: "Animal Farm",
    pages: 300,
    read: true
  },
  {
    author: "Jon Doe",
    title: "The Ring",
    pages: 200,
    read: false
  },
  {
    author: "Paul West",
    title: "John's travels",
    pages: 200,
    read: true
  }
]

library = [...dummyBooks];

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function() {
    return title + ', ' + author + ', ' + pages + ', ' + read
  }
}



function addBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

addBook('Animal Farm', 'Mark Twain', 300, true)

let displayBooks = function(library) {
  let bookCard = document.createElement("div");
  let container = document.createElement("div");
  document.querySelector('body').appendChild(bookCard);
  for (let book of library) {
    console.log(book)
    bookCard.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title book-title">${book.title}</h5>
      <p class="card-text book-author">${book.author}</p>
      <p class="card-text book-pages">${book.pages}</p>
      <span class="badge badge-pill badge-light">${book.read}</span>
    </div>
  </div>`
  }
}


console.log(library)
displayBooks(library)