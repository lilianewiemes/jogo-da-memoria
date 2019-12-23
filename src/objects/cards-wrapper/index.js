function createCardWrapper() {
    const cardsWrapper = document.createElement('section')
    cardsWrapper.classList.add('cards-wrapper')
    
    cardsWrapper.addEventListener('click', () => {
        store.qtdActiveMemoryCard = cardsWrapper.querySelectorAll('.memory-card.-active').length
    })

    return cardsWrapper
}
