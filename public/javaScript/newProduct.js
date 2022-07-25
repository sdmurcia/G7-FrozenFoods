const nombre = document.querySelector("#productName");
        const descripcion = document.querySelector  ("#productDescription");
        const formulario = document.querySelector("#form");
        const boton = document.querySelector('#botonSubmit');
        const upload = document.querySelector('#imageProduct');

    function enventListeners(e) {
        nombre.addEventListener("change", nombreInput);
        descripcion.addEventListener("change",descripcionInput);
        boton.addEventListener("click",botonInput);
        upload.addEventListener("change",uploadInput);
    }
    const nombreInput = (e) => {
        const nombreDiv = document.querySelector("#nombreDiv")
        const nombreError = document.createElement('p');
        if(nombre.value.length < 5 && document.getElementById('nombreError')!= undefined){
            console.log('xd')
        }
        else if(nombre.value.length < 3){
            nombreError.innerHTML = 
            "<p>El nombre debe tener mas de 4 caracteres</p>"
            nombreError.classList.add('error');
            nombreError.setAttribute('id','nombreError')
            nombreDiv.appendChild(nombreError);
        }else if(nombre.value.length >= 5 && document.getElementById('nombreError')){
            let nombreError = document.getElementById('nombreError')
            nombreDiv.removeChild(nombreError)
        }
    }
    const descripcionInput = (e) => {
        const descriptionDiv = docment.querySelector("#descriptionDiv")
        if(descripcion.value.length < 20 && document.getElementById('descripcionDiv') != undefined){
            console.log("xd")
        }
        else if(descripcion.value.length < 20){
            const descripcionError = document.createElement('p')
            descripcionError.innerHTML = 
            "<p>La descripcion debe tener al menos 20 caracteres</p>"
            descripcionError.classList.add('error');
            descripcionError.setAttribute('id','descripcionError')
            descriptionDiv.appendChild(descripcionError);
        }else if(descripcion.value.length >= 20 && document.getElementById('descripcionError')){
            let descripcionError = document.getElementById('descripcionError')
            descriptionDiv.removeChild(descripcionError)
        }
    }
    const uploadInput = (e) => {
        const uploadDiv = document.querySelector("#uploadDiv")
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        var filePath = upload.value;
        if(!allowedExtensions.exec(filePath) && document.getElementById('uploadError') != undefined){
            console.log("continuar error")
        }
        else if(!allowedExtensions.exec(filePath)){
            const uploadError = document.createElement('p')
            uploadError.innerHTML = 
            "<p>Debes seleccionar un formato de imagen valido</p>"
            uploadError.classList.add('error');
            uploadError.setAttribute('id','uploadError')
            uploadDiv.appendChild(uploadError);
        }else if(allowedExtensions.exec(filePath) && document.getElementById('uploadError')){
            let uploadError = document.getElementById('uploadError')
            up.removeChild(uploadError)
        }
    }


    const botonInput = (e) => {
        if(document.getElementById('nombreError') || document.getElementById('descripcionError') ||document.getElementById('uploadError')){
            e.preventDefault()

        }}
    enventListeners();