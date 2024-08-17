const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const localData = localStorage.getItem(localStorageKey);
if (localData) {
  const { email, message } = JSON.parse(localData);
  feedbackForm.elements.email.value = email;
  feedbackForm.elements.message.value = message;
  formData.email = email;
  formData.message = message;
}

feedbackForm.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});