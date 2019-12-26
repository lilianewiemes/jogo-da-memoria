const createButtonWrapper = (function () {
    const module = {}

    module.render = (firstChild, secondChild) => `
        <div class="buttons-wrapper">
            ${firstChild}
            ${secondChild}
        </div>
    `

    return {
        render: module.render
    }
})()
