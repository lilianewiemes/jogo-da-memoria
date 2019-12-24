const gameButton = (function() {
    const module = {}

    /**
     * Create schema of button
     */
    module.create = (content) => `
        <button class="game-btn">${content}</button>
    `

    return {
        create: module.create
    }
})()