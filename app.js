const text = document.querySelector('.select__text');
const container = document.querySelector('.select__container');
const options = document.querySelectorAll('.select__options label');

text.addEventListener('click', (e) => {
  container.classList.toggle('active');
})

document.addEventListener('click', (e) => {
  if (container.classList.contains('active') && !e.target.classList.contains('select__text') &&
    !e.target.classList.contains('select__search')) {
      container.classList.remove('active');
      document.querySelector('.select__search').value = '';
    }
  
})

container.addEventListener('change', (e) => {
  text.textContent = e.target.value;
  // console.log(e.target.value);
});

document.querySelector('.select__search').addEventListener('keyup', filterOptions);

function filterOptions(e) {
  // console.log(e.target.value.toLowerCase());
  let terms = e.target.value.toLowerCase();
  if (terms !== '') {
    options.forEach((item) => {
      // console.log(item);
      if (item.textContent.toLowerCase().indexOf(terms) != -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } else {
    options.forEach((item) => {
        item.style.display = 'block';
    });
  }


}