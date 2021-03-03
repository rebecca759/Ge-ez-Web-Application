const list_item = document.querySelector('.my-list');
let lists = list_item.children;

list_item.addEventListener('click',change);

function change(e) {
    console.log('jj')

    var active;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].style.color == 'white') {
            active = lists[i].textContent;
        }

        lists[i].style.background = 'white';
        lists[i].style.color = 'black';
    }

    if (active == "የግዕዝ ፊደላት") {
        if (e.target.textContent == "ቀናትና ወቅቶች በግዕዝ") {
            alert("መጀመርያ ይህንን ገጽ ጨርሱ")
        }
    }
    if ( !(e.target.classList.contains('disabled')) ) {
        e.target.style.background = '#a5702a';
        e.target.style.color = 'white';
    }
    
}