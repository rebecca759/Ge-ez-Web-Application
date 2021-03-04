import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("levelTwoGeezDB",{
    verb: `++id, verbG, verbAm, verbQ, verbA, verbB, verbM, verbGi, verbW`,
    sentence: `++id, qene, fetchi, secret `


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

bulkcreate(db.verb, {
    verbG: "ሖረ",
    verbAm: "ሄደ",
    verbQ: "ይሑር ፡  ይሂድ (ትዕዛዝ)",
    verbA: "ሐዊር ፡ መሄድ",
    verbB: "ሐዋሪ ፡ የሄደ ወንድ",
    verbM: "ሐዋሪያን ፡ የሄዱ ወንዶች",
    verbGi: "ሐዋሪተ ፡ የሄደች ሴት",
    verbW: "ሐዋሪያት ፡ የሄዱ ሴቶች",
})
bulkcreate(db.verb, {
    verbG: "ተምህረ",
    verbAm: "ተማረ",
    verbQ: "ይተመሀር ፡  ይማር (ትዕዛዝ)",
    verbA: "ተምህሮ/ተምህሮት ፡ መሄድ",
    verbB: "ሐዋሪ ፡ የሄደ ወንድ",
    verbM: "ሐዋሪያን ፡ የሄዱ ወንዶች",
    verbGi: "ሐዋሪተ ፡ የሄደች ሴት",
    verbW: "ሐዋሪያት ፡ የሄዱ ሴቶች",
})





/// add even listner to the search 
GverbButton.addEventListener('click', searchGeezVerb);
AverbButton.addEventListener('click', searchAmharicVerb);


/// function for search using Geez word 

function searchGeezVerb(){

    //check if search input is empty
    if (GverbInput.value == '') {
        GverbInput.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    GverbInput.style.borderColor = '#ebebeb';

    //get search letter input

    var word = GverbInput.value;

    if(word == "ነበረ") {
        db.verb.get(1, function(rowOne) {
            verbGeez.innerHTML = `${rowOne['verbG']} (ግስ) : ${rowOne['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowOne['verbQ'];
            verbAction.innerHTML = rowOne['verbA'];
            verbBoy.innerHTML = rowOne['verbB'];
            verbMen.innerHTML = rowOne['verbM'];
            verbGirl.innerHTML = rowOne['verbGi'];
            verbWomen.innerHTML = rowOne['verbW'];
            
        })
    } else if(word == "ሖረ") {
        db.verb.get(2, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    
}

// function for search using Geez word 

function searchAmharicVerb(){

    //check if search input is empty
    if (AverbInput.value == '') {
        AverbInput.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    AverbInput.style.borderColor = '#ebebeb';

    //get search letter input

    var word = AverbInput.value;

    if(word == "ተቀመጠ") {
        db.verb.get(1, function(rowOne) {
            verbGeez.innerHTML = `${rowOne['verbG']} (ግስ) : ${rowOne['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowOne['verbQ'];
            verbAction.innerHTML = rowOne['verbA'];
            verbBoy.innerHTML = rowOne['verbB'];
            verbMen.innerHTML = rowOne['verbM'];
            verbGirl.innerHTML = rowOne['verbGi'];
            verbWomen.innerHTML = rowOne['verbW'];
            
        })
    } else if(word == "ሄደ") {
        db.verb.get(2, function(rowTwo) {
            verbGeez.innerHTML = `${rowTwo['verbG']} (ግስ) : ${rowTwo['verbAm']} (የአማርኛ ፍቺ)`;
            verbQuest.innerHTML = rowTwo['verbQ'];
            verbAction.innerHTML = rowTwo['verbA'];
            verbBoy.innerHTML = rowTwo['verbB'];
            verbMen.innerHTML = rowTwo['verbM'];
            verbGirl.innerHTML = rowTwo['verbGi'];
            verbWomen.innerHTML = rowTwo['verbW'];
            
        })
    }

    
}