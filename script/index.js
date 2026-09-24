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


function dataHoraTempoReal() {
    const data = document.querySelector(".data");
    const hora = document.querySelector(".hora");

    const agora = new Date();
    
    const diasSemana = [
        "Domingo", 
        "Segunda-feira", 
        "Terça-feira", 
        "Quarta-feira", 
        "Quinta-feira", 
        "Sexta-feira", 
        "Sábado"
    ];

    const meses  = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    let diaSemana = agora.getDay();
    let mesAno = agora.getMonth();

    let nomeDia = diasSemana[diaSemana];
    let nomeMes = meses[mesAno];

    // padStart(2, '0') garante que dias de 1 a 9 fiquem com um zero na frente
    let dia = String(agora.getDate()).padStart(2, '0');


    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');

    data.textContent = `${nomeDia} , ${dia} ${nomeMes}`;
    hora.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(dataHoraTempoReal, 1000);

dataHoraTempoReal();