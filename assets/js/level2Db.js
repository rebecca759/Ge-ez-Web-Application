import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("levelTwoGeezDB",{
    verb: `++id, verbG, verbAm, verbQ, verbA, verbB, verbM, verbGi, verbW`


});

// vars for verbs 

const verbGeez = document.querySelector('.verb');
const verbQuest = document.querySelector('.verbQ');
const verbAction = document.querySelector('.verbA');
const verbBoy = document.querySelector('.verbB');
const verbMen = document.querySelector('.verbM');
const verbGirl = document.querySelector('.verbG');
const verbWomen = document.querySelector('.verbW');
const GverbInput = document.querySelector('#search-verbG');
const AverbInput = document.querySelector('#search-verbA');
const GverbButton = document.querySelector('#searchbtn-verbG');
const AverbButton = document.querySelector('#searchbtn-verbA');



// populate the verb database

bulkcreate(db.verb, {
    verbG: "ነበረ",
    verbAm: "ተቀመጠ",
    verbQ: "ይነብሮ ፡  ይቀመጥ (ትዕዛዝ)",
    verbA: "ነቢር ፡ መቀመጥ",
    verbB: "ነባሪ ፡ የተቀመጠ ወንድ",
    verbM: "ነባሪያን ፡ የተቀመጡ ወንዶች",
    verbGi: "ነባሪት ፡ የተቀመጠች ሴት",
    verbW: "ነባሪያተ ፡ የተቀመጡ ሴቶች",
})

