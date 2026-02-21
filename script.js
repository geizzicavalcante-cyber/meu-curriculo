document.addEventListener("DOMContentLoaded", function () {
    const botaoTopo = document.getElementById("btnTopo");

    if (botaoTopo) {
        // Mostrar botão quando rolar
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                botaoTopo.style.display = "block";
            } else {
                botaoTopo.style.display = "none";
            }
        });

        // Clique para voltar ao topo
        botaoTopo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});