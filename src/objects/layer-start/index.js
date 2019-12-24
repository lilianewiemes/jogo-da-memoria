const layerStart = (function () {
    const module = {}

    module.render = content => {
        const button = gameButton.create(content)
        const transparency = transparencyLayer.render()

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)">
                ${button}
                ${transparency}
            </div>
        `
    }

    module.handleClick = element => {
        element.remove()
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})()