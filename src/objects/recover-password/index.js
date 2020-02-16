const recoverPassword = (function () {
    const module = {}

    module._style = () => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .recover-pwd {
                display: block;
                color: #3a4042;
                font-size: 14px;
                opacity: 0.7;
                text-decoration: none;
                margin: 40px 0 60px 0;
                text-align: right;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }

    module.render = ({ href, content }) => {
        module._style()

        return `
            <a class="recover-pwd" href="${href}">${content}</a>
        `
    }
        
    return {
        render: module.render
    }
})()