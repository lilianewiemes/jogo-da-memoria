const transparencyLayer = (function () {
    const module = {}

    module.render = () => `
        <div class="transparency-layer"></div>
    `

    return {
        render: module.render
    }
})()