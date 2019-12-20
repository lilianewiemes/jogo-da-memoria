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
                alt=Mascote da Colsbcode" 
                class="icon"
            />
        </article>
    </div>`

const handleClick = element => element.classList.toggle('-active')