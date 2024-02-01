// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем 
// массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш 
// код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, 
// а после этой задержки — отображать новости на странице.
// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 
// секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: 
// с вероятностью 10% она должна возвращать ошибку вместо данных.
// При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное 
// выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует 
// её снова после завершения операции (будь то успешная загрузка или ошибка).


// const mockDatabase = [
//   { title: "Новость 1", content: "Содержимое новости 1..." },
//   { title: "Новость 2", content: "Содержимое новости 2..." },
// ];

// const fetchNews = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.1) {
//         reject("Ошибка загрузки новостей");
//       } else {
//         resolve(mockDatabase);
//       }
//     }, 1000)
//   })
// }

// const renderNews = (news) => {
//   return (
//     `<div>${news.title}</div>
//       <div>${news.content}</div>`
//   );


// }

// const btn = document.querySelector("#addNews");
// const newsDiv = document.querySelector(".news");
// btn.addEventListener("click", () => {
//   btn.disabled = true;
//   fetchNews()
//     .then(data => {
//       data.forEach((news) => {
//         newsDiv.insertAdjacentHTML("beforeend", renderNews(news))
//       }
//       )
//     })
//     .catch(error => { alert(error) })
//     .finally(() => {
//       btn.disabled = false
//     })
// })


//--------------------------------------------------------------------------------------------------

// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта 
// могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как 
// пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. 
// При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят 
// ранее созданный мебельный комплект.

// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и 
// возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая 
// сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки
// и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

// const saveBtn = document.querySelector("#save-btn");
// const loadBtn = document.querySelector("#load-btn");
// const clearBtn = document.querySelector("#clear-btn");
// const tableSelectEl = document.querySelector("#table-color");
// const chairSelectEl = document.querySelector("#chair-material");

// saveBtn.addEventListener("click", saved);
// loadBtn.addEventListener("click", loaded);
// clearBtn.addEventListener("click", cleared);

// function saved(event) {
//   Cookies.set('tableConfig', tableSelectEl.value);
//   Cookies.set('chairConfig', chairSelectEl.value);
//   alert("настройки сохраненны");
// }

// function loaded(event) {
//   if (!Cookies.get("tableConfig")) {
//     return alert("печенек нет");
//   }
//   tableSelectEl.value = Cookies.get("tableConfig");
//   chairSelectEl.value = Cookies.get("chairConfig");
//   alert("настройки загружены");
// }

// function cleared(event) {
//   Cookies.remove("tableConfig");
//   Cookies.remove("chairConfig");
//   alert("Съели все печеньки)");
// }
// document.addEventListener("DOMContentLoaded", loaded);


//--------------------------------------------------------------------------------------------------



