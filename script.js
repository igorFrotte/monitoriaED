const contentBox = document.getElementById("contentBox");
const grid = document.getElementById("grid");
let activeTopic = null; 

const topics = [
    "Recursividade",
    "Árvore Binária",
    "Árvore Binária de Busca",
    "Árvore AVL",
    "Heap",
    "Hashing",
    "Estruturas Genéricas",
    "Tipo Abstrato de Dado",
    "Backtracking",
    "Grafos"
];

const textos = [
    "Conteúdo do Tópico 1. Aqui você descreve brevemente o assunto.",
    "Conteúdo do Tópico 2. Explicação resumida e clara.",
    "Conteúdo do Tópico 3. Detalhes importantes sobre o tema.",
    "Conteúdo do Tópico 4. Mais informações sobre este tópico.",
    "Conteúdo do Tópico 5. Texto explicativo aqui.",
    "Conteúdo do Tópico 6. Explicação resumida e clara.",
    "Conteúdo do Tópico 7. Detalhes importantes sobre o tema.",
    "Conteúdo do Tópico 8. Mais informações sobre este tópico.",
    "Conteúdo do Tópico 9. Texto explicativo aqui.",
    "Conteúdo do Tópico 10. Conclusões ou dicas finais."
];

for(let i=0; i<topics.length; i++)
    grid.innerHTML = grid.innerHTML + `<div class="card" onclick="toggleContent(${i})">${topics[i]}</div>`;

function toggleContent(num) {
    // se clicar no mesmo card já ativo → fecha
    if (activeTopic === num) {
    contentBox.classList.remove("active");
    activeTopic = null;
    return;
    }

    // atualiza conteúdo
    contentBox.innerHTML = `<h2>${topics[num]}</h2><p>${textos[num]}</p>`;
    contentBox.classList.add("active");
    activeTopic = num;
}

// fecha ao clicar fora do container e dos cards
document.addEventListener("click", function(event) {
    const isClickInside = contentBox.contains(event.target) || event.target.classList.contains("card");
    if (!isClickInside) {
    contentBox.classList.remove("active");
    activeTopic = null;
    }
});