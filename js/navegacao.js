(function () {
    const navBar = document.querySelector('[hiddenVisible]')

    function navegarViaAjax(hash) {
        if (!hash) return

        const destino = document.querySelector('[href-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            navegarViaAjax('#/paginas/bemVindo')
        }
    }

    navegacaoInicial()
    window.onhashchange = e => navegarViaAjax(location.hash)
})()