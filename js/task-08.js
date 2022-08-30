const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const fornData = new FormData(event.currentTarget);

    const {
        elements: { email, password }
    } = event.currentTarget
    
    if (email.value === '' || password.value === '') {
      return alert('Поля должны быть заполнены!');
    }
    const userDetails = { email: email.value, Password: password.value };

    console.log(userDetails);
    event.currentTarget.reset();
    }



