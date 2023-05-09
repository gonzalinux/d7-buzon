let token =sessionStorage.getItem('authToken')
if(!token)
    window.location.href='../';
let container = document.getElementById('container')
async function fillCosas(){
    container.innerHTML='';
    const response = await fetch('https://gonzalo-leon.site:2999/buzon/admin', {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });

    if(response.status!==200){
        console.log(response.status)
        alert("Fallo de autentificacion");
        window.location.href='../';
        return

    }
    const cosos = await response.json();
    for(let coso of cosos){
    container.innerHTML += `
    <div class="sugerencia">
        <div class="topRow">
            <h3 class="Nombre">Nombre: <b>${coso.nombre}</b></h3>
            <h3 class="categoria">Categoría: <b>${coso.categoria}</b></h3>
            <h5 class="ip">IP: <b>${coso.ip}</b></h5>

        </div>
        <div class="secondRow">
            <h2 class="titulo">Titulo: <b>${coso.titulo}</b></h2>
            <h3 class="fecha">${coso.date}</h3>
        </div>
        <p class="descripcion">${coso.descripcion}</p>
    </div>
    `


    }

}
fillCosas();
