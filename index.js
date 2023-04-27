// import fetch from 'node-fetch'
const API = "https://api.github.com/users/andrea1718gomez"

const fetchData = async (url) => {
    try {
        let opcion = {
            "headers":
            {
                "Authorization": "token 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"
            }
        }
        let response = await fetch(url, opcion);
        let data = await response.json();
        let repos = await fetch(data.repos_url, opcion);
        let reponseRepos = await repos.json();
        console.log(reponseRepos);
        dibujarProyectos(reponseRepos)
    } catch (error) {
        console.log(error);
    }
}

fetchData(API);

const container = document.querySelector("#container")

const dibujarProyectos = (results) => {

    let proyectosAcumulados = "";

    for (i = 0; i < results.length; i++) {

        let proyecto = `
                    <div class="card gap-3 my-3 border-5 border " style="width: 18rem; margin-top:20rem">
                        <img src="./img/figura.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h2>${results[i].name}</h2>
                        <p class="card-text">Descripcion: ${results[i].description}</p>
                        <p>Fecha: ${results[i].created_at}</p>
                        <p> Lenguage: ${results[i].language}
                        </div>
                   </div>
       
    `

        proyectosAcumulados += proyecto

    } 

    container.innerHTML = proyectosAcumulados;
}
