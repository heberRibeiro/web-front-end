(function () {
    const navBar = document.querySelector('[hiddenVisible]')

    function navegarViaAjax(hash) {
        if (!hash) return

        // if (hash == '#/paginas/bemVindo') {
        //     document.querySelector('[hiddenVisible]').style.visibility = 'hidden'
        // } else {
        //     document.querySelector('[hiddenVisible]').style.visibility = 'visible'
        // }

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

   
    navBar.onmouseenter = e => {
        e.preventDefault()
        if (location.hash == '' || '#/paginas/bemVindo') {
            console.log('entrou')
        //     const html = document.getElementsByTagName('html')
        //     console.log(...Array.from(html))
        //    Array.from(html)[0].style.top = '0.0rem'
        //    navBar.style.opacity = '1.0'
        navBar.classList.toggle("myToggle")
           
           
            
        }
    }

    navBar.onmouseleave = e => {
        e.preventDefault()
        if (location.hash == '' || '#/paginas/bemVindo') {
            console.log('saiu')
            
        }
    }

    navegacaoInicial()
    window.onhashchange = e => navegarViaAjax(location.hash)
})()