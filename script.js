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
    "Backtracking",
    "Grafos"
];

const textos = [
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 2 (noções de algoritmos e recursividade)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=hEHAKk-bs54&list=PLqJK4Oyr5WSg3ciuTxJXYkjTPvb_LjYZP'
    >Curso em Vídeo - Recursividade</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://visualgo.net/en/recursion'
    >Visualgo</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 6 (Árvores) – primeira parte<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=dcOCsxiuKeU&list=PLqJK4Oyr5WShBuC5rqt9I0fMVNnaVTpeo'
    >Árvore Binária em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.cs.usfca.edu/~galles/visualization/AVLtree.html'
    >Simulador de Árvore</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 6 (Árvores de busca binária)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=eJ1-uwEjrc0&list=PLqJK4Oyr5WSii6sFzwC6xTuhfALuJVEKT'
    >Árvore Binária de Busca em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.cs.usfca.edu/~galles/visualization/BST.html'
    >Simulador de Árvore Binária de Busca</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 6 (Árvores balanceadas)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=5aBQZdvoM6w&list=PLqJK4Oyr5WSgUXgpurvc0TBQx_byFHAIJ'
    >Árvore AVL em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.cs.usfca.edu/~galles/visualization/AVLtree.html'
    >Simulador de Árvore AVL</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 7 (Listas de prioridade – Heap)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=-nq88TldUX0'
    >Heap em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.cs.usfca.edu/~galles/visualization/Heap.html'
    >Simulador de Heap</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 7 (Tabelas de dispersão)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=S-GP1UlmstU'
    >Hashing em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.cs.usfca.edu/~galles/visualization/ClosedHash.html'
    >Simulador de Hashing</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Exemplos de recursividade e busca em Árvores/Grafos<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=6e0cZZyod50'
    >Backtracking em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://www.101computing.net/backtracking-algorithm-sudoku-solver/'
    >Exemplo Sudoku em Python</a>`,
    `📚 Livro: Introdução a estruturas de dados: com técnicas de programação em C.<br>
    Capítulo 8 (Grafos e algoritmos associados)<br><br>
    🎥 Vídeo: <a target='_blank'
    href='https://www.youtube.com/watch?v=fTEL6pMMC-w'
    >Grafos em C</a><br><br>
    🌐 Site: <a target='_blank' 
    href='https://graphonline.top/pt/'
    >Simulador de Grafos</a>`,
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