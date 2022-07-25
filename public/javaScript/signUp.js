const nombre = document.querySelector("#name");
    const email = document.querySelector("#email");
    const apellido = document.querySelector("#last-name");
    const password = document.querySelector("#password");
    const formulario = document.querySelector("#form");
    const boton = document.querySelector('#botonSubmit');
    const upload = document.querySelector('#avatar');

    function enventListeners(e) {
        nombre.addEventListener("change", nombreInput);
        apellido.addEventListener("change",apellidoInput);
        email.addEventListener("change", emailInput);
        password.addEventListener("change",passwordInput);
        boton.addEventListener("click",botonInput);
        upload.addEventListener("change",uploadInput);
    }
    
    
    const nombreInput = (e) => {
        const nombreError = document.createElement('p');
        const nombreDiv = document.querySelector("#name-div")
        if(nombre.value.length < 3 && document.getElementById('nombreError')!= undefined){
            console.log('xd')
        }
        else if(nombre.value.length < 3){
            nombreError.innerHTML = 
            "<p>El nombre debe tener mas de 2 caracteres</p>"
            nombreError.classList.add('error');
            nombreError.setAttribute('id','nombreError')
            nombreDiv.appendChild(nombreError);
        }else if(nombre.value.length >= 3 && document.getElementById('nombreError')){
            let nombreError = document.getElementById('nombreError')
            nombreDiv.removeChild(nombreError)
        }
    }
    const apellidoInput = (e) => {
        const lastNameDiv = document.querySelector("#lastNameDiv")
        if(apellido.value.length < 3 && document.getElementById('apellidoError') != undefined){
            console.log("xd")
        }
        else if(apellido.value.length < 3){
            const apellidoError = document.createElement('p')
            apellidoError.innerHTML = 
            "<p>El apellido debe tener mas de 2 caracteres</p>"
            apellidoError.classList.add('error');
            apellidoError.setAttribute('id','apellidoError')
            lastNameDiv.appendChild(apellidoError);
        }else if(apellido.value.length >= 3 && document.getElementById('apellidoError')){
            let apellidoError = document.getElementById('apellidoError')
            lastNameDiv.removeChild(apellidoError)
        }
    }
    const passwordInput = (e) => {
        const passwordDiv = document.querySelector("#passwordDiv")
        if(password.value.length < 8 && document.getElementById('passwordError') != undefined){
            console.log('continuar error')
        }
        else if(password.value.length < 8){
            const passwordError = document.createElement('p')
            passwordError.innerHTML = 
            "<p>La contraseña debe tener mas de 8 caracteres</p>"
            passwordError.classList.add('error');
            passwordError.setAttribute('id','passwordError')
            passwordDiv.appendChild(passwordError);
        }else if(password.value.length >= 8 && document.getElementById('passwordError')){
            let passwordError = document.getElementById('passwordError')
            passwordDiv.removeChild(passwordError)
        }
        console.log(e.target.value)
    }
    const emailInput = (e) => {
        const emailDiv = document.querySelector("#emailDiv")
        const mensajeMail = email.value;
        if(!mensajeMail.includes('@') && document.getElementById('emailError') != undefined){
            console.log('a')
        }
        else if(!mensajeMail.includes('@')){
            const emailError = document.createElement('p')
            emailError.innerHTML = 
            "<p>Debes ingresar un formato de email valido</p>"
            emailError.classList.add('error');
            emailError.setAttribute('id','emailError')
            emailDiv.appendChild(emailError);
        }
        else if(mensajeMail.includes('@') && document.getElementById('emailError')){
            let emailError = document.getElementById('emailError')
            EmailDiv.removeChild(emailError)
        }
        console.log(e.target.value)
    }
    const uploadInput = (e) => {
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        var filePath = upload.value;
        const fileDiv = document.querySelector("#fileDiv")
        if(!allowedExtensions.exec(filePath) && document.getElementById('uploadError') != undefined){
            console.log("continuar error")
        }
        else if(!allowedExtensions.exec(filePath)){
            const uploadError = document.createElement('p')
            uploadError.innerHTML = 
            "<p>Debes seleccionar un formato de imagen valido</p>"
            uploadError.classList.add('error');
            uploadError.setAttribute('id','uploadError')
            fileDiv.appendChild(uploadError);
        }else if(allowedExtensions.exec(filePath) && document.getElementById('uploadError')){
            let uploadError = document.getElementById('uploadError')
            fileDiv.removeChild(uploadError)
        }
    }
    const botonInput = (e) => {
        if(document.getElementById('nombreError') || document.getElementById('emailError') ||document.getElementById('passwordError') || document.getElementById('apellidoError')||document.getElementById('uploadError')){
            e.preventDefault()

        }}

    enventListeners();