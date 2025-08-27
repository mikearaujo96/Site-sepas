    // MAPEANDO DIV CONTAINER
    let containerBanners = document.querySelector('.pai');

    // ARRAY COM OS BANNERS
const arrayBanners = [
    { banner: "/src/assets/banners/Banner-1.svg", texto: "Nosso objetivo é atender a todos que a eles se dirigem,<br> independente de classe social, nacionalidade, sexo, raça, cor ou crença religiosa."},
    { banner: "/src/assets/banners/Banner-2.svg", texto: "A nobreza de nosso ato profissional está em acolher aquela pessoa por inteiro, em conhecer a sua história, em saber como chegou a esta situação e como é possível construir com ela formas de superação deste quadro.<br> (Maria Lúcia Martinelli)"},
    { banner: "/src/assets/banners/Banner-3.svg", texto: "Art. 10. É obrigação do Estado e da sociedade assegurar à pessoa idosa a liberdade, o respeito e a dignidade, como pessoa humana e sujeito de direitos civis, políticos, individuais e sociais, garantidos na Constituição e nas leis. (Redação dada pela Lei nº 14.423, de 2022)"},
]

    // CONFIGURANDO TAMANHO DA DIV ONDE FICARÁ OS BANNERS
let tamDiv = arrayBanners.length * 100
containerBanners.style.width = `${tamDiv}vw`
let conteudoContainer = ''

    // MAPEANDO CONTEUDO DO ARRAY
arrayBanners.forEach(el => {
    let conteudo = `
    <div class="filhos">
        <img src="${el.banner}" alt="imagem banner">
        <p>${el.texto}</p>
    </div>`

    conteudoContainer += conteudo 
});

    // EXIBINDO CONTEUDO NA TELA
containerBanners.innerHTML = conteudoContainer

// MOVIMENTANDO BANNER COM CLICK's
let count = 0

// 1º = 0
// 2º = -100
// 3º = -200
// em diante

document.querySelector('#avancar-banner').addEventListener('click', () => {
    count++
    if(count < arrayBanners.length){
        let multiple = count * 100
        containerBanners.style.left = `-${multiple}%`;
    }else{
        let ultimaPosicao = (arrayBanners.length - 1)
        count = ultimaPosicao
    }
})

document.querySelector('#retornar-banner').addEventListener('click', () => {
    count--
    if(count >= 0){
        let multiple = count * 100
        containerBanners.style.left = `-${multiple}%`;
    }else{
        count = 0
    }
})


    // MOVIMENTANDO BANNER AUTOMATICAMENTE


let direcao = true;
let intervaloId;

function iniciarCarrossel() {
  intervaloId = setInterval(() => {

    if (direcao) {
        let x = (arrayBanners.length - 1)

        if(count < x){
            direcao=true
            count++
        }else{
            direcao=false
        }
    } else {
        if(count > 0){
            direcao=false
            count--
        }else{
            direcao=true
        }
    }

    let multiple = count * 100;
    containerBanners.style.left = `-${multiple}%`;
  }, 5000);
}

// Inicia carrossel
iniciarCarrossel();

