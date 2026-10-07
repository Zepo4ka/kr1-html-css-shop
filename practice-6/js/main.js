const orderDialog = document.getElementById('order-dialog');
const orderForm = document.getElementById('order-form');
const orderButtons = document.querySelectorAll('.product-card__button');
const openDialogButton = document.getElementById('open-order-dialog');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');
const productName = document.getElementById('order-product-name');
const successMessage = document.getElementById('success-message');

function clearValidation() {
  Array.from(orderForm.elements).forEach((element) => {
    element.removeAttribute('aria-invalid');
  });
}

function openOrderDialog(product = '') {
  orderForm.reset();
  clearValidation();
  selectedProductInput.value = product;
  productName.textContent = product || 'Не выбран';
  successMessage.hidden = true;
  orderDialog.showModal();
}

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openOrderDialog(button.dataset.product);
  });
});

openDialogButton.addEventListener('click', () => {
  openOrderDialog();
});

closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

orderDialog.addEventListener('close', () => {
  orderForm.reset();
  clearValidation();
});

orderForm.addEventListener('input', (event) => {
  const field = event.target;
  if (field.willValidate && field.hasAttribute('aria-invalid')) {
    if (field.validity.valid) {
      field.removeAttribute('aria-invalid');
    } else {
      field.setAttribute('aria-invalid', 'true');
    }
  }
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearValidation();

  if (!orderForm.checkValidity()) {
    Array.from(orderForm.elements).forEach((element) => {
      if (element.willValidate && !element.validity.valid) {
        element.setAttribute('aria-invalid', 'true');
      }
    });
    orderForm.reportValidity();
    return;
  }

  successMessage.hidden = false;
  orderForm.reset();
  orderDialog.close();
});
