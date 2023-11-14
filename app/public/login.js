const mensajeError = document.getElementsByClassName("error")[0]

document.getElementById("loginForm").addEventListener("submit", async(e)=> {
    e.preventDefault();
    const user = e.target.children.user.value;
    const password = e.target.children.password.value;
    const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user, password
        })
    });
    if(!res.ok){
        console.error("Error en la solicitud: ", res);
        mensajeError.classList.toggle("escondido",false);
    }
        const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})