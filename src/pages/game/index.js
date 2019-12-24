(function() {
    const root = document.querySelector('#root')

    const cardsWrapper = createCardWrapper()
    const createMemoryCard = memoryCard.create

    const pointStoreBar = pointBar.create()
    const layerStartElement = layerStart.render('Start')

    const memoryCardC = createMemoryCard({
        src: 'img/icon-c.png',
        alt: 'Icone linguagem C++'
    })
    const memoryCardJS = createMemoryCard({
        src: 'img/icon-js.png',
        alt: 'Icone linguagem Javascript'
    })
    const memoryCardJava = createMemoryCard({
        src: 'img/icon-java.png',
        alt: 'Icone linguagem Java'
    })
    const memoryCardWoman = createMemoryCard({
        src: 'img/icon-woman.png',
        alt: 'Icone mulher'
    })

    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardC)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardC)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardJS)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardWoman)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardWoman)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardJS)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardJava)
    cardsWrapper.insertAdjacentHTML('beforeend', memoryCardJava)

    root.insertAdjacentHTML('afterbegin', pointStoreBar)
    root.insertAdjacentElement('beforeend', cardsWrapper)
    root.insertAdjacentHTML('beforeend', layerStartElement)
})()
