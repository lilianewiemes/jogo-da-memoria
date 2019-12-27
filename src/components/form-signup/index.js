const createFormSignup = (function () {
    const module = {}

    module._style = () => {
        const head = document.querySelector('head')
        const style = document.createElement('style')

        style.textContent = `
            .form-signup {
                padding: 0 35px 40px;
            }
        `

        head.insertAdjacentElement('beforeend', style)
    }

    module._children = () => {
        const labelUsername = labelForm.render('Username')
        const inputUsername = inputForm.render()
    
        const labelEmail = labelForm.render('Email')
        const inputEmail = inputForm.render()
    
        const labelPassword = labelForm.render('Password')
        const inputPassword = inputForm.render()
    
        const labelConfirmPassword = labelForm.render('Confirm Password')
        const inputConfirmPassword = inputForm.render()

        const btn = createButtonForm.render('Sign Up')

        return `
            ${labelUsername}
            ${inputUsername}

            ${labelEmail}
            ${inputEmail}

            ${labelPassword}
            ${inputPassword}

            ${labelConfirmPassword}
            ${inputConfirmPassword}

            ${btn}
        `
    }

    module.render = () => {
        module._style()

        return `<form class="form-signup" action="" method="POST">${module._children()}</form>`
    }
        
    return {
        render: module.render
    }
})()