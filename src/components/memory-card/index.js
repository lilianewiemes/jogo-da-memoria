const memoryCard = (function(){
    const module = {}
    
    /**
     * Create schema of memory card
     * 
     * @param {*} param0 
     */
    module.create = ({ src, alt }) => {
        return `
        <div class="memory-card" onClick="memoryCard.handleClick(this)">
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
    }
    
    /**
     * Enable the card and check if is right the cards
     * 
     * @param {*} element 
     */
    module.handleClick = element => {
        module._activateMemoryCard(element)

        module._checkIsRight()
    }

    /**
     * Enable a maximum of 2 cards
     * 
     * @param {*} element 
     * @private
     */
    module._activateMemoryCard = element => {
        if (store.qtdActiveMemoryCard < 2) {
            element.classList.add('-active')
        }
    }

    /**
     * Check if the 2 cards is equals
     * 
     * @private
     */
    module._checkIsRight = () => {
        if (store.qtdActiveMemoryCard === 1 ) {
            const activeMemoryCards = document.querySelectorAll('.memory-card.-active')

            if (activeMemoryCards[0].querySelector('.-front .icon').getAttribute('src') ===
            activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')) {
                store.score++

                document.querySelector('.point-bar > .number').textContent = store.score

                activeMemoryCards.forEach(item => {
                    item.classList.add('-score')
                    item.classList.remove('-active')
                })

                explodeBubbles.explode('50%', '-90px')
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

    return {
        create: module.create,
        handleClick: module.handleClick
    }
})()