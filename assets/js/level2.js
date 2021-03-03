const sentTab = document.querySelector('.sent_tab');
const testTab = document.querySelector('.test_tab');



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

sentTab.addEventListener('click',alertSent)
testTab.addEventListener('click',alertTest)

function alertSent(e) {
    console.log('he')
    if (e.target.classList.contains('disabled')) {
        alert("ወደ አረፍተ ነገሮች ገጽ ለመሄድ ይህንን ገጽ ይጨርሱ")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            sentTab.classList.remove('disabled')
            removed_num = true;

        }
    
    }
}   

function alertTest(e) {
    if (e.target.classList.contains('disabled')) {
        alert("ፈተና ለመፈተን ይህንን ገጽ ይጨርሱ")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            testTab.classList.remove('disabled')
            removed_num = true;
        }
    
    }
}

