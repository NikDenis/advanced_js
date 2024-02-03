
const inputProduct = document.querySelector('.input-title');
const inputReview = document.querySelector('.input-text');
const button = document.querySelector('.button');

if (localStorage.getItem('reviews') === null) {
  localStorage.setItem('reviews', '[]');
}

button.addEventListener('click', () => {
  const reviews = JSON.parse(localStorage.getItem('reviews'));
  console.log(reviews.length);
  if (reviews.length === 0) {
    const review = {
      product: inputProduct.value,
      review: [
        inputReview.value
      ]
    }
    reviews.push(review);
  } else if (reviews.length > 0) {
    let result = false;
    reviews.forEach((item) => {
      if (item.product === inputProduct.value) {
        item.review.push(inputReview.value);
        result = true;
      }
    })
    if (!result) {
      const review = {
        product: inputProduct.value,
        review: [
          inputReview.value
        ]
      }
      reviews.push(review);
    }
  }
  localStorage.setItem('reviews', JSON.stringify(reviews));
  console.log(localStorage.getItem('reviews'));
})
// localStorage.clear();