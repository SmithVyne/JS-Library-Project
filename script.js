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
];

const library = [...dummyBooks];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const hasRead = (book, i) => {
  if (book.read) {
    return `<span class="badge badge-success" onclick="changeTrue(${i})">True</span>`;
  }

  return `<span class="badge badge-danger" onclick="changeFalse(${i})">False</span>`;
};

const innerCard = (bookContainer, book, i) => {
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
};

const displayBooks = (library) => {
  const bookContainer = document.querySelector('.book-container');
  bookContainer.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    innerCard(bookContainer, book, i);
  }
};

const changeTrue = i => {
  library[i].read = false;
  displayBooks(library);
};

const changeFalse = i => {
  library[i].read = true;
  displayBooks(library);
};

const deleteBook = i => {
  library.splice(i, 1);
  displayBooks(library);
};

const openModal = () => {
  const formArea = document.querySelector('#formArea');
  formArea.classList.toggle('d-none');
};

const resetForm = (title, author, pages, box) => {
  title.value = '';
  author.value = '';
  pages.value = '';
  box.checked = false;
};

const validateBook = (book) => {
  const errors = [];
  if (book.author === '') {
    errors.push('Book author cannot be empty');
  } else if (book.title === '') {
    errors.push('Book title cannot be empty');
  } else if (book.pages === '') {
    errors.push('Number of Pages cannot be empty');
  }
  return errors;
};

const validation = (newBook) => {
  const validationResult = validateBook(newBook);
  const errorField = document.querySelector('.errors');

  if (validationResult.length > 0) {
    errorField.classList.add('error-field');
    errorField.textContent = '';
    validationResult.forEach((err) => {
      errorField.textContent += err;
    });
    return false;
  }
  errorField.classList.add('d-none');
  return true;
};

const fieldValues = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const box = document.querySelector('#check-book');
  return [title, author, pages, box];
};

const addBook = () => {
  const [title, author, pages, box] = fieldValues();
  const read = !!box.checked;

  const newBook = new Book(title.value, author.value, pages.value, read);
  if (validation(newBook)) {
    library.push(newBook);
  }

  displayBooks(library);
  resetForm(title, author, pages, box);
  return newBook;
};

displayBooks(library);
