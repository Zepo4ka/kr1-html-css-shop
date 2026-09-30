const orderDialog = document.getElementById('order-dialog');
const orderForm = document.getElementById('order-form');
const orderButtons = document.querySelectorAll('.product-card__button, #request-button');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');
const orderProductSummary = document.getElementById('order-product-summary');
const nameInput = document.getElementById('order-name');
const successMessage = document.getElementById('success-message');

function clearValidationErrors() {
  Array.from(orderForm.elements).forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });
}

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    successMessage.hidden = true;
    orderForm.reset();
    nameInput.setCustomValidity('');
    clearValidationErrors();
    const product = button.dataset.product || '';
    selectedProductInput.value = product;
    orderProductSummary.textContent = product
      ? `Выбранный товар: ${product}`
      : 'Общая заявка без выбранного товара';
    orderDialog.showModal();
  });
});

closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

orderForm.addEventListener('input', (event) => {
  if (event.target === nameInput) {
    nameInput.setCustomValidity('');
  }

  if (event.target.willValidate && event.target.checkValidity()) {
    event.target.removeAttribute('aria-invalid');
  }
});

orderForm.addEventListener('change', (event) => {
  if (event.target.willValidate && event.target.checkValidity()) {
    event.target.removeAttribute('aria-invalid');
  }
});

orderForm.addEventListener('submit', (event) => {
  // Пока backend не подключён, форма только проверяется в браузере.
  event.preventDefault();
  clearValidationErrors();
  nameInput.setCustomValidity(
    nameInput.value.trim().length < 2 ? 'Введите имя из двух или более символов.' : ''
  );

  if (!orderForm.checkValidity()) {
    Array.from(orderForm.elements).forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    orderForm.reportValidity();
    return;
  }

  successMessage.hidden = false;
  orderForm.reset();
  nameInput.setCustomValidity('');
  selectedProductInput.value = '';
  orderDialog.close();
  successMessage.focus();
});
