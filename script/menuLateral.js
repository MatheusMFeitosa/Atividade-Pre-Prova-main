const linksMenuLateral = document.querySelectorAll(".conteudo-menu .nav-link a");
const secaoUltimasNoticias = document.querySelector(".ultimas-noticias");

linksMenuLateral.forEach(link => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault(); 

        let categoriaMenu = link.textContent;

        alternarMenu(); 

        secaoUltimasNoticias.scrollIntoView({ behavior: "smooth" });

        // Sincroniza o visual dos botões de filtro da tela
        botoesFiltro.forEach(b => b.classList.remove("ativo"));
        
        botoesFiltro.forEach(b => {
            if (b.textContent === categoriaMenu) {
                b.classList.add("ativo");
            }
        });

        noticiasFiltradas = noticiasParaGrade.filter(noticia => noticia.categoria === categoriaMenu);

        barraDeBusca.value = "";
        limiteAtualGrade = 4;
        renderizarGrade();
    });
});