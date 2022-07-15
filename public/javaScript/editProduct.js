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
            const nombreError = document.createElement('p');
            if(nombre.value.length < 5 && document.getElementById('nombreError')!= undefined){
                console.log('xd')
            }
            else if(nombre.value.length < 3){
                nombreError.innerHTML = 
                "<p>El nombre debe tener mas de 4 caracteres</p>"
                nombreError.classList.add('error');
                nombreError.setAttribute('id','nombreError')
                formulario.appendChild(nombreError);
            }else if(nombre.value.length >= 5 && document.getElementById('nombreError')){
                let nombreError = document.getElementById('nombreError')
                formulario.removeChild(nombreError)
            }
        }
        const descripcionInput = (e) => {
            if(descripcion.value.length < 20 && document.getElementById('descripcionError') != undefined){
                console.log("xd")
            }
            else if(descripcion.value.length < 20){
                const descripcionError = document.createElement('p')
                descripcionError.innerHTML = 
                "<p>La descripcion debe tener al menos 20 caracteres</p>"
                descripcionError.classList.add('error');
                descripcionError.setAttribute('id','descripcionError')
                formulario.appendChild(descripcionError);
            }else if(descripcion.value.length >= 20 && document.getElementById('descripcionError')){
                let descripcionError = document.getElementById('descripcionError')
                formulario.removeChild(descripcionError)
            }
        }
        const uploadInput = (e) => {
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
                formulario.appendChild(uploadError);
            }else if(allowedExtensions.exec(filePath) && document.getElementById('uploadError')){
                let uploadError = document.getElementById('uploadError')
                formulario.removeChild(uploadError)
            }
        }
    
    
        const botonInput = (e) => {
            if(document.getElementById('nombreError') || document.getElementById('descripcionError') ||document.getElementById('uploadError')){
                e.preventDefault()
    
            }}
        enventListeners();