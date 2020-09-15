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

const displayBooks = function(library) {
  let bookContainer = document.querySelector(".book-container");
    let card = document.getElementById('#card');
   
    for (let book of library) {    
      bookContainer.innerHTML += `
      <div class="card my-2 col-xl-3 col-lg-4 col-sm-12 col-md-6 ${toggleCardColor(book, card)}" id="card">
        <div class="card-body">
          <h5 class="card-title book-title">${book.title}</h5>
          <p class="card-text book-author">${book.author}</p>
          <p class="card-text book-pages">${book.pages}</p>
          <p class="card-text d-flex">
            <input type="checkbox" class="mr-1" id="cardCheck" />  
            <span class="pb-2">Read</span>          
          </p>
        </div>
      </div>`
    }
}

const toggleCardColor = (book, card) => {  
  if(book.read) {
    return 'read-book';
  }
}



console.log(library)
displayBooks(library)