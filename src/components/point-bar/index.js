const pointBar = (function() {
    const module = {}

    /**
     * Create schema of header
     */
    module.create = () => {
        return `
            <header class="point-bar">
                <span class="number">0</span>
            </header>
        `
    }

    return {
        create: module.create
    }
})()