const transparencyLayer = (function () {
    const module = {}

    module.render = () => {
        return `
            <div class="transparency-layer"></div>
        `
    }

    return {
        render: module.render
    }
})()