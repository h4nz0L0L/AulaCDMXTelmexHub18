function submitBlog (e) {
    e.preventDefault()
    let formData = $("#blog-form").serialize()
    console.log(formData)
    $.post('/blog', formData, function (res) {
        console.log(res)
        window.location.href = `/blog/${res.ops[0].num}`
    })
    return false
}