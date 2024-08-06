'use strict';
{
  function showPassword() {
    const result = document.querySelector('#result');
    const numbersCheckbox = document.querySelector('#numbers-checkbox');
    const symbolsCheckbox = document.querySelector('#symbols-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += numbers;
    }

    if (symbolsCheckbox.checked) {
      seed += symbols;
    }


    for(let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  }

  const slider = document.querySelector('#slider');
  const btn = document.querySelector('#btn');

  slider.addEventListener('input', () => {
  const passwordLength = document.querySelector('#password-length');
  
  passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click', () => {
    showPassword();
  });

  showPassword();
}