const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      const form = document.querySelector("form.signup");
      const username = document.getElementById('email2');
      const nameInput = document.getElementById('name');
      const password = document.getElementById('password1');
      const password2 = document.getElementById('password2');

      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

const signUpSuccess = document.querySelector('.signUp-success');
 
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
    if (username.parentElement.className == 'field form-control success' &&  
        password.parentElement.className == 'field form-control success' &&
        password2.parentElement.className == 'field form-control success') {
            signUpSuccess.textContent = 'You have successfully signed up';

            let userDatabase;
            let userDB = indexedDB.open('users', 1);
            userDB.onsuccess = function() {
                userDatabase = userDB.result;
                let transaction = userDatabase.transaction(['users'], 'readwrite');
                let userStore = transaction.objectStore('users');
                
                let newUser = {
                    userName: username.value.trim(), 
                    password: password.value.trim(), 
                    name: nameInput.value.trim()
                }

                let addUserRequest = userStore.add(newUser);
                addUserRequest.onsuccess = () => {
                    setTimeout(() => {
                        form.submit();
                    }, 1000);
                }
                transaction.oncomplete = () => {
                    console.log('new user added');
                }
                transaction.onerror = () => {
                    console.log('There was an error adding new user');
                }
            }
    }
});

function checkInputs(){

    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
    const namevalue = nameInput.value.trim();

    if(usernamevalue === ''){
        setErrorFor(username, 'username cant be blank');    
    } else {

        setSuccessFor(username);
    }

    if(namevalue === ''){
        setErrorFor(nameInput, 'username cant be blank');    
    } else {

        setSuccessFor(nameInput);
    }

    if(passwordvalue === ''){
        setErrorFor(password, 'password cannot be blank');
    }else{
        setSuccessFor(password);
    }

    if(password2value === ''){
        setErrorFor(password2, 'confirmation password is blank');
    }else if(passwordvalue !== password2value){
        setErrorFor(password2, "password does not match, Try again");
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl  = input.parentElement;
    const small = formControl.querySelector(`small`);

    small.innerText = message;
    formControl.className = 'field form-control error';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'field form-control success'
}
