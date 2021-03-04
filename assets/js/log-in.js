var userDatabase;
const userNameInput = document.getElementById('email');
const pwdInput = document.getElementById('password');
const formLogin = document.getElementById('login-form');
const showError = document.querySelector('.show-error');
const nameInput = document.getElementById('name');

var userAuthenticated = false;

let userDB = indexedDB.open('users', 1);
    
userDB.onsuccess = function() {
    userDatabase = userDB.result;
}

formLogin.addEventListener('submit', authenticate);

function authenticate(event) {
    event.preventDefault();

    var user = userNameInput.value;
    var pwd = pwdInput.value;

    let transaction = userDatabase.transaction('users');
    let userStore = transaction.objectStore('users');

    userStore.openCursor().onsuccess = function(e) {
        let cursor = e.target.result;

        if (cursor) {
            if ((user == cursor.value.userName) && (pwd == cursor.value.password)) {
                userAuthenticated = true;
            } 
            cursor.continue();
        }
    }  

    transaction.oncomplete = function() {
        if (userAuthenticated) {
            event.target.submit();
        } else {
            showError.textContent = "Incorrect username or password entered.";
        }
    }
    
}