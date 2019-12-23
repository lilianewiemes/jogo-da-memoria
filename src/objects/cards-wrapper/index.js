let qtdActiveMemoryCard = 0
let score = 0

function createCardWrapper() {
    const cardsWrapper = document.createElement('section')
    cardsWrapper.classList.add('cards-wrapper')
    
    cardsWrapper.addEventListener('click', () => {
        qtdActiveMemoryCard = cardsWrapper.querySelectorAll('.memory-card.-active').length
    })

    return cardsWrapper
}
