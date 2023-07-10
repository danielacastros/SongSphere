document.addEventListener("DOMContentLoaded", function () {

    var btnCadastrarUsuario = document.getElementById("btnCadastrarUsuario");

    btnCadastrarUsuario.addEventListener("click", function () {
        gravarUsuario();
    })
})

function gravarUsuario() {
    limparErros();
    console.log("entrei aqui")
    let listaErros = [];

    let iptNome = document.getElementById("inputNome");
    let iptEmail = document.getElementById("inputEmail");
    let iptSenha = document.getElementById("inputSenha");
    let iptConfSenha = document.getElementById("inputConfSenha");
    let iptCelular = document.getElementById("inputCelular");
    let iptNascimento = document.getElementById("inputNascimento");
    let iptEndereco = document.getElementById("inputEndereco");
    let iptCidade = document.getElementById("inputCidade");
    let selEstado = document.getElementById("inputEstado");
    let iptCEP = document.getElementById("inputCEP");

    let campoMsg = document.getElementById("divMsg");
    let msgFinal = document.getElementById("msgFinal");

    if (iptNome.value == null || iptNome.value == undefined || iptNome.value == "") {
        listaErros.push("inputNome");
    }

    if (iptEmail.value == null || iptEmail.value == undefined || iptEmail.value == "") {
        listaErros.push("inputEmail");
    }

    if (iptSenha.value == null || iptSenha.value == undefined || iptSenha.value == "") {
        listaErros.push("inputSenha");
    }

    if (iptConfSenha.value == null || iptConfSenha.value == undefined || iptConfSenha.value == "") {
        listaErros.push("inputConfSenha");
    }

    if (iptSenha.value != iptConfSenha.value) {
        console.log("As senhas digitadas são diferentes");
        listaErros.push("inputSenha");
        listaErros.push("inputConfSenha");
    }

    if (iptCelular.value == null || iptCelular.value == undefined || iptCelular.value == "") {
        listaErros.push("inputCelular");
    }

    if (iptNascimento.value == null || iptNascimento.value == undefined || iptNascimento.value == "") {
        listaErros.push("inputNascimento");
    }

    if (iptEndereco.value == null || iptEndereco.value == undefined || iptEndereco.value == "") {
        listaErros.push("inputEndereco");
    }

    if (iptCidade.value == null || iptCidade.value == undefined || iptCidade.value == "") {
        listaErros.push("inputCidade");
    }

    if (selEstado.value == 0) {
        listaErros.push("inputEstado");
    }

    if (iptCEP.value == null || iptCEP.value == undefined || iptCEP.value == "") {
        listaErros.push("inputCEP");
    }
    if (listaErros.length == 0) {

        var data = {
            nome: iptNome.value,
            email: iptEmail.value,
            senha: iptSenha.value,
            confSenha: iptConfSenha.value,
            celular: iptCelular.value,
            nascimento: iptNascimento.value,
            endereco: iptEndereco.value,
            cidade: iptCidade.value,
            estado: selEstado.value,
            cep: iptCEP.value
        };

        fetch('/cadastro/cadastrar', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(r => {
                return r.json();
            })
            .then(r => {
                if (r.ok) {
                    iptNome.value = "";
                    iptEmail.value = "";
                    iptSenha.value = "";
                    iptConfSenha.value = "";
                    iptCelular.value = "";
                    iptNascimento.value = "";
                    iptEndereco.value = "";
                    iptCidade.value = "";
                    iptCEP = "";
                    selEstado.value = 0;

                    document.getElementById("alSucesso").innerText = "Usuário gravado com sucesso!";
                    document.getElementById("alSucesso").classList.add("alert");
                    document.getElementById("alSucesso").classList.add("alert-success");
                    document.getElementById("alSucesso").classList.add("w-100");
                    document.getElementById("alSucesso").style = "display:block";
                }
                else {
                    console.log("entrei aquii")
                    document.getElementById("alErro").innerText = "Erro ao gravar usuário!";
                    document.getElementById("alErro").classList.add("alert");
                    document.getElementById("alErro").classList.add("alert-danger");
                    document.getElementById("alErro").classList.add("w-100");
                    document.getElementById("alErro").style = "display:block";
                }
            })
            .catch(e => {
                console.log(e);
            })


    }
    else {
        mostrarErros(listaErros);
        console.log(listaErros)
        campoMsg.classList.add("alert");
        campoMsg.classList.add("alert-warning");
        campoMsg.classList.add("w-100");
        msgFinal.innerHTML = "Preencha os campos destacados corretamente!"
    }
}

function limparErros() {
    let iptNome = document.getElementById("inputNome");
    let iptEmail = document.getElementById("inputEmail");
    let iptSenha = document.getElementById("inputSenha");
    let iptConfSenha = document.getElementById("inputConfSenha");
    let iptCelular = document.getElementById("inputCelular");
    let iptNascimento = document.getElementById("inputNascimento");
    let iptEndereco = document.getElementById("inputEndereco");
    let iptCidade = document.getElementById("inputCidade");
    let selEstado = document.getElementById("inputEstado");
    let iptCEP = document.getElementById("inputCEP");

    iptNome.classList.remove("cadErros");
    iptEmail.classList.remove("cadErros");
    iptSenha.classList.remove("cadErros");
    iptConfSenha.classList.remove("cadErros");
    iptCelular.classList.remove("cadErros");
    iptNascimento.classList.remove("cadErros");
    iptEndereco.classList.remove("cadErros");
    iptCidade.classList.remove("cadErros");
    selEstado.classList.remove("cadErros");
    iptCEP.classList.remove("cadErros");

    let campoMsg = document.getElementById("divMsg");
    let msgFinal = document.getElementById("msgFinal");
    campoMsg.classList.remove("cErros");
    msgFinal.innerHTML = ""
}

function mostrarErros(listaErros) {
    for (let i = 0; i < listaErros.length; i++) {
        let id = listaErros[i];
        let ipt = document.getElementById(id);
        ipt.classList.add("cadErros");
        console.log(id, ipt)
        //listaErros[i].classList.add("erros");
    }
}

function mascara(m, t, e) {
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g, '');
    var l = texto.length;
    var lm = m.length;
    if (window.event) {
        id = e.keyCode;
    } else if (e.which) {
        id = e.which;
    }
    cursorfixo = false;
    if (cursor < l) cursorfixo = true;
    var livre = false;
    if (id == 16 || id == 19 || (id >= 33 && id <= 40)) livre = true;
    ii = 0;
    mm = 0;
    if (!livre) {
        if (id != 8) {
            t.value = "";
            j = 0;
            for (i = 0; i < lm; i++) {
                if (m.substr(i, 1) == "#") {
                    t.value += texto.substr(j, 1);
                    j++;
                } else if (m.substr(i, 1) != "#") {
                    t.value += m.substr(i, 1);
                }
                if (id != 8 && !cursorfixo) cursor++;
                if ((j) == l + 1) break;

            }
        }
    }
    if (cursorfixo && !livre) cursor--;
    t.setSelectionRange(cursor, cursor);
}
