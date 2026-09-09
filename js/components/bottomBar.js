function changeRoute(rotaId, botao) {
    const rotas = document.querySelectorAll(".rota");
    const botoes = document.querySelectorAll(".btn");

    //console.log(rotas)

    rotas.forEach(r => {
        r.classList.remove("active");
    });

    botoes.forEach(r => {
        r.classList.remove("active");
    });

    document.getElementById(rotaId).classList.add("active");
    botao.classList.add("active")

}