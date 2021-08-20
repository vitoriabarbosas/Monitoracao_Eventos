function carregaInfo(){
    //verificacao para ver se o objeto existe no localstorage
    var userSTR=localStorage.getItem("userDASH");
    if (!userSTR){
        window.location="index.html";
    }

    //entao o usuário existe
    var user=JSON.parse(userSTR); //reconverter objeto em memoria
    document.getElementById("fotoUser").innerHTML=`<img src="${user.linkFoto}" width="100%"> <br>
    <button type="button" class="btn btn-primary w-100 h-10" id="logout" onclick="logout()">Logout</button>`;
    document.getElementById("bioUser").innerHTML = `<h4> ${user.nome} </h4>
                                                    <hr> 
                                                    <b> RACF: </b> ${user.racf}<br>
                                                    <b> Email: </b> ${user.email}<br>
                                                    <b> Departamento: </b> ${user.departamento}
                                                    <p> <a class = "btn btn-primary w-100" id="Relatorio" href="eventos.html">Relatório de Eventos por Período</a></p>
                                                    
                                                    

                                                    `;


                                                }

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}