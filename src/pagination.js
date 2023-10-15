// 
const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    description: 'Description of Book 1',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
   {
    title: 'Book 3',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
    {
    title: 'Book 4',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
     {
    title: 'Book 5',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
      {
    title: 'Book 2',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
       {
    title: 'Book 6',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
        {
    title: 'Book 7',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
      {
    title: 'Book 8',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
        {
    title: 'Book 9',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
        {
    title: 'Book 9',
    author: 'Author 2',
    description: 'Description of Book 2',
    },
  
];

////
const booksPerPage = 2;

function displayBooks(pageNumber) {
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = books.slice(startIndex, endIndex);

  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = '';  

  booksToDisplay.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Description:</strong> ${book.description}</p>
    `;
    bookListElement.appendChild(bookCard);
  });
}

function displayPagination(totalPages) {
  const pageNumbersElement = document.getElementById('pageNumbers');
  pageNumbersElement.innerHTML = ''; 

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.addEventListener('click', () => {
      displayBooks(i);
    });
    pageNumbersElement.appendChild(pageButton);
  }
}

// first
function goToFirstPage() {
  displayBooks(1);
}

// last
function goToLastPage() {
  displayBooks(totalPages);
}

// total
const totalPages = Math.ceil(books.length / booksPerPage);

// display
displayBooks(1);
displayPagination(totalPages);

// "<<" and ">>" 
const firstPageButton = document.getElementById('firstPage');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const lastPageButton = document.getElementById('lastPage');

firstPageButton.addEventListener('click', goToFirstPage);
prevPageButton.addEventListener('click', () => {
  const currentPage = getCurrentPage();
  if (currentPage > 1) {
    displayBooks(currentPage - 1);
  }
});
nextPageButton.addEventListener('click', () => {
  const currentPage = getCurrentPage();
  if (currentPage < totalPages) {
    displayBooks(currentPage + 1);
  }
});
lastPageButton.addEventListener('click', goToLastPage);
