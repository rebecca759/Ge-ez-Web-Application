document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fetere',
        img: '../assets/images/fetere.jpg'
      },
      {
        name: 'fetere',
        img: '../assets/images/fetere.jpg'
      },
      {
        name: 'nebere',
        img: '../assets/images/nebere.jpg'
      },
      {
        name: 'nebere',
        img: '../assets/images/nebere.jpg'
      },
      {
        name: 'hore',
        img: '../assets/images/hore.jpg'
      },
      {
        name: 'hore',
        img: '../assets/images/hore.jpg'
      },
      {
        name: 'temhre',
        img: '../assets/images/temhre.jpg'
      },
      {
        name: 'temhre',
        img: '../assets/images/temhre.jpg'
      },
      {
        name: 'hame',
        img: '../assets/images/hame.jpg'
      },
      {
        name: 'hame',
        img: '../assets/images/hame.jpg'
      },
      {
        name: 'aemere',
        img: '../assets/images/aemere.jpg'
      },
      {
        name: 'aemere',
        img: '../assets/images/aemere.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '../assets/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', '../assets/images/white.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', '../assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  