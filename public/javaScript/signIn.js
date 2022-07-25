const email = document.querySelector('#usuario');
      const password = document.querySelector('#password')
      const formulario = document.querySelector("#form");
      const boton = document.querySelector('#submit')
      function enventListeners(e) {
        boton.addEventListener("click", botonInput);
        email.addEventListener("change", emailInput)
    }
    const emailInput = (e) => {
        const mensajeMail = email.value;
        const emailDiv = document.querySelector("#emailDiv")
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
            emailDiv.removeChild(emailError)
        }
    }
    const botonInput = (e) => {
      if(document.getElementById('emailError')){
        e.preventDefault();
      }
    }
    enventListeners();