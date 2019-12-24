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

                module._explode('50%', '-90px')
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

    module._explode = (x, y) => {
        const colors = [ '#00ce5b', '#ff3b3b', '#2a90a7' ];
        const bubbles = 25;
        let particles = [];
        let ratio = window.devicePixelRatio;
        let c = document.createElement('canvas');
        let ctx = c.getContext('2d');

        c.style.position = 'absolute';
        c.style.left = x;
        c.style.top = y;
        c.style.transform = `translate(-${x})`;
        c.style.pointerEvents = 'none';
        c.style.width = 200 + 'px';
        c.style.height = 200 + 'px';
        c.style.zIndex = 100;
        c.width = 200 * ratio;
        c.height = 200 * ratio;
        document.querySelector('.cards-wrapper').appendChild(c);

        for(var i = 0; i < bubbles; i++) {
            particles.push({
                x: c.width / 2,
                y: c.height / 2,
                radius: r(20, 30),
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: r(0, 360, true),
                speed: r(8, 12),
                friction: 0.9,
                opacity: r(0, 0.5, true),
                yVel: 0,
                gravity: 0.1
            });
        }

        module._renderBubbles(particles, ctx, c.width, c.height);
        setTimeout(() => document.querySelector('.memory-card').removeChild(c), 1000);
    }

    module._renderBubbles = (particles, ctx, width, height) => {
        requestAnimationFrame(() => module._renderBubbles(particles, ctx, width, height));
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
            p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
            p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

            p.opacity -= 0.01;
            p.speed *= p.friction;
            p.radius *= p.friction;
            p.yVel += p.gravity;
            p.y += p.yVel;

            if(p.opacity < 0 || p.radius < 0) return;

            ctx.beginPath();
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        });

        return ctx;
    }

    const r = (a, b, c) => parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));

    return {
        create: module.create,
        handleClick: module.handleClick
    }
})()