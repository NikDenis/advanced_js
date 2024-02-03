const reviews = JSON.parse(localStorage.getItem('reviews'));

console.log(reviews);
const list = document.createElement('ul');
const container = document.querySelector('.container');
container.appendChild(list);
reviews.forEach(item => {
  console.log(item.product);
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  h3.classList.add('product-title');
  h3.textContent = item.product;
  li.appendChild(h3);
  item.review.forEach(item => {
    console.log(item);
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    btn.classList.add('remove');

    p.textContent = item;
    btn.textContent = 'Удалить';
    div.appendChild(p);
    div.appendChild(btn);
    li.appendChild(div);
    list.appendChild(li);
  })
});

const product = document.querySelectorAll('.product-title');
window.addEventListener('click', (e) => {
  console.log(e.target.className);
  if (e.target.className === 'product-title active') {
    e.target.classList.remove('active');
  } else if (e.target.className === 'product-title') {
    e.target.classList.add('active');
  }

  if (e.target.className === 'remove') {
    // const parent = e.target.parentNode;
    // parent.remove();
    const text = e.target.previousSibling.textContent;

    const reviews = JSON.parse(localStorage.getItem('reviews'));
    console.log(text);
    reviews.forEach(item => {
      const i = item.review.indexOf(text);
      console.log(i);
      if (i !== -1) {
        item.review.splice(i, 1);
        location.reload();
      }
    });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    console.log(reviews);
  }

});
console.log(product);