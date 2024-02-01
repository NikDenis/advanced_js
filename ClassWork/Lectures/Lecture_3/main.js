// let promise = new Promise(function (resolve, reject) {
//   // Функция - исполнитель
// });

// ____________________________________________________________________________________________________

// Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду
// и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть
// отклонен с сообщением об ошибке.

// let generateRandomNumber = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.floor(Math.random() * 10) + 1;
//       if (randomNumber) {
//         resolve(randomNumber);
//       } else {
//         reject('Ошибка генерации случайного числа');
//       }
//     }, 1000);
//   });
// }

// generateRandomNumber()
//   .then((number) => {
//     console.log('Сгенерировано случайное число:', number);
//   })
//   .catch((error) => {
//     console.log('Ошибка:', error);
//   });

// ____________________________________________________________________________________________________

// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise,
// выполняющий запрос данных по указаному URL. Если запрос завершается успешно, PRomise должден
// резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением
// об ошибке.

// let fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject('Ошибка загрузки данных'));
//   });
// }
// // https://randombig.cat/roar.json
// fetchData('https://catfact.ninja/fact')
//   .then((data) => {
//     console.log('Получены данные:', data);
//   }).catch((error) => {
//     console.log('Ошибка:', error);
//   });

// ____________________________________________________________________________________________________

// Напишите функцию checkFileExits(file), которая принимает имя файла в качестве аргумента и
// возвращает Promise, выполняющий через 2 секунды. Promise должден резолвиться, если файл
// существует, и отклониться если файла нет.

// let checkIfFileExits = (file) => {

// };

// let checkFileExits = (file) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const fileExits = checkIfFileExits(file);
//       if (fileExits) {
//         resolve('Файл существует')
//       } else {
//         reject('Файл не существует')
//       }
//     }, 2000);
//   });
// }

// checkFileExits('example.txt')
//   .then((message) => {
//     console.log(message);
//   }).catch((err) => {
//     console.log('Ошибка:', err);
//   });

// ____________________________________________________________________________________________________

// Напишите функцию calculateSum(a, b), которая принимает два числа в качестве аргумента и
// возвращает Promise. Promise должен быть выполнен суммой двух чисел.

// let calculateSum = (a, b) => {
//   return new Promise((resolve, reject) => {
//     const sum = a + b;
//     resolve(sum);
//   });
// }

// calculateSum("3", 7)
//   .then((result) => {
//     console.log('Сумма чисел:', result);
//   })

// ____________________________________________________________________________________________________

// Напишите функцию divideNumber(a, b), которая принимает два числа в качестве аргумента и
// возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число
// равно 0, Promise должен быть отклонен с сообщением о невозможности деоения на 0.

// let divideNumber = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject('Невозможно делить на 0');
//     } else {
//       resolve(a / b);
//     }
//   });
// }

// divideNumber(10, 2)
//   .then((result) => {
//     console.log('Результат деления:', result);
//   }).catch((err) => {
//     console.log('Ошибка:', err);
//   });

// ____________________________________________________________________________________________________

// new Promise(function (resolve) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//   console.log(result);
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });
// }).then(function (result) {
//   console.log(result);
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   })
// }).then(function (result) {
//   console.log(result);
// })

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then(console.log)
//   .catch(console.log);;

// // =>  Ошибка
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then(console.log)
//   .catch(console.log);;

// // =>  Сработает!

// Самый быстрый сервер ищет!
// let checkServerResponse = (urls) => {
//   let promises = urls.map((url) => fetch(url));

//   return Promise.race(promises)
//     .then((response) => {
//       return response.url;
//     });
// }

// let urls = [
//   'https://api.example.com/server1',
//   'https://api.example.com/server2',
//   'https://api.example.com/server3'
// ];

// checkServerResponse(urls)
//   .then((fasterServer) => {
//     console.log('Самый быстрый сервер:', fasterServer);
//   }).catch((err) => {
//     console.log('Ошибка:', err);
//   });

// Напишите функцию setCookie(name, value, days), которая устанавливает cookie с указанным именем, 
// значением и сроком действия в днях.

let setCookie = (name, value, days) => {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
  document.cookie = name + '=' + cookieValue;
}

setCookie('username', 'John Doe', 7);
setCookie('userinfo', 'Mister', 5);

// Напишите функцию getCookie(name), которая возвращает значение cookie с указанным именем.

// let getCookie = (name) => {
//   let cookies = document.cookie.split(';');
//   for (const cookie of cookies) {
//     let [cookieName, cookieVAlue] = cookie.trim().split('=');
//     if (cookieName === name) {
//       return decodeURIComponent(cookieVAlue);
//     }
//   }
//   return null;
// }

// let username = getCookie('username');
// console.log('Значение cookie "username":', username)

// // Напишите функцию deleteCookie(name), которая удаляет cookie c указанным именем.

// let deleteCookie = (name) => {
//   document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// }

// deleteCookie('username');