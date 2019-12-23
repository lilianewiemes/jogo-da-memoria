const createMemoryCard = ({ src, alt }) => `
    <div class="memory-card" onClick="handleClick(this)">
        <article class="card -front">
            <img 
                src="${src}" 
                alt="${alt}" 
                class="icon"
            />
        </article>
        <article class="card">
            <img 
                src="img/icon-collabcode.png" 
                alt="Mascote da Collabcode" 
                class="icon"
            />
        </article>
    </div>`

const handleClick = element => {
    activateMemoryCard(element)

    checkIsRight()
}

/**
 * Enable a maximum of 2 cards
 * @param {*} element 
 */
const activateMemoryCard = element => {
    if (store.qtdActiveMemoryCard < 2) {
        element.classList.add('-active')
    }
}

/**
 * Check if the 2 cards is equals
 */
const checkIsRight = () => {
    if (store.qtdActiveMemoryCard === 1 ) {
        const activeMemoryCards = document.querySelectorAll('.memory-card.-active')

        if (activeMemoryCards[0].querySelector('.-front .icon').getAttribute('src') ===
        activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')) {
            store.score++
            activeMemoryCards.forEach(item => {
                item.classList.add('-score')
                item.classList.remove('-active')
            })
        } else {
            setTimeout(() => {
                activeMemoryCards.forEach(item => {
                    item.classList.remove('-active')
                })
    
                store.qtdActiveMemoryCard = 0
            }, 1000)
        }
    }
}