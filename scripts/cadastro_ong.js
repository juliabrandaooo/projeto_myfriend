function validarFormCadastroOng() {
    var name = formcadastroong.name.value;
    var cnpj = formcadastroong.cnpj.value;
    var endereco = formcadastroong.endereco.value;
    var cidade = formcadastroong.cidade.value;
    var estado = formcadastroong.estado.value;
    var pais = formcadastroong.pais.value;
    var cep = formcadastroong.cep.value;
    var telefone = formcadastroong.telefone.value;
    var email = formcadastroong.email.value;

    if (name == "") {
        alert("Campo nome é obrigatório!");
        formcadastroong.name.focus();
        return false;
    }

    if (cnpj == "") {
        alert("Campo cnpj é obrigatório!");
        formcadastroong.cnpj.focus();
        return false;
    }

    if (endereco == "") {
        alert("Campo endereco é obrigatório!");
        formcadastroong.endereco.focus();
        return false;
    }

    if (cidade == "") {
        alert("Campo cidade é obrigatório!");
        formcadastroong.cidade.focus();
        return false;
    }

    if (estado == "") {
        alert("Campo estado é obrigatório!");
        formcadastroong.estado.focus();
        return false;
    }

    if (pais == "") {
        alert("Campo país é obrigatório!");
        formcadastroong.pais.focus();
        return false;
    }

    if (cep == "") {
        alert("Campo cep é obrigatório!");
        formcadastroong.cep.focus();
        return false;
    }

    if (telefone == "") {
        alert("Campo telefone é obrigatório!");
        formcadastroong.telefone.focus();
        return false;
    }

    if (email == "") {
        alert("Campo email é obrigatório!");
        formcadastroong.email.focus();
        return false;
    }


    function validaEmail(email) {

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(String(email).toLowerCase());

    }
    return true;
}

function redirecionar(event) {
    event.preventDefault();
    if (validarFormCadastroOng()) {
        window.location.href = "cadastro_ong_questionario.html"
    }
}




