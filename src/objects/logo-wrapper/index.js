 const createLogoWrapper = (function () {
    const module = {}

    module.render = children => `<div class="logo-wrapper">${children}</div>`

    return {
        render: module.render
    }
 })()