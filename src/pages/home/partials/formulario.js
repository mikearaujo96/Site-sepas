const formulario = document.getElementById("fomulario-site");
let btn_envio_formulario = document.getElementById("btn-envio-formulario");
let campo_nome = document.getElementById("campo-nome");
let campo_email = document.getElementById("campo-email");
let campo_telefone = document.getElementById("campo-telefone");
let campo_assunto = document.getElementById("campo-assunto");
let aviso_form = document.querySelector(".aviso-formulario-enviado");

btn_envio_formulario.addEventListener("click", () => {

    if (valid_nome() == false || valid_email() == false || valid_telefone() == false || valid_assunto() == false) {
        event.preventDefault()
    } else {
        aviso_form.style.display = "flex"
        return true
    }
});


function valid_nome() {
    if (campo_nome.value.length !== 0) {
        return true
    } else {
        alert("Por favor, insira um nome válido.");
        return false
    }
}
function valid_email() {
    if (campo_email.value.length !== 0) {
        return true
    } else {
        alert("Por favor, insira um e-mail válido.");
        return false
    }
}
function valid_telefone() {
    if (campo_telefone.value.trim() !== "") {
        let telefoneSemFormatacao = campo_telefone.value.replace(/\D/g, '');

        if (telefoneSemFormatacao.length === 11) {
            let telefoneFormatado = telefoneSemFormatacao.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            campo_telefone.value = telefoneFormatado;
            return true;
        } else {
            alert("Por favor, insira um número de telefone válido.");
            campo_telefone.value = "";
            campo_telefone.focus();
            return false;
        }
    }
    alert("Por favor, insira um número de telefone válido.");
    return false;
}

campo_telefone.addEventListener('input',(e)=>{
    let valor = e.target.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');
  
    // Aplica formatação
    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (valor.length > 5) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      valor = valor.replace(/^(\d*)/, '($1');
    }
    e.target.value = valor;
})

function valid_assunto() {
    if (campo_assunto.value.length !== 0) {
        return true
    } else {
        alert("Por favor, insira um assunto em seu formulário.");
        return false
    }
}