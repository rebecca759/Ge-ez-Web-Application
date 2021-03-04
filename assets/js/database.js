import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("GeezDB",{
    letters: `++id, letter1, letter2, letter3, letter4, letter5, letter6, letter7`, 
    numbers: `++id, amharic, geez, numGeez`, 
    months: `++id, amharic, geez`,
    //verb: `++id, verbG, verbAm, verbQ, verbA, verbB, verbM, verbGi, verbW`


});
