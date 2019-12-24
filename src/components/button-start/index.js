const buttonStart = (function() {
    const module = {}

    /**
     * Create schema of button start
     */
    module.create = () => {
        return `
            <button class="btn-start">Start</button>
        `
    }

    return {
        create: module.create
    }
})()