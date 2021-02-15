//UI Vars
let list_item = document.querySelector('.my-list');

let lists = list_item.children;

list_item.addEventListener('click',change);

function change(e) {
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.background = 'white';
        lists[i].style.color = 'black';
    }
    e.target.style.background = '#a5702a';
    e.target.style.color = 'white';
}

