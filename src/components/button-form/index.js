const createButtonForm = (function () {
    const module = {}

    module._style = () => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .button-form {
                width: 100%;
                height: 48px;
                border-radius: 24px;
                font-size: 14px;
                text-transform: uppercase;
                background-color: #f25a70;
                color: #fff;
                cursor: pointer;
            }
            .input-form + .button-form {
                margin-top: 45px;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }

    module.render = content => {
        module._style()

        return `<input type="submit" value="${content}" class="button-form"/>`
    }
        
    return {
        render: module.render
    }
})()