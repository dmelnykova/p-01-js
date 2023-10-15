// Создаем массив книг с фиктивными данными
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
  
  // Добавьте данные о других книгах по аналогии
];

const booksPerPage = 2;

// Функция для отображения книг на определенной странице
function displayBooks(pageNumber) {
  const startIndex = (pageNumber - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = books.slice(startIndex, endIndex);

  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = '';  // Очищаем содержимое блока с книгами

  // Отображаем каждую книгу
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

// Функция для отображения пагинации
function displayPagination(totalPages) {
  const pageNumbersElement = document.getElementById('pageNumbers');
  pageNumbersElement.innerHTML = ''; // Очищаем содержимое блока с пагинацией

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.addEventListener('click', () => {
      displayBooks(i);
    });
    pageNumbersElement.appendChild(pageButton);
  }
}

// Функция для перехода к первой странице
function goToFirstPage() {
  displayBooks(1);
}

// Функция для перехода к последней странице
function goToLastPage() {
  displayBooks(totalPages);
}

// Рассчитываем общее количество страниц
const totalPages = Math.ceil(books.length / booksPerPage);

// Отображаем первую страницу книг и пагинацию
displayBooks(1);
displayPagination(totalPages);

// Обработчики событий для кнопок "<<" (первая страница) и ">>" (последняя страница)
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
