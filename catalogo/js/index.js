function toggleTheme() {
    // 1. Alterna a classe "light-mode" no body
    document.body.classList.toggle("light-mode");

    // 2. Salva a preferência no navegador (Local Storage)
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// 3. Verifica se o usuário já tinha escolhido um tema antes de carregar a página
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const linksPerfis = document.querySelectorAll('.profiles_list a');

    linksPerfis.forEach(link => {
        link.addEventListener('click', function(event) {
            // Captura o nome dentro do figcaption
            const nomeSelecionado = this.querySelector('figcaption').innerText;
            const imagemSelecionada = this.querySelector('img').getAttribute('src');

            // SALVA NO NAVEGADOR
            localStorage.setItem('perfilAtivoNome', nomeSelecionado);
            localStorage.setItem('perfilAtivoImagem', imagemSelecionada);
            
            // Log para você testar no console (F12)
            console.log("Perfil salvo:", nomeSelecionado);
        });
    });
});
