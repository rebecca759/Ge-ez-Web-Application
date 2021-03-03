import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("levelThreeGeezDB",{
    qene: `++id, qene, fetchi, secret `


});

// vars for qene

const qene1 = document.querySelector('.qene');
const difinition = document.querySelector('.difinitioin');
const secret1 = document.querySelector('.secret');
const next = document.querySelector('.next');

// populate the datatbase

bulkcreate(db.qene, {
    qene: "ነበረ",
    fechi: "ተቀመጠ",
    secret: "ይነብሮ ፡  ይቀመጥ (ትዕዛዝ)",
    
})

bulkcreate(db.qene, {
    qene: "ነበረ",
    fechi: "ተቀመጠ",
    secret: "ይነብሮ ፡  ይቀመጥ (ትዕዛዝ)",
    
})
// add event listner to the button

next.addEventListener('click', nextQene);

function nextQene(){
    let index = 1;

    if (index < 10){

        db.qene.get(index, function(rowOne){
            qene1.innerHTML = rowOne['qene'];
            difinition.innerHTML = rowOne['fechi'];
            secret1.innerHTML = rowOne['secret'];
    
    
        })
        index = index + 1;
    }
    

    if (index > 10){
        index = 1;
    }

    
}
