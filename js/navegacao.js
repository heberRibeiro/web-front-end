(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[href-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[href-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[href-link]')
            .forEach(link => {
                link.href = link.attributes['href-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[href-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()