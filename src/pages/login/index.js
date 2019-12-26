(function () {
    const root = document.querySelector('#root')

    const buttonLogin = flatButton.render('Login', true)
    const buttonLogout = flatButton.render('Logout', false)
    const logoCollab = logoCollabcode.render()
    const titleCollab = titleCollabcode.render('Welcome')
    const buttonsWrapper = createButtonWrapper.render(buttonLogin, buttonLogout)
    const logoWrapper = createLogoWrapper.render(logoCollab, titleCollab)
    const labelFormLogin = labelForm.render('Email')
    const inputFormLogin = inputForm.render()

    root.insertAdjacentHTML('beforeend', buttonsWrapper)
    root.insertAdjacentHTML('beforeend', logoWrapper)
    root.insertAdjacentHTML('beforeend', labelFormLogin)
    root.insertAdjacentHTML('beforeend', inputFormLogin)
})()