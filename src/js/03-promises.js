import Notiflix from 'notiflix';
const promisesForm = document.querySelector('form.form');
const firstDelayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
promisesForm.addEventListener('submit', selectNumbers);
function selectNumbers(event) {
  event.preventDefault();
  let delay = Number(firstDelayInput.value);
  let delayStep = Number(stepInput.value);
  let amountValue = Number(amountInput.value);
  let position = 0;
  delay = delay - delayStep;
  promisesForm.reset();
  for (let i = 0; i < amountValue; i += 1) {
    position = i + 1;
    delay += delayStep;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
