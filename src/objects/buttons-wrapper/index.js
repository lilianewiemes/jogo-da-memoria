const createButtonWrapper = (function () {
    const module = {}

    module._style = () => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .buttons-wrapper {
                display: flex;
                flex-wrap: wrap;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }

    module.render = (...children) => {
        module._style()

        return `
            <div class="buttons-wrapper">
                ${children.join('')}
            </div>
        `
    }

    return {
        render: module.render
    }
})()
