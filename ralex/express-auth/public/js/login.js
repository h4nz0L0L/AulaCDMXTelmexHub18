function submitLogin (e) {
    e.preventDefault()

    let formData = $("#login-form").serialize()
    console.log(formData)
    $.post('/api/users', formData, function (res) {
        console.log(res)
    })

    return false
}