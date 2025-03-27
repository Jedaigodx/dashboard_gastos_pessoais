
document.getElementById("formgastos").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let descricao = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    let item = document.createElement("li");
    item.textContent = `${descricao}: R$ ${valor}`;
    
    document.getElementById("listagasto").appendChild(item);

    // Limpar campos
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
});
