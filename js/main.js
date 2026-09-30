const form = document.getElementById('request-form');
const result = document.getElementById('form-result');

form.addEventListener('input', () => {
  result.hidden = true;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.hidden = false;
  form.reset();
});
