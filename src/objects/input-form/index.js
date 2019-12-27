const inputForm = (function () {
    const module = {}

    module._style = () => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .input-form {
                display: block;
                width: 100%;
                font-size: 18px;
                font-weight: bold;
                color: #3a4042;
                border-bottom: 1px solid #3a4042;
                padding-bottom: 12px;
                padding-top: 12px;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }

    module.render = content => {
        module._style()

        return `<input class="input-form"/>`
    }
        
    return {
        render: module.render
    }
})()