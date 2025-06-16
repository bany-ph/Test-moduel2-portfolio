const form = document.getElementById("form");

form.addEventListener("submit", function(event){

    event.preventDefault(); //// Previene el envío del formulario para poder validarlo con Javascript
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("errorMessage")
    let message2 = "can't be empty"
    if(name.trim() === ''){
      
        message.innerHTML = "Name " + message2
    }
    if(email.trim() == ''){
        message.innerHTML = "email " + message2
    }

})