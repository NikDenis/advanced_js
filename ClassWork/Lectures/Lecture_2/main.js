// window.open('URL', '_blank'); // Открывает новую вкладку
// window.location.href = 'URL'; // Переход на страницу
// window.innerWidth; // Получить ширину окна


function sayhello() {
  console.log('Hello');
}

console.log(sayhello.name); // Выводит имя функции SayHello
console.log(window.name); // Выводит имя окна браузера, пустую строку или имя окна, если оно было задано 

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name); // Выводит имя класса 'Rectangle' через свойство 'name' конструктора объекта

// Обычная функция
function regularFunction() {
  console.log(this);
}

// Стрелочная функция 
const arrowFunction = () => {
  console.log(this);
}

regularFunction(); // Выводит контекст выполнения, например, объект Window (в браузере) или объект Global (в Node.js)
arrowFunction(); // Выводит контекст выполнения, который был определен во время создания функции (лексический контекст)

// Внутри объекта 

const obj = {
  regularMethod: function () {
    console.log(this);
  },
  arrowMethod: () => {
    console.log(this);
  }
}

obj.regularMethod() // Выводит объект obj, так как метод вызывается на объекте obj
obj.arrowMethod() // Выводит контекст выполнения, в котором была создана стрелочная функция (например, объект Global)


class AutoMobile {
  _horsePowers = 0; // Объявление приватного свойства

  set horsePowers(value) {
    if (value < 0) throw new Error("Отрицательное количество сил");
    this._horsePowers = value;
  }

  get horsePowers() {
    return this._horsePowers;
  }

  constructor(power) {
    this._horsePowers = power; // Установка значения свойства при создании объекта класса
  }
}

let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача значения 100 в конструктор

// Установка количества сил
auto.horsePowers = -10; // Вызовет "Отрицательное количество сил"


// Приватные свойства начинаются с # и имеют защиту на уровне языка.
class AutoMobile {
  #horsePowers = 0; // Объявление приватного свойства

  set horsePowers(value) {
    if (value < 0) throw new Error("Отрицательное количество сил");
    this.#horsePowers = value;
  }

  get horsePowers() {
    return this.#horsePowers;
  }

  constructor(power) {
    this.#horsePowers = power; // Установка значения свойства при создании объекта класса
  }
}

let auto = new AutoMobile(100); // Создаем новую машину

// Установка количества сил
auto.horsePowers = 50; // Устанавливаем количество сил через сеттер
console.log(auto.horsePowers); // 50
// Устанавливаем количество сил напрямую.Изменить вне класса нельзя
auto.#horsePowers = 10; // Uncaught SyntaxError: ....


const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    street: '123 Main St'
  },
  contacts: {
    email: 'john@example.com',
    phone: '+123698745'
  }
}

// Опциональная цепочка вызовов метода
const email = user?.contacts?.email;
// const email = user.contacts.email;
console.log(email); // Выводит 'john@example.com'

const defautValue = user?.otherValue ?? 'Default Value';
console.log(defautValue); // Выводит 'Default Value',  так как свойство otherValue не существует в объекте user


// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе 
const streetName = user?.address.street ?? 'Unknown';
console.log(streetName); // Выводит '123 Main St', так как свойство "Street" существует в объекте user.address


try {
  undefined = 1;
} catch {
  console.log('Что то пошло не так');
} finally {
  console.log('Отличный результат');
}

function divideNumbers(a, b) {
  try {
    const result = a / b;
    if (isNaN(result)) {
      throw new Error('результат не является числом');
    }
    console.log('Результат деления:', result);
  } catch (error) {
    console.error('Ошибка деления:', error);
  } finally {
    console.log('Операция деления завершена');
  }
}

divideNumbers(10, 2);
divideNumbers(10, 0);



