let contador = 0

const destaques = [
    { evento: "Uma nova aquisição", img: "/src/assets/galeria/eventos/img-evento.jpg", title: "Termo de Fomento n. 001169/2024", paragrafh: "Termo de Fomento n. 001169/2024, pactuado entre a Secretaria de Desenvolvimento Social e a Sociedade de Ensino Profissional e Assistência Social, CNPJ sob o n° (MATRIZ) 47.296.884/0001-37 no exercício de 2024, veiculo para transporte para equipe, crianças e idosos em visitas, emergências e atividades externas. Emenda Impositiva disponibilizada pelo Deputado Estadual Simão Pedro - PT."}, 
    { evento: "Curso de Libras", img: "/src/assets/galeria/eventos/img-evento-2.png", title: "Termo de Fomento n. 027/2024/SMDET", paragrafh: "Termo de Fomento n. 027/2024/SMDET, pactuado entre a Secretaria Municipal de Desenvolvimento Econômico e Trabalho e a Sociedade de Ensino Profissional e Assistência Social, CNPJ sob o n° (MATRIZ)  47.296.884/0001-37 no exercício de  2024, curso livre de Libras. Emenda Impositiva disponibilizada pelo Vereador Dr. Adriano Santos - PT."}, 
    { evento: "Curso de Marketing Digital", img: "/src/assets/galeria/eventos/img-evento-3.png", title: "Termo de Fomento n. 027/2024/SMDET", paragrafh: "Termo de Fomento n. 027/2024/SMDET, pactuado entre a Secretaria Municipal de Desenvolvimento Econômico e Trabalho e a Sociedade de Ensino Profissional e Assistência Social, CNPJ sob o n° (MATRIZ)  47.296.884/0001-37 no exercício de  2024, curso livre de Marketing digital. Emenda Impositiva disponibilizada pelo Vereador Dr. Adriano Santos - PT."}, 
]

const novoarray = []

destaques.forEach(el => {
    let div1 = `<img id="campo-img-destaque" src="${el.img}">`
    let div2 = `<h2 id="campo-tema-destaque">${el.evento}</h2><h3 id="campo-title-destaque">${el.title}</h3><p id="campo-paragrafh-destaque">${el.paragrafh}</p>`
    let cadaelemento = {img: div1, conteudo: div2}
    novoarray.push(cadaelemento)
});

document.querySelector('.div-conteudo-destaque-1').innerHTML = novoarray[contador].img
document.querySelector('.div-conteudo-destaque-2-pt2').innerHTML = novoarray[contador].conteudo

document.querySelector('#proximoEvento').addEventListener('click',()=>{
    contador++
    if(contador < novoarray.length){
        document.querySelector('.div-conteudo-destaque-1').innerHTML = novoarray[contador].img
        document.querySelector('.div-conteudo-destaque-2-pt2').innerHTML = novoarray[contador].conteudo
    }else{
        contador = (novoarray.length - 1)
    }
});

document.querySelector('#retornarEvento').addEventListener('click',()=>{
    contador--
    if(contador >= 0){
        document.querySelector('.div-conteudo-destaque-1').innerHTML = novoarray[contador].img
        document.querySelector('.div-conteudo-destaque-2-pt2').innerHTML = novoarray[contador].conteudo
    }else{
        contador = 0
    }
});








