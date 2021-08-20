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