const list_item = document.querySelector('.my-list');
let lists = list_item.children;
const testTab = document.querySelector('.test_tab');

list_item.addEventListener('click',change);
testTab.addEventListener('click',alertTest)

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

function alertTest(e) {
    if (e.target.classList.contains('disabled')) {
        alert("ፈተና ለመፈተን ይህንን ገጽ ይጨርሱ")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            testTab.classList.remove('disabled')
            removed_num = true;
        }
    
    }
}