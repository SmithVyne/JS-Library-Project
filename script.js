const dummyBooks = [
  {
    author: 'Mark Twain',
    title: 'Animal Farm',
    pages: 300,
    read: true,
  },
  {
    author: 'Jon Doe',
    title: 'The Ring',
    pages: 200,
    read: false,
  },
  {
    author: 'Paul West',
    title: 'John\'s travels',
    pages: 200,
    read: true,
  },
]

const library = [...dummyBooks];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} ${author} ${pages} ${read}`;
  };
}

const validateBook = (book) => {
  const errors = [];
  if(book.author === '') {
    errors.push('Book author cannot be empty');
  } else if(book.title === '') {
    errors.push('Book title cannot be empty');
  } else if(book.pages === '') {
    errors.push('Number of Pages cannot be empty');
  }

  return errors;
};

const hasRead = (book, i) => {
  if (book.read) {
    return `<span class="badge badge-success" onclick="changeTrue(${i})">True</span>`;
  }

  return `<span class="badge badge-danger" onclick="changeFalse(${i})">False</span>`;
};


const displayBooks = (library) => {
  const bookContainer = document.querySelector('.book-container');
  bookContainer.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    bookContainer.innerHTML += `
    <div class="card my-2 col-xl-3 col-lg-4 col-sm-12 col-md-6">
      <div class="card-body">
        <h5 class="card-title book-title">${book.title}</h5>
        <p class="card-text book-author">${book.author}</p>
        <p class="card-text book-pages">${book.pages}</p>
        <p class="card-text d-flex box-read">
        <span> Read: ${hasRead(book, i)} </span>
        </p>
        <button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button>
      </div>
    </div>`;
  }
};

const changeTrue = (i) => {
  library[i].read = false;
  displayBooks(library);
};

const changeFalse = (i) => {
  library[i].read = true;
  displayBooks(library);
};

const deleteBook = ((i) => {
  library.splice(i, 1);
  displayBooks(library);
});

const openModal = () => {
  const formArea = document.querySelector('#formArea');
  formArea.classList.toggle('d-none');
}

function addBook() {
  const btnAddbook = document.getElementById('btnAddbook');

  btnAddbook.addEventListener('click', () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const box = document.querySelector('#check-book');
    let read;
    if (box.checked) {
      read = true;
    } else {
      read = false;
    }

    const newBook = new Book(title.value, author.value, pages.value, read);
    // Validate New Book
    const validationResult = validateBook(newBook);
    const errorField = document.createElement('div');

    if (validationResult.length > 0) {
      const container = document.querySelector(".container-fluid");
      errorField.classList.add('error-field');

      validationResult.forEach((err) => {
        errorField.textContent += err;
      })
      container.appendChild(errorField, container);
      return
    } else {
      errorField.setAttribute('style', 'display: none;');
      library.push(newBook);
      displayBooks(library);
    }

    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
  });
}

displayBooks(library);
addBook();
