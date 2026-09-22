const botaoMenu = document.getElementById("botaoMenu");
const listaMenu = document.getElementById("listaMenu");
const overlay = document.getElementById("overlay");
const corpoSite = document.body;

function alternarMenu() {
    botaoMenu.classList.toggle('ativo');
    listaMenu.classList.toggle('ativo');
    overlay.classList.toggle('ativo'); 
    corpoSite.classList.toggle('travado'); 
}

botaoMenu.addEventListener("click", alternarMenu);

// para que o usuario clique em qualquer lugar e saia do menu tambem
overlay.addEventListener("click", alternarMenu);


// function mundarNumeroNoticia() {
//     const numeroOutrasNoticias = document.querySelectorAll(".linha-noticia");

//     for (let i = 0; i < numeroOutrasNoticias.length; i++) {
//         const numero = numeroOutrasNoticias[i];

//         numero.style.setProperty("--texto-before", `"${i}"`);
        
//     }
// }

// mundarNumeroNoticia();