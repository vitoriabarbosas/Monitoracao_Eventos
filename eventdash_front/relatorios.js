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
                                                    <p> <a class = "btn btn-primary w-100" id="Relatorio" href="eventos.html"><b>Clique aqui para acessar o Relatório de Eventos por Período</b></a></p>
                                                    
                                                    

                                                    `;


                                                }

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}

function gerarAlarme() {
    var url = "http://localhost:8080/alarmes";

    fetch(url).then(res => res.json()).then(listaAlarmes => preencheTabela(listaAlarmes));
}

function preencheTabela(listaAlarmes){
    var strTabela = `<table class="table">
                        <thead>
                            <th> id </th>
                            <th> nome </th>
                            <th> descricao </th>
                        </thead> 
                        
                        <tbody> `;

    for (i=0; i<listaAlarmes.length; i++){
        let alarme = listaAlarmes[i];

        strTabela = strTabela + `<tr>
                                     <td> ${alarme.id} </td>
                                     <td> ${alarme.nome} </td>
                                     <td> ${alarme.descricao} </td>
                                 </tr>`; 
    }
    strTabela = strTabela + `   </tbody>
                             </table>`;
    
    document.getElementById("relatorio").innerHTML = strTabela;
}