function gerarRelatorio(){
    var inicio=document.getElementById("txtDataIni").value;
    var dtFim=document.getElementById("txtDataFim").value;

    var url = "http://localhost:8080/eventos?ini="+inicio+"&fim="+dtFim;

    fetch(url).then(res => res.json()).then(listaEventos => preencheTabela(listaEventos));
}

function preencheTabela(listaEventos){
    var strTabela=`<table class = "table">
                    <thead>
                        <th class="text-center"> numSeq </th>
                        <th class="text-center"> Data </th>
                        <th class="text-center"> Alarme </th>
                        <th class="text-center"> Hostname </th>
                        <th class="text-center"> IP </th>
                        <th class="text-center"> Descrição </th>
                    </thead>
                    
                    <tbody>`;

    for(i=0;i<listaEventos.length;i++){
        let evento = listaEventos[i]; 
        strTabela = strTabela + `<tr>
                                    <td class="text-center">${evento.numSeq}
                                    <td class="text-center">${evento.dataEvento}
                                    <td class="text-center">${evento.alarme.nome}
                                    <td class="text-center">${evento.equipamento.hostname}
                                    <td class="text-center">${evento.equipamento.ipaddr}
                                    <td class="text-center">${evento.alarme.descricao}
                                </tr>`;
    }      
    
    strTabela = strTabela + `   </tbody>
                                </table>`;

    document.getElementById("relatorio").innerHTML=strTabela;
}
