const sidebar = document.getElementById("sidebar");
const detalhe = document.getElementById("detalhe");

projetos.forEach(function(projeto){
    const card = document.createElement("div");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const prioridade = document.createElement("p");
    prioridade.textContent = "Prioridade: " + projeto.prioridade;

    const prazo = document.createElement("p");
    prazo.textContent = "Prazo: " + projeto.prazo;

    card.appendChild(titulo);
    card.appendChild(prioridade);
    card.appendChild(prazo);

    sidebar.appendChild(card);

    card.addEventListener("click", function() {
       detalhe.innerHTML = "";

       const tituloDetalhe = document.createElement("h2");
       tituloDetalhe.textContent = projeto.titulo;

       detalhe.appendChild(tituloDetalhe);
    });
})