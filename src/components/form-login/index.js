const createFormLogin = (function () {
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
        const labelUsername = labelForm.render("Username or e-mail")
        const inputUsername = inputForm.render({ placeholder: "example@mail.com" })
    
        const labelPassword = labelForm.render("Password")
        const inputPassword = inputForm.render({ placeholder: "********", type: "password" })

        const recoverPwd = recoverPassword.render({ href: "#", content: "Forget password?" })

        const btn = createButtonForm.render("Login")

        return `
            ${labelUsername}
            ${inputUsername}

            ${labelPassword}
            ${inputPassword}

            ${recoverPwd}

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