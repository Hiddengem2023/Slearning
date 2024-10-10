const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeat = document.getElementById('repeatpassword');
const errorMessage = document.getElementById('errorMessage');
form.addEventListener('submit',(e)=>{
  let errors = []
  e.preventDefault();
  errorMessage.innerText=errors.join('.')
  if (firstnane) {
    errors = getSignupFormErrors(firstname.value,email.value, password.value,repeatpassword.value);
  }
  else {
    errors = getLoginFormErrors(firstname.value,email.value, password.value,repeatpassword.value)
  };
  });
  function getSignupFormErrors(firstname,email,password,repeatpassword) {
    let errors =[]
    if (firstname === ''|| firstname === null) {
      errors.push('firstname is required')
      firstname.parentElement.classList.add('incorrect');
   }
    if (email === ''|| email === null) {
      errors.push('firstname is required')
      firstname.parentElement.classList.add('incorrect');
    }
  if (password === ''|| password === null) {
      errors.push('firstname is required')
      firstname.parentElement.classList.add('incorrect');
   }
  if (repeatpassword === ''|| repeatpassword === null) {
      errors.push('firstname is required')
      firstname.parentElement.classList.add('incorrect');
    }
  return errors;
  };
  const loginBtn = document.getElementById('signup');
const loader = document.getElementById('loader');
loginBtn.addEventListener('click', () => {
  loader.style.display = 'block';
  setTimeout(() => {
    // Simulate network delay (adjust time as needed)
    loader.style.display = 'none';
    // Redirect to next slide (e.g., using JavaScript router or window.location)
    window.location.href = 'home.html';
  }, 2000); // 2-second delay
});