const flatButton = (function () {
    const module = {}

    module._id = 0

    /**
     * Create style in the same page to simulate how the frameworks work
     */
    module._style = (active) => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .flat-button-${module._id} {
                display: inline-flex;
                justify-content: center;
                background-color: ${active ? "#f25a70" : "#eae6da"};
                color: ${active ? "#fff" : "#fffcee"};
                font-size: 24px;
                font-weight: bold;
                width: 50%;
                height: 176px;
                border: none;
                text-transform: uppercase;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }
    

    module.render = (content, active) => {
        module._id++
        module._style(active)

        return `
            <button class="flat-button-${module._id}">${content}</button>
        `
    }
    
    return {
        render: module.render
    }
})()