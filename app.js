// Assign all element in variable

let count = document.querySelector('#result');
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let value = 0;

// For increase number & limit 100 number condition
increase.addEventListener('click', () => {
  if (value < 100) {
    value++;
    count.textContent = value;
  } else {
    alert('limit exceeded');
  };
});

//For decrease number & Negative number not allow condition
decrease.addEventListener('click', () => {
  if (value > 0) {
    value--;
    count.textContent = value;
  }else {
    alert('Negative not allow')
  };
});

//For reset value to 0
reset.addEventListener('click', () => {
  value = 0;
  count.textContent = value;
})