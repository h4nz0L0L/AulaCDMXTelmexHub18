function agregarTelefono () {
    let telefonos = document.getElementById("telefonos")
    let numTelefonos = telefonos.children.length
    let div = document.createElement('div') 
    div.innerHTML = `<label for"telefono${numTelefonos+1}">Telefono ${numTelefonos+1}</label><input type="text" id="telefono${numTelefonos+1}">`
    telefonos.appendChild(div)   
}

// function capturarDatos() {
//     console.log()
//     let nombre = document.getElementById('nombre').value
//     let apellido = document.getElementById('apellido').value
//     let fechaNacimiento = document.getElementById('fecha-nacomiento').value
//     let calle = document.getElementById('calle').value
//     let numero = document.getElementById('numero').value

//     let nuevaTarjetita = document.createElement("div") nuevaTarjetita.innerHTML = `<h1>${nombre + ""}
// }

