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
  
    