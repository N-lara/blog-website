const loginFormHandler = async (event) => {
  console.log('attempting to create user...')
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const data = {name: name, email:email, password:password};
      console.log(data);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
        alert('success');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  

  document
    .querySelector('.signup-form')
    .addEventListener('submit', loginFormHandler);