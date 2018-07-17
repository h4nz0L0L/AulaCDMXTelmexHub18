function submitRegister (e) {
    e.preventDefault()
    let password = $("#password").val()
    let password2 = $("#c-password").val()
    if (password === password2) {

        let formData = $("#register-form").serialize()
        console.log(formData)
        $.post('/api/users', formData, function (res) {
            console.log(res)
        })
    } else {
        $("#password").val('')
        $("#c-password").val('')
        alert("Los passwords no coinciden")
    }
    return false
}