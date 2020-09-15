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


// Book Constructor
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function() {
    return title + ', ' + author + ', ' + pages + ', ' + read
  }
}


function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const box = document.querySelector('.card-check');
  const btnAddbook = document.getElementById('btnAddbook');

  let read;
  
  if (box.checked) {
    read = true;
  } else {
    read = false
  }


  btnAddbook.addEventListener('click', ()=>{
    let newBook = new Book(title, author, pages, read);
    console.log(newBook, 'Newbook');
    library.push(newBook);

    displayBooks(library);
  })
}

// addBook('Animal Farm', 'Mark Twain', 300, true)

const displayBooks = (library) => {
  let bookContainer = document.querySelector(".book-container");
  const card = document.querySelector(".card")

    for(let book of library) {
      bookContainer.innerHTML += `
      <div class="card my-2 col-xl-3 col-lg-4 col-sm-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title book-title">${book.title}</h5>
          <p class="card-text book-author">${book.author}</p>
          <p class="card-text book-pages">${book.pages}</p>
          <p class="card-text d-flex">
            <input type="checkbox" class="card-check" />  
            <span class="pb-2">Read</span>          
          </p>
        </div>
      </div>`
    } 
}

console.log(library)
displayBooks(library)
addBook();