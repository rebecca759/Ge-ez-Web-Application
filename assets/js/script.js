import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("GeezDB",{
    letters: `++id, letter1, letter2, letter3, letter4, letter5, letter6, letter7`, numbers: `++id, amharic, geez, numGeez`
});

//UI Vars
const list_item = document.querySelector('.my-list');
const letter_buttons = document.querySelector('.letter-list');
const main_letter = document.querySelector('.main-letter');
const letter_input = document.querySelector('#search-letters');
const search_button = document.querySelector('#searchlet-btn');
const searchnums_button = document.querySelector('#searchnums-btn');
const number_input = document.querySelector('#search-nums');

//Get Each letter from HTML
const letter_1 = document.querySelector('.letter-1');
const letter_2 = document.querySelector('.letter-2');
const letter_3 = document.querySelector('.letter-3');
const letter_4 = document.querySelector('.letter-4');
const letter_5 = document.querySelector('.letter-5');
const letter_6 = document.querySelector('.letter-6');
const letter_7 = document.querySelector('.letter-7');

//UI Vars for numbers
const numAmharic = document.querySelector('.numAmharic');
const numGeez = document.querySelector('.numGeez');
const num_buttons = document.querySelector('.num-list');
const numMain = document.querySelector('.main_num');
const numberTab = document.querySelector('.numberTab');
const wordTab = document.querySelector('.wordTab');


//Populate the database
bulkcreate(db.letters, {
    letter1: 'ሀ',
    letter2: 'ሁ',
    letter3: 'ሂ',
    letter4: 'ሃ',
    letter5: 'ሄ',
    letter6: 'ህ',
    letter7: 'ሆ'
})

bulkcreate(db.letters, {
    letter1: 'ለ',
    letter2: 'ሉ',
    letter3: 'ሊ',
    letter4: 'ላ',
    letter5: 'ሌ',
    letter6: 'ል',
    letter7: 'ሎ'
})

bulkcreate(db.letters, {
    letter1: 'ሐ',
    letter2: 'ሑ',
    letter3: 'ሒ',
    letter4: 'ሓ',
    letter5: 'ሔ',
    letter6: 'ሕ',
    letter7: 'ሖ'
})


bulkcreate(db.letters, {
    letter1: 'መ',
    letter2: 'ሙ',
    letter3: 'ሚ',
    letter4: 'ማ',
    letter5: 'ሜ',
    letter6: 'ም',
    letter7: 'ሞ'
})

bulkcreate(db.letters, {
    letter1: 'ሠ',
    letter2: 'ሡ',
    letter3: 'ሢ',
    letter4: 'ሣ',
    letter5: 'ሤ',
    letter6: 'ሥ',
    letter7: 'ሦ'
})

bulkcreate(db.letters, {
    letter1: 'ረ',
    letter2: 'ሩ',
    letter3: 'ሪ',
    letter4: 'ራ',
    letter5: 'ሬ',
    letter6: 'ር',
    letter7: 'ሮ'
})

bulkcreate(db.numbers, {
    amharic: "አንድ",
    geez: "አሀዱ",
    numGeez: "፩"
})

bulkcreate(db.numbers, {
    amharic: "ሁለት",
    geez: "ክልኤቱ",
    numGeez: "፪"
})

bulkcreate(db.numbers, {
    amharic: "ሶስት",
    geez: "ሠለስቱ",
    numGeez: "፫"
})

bulkcreate(db.numbers, {
    amharic: "አራት",
    geez: "ኣርባዕቱ",
    numGeez: "፬"
})

bulkcreate(db.numbers, {
    amharic: "አምስት",
    geez: "ሓምስቱ",
    numGeez: "፭"
})

bulkcreate(db.numbers, {
    amharic: "ስድስት",
    geez: "ስድስቱ",
    numGeez: "፮"
})

bulkcreate(db.numbers, {
    amharic: "ሰባት",
    geez: "ሰብዓቱ",
    numGeez: "፯"
})


bulkcreate(db.numbers, {
    amharic: "ስምንት",
    geez: "ሰመንቱ",
    numGeez: "፰"
})

bulkcreate(db.numbers, {
    amharic: "ዘጠኝ",
    geez: "ተስዓቱ",
    numGeez: "፱"
})

bulkcreate(db.numbers, {
    amharic: "አስር",
    geez: "ዓሠርቱ",
    numGeez: "፲"
})


// get each descrption from HTML
const desc1 = document.querySelector('.number-desc');
const desc2 = document.querySelector('.number-desc2');

let lists = list_item.children;
let buttons = letter_buttons.children;

//We're using delegation on both
list_item.addEventListener('click',change);
letter_buttons.addEventListener('click',changeButtons);

