const root = document.querySelector('#root')
const cardsWrapper = createCardWrapper()
const memoryCard = createMemoryCard('-front')
//const memoryCardFront = createMemoryCardFront()

cardsWrapper.insertAdjacentHTML('beforeend', memoryCard)
root.insertAdjacentElement('beforeend', cardsWrapper)