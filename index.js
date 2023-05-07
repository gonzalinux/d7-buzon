

document.getElementById("Accede").onclick=()=>{
    document.querySelectorAll('form').forEach(e=>e.classList.toggle('showOrNot'))
}
document.getElementById("volver").onclick=()=>{
    document.querySelectorAll('form').forEach(e=>e.classList.toggle('showOrNot'))
}
let modName = document.getElementById('modName');
let pass = document.getElementById('pass');
let nombre = document.getElementById('nombre');
let titulo = document.getElementById('titulo');
let categoria = document.getElementById('cat');
let descripcion = document.getElementById('descripcion');


document.getElementById("send-form").onsubmit= async (e)=>{
    e.preventDefault()
    let sug= new Sugerencia(nombre.value, titulo.value,categoria.value, descripcion.value)

    try{
        const response = await fetch('https://gonzalo-leon.site:2999/buzon', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sug), // body data type must match "Content-Type" header
        });
        alert("Se envió correctamente")
    }
    catch (e){
        alert("Hubo un problema al enviar, habla con Gon.")
    }
}

document.getElementById("login-form").onsubmit= async (e)=>{
    e.preventDefault()
    try{
        const response = await fetch('https://gonzalo-leon.site:2999/buzon/admin', {
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
        const token= await response.text();

        sessionStorage.setItem('authToken', token)
        window.location.href= './sugerencias/'
    }
    catch (e){
        alert("Hubo un problema al enviar, habla con Gon.")
    }
}


function Sugerencia( nombre, titulo, categoria, descripcion){
    this.nombre= nombre || 'Anónimo'
    this.titulo= titulo;
    this.categoria= categoria || 'General'
    this.descripcion = descripcion;
}