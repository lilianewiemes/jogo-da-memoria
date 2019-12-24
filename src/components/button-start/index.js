const buttonStart = (function() {
    const module = {}

    /**
     * Create schema of button start
     */
    module.create = () => {
        return `
            <button class="btn-start" onClick="buttonStart.handleClick()">Start</button>
        `
    }
    
    module.handleClick = () => {
console.log('sddfvdv')
    }

    return {
        create: module.create,
        handleClick: module.handleClick
    }
})()