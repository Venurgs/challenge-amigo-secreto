//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); 
    if (nome === "") {
        alert("Por favor, insira um nome."); 
    } else {
        amigos.push(nome); 
        atualizarLista(); 
        input.value = ""; 
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }
    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
   resultado.innerHTML = `<li>Amigo sorteado: ${amigoAleatorio}</li>`;
   document.getElementById('listaAmigos').style.display = "none";}