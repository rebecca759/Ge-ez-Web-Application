//UI Vars
const list_item = document.querySelector('.my-list');
const letter_buttons = document.querySelector('.letter-list');
const main_letter = document.querySelector('.main-letter');
const letter_input = document.querySelector('#search-letters');
const search_button = document.querySelector('#searchlet-btn');

//Get Each letter from HTML
const letter_1 = document.querySelector('.letter-1');
const letter_2 = document.querySelector('.letter-2');
const letter_3 = document.querySelector('.letter-3');
const letter_4 = document.querySelector('.letter-4');
const letter_5 = document.querySelector('.letter-5');
const letter_6 = document.querySelector('.letter-6');
const letter_7 = document.querySelector('.letter-7');

// get each descrption from HTML
 const desc1 = document.querySelector('.number-desc');
 const desc2 = document.querySelector('.number-desc2');


let lists = list_item.children;
let buttons = letter_buttons.children;

//We're using delegation on both
list_item.addEventListener('click',change);
letter_buttons.addEventListener('click',changeButtons);

//Event listener for search
search_button.addEventListener('click',searchLetters);

function change(e) {
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.background = 'white';
        lists[i].style.color = 'black';
    }
    e.target.style.background = '#a5702a';
    e.target.style.color = 'white';
}

function changeButtons(e) {
    if (e.target.classList.contains("btn")) {
        let old_buttons = e.target.parentElement.children;

        for (let i = 0; i < old_buttons.length; i++) {
            old_buttons[i].style.background = 'white';
            old_buttons[i].style.color = '#6d4512';
        }

        if (e.target.textContent == "ሀ") {
            letter_1.innerHTML = "ሀ";
            letter_2.innerHTML = "ሁ";
            letter_3.innerHTML = "ሂ";
            letter_4.innerHTML = "ሃ";
            letter_5.innerHTML = "ሄ";
            letter_6.innerHTML = "ህ";
            letter_7.innerHTML = "ሆ";
        }

        else if (e.target.textContent == "ለ") {
            letter_1.innerHTML = "ለ";
            letter_2.innerHTML = "ሉ";
            letter_3.innerHTML = "ሊ";
            letter_4.innerHTML = "ላ";
            letter_5.innerHTML = "ሌ";
            letter_6.innerHTML = "ል";
            letter_7.innerHTML = "ሎ";
        }

        else if (e.target.textContent == "ሐ") {
            letter_1.innerHTML = "ሐ";
            letter_2.innerHTML = "ሑ";
            letter_3.innerHTML = "ሒ";
            letter_4.innerHTML = "ሓ";
            letter_5.innerHTML = "ሔ";
            letter_6.innerHTML = "ሕ";
            letter_7.innerHTML = "ሖ";
        }

        else if (e.target.textContent == "መ") {
            letter_1.innerHTML = "መ";
            letter_2.innerHTML = "ሙ";
            letter_3.innerHTML = "መ";
            letter_4.innerHTML = "ማ";
            letter_5.innerHTML = "ሜ";
            letter_6.innerHTML = "ም";
            letter_7.innerHTML = "ሞ";
        }

        else if (e.target.textContent == "2") {
            desc1.innerHTML = "መ";
            desc2.innerHTML = "ሙ";
            
        }

        

        main_letter.innerHTML = e.target.textContent;

        e.target.style.background = '#6d4512';
        e.target.style.color = 'white';
    }
}

function searchLetters() {
    //check if search input is empty
    if (letter_input.value == '') {
        letter_input.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    letter_input.style.borderColor = '#ebebeb';

    //get search letter input

    var letter = letter_input.value.charAt(0);

    if (letter == "ሀ" || letter == "ሁ" || letter == "ሂ" || letter == "ሃ" || letter == "ሄ" || letter == "ህ" || letter == "ሆ") {
        $('#myCarousel').carousel(0);
        main_letter.innerHTML = "ሀ";
        letter_1.innerHTML = "ሀ";
        letter_2.innerHTML = "ሁ";
        letter_3.innerHTML = "ሂ";
        letter_4.innerHTML = "ሃ";
        letter_5.innerHTML = "ሄ";
        letter_6.innerHTML = "ህ";
        letter_7.innerHTML = "ሆ";
    }

    else if (letter == "ለ" || letter == "ሉ" || letter == "ሊ" || letter == "ላ" || letter == "ሌ" || letter == "ል" || letter == "ሎ") {
        $('#myCarousel').carousel(0);
        console.log('#myCarousel'.carousel(0).children);
        main_letter.innerHTML = "ለ";
        letter_1.innerHTML = "ለ";
        letter_2.innerHTML = "ሉ";
        letter_3.innerHTML = "ሊ";
        letter_4.innerHTML = "ላ";
        letter_5.innerHTML = "ሌ";
        letter_6.innerHTML = "ል";
        letter_7.innerHTML = "ሎ";
    }

    else if (letter == "ሐ" || letter == "ሑ" || letter == "ሒ" || letter == "ሓ" || letter == "ሔ" || letter == "ሕ" || letter == "ሖ") {
        main_letter.innerHTML = "ሐ";
        letter_1.innerHTML = "ሐ";
        letter_2.innerHTML = "ሑ";
        letter_3.innerHTML = "ሒ";
        letter_4.innerHTML = "ሓ";
        letter_5.innerHTML = "ሔ";
        letter_6.innerHTML = "ሕ";
        letter_7.innerHTML = "ሖ";
    }

    else if (letter == "ረ" || letter == "ሩ" || letter == "ሪ" || letter == "ራ" || letter == "ሬ" || letter == "ር" || letter == "ሮ") {
        $('#myCarousel').carousel(1);
        main_letter.innerHTML = "ረ";
        letter_1.innerHTML = "ረ";
        letter_2.innerHTML = "ሩ";
        letter_3.innerHTML = "ሪ";
        letter_4.innerHTML = "ራ";
        letter_5.innerHTML = "ሬ";
        letter_6.innerHTML = "ር";
        letter_7.innerHTML = "ሮ";
    }

}