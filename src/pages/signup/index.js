(function () {
    const root = document.querySelector('#root')

    const buttonLogin = flatButton.render('Login', false)
    const buttonLogout = flatButton.render('Logout', true)
    const logoCollab = logoCollabcode.render()
    const titleCollab = titleCollabcode.render('Welcome')
    const buttonsWrapper = createButtonWrapper.render(buttonLogin, buttonLogout)
    const logoWrapper = createLogoWrapper.render(logoCollab, titleCollab)
    const formSignup = createFormSignup.render()

    root.insertAdjacentHTML('beforeend', buttonsWrapper)
    root.insertAdjacentHTML('beforeend', logoWrapper)
    root.insertAdjacentHTML('beforeend', formSignup)
})()