let contadorUnidades = 0

const unidades = [
    { tema: "Centros para Crianças e Adolescentes", titulo: "CCA Parque Paulistano", paragrafo: "Localizados na Rua Santa Rosa de Lima,702 – Parque Paulistano – SP, desenvolvemos atividades com crianças e adolescentes de 06 a 14 anos e onze meses, tendo por foco a constituição de espaço de convivência, a partir dos interesses, demandas e potencialidades dessa faixa etária. As intervenções devem ser pautadas em experiências lúdicas, culturais e esportivas como formas de expressão, interação, aprendizagem, sociabilidade e proteção social. Deve atender crianças e adolescentes com deficiência, retiradas do trabalho infantil e/ou submetidas a outras violações de direitos, com atividades que contribuam para resignificar vivências de isolamento, bem como propiciar experiências favorecedoras do desenvolvimento de sociabilidades e prevenção de situações de risco social.", span: "veja nossa redes", instagram: "https://www.instagram.com/ccaparquepaulistano/", facebook: "https://www.facebook.com/ccaparquepaulistano", img: "/src/assets/galeria/servicos/unidade-1.svg" },
    { tema: "Centros para Crianças e Adolescentes", titulo: "CCA Vila Itaim", paragrafo: "Estamos localizados na rua Salinas de Mossoró, 197 - Vila Itaim – SP, desenvolvemos atividades com crianças e adolescentes de 06 a 14 anos e onze meses, tendo por foco a constituição de espaço de convivência, a partir dos interesses, demandas e potencialidades dessa faixa etária. As intervenções devem ser pautadas em experiências lúdicas, culturais e esportivas como formas de expressão, interação, aprendizagem, sociabilidade e proteção social. Deve atender crianças e adolescentes com deficiência, retiradas do trabalho infantil e/ou submetidas a outras violações de direitos, com atividades que contribuam para resignificar vivências de isolamento, bem como propiciar experiências favorecedoras do desenvolvimento de sociabilidades e prevenção de situações de risco social.", span: "veja nossa redes", instagram: "https://www.instagram.com/ccavilaitaim/", facebook: "https://www.facebook.com/ccavilaitaim.sepas", img: "/src/assets/galeria/servicos/unidade-2.svg" },
    { tema: "Centros de Educação Infantil", titulo: "CEI Santa Rosa de Lima", paragrafo: "CEI Santa Rosa de Lima está localizado no endereço: Rua Santa Rosa de Lima, 701 A - Parque Paulistano – SP, temos capacidade de atendimento: 174 crianças, na faixa Etária dos de 6 meses a 4 anos e 11 meses. A Unidade Educacional CRECHE CEI Santa Rosa de Lima – SEPAS tem como proposta constituir e propiciar espaços coletivos e privilegiados de vivência da infância de 01 (um) a 04 (quatro) anos que contribuem para a construção da identidade social e cultural das crianças, fortalecendo caráter integrado do cuidar e do educar, além de propiciar a criança permanência e garantia á educação, saúde preventiva, alimentação adequada, proteção, higiene e lazer, criando condições para o desenvolvimento integral da criança, considerando as possibilidades de aprendizagem que apresentam nas diferentes faixas etárias. Com sua capacidade de atendimento para 174 crianças.", span: "veja nossa redes", instagram: "https://www.instagram.com/matrizsepas/", facebook: "https://www.facebook.com/profile.php?id=100057547294898", img: "/src/assets/galeria/servicos/unidade-3.svg" },
    { tema: "Núcleo de Convivência de Idosos", titulo: "NCI Irmã Suzanne Cros", paragrafo: "Estamos localizados na Rua Santa Rosa de Lima, 701 a – São Paulo – SP. O NCI Irmã Suzanne Cros – SEPAS é um serviço de proteção social, convivência e fortalecimento de vínculos aos idosos com idade igual ou superior a 60 anos, em situação de vulnerabilidade e risco pessoal e social. Oferece atividades socioeducativas planejadas, baseadas nas necessidades, interesses e motivações dos idosos, conduzindo na construção e reconstrução de suas histórias e vivências individuais e coletivas, na família e no território. Oferece ainda, por meio da busca ativa, a identificação e o acompanhamento de idosos e suas famílias no domicílio Idosos de ambos os sexos, com idade igual ou superior a 60 anos, em situação de vulnerabilidade social com propriedade para: Os beneficiários do Benefício de Prestação Continuada, Os oriundos de famílias beneficiarias de Programas de Transferência de Renda, Os que apresenta vivência de isolamentos por ausência de acesso serviços e oportunidades de convívio familiar e comunitário e cujas necessidades, interesses e disponibilidade que indiquem a inclusão no serviço.", span: "veja nossa redes", instagram: "https://www.instagram.com/nciirmasuzannecros/", facebook: "https://www.facebook.com/profile.php?id=100010222411027", img: "/src/assets/galeria/servicos/unidade-4.svg" },
    { tema: "Centro Dia para o Idoso", titulo: "CDI Dom Fernando Legal", paragrafo: "Estamos localizados na Rua Ana Gertrudes Vieira, 120 A – São Miguel Paulista – SP . O Centro dia para idosos - SEPAS é um serviço destinado à atenção diurna de pessoas idosas com 60 anos ou mais, de ambos os sexos, prioritariamente beneficiárias do Benefício de Prestação Continuada – BPC e em situação de vulnerabilidade e risco social incluídas no Cadastro Único para Programas Sociais – Cad. Único. Idosos com diferentes necessidades e graus de dependência física ou cognitiva, que devido a sua condição necessitam de uma equipe multidisciplinar para prestar serviço de proteção social especial e de cuidados pessoais, sendo fortalecimento de vínculos, autonomia e inclusão social, por meio de ações de acolhida, escuta, informação e orientação. Caracteriza-se por ser um espaço para atender idosos que possuem limitações para realização das atividades de vida diária (AVD) que convivem com suas famílias, porém não dispõem de atendimento de tempo integral no domicílio. Proporciona o atendimento das necessidades básicas, mantém o idoso junto à família, reforça o aspecto de segurança, autonomia, bem-estar e a própria socialização do idoso.", span: "veja nossa redes", instagram: "https://www.instagram.com/cdidomfernando/", facebook: "https://www.facebook.com/cdifernandolegal", img: "/src/assets/galeria/servicos/unidade-5.svg" },
]

let nossasUnidades = []

unidades.forEach(el => {
    let arrayprovisorio = `<section class="nova-unidade-section"><div class="container-nova-unidade"><div class="div-conteudo-nova-unidade-1"><h3>${el.tema}</h3><h2>${el.titulo}</h2><div><span class="linha1"></span><span class="linha2"></span></div><p>${el.paragrafo}</p><br><h3>${el.span}</h3><br><div><a href="${el.instagram}" target="_blank"><img src="/src/assets/icons/icon-instagram.svg" alt="icone instagram"></a><a href="${el.facebook}" target="_blank"><img src="/src/assets/icons/icon-facebook.svg" alt="icone facebook"></a></div></div><div class="div-conteudo-nova-unidade-2"><img class="img-nova-unidade-1" src="${el.img}"alt="imagem da unidade"></div></div></section>`
    nossasUnidades.push(arrayprovisorio)
})

document.querySelector('#sectionServicos').innerHTML = nossasUnidades[contadorUnidades];

document.querySelector('#retornar-unidade').addEventListener('click', () => {
    contadorUnidades--
    if (contadorUnidades >= 0) {
        document.querySelector('#sectionServicos').innerHTML = nossasUnidades[contadorUnidades];
        document.querySelector('#avancar-unidade').style.opacity = '1'
    } else {
        contadorUnidades = 0
        document.querySelector('#retornar-unidade').style.opacity = '0.5'
    }
})

document.querySelector('#avancar-unidade').addEventListener('click', () => {
    contadorUnidades++
    if (contadorUnidades < nossasUnidades.length) {
        document.querySelector('#sectionServicos').innerHTML = nossasUnidades[contadorUnidades];
        document.querySelector('#retornar-unidade').style.opacity = '1'
    } else {
        contadorUnidades = (nossasUnidades.length - 1)
        document.querySelector('#avancar-unidade').style.opacity = '0.5'
    }
})
