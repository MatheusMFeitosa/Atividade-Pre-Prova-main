const noticiasData = [
    {
        id: 1,
        titulo: "Telescópio espacial detecta fortes sinais de vapor d'água em exoplaneta",
        categoria: "Ciência",
        classeCategoria: "ciencia",
        autor: "Ana Souza",
        data: "21 set",
        imagem: "../media/espaco.jpg"
    },
    {
        id: 2,
        titulo: "Maior festival de música indie do mundo anuncia edição 100% em Realidade Virtual",
        categoria: "Cultura",
        classeCategoria: "cultura",
        autor: "Carlos Mendes",
        data: "22 set",
        imagem: "../media/show.jpg"
    },
    {
        id: 3,
        titulo: "Startup brasileira transforma plástico do oceano em móveis de luxo e recebe aporte",
        categoria: "Negócios",
        classeCategoria: "negocios",
        autor: "Beatriz Lima",
        data: "22 set",
        imagem: "../media/moveis.jpg"
    },
    {
        id: 4,
        titulo: "Festival de Arte Urbana Transforma Centro Histórico em Galeria a Céu Aberto",
        categoria: "Cultura",
        classeCategoria: "cultura",
        autor: "Pedro Squizzato",
        data: "24 set",
        imagem: "../media/arteUrbana.jpg"
    },
    {
        id: 5,
        titulo: "A semana de trabalho de 4 dias não é uma utopia, é uma necessidade",
        categoria: "Opinião",
        classeCategoria: "opiniao",
        autor: "Mariana Costa",
        data: "23 set",
        imagem: "../media/escritorio.jpg"
    },
    {
        id: 6,
        titulo: "Descoberta de nova espécie de dinossauro na Patagônia muda linha evolutiva",
        categoria: "Ciência",
        classeCategoria: "ciencia",
        autor: "Ana Souza",
        data: "24 set",
        imagem: "../media/fossil.jpg"
    },
    {
        id: 7,
        titulo: "Mercado de criptomoedas tem alta histórica após nova regulamentação",
        categoria: "Negócios",
        classeCategoria: "negocios",
        autor: "Beatriz Lima",
        data: "24 set",
        imagem: "../media/grafico.jpg"
    },
    {
        id: 8,
        titulo: "Nova rede social focada em áudio ganha 5 milhões de usuários em uma semana",
        categoria: "Tecnologia",
        classeCategoria: "tecnologia",
        autor: "Pedro Squizzato",
        data: "25 set",
        imagem: "../media/app.jpg"
    }
];

// RENDERIZAÇÃO DINÂMICA DAS NOTÍCIAS
const listaLaterais = document.getElementById("listaLaterais");
const gradeNoticias = document.getElementById("gradeNoticias");
const botaoCarregarMais = document.getElementById("botaoCarregarMais");

function renderizarAside() {
    listaLaterais.innerHTML = "";
    const noticiasAside = noticiasData.slice(0, 3);
    
    noticiasAside.forEach(noticia => {
        const li = document.createElement("li");
        li.classList.add("linha-noticia");
        
        // Injeta o HTML dentro da <li> com as variáveis do objeto
        li.innerHTML = `
            <a href="#">
                <h4 class="manchete">${noticia.titulo}</h4>
                <p class="tema-data">${noticia.categoria} - ${noticia.data}</p>
            </a>
        `;
        
        listaLaterais.appendChild(li);
    });
}

let limiteAtualGrade = 4; 
let noticiasParaGrade = noticiasData.slice(3); 
let noticiasFiltradas = [...noticiasParaGrade];

function renderizarGrade() {
    gradeNoticias.innerHTML = ""; 
    
    const noticiasVisiveis = noticiasFiltradas.slice(0, limiteAtualGrade);
    
    if (noticiasVisiveis.length === 0) {
        gradeNoticias.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
        botaoCarregarMais.classList.add("escondido");
        return;
    }

    noticiasVisiveis.forEach(noticia => {
        const div = document.createElement("div");
        div.classList.add("card-noticia");
        
        div.innerHTML = `
            <img class="card-imagem" src="${noticia.imagem}" alt="Imagem da notícia">
            <div class="card-conteudo">
                <span class="card-tag ${noticia.classeCategoria}">${noticia.categoria.toUpperCase()}</span>
                <h3 class="card-titulo">${noticia.titulo}</h3>
                <p class="card-meta">Por ${noticia.autor} • ${noticia.data}</p>
            </div>
        `;
        
        gradeNoticias.appendChild(div);
    });
    
    if (limiteAtualGrade >= noticiasFiltradas.length) {
        botaoCarregarMais.classList.add("escondido");
    } else {
        botaoCarregarMais.classList.remove("escondido");
    }
}

botaoCarregarMais.addEventListener("click", () => {
    limiteAtualGrade += 4; 
    renderizarGrade();
});

const botoesFiltro = document.querySelectorAll(".filtro");
const barraDeBusca = document.getElementById("barraDeBusca");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        barraDeBusca.value = "";

        const categoriaEscolhida = botao.textContent;

        if (categoriaEscolhida === "Todas") {
            noticiasFiltradas = [...noticiasParaGrade];
        } else {
            noticiasFiltradas = noticiasParaGrade.filter(noticia => noticia.categoria === categoriaEscolhida);
        }

        limiteAtualGrade = 4;
        renderizarGrade();
    });
});


barraDeBusca.addEventListener("input", (evento) => {
    const termoBuscado = evento.target.value.toLowerCase(); 

    noticiasFiltradas = noticiasParaGrade.filter(noticia => 
        noticia.titulo.toLowerCase().includes(termoBuscado)
    );

    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    botoesFiltro[0].classList.add("ativo");

    limiteAtualGrade = 4;
    renderizarGrade();
});

renderizarAside();
renderizarGrade();