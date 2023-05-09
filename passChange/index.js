let token =sessionStorage.getItem('authToken')
if(!token)
    window.location.href='../';

let modName = document.getElementById('modName');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');

document.getElementById("login-form").onsubmit= async (e)=>{
    e.preventDefault()
    if(pass.value !== pass2.value)
        return alert("No coinciden")

    try{
        const response = await fetch('https://gonzalo-leon.site:2999/buzon/Admin/newPass', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:modName.value,pass:pass.value }), // body data type must match "Content-Type" header
        });


        if(response.status!==200){
            return alert("Fallo de autentificacion");
        }
        alert("Cambiada correctamente")
        window.location.href = "../"
    }
    catch (e){
        alert("Hubo un problema al enviar, habla con Gon.")
    }
}