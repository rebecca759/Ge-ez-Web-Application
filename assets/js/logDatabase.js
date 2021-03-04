
var db;

document.addEventListener('DOMContentLoaded', () => {

    let userDB = indexedDB.open('users', 1);
    
    userDB.onsuccess = function() {
        db = userDB.result;
    }
    userDB.onupgradeneeded = function(event) {
        var db = event.target.result;

        db.onerror = function() {
            console.log('Error loading database.');
        };

        var usersStore = db.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
        usersStore.createIndex('userName', 'userName', {unique: false});
        usersStore.createIndex('password', 'password', {unique: false});
        
    }
});