const layerStart = (function () {
    const module = {}

    module.render = content => {
        const button = gameButton.create(content)
        const transparency = transparencyLayer.render()

        return `
            <div class="layer-start" 
            onClick="layerStart.handleClick(this)" 
            onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
                ${button}
                ${transparency}
            </div>
        `
    }

    module.handleClick = element => {
        const clildren = element.querySelectorAll('*')

        clildren.forEach(item => item.classList.add('-disable'))
    }

    module.handleTransitionEnd = (event, element) => {
        if (event.target.classList.contains('transparency-layer')) {
            element.remove()
        }
    }

    return {
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd
    }
})()