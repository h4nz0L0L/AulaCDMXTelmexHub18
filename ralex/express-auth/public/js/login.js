function submitLogin (e) {
    e.preventDefault()

    let formData = $("#login-form").serialize()
    console.log(formData)
    $.post('/api/login', formData, function (res) {
        alert(res)
    })

    return false
}