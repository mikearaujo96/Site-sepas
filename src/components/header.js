const menuNavegacao = document.querySelector('#menu-navegacao');



menuNavegacao.innerHTML =
    `
        <div>

            <div class="div-logo">
                <a href="https://sepas.org.br/">
                    <img src="/src/assets/logo/logo sepas.svg" alt="logo oficial sepas">
                </a>
            </div>

            <div class="div-nav">
                <nav>
                    <ul id="listaItens" class="itensFechado">
                        <li>
                            <a id="cliqueMobile1" href="https://sepas.org.br/">Home</a>
                        </li>
                        <li>
                            <a id="cliqueMobile2" onclick="chamou(this)" href="#sectionEventos">Eventos</a>
                        </li>
                        <li>
                            <a id="cliqueMobile3" onclick="chamou(this)" href="#sectionQuemSomos">Quem Somos</a>
                        </li>
                        <li>
                            <a id="cliqueMobile4" onclick="chamou(this)" href="#sectionServicos">Serviços</a>
                        </li>
                        <li>
                            <a id="cliqueMobile5" onclick="chamou(this)" href="#sectionNossosParceiros">Nossos Parceiros</a>
                        </li>
                        <li>
                            <a id="cliqueMobile6" onclick="chamou(this)" href="#sectionContato">Contato</a>
                        </li>
                        <li>
                            <a id="cliqueMobile7" onclick="chamou(this)" href="https://transparencia.sepas.org.br/">Portal Transparência</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="menu-mobile" class="nav-hamburguer-fechado">
                <span class="span1"></span>
                <span class="span2"></span>
                <span class="span2"></span>
            </div>

            <div class="div-doacoes">
                <a href="https://transparencia.sepas.org.br/doacao" onclick="chamou(this)">Doações</a>
            </div>


        </div>

`




let itens = document.querySelectorAll('#listaItens a')
function chamou(i){
    itens.forEach(el => {
        el.classList.remove('menu-selected')
    })
    i.classList.add('menu-selected')
}    

const links = document.querySelectorAll('#listaItens a');
const cleanUrl = window.location.href.split('#')[0]; // Remove o hash

links.forEach(link => {
  const linkHref = link.href.split('/src')[0]; // Também remove hash do href
  if (cleanUrl === linkHref) {
    link.classList.add('menu-selected');
  }
});
