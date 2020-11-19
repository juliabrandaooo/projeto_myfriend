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
        formfaleconosco.name.focus();
        return false;
    }

    if (cnpj == "") {
        alert("Campo cnpj é obrigatório!");
        formfaleconosco.cnpj.focus();
        return false;
    }

    if (endereco == "") {
        alert("Campo endereco é obrigatório!");
        formfaleconosco.endereco.focus();
        return false;
    }

    if (cidade == "") {
        alert("Campo cidade é obrigatório!");
        formfaleconosco.cidade.focus();
        return false;
    }

    if (estado == "") {
        alert("Campo estado é obrigatório!");
        formfaleconosco.estado.focus();
        return false;
    }

    if (pais == "") {
        alert("Campo país é obrigatório!");
        formfaleconosco.pais.focus();
        return false;
    }

    if (cep == "") {
        alert("Campo cep é obrigatório!");
        formfaleconosco.cep.focus();
        return false;
    }

    if (telefone == "") {
        alert("Campo telefone é obrigatório!");
        formfaleconosco.telefone.focus();
        return false;
    }

    if (email == "") {
        alert("Campo email é obrigatório!");
        formfaleconosco.email.focus();
        return false;
    }

    function validaEmail(email) {

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(String(email).toLowerCase());

    }
}