num_buttons.addEventListener('click', changeNumbers);

//Event listener for search
search_button.addEventListener('click',searchLetters);
searchnums_button.addEventListener('click',searchNumbers);

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
            db.letters.get(1, function(firstRow) {
                letter_1.innerHTML = firstRow['letter1'];
                letter_2.innerHTML = firstRow['letter2'];
                letter_3.innerHTML = firstRow['letter3'];
                letter_4.innerHTML = firstRow['letter4'];
                letter_5.innerHTML = firstRow['letter5'];
                letter_6.innerHTML = firstRow['letter6'];
                letter_7.innerHTML = firstRow['letter7'];
            })
        }

        else if (e.target.textContent == "ለ") {
            db.letters.get(2, function(secondRow) {
                letter_1.innerHTML = secondRow['letter1'];
                letter_2.innerHTML = secondRow['letter2'];
                letter_3.innerHTML = secondRow['letter3'];
                letter_4.innerHTML = secondRow['letter4'];
                letter_5.innerHTML = secondRow['letter5'];
                letter_6.innerHTML = secondRow['letter6'];
                letter_7.innerHTML = secondRow['letter7'];
            })  
        }

        else if (e.target.textContent == "ሐ") {
            db.letters.get(3, function(thirdRow) {
                letter_1.innerHTML = thirdRow['letter1'];
                letter_2.innerHTML = thirdRow['letter2'];
                letter_3.innerHTML = thirdRow['letter3'];
                letter_4.innerHTML = thirdRow['letter4'];
                letter_5.innerHTML = thirdRow['letter5'];
                letter_6.innerHTML = thirdRow['letter6'];
                letter_7.innerHTML = thirdRow['letter7'];
            })
        }

        else if (e.target.textContent == "መ") {
            db.letters.get(4, function(fourthRow) {
                letter_1.innerHTML = fourthRow['letter1'];
                letter_2.innerHTML = fourthRow['letter2'];
                letter_3.innerHTML = fourthRow['letter3'];
                letter_4.innerHTML = fourthRow['letter4'];
                letter_5.innerHTML = fourthRow['letter5'];
                letter_6.innerHTML = fourthRow['letter6'];
                letter_7.innerHTML = fourthRow['letter7'];
            })  
        }

        else if (e.target.textContent == "ሠ") {
            db.letters.get(5, function(fifthRow) {
                letter_1.innerHTML = fifthRow['letter1'];
                letter_2.innerHTML = fifthRow['letter2'];
                letter_3.innerHTML = fifthRow['letter3'];
                letter_4.innerHTML = fifthRow['letter4'];
                letter_5.innerHTML = fifthRow['letter5'];
                letter_6.innerHTML = fifthRow['letter6'];
                letter_7.innerHTML = fifthRow['letter7'];
            })   

        }

        else if (e.target.textContent == "ረ") {
            db.letters.get(6, function(sixthRow) {
                letter_1.innerHTML = sixthRow['letter1'];
                letter_2.innerHTML = sixthRow['letter2'];
                letter_3.innerHTML = sixthRow['letter3'];
                letter_4.innerHTML = sixthRow['letter4'];
                letter_5.innerHTML = sixthRow['letter5'];
                letter_6.innerHTML = sixthRow['letter6'];
                letter_7.innerHTML = sixthRow['letter7'];
            })   

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

    let letter_class = "ሀ";

    if (letter == "ሀ" || letter == "ሁ" || letter == "ሂ" || letter == "ሃ" || letter == "ሄ" || letter == "ህ" || letter == "ሆ") {
        letter_class = "ሀ";
    }

    else if (letter == "ለ" || letter == "ሉ" || letter == "ሊ" || letter == "ላ" || letter == "ሌ" || letter == "ል" || letter == "ሎ") {
        letter_class = "ለ";
    }

    else if (letter == "ሐ" || letter == "ሑ" || letter == "ሒ" || letter == "ሓ" || letter == "ሔ" || letter == "ሕ" || letter == "ሖ") {
        letter_class = "ሐ";
    }

    else if (letter == "ረ" || letter == "ሩ" || letter == "ሪ" || letter == "ራ" || letter == "ሬ" || letter == "ር" || letter == "ሮ") {
        letter_class = "ረ";
    }

    loop1:
        for (let i = 0; i < letter_buttons.children.length; i++) {
            let buttons_list = letter_buttons.children
    loop2:
            for (let j = 0; j < buttons_list.length; j++) {
                let buttons = buttons_list[j].children;

    loop3:
                for (let k = 0; k < buttons.length; k++) {
                    if (buttons[k].textContent == letter_class) {
                        buttons[k].style.background = '#6d4512';
                        buttons[k].style.color = 'white';
                    }

                    else {
                        buttons[k].style.background = 'white';
                        buttons[k].style.color = '#6d4512';
                    }
                } 
            } 
            break loop1;   
        }

    if (letter_class == "ሀ") {
        $('#myCarousel').carousel(0);
        db.letters.get(1, function(rowOne) {
            main_letter.innerHTML = rowOne['letter1'];
            letter_1.innerHTML = rowOne['letter1'];
            letter_2.innerHTML = rowOne['letter2'];
            letter_3.innerHTML = rowOne['letter3'];
            letter_4.innerHTML = rowOne['letter4'];
            letter_5.innerHTML = rowOne['letter5'];
            letter_6.innerHTML = rowOne['letter6'];
            letter_7.innerHTML = rowOne['letter7'];
        })  
    }

    else if (letter_class == "ለ") {
        $('#myCarousel').carousel(0);
        db.letters.get(2, function(rowTwo) {
            main_letter.innerHTML = rowTwo['letter1'];
            letter_1.innerHTML = rowTwo['letter1'];
            letter_2.innerHTML = rowTwo['letter2'];
            letter_3.innerHTML = rowTwo['letter3'];
            letter_4.innerHTML = rowTwo['letter4'];
            letter_5.innerHTML = rowTwo['letter5'];
            letter_6.innerHTML = rowTwo['letter6'];
            letter_7.innerHTML = rowTwo['letter7'];
        })
    }

    else if (letter_class == "ሐ") {
        $('#myCarousel').carousel(0);
        db.letters.get(3, function(rowThree) {
            main_letter.innerHTML = rowThree['letter1'];
            letter_1.innerHTML = rowThree['letter1'];
            letter_2.innerHTML = rowThree['letter2'];
            letter_3.innerHTML = rowThree['letter3'];
            letter_4.innerHTML = rowThree['letter4'];
            letter_5.innerHTML = rowThree['letter5'];
            letter_6.innerHTML = rowThree['letter6'];
            letter_7.innerHTML = rowThree['letter7'];
        })
    }

    else if (letter_class == "ረ") {
        $('#myCarousel').carousel(1);
        db.letters.get(6, function(rowSix) {
            main_letter.innerHTML = rowSix['letter1'];
            letter_1.innerHTML = rowSix['letter1'];
            letter_2.innerHTML = rowSix['letter2'];
            letter_3.innerHTML = rowSix['letter3'];
            letter_4.innerHTML = rowSix['letter4'];
            letter_5.innerHTML = rowSix['letter5'];
            letter_6.innerHTML = rowSix['letter6'];
            letter_7.innerHTML = rowSix['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }

}

function changeNumbers(e) {
    if (e.target.classList.contains("btn")) {
        let old_buttons = e.target.parentElement.children;

        for (let i = 0; i < old_buttons.length; i++) {
            old_buttons[i].style.background = 'white';
            old_buttons[i].style.color = '#6d4512';
        }

        if (e.target.textContent == "1") {
            db.numbers.get(1, function(rowOne) { 
                numMain.innerHTML = rowOne['numGeez'];
                numAmharic.innerHTML = rowOne['amharic'];
                numGeez.innerHTML = rowOne['geez'];
            })
        }

        else if (e.target.textContent == "2") {
            db.numbers.get(2, function(rowTwo) { 
                numMain.innerHTML = rowTwo["numGeez"];
                numAmharic.innerHTML = rowTwo["amharic"];
                numGeez.innerHTML = rowTwo["geez"];
            })
        }

        else if (e.target.textContent == "3") {
            db.numbers.get(3, function(rowThree) { 
                numMain.innerHTML = rowThree["numGeez"];
                numAmharic.innerHTML = rowThree["amharic"];
                numGeez.innerHTML = rowThree["geez"];
            })
        }

        else if (e.target.textContent == "4") {
            db.numbers.get(4, function(rowFour) { 
                numMain.innerHTML = rowFour["numGeez"];
                numAmharic.innerHTML = rowFour["amharic"];
                numGeez.innerHTML = rowFour["geez"];
            })
        }

        else if (e.target.textContent == "5") {
            db.numbers.get(5, function(rowFive) { 
                numMain.innerHTML = rowFive["numGeez"];
                numAmharic.innerHTML = rowFive["amharic"];
                numGeez.innerHTML = rowFive["geez"];
            })
        }

        else if (e.target.textContent == "6") {
            db.numbers.get(6, function(rowSix) { 
                numMain.innerHTML = rowSix["numGeez"];
                numAmharic.innerHTML = rowSix["amharic"];
                numGeez.innerHTML = rowSix["geez"];
            })
        }

        else if (e.target.textContent == "7") {
            db.numbers.get(7, function(rowSeven) { 
                numMain.innerHTML = rowSeven["numGeez"];
                numAmharic.innerHTML = rowSeven["amharic"];
                numGeez.innerHTML = rowSeven["geez"];
            })
        }

        else if (e.target.textContent == "8") {
            db.numbers.get(8, function(rowEight) { 
                numMain.innerHTML = rowEight["numGeez"];
                numAmharic.innerHTML = rowEight["amharic"];
                numGeez.innerHTML = rowEight["geez"];
            })
        }

        else if (e.target.textContent == "9") {
            db.numbers.get(9, function(rowNine) { 
                numMain.innerHTML = rowNine["numGeez"];
                numAmharic.innerHTML = rowNine["amharic"];
                numGeez.innerHTML = rowNine["geez"];
            })
        }

        else if (e.target.textContent == "10") {
            db.numbers.get(10, function(rowTen) { 
                numMain.innerHTML = rowTen["numGeez"];
                numAmharic.innerHTML = rowTen["amharic"];
                numGeez.innerHTML = rowTen["geez"];
            })
        }

        e.target.style.background = '#6d4512';
        e.target.style.color = 'white';

    }
}

function searchNumbers() {
    //check if search input is empty
    if (number_input.value == '') {
        number_input.style.borderColor = "red";
        return;
    }

    number_input.style.borderColor = '#ebebeb';

    //get search letter input

    var number = number_input.value.charAt(0);


    loop1:
        for (let i = 0; i < num_buttons.children.length; i++) {
            let buttons_list = num_buttons.children
    loop2:
            for (let j = 0; j < buttons_list.length; j++) {
                let buttons = buttons_list[j].children;

    loop3:
                for (let k = 0; k < buttons.length; k++) {
                    if (buttons[k].textContent == number) {
                        buttons[k].style.background = '#6d4512';
                        buttons[k].style.color = 'white';
                    }

                    else {
                        buttons[k].style.background = 'white';
                        buttons[k].style.color = '#6d4512';
                    }
                }
            } 
            break loop1;     
        }
   
    if (number == "1") {
        $('#numCarousel').carousel(0);
        db.numbers.get(1, function(rowOne) {
            numMain.innerHTML = rowOne['numGeez'];
            numAmharic.innerHTML = rowOne['amharic'];
            numGeez.innerHTML = rowOne['geez'];
        })  
    }

    else if (number == "2") {
        $('#numCarousel').carousel(0);
        db.numbers.get(2, function(rowTwo) {
            numMain.innerHTML = rowTwo['numGeez'];
            numAmharic.innerHTML = rowTwo['amharic'];
            numGeez.innerHTML = rowTwo['geez'];
        })  
    }

    else if (number == "3") {
        $('#numCarousel').carousel(0);
        db.numbers.get(3, function(rowThree) {
            numMain.innerHTML = rowThree['numGeez'];
            numAmharic.innerHTML = rowThree['amharic'];
            numGeez.innerHTML = rowThree['geez'];
        })  
    }

    else if (number == "4") {
        $('#numCarousel').carousel(0);
        db.numbers.get(4, function(rowFour) {
            numMain.innerHTML = rowFour['numGeez'];
            numAmharic.innerHTML = rowFour['amharic'];
            numGeez.innerHTML = rowFour['geez'];
        })  
    }

    else if (number == "5") {
        $('#numCarousel').carousel(1);
        db.numbers.get(5, function(rowFive) {
            numMain.innerHTML = rowFive['numGeez'];
            numAmharic.innerHTML = rowFive['amharic'];
            numGeez.innerHTML = rowFive['geez'];
        })  
    }

    else if (number == "6") {
        $('#numCarousel').carousel(1);
        db.numbers.get(6, function(rowSix) {
            numMain.innerHTML = rowSix['numGeez'];
            numAmharic.innerHTML = rowSix['amharic'];
            numGeez.innerHTML = rowSix['geez'];
        })  
    }

    else if (number == "7") {
        $('#numCarousel').carousel(1);
        db.numbers.get(7, function(rowSeven) {
            numMain.innerHTML = rowSeven['numGeez'];
            numAmharic.innerHTML = rowSeven['amharic'];
            numGeez.innerHTML = rowSeven['geez'];
        })  
    }

    else if (number == "8") {
        $('#numCarousel').carousel(1);
        db.numbers.get(8, function(rowEight) {
            numMain.innerHTML = rowEight['numGeez'];
            numAmharic.innerHTML = rowEight['amharic'];
            numGeez.innerHTML = rowEight['geez'];
        })  
    }

    else {
        number_input.style.borderColor = "red";
    }
      
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
            numberTab.classList.remove('disabled');
           
    }
};