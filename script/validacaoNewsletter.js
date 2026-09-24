const formNewsletter = document.getElementById("formNewsletter");
const emailNewsletter = document.getElementById("emailNewsletter");
const mensagemNewsletter = document.getElementById("mensagemNewsletter");

formNewsletter.addEventListener("submit", (evento) => {
    evento.preventDefault(); 

    const email = emailNewsletter.value;
    // Regex para validar e-mail (texto@texto.com)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (regexEmail.test(email)) {
        mensagemNewsletter.textContent = "Inscrição realizada";
        mensagemNewsletter.style.color = "var(--ciencia)";
        emailNewsletter.value = "";
    } else {
        mensagemNewsletter.textContent = "Por favor, insira um e-mail válido.";
        mensagemNewsletter.style.color = "var(--signal)";
    }
});