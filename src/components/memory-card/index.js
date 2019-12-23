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
    if (qtdActiveMemoryCard < 2) {
        element.classList.add('-active')
    }
    
    if (qtdActiveMemoryCard === 1 ) {
        const activeMemoryCards = document.querySelectorAll('.memory-card.-active')

        if (activeMemoryCards[0].querySelector('.-front .icon').getAttribute('src') ===
        activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')) {
            score++
            activeMemoryCards.forEach(item => {
                item.classList.add('-score')
                item.classList.remove('-active')
            })
        } else {
            setTimeout(() => {
                activeMemoryCards.forEach(item => {
                    item.classList.remove('-active')
                })
    
                qtdActiveMemoryCard = 0
            }, 1000)
        }
    }
}