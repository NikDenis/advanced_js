// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе
// будет приватное свойство для хранения списка книг, а также методы для
// добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется
// пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
// Если книга с таким названием уже существует в списке, выбросьте ошибку
// с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка
//  по названию.Если книги с таким названием нет в списке, выбросьте ошибку
//  с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги
// в библиотеке и возвращать true или false в зависимости от того, есть ли
//  такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив)
//  в качестве аргумента.Убедитесь, что предоставленный массив не содержит
// дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  constructor(book) {
    this.#books = book;
  }

  get allBooks() {
    return this.#books;
  }

  set addBook(title) {
    try {
      if (this.hasBook(title)) {
        throw new Error('Книга с таким названием уже есть: ')
      }
      this.#books.push(title);
    } catch (error) {
      console.log(error + title);
    }
  }

  removeBook(title) {
    try {
      if (this.#books.indexOf(title) === -1) {
        throw new Error('Книги с таким названием нет!')
      }
      this.#books.splice(this.#books.indexOf(title), 1);
    } catch (error) {
      console.log(error);
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

}


const libr = new Library(['Мертвые души']);
console.log(libr.allBooks);
libr.addBook = 'Война и мир';
libr.addBook = 'Программирование';
libr.addBook = 'Математика';
console.log(libr.allBooks);
libr.removeBook('Биология');
libr.removeBook('Программирование');
console.log(libr.allBooks);


//   Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут
//  оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные
//  сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для
//  отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов,
//  функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими
//  отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Вы можете использовать этот массив initialData для начальной загрузки
// данных при запуске вашего приложения.

const list = document.querySelector('.list');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

initialData.forEach(reviews => {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  h3.textContent = reviews.product;
  li.appendChild(h3);
  reviews.reviews.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item.text;
    li.appendChild(p);
    list.appendChild(li)
  })
})

button.addEventListener('click', () => {
  try {
    if (input.value.length < 50 || input.value.length > 500) {
      throw new Error('Ошибка в длине отзыва! ' +
        ' Отзыв должен быть не меньше 50 и не больше 500 символов!')
    }
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.textContent = 'Новый отзыв';
    p.textContent = input.value;
    li.appendChild(h3);
    li.appendChild(p);
    list.appendChild(li);
    input.value = '';
  } catch (error) {
    alert(error);
  }
})
