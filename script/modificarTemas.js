const botaoTema = document.querySelector(".botao-mudar-tema");
const iconeTema = botaoTema.querySelector("i");
const html = document.documentElement;

// Verifica a preferência do sistema operacional do usuário
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefereEscuro) {
    html.setAttribute("data-theme", "dark");
    iconeTema.classList.replace("fa-cloud-moon", "fa-sun");
    botaoTema.innerHTML = `<i class="fa-solid fa-sun"></i>Claro`;
}

botaoTema.addEventListener("click", () => {
    const temaAtual = html.getAttribute("data-theme");
    
    if (temaAtual === "dark") {
        html.removeAttribute("data-theme");
        botaoTema.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>Escuro`;
    } else {
        html.setAttribute("data-theme", "dark");
        botaoTema.innerHTML = `<i class="fa-solid fa-sun"></i>Claro`;
    }
});