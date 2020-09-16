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


function addBook() {
  const btnAddbook = document.getElementById("btnAddbook")

  btnAddbook.addEventListener('click', ()=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const box = document.querySelector('#check-book');
    let read;
    if (box.checked) {
      read = true;
    } else {
      read = false;
    }

    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
    displayBooks(library);
    console.log(read)
  })
}


const displayBooks = (library) => {
  let bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = ""
  
    for(let i = 0; i < library.length; i++) {
      let book = library[i];
      bookContainer.innerHTML += `
      <div class="card my-2 col-xl-3 col-lg-4 col-sm-12 col-md-6">
        <div class="card-body">
          <h5 class="card-title book-title">${book.title}</h5>
          <p class="card-text book-author">${book.author}</p>
          <p class="card-text book-pages">${book.pages}</p>
          <p class="card-text d-flex box-read">
          <span> Read: ${hasRead(book, i)} </span>
          </p>
          <button class="btn btn-danger" id="dlt-${i}" onclick="deleteBook(${book}, ${i})">Delete</button>
        </div>
      </div>`
    }
}

const hasRead = (book, i) => {
  if (book.read) {
    return `<span class="badge badge-success" onclick="changeTrue(${i})">True</span>`
  } else {
    return `<span class="badge badge-danger" onclick="changeFalse(${i})">False</span>`
  }
}

const changeTrue = (i) => {
  library[i].read = false;
  displayBooks(library);
}

const changeFalse = (i) => {
  library[i].read = true;
  displayBooks(library);
}

const deleteBook = ((book, index) => {
  library.filter((b, i) => {
    return index != i;
  });
});


console.log(library)
displayBooks(library)
addBook();
