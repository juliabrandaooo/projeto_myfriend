function validarFormCadastroPF() {
    var name = formcadastropf.name.value;
    var sobrenome = formcadastropf.sobrenome.value;
    var cpf = formcadastropf.cpf.value;
    var nasc = formcadastropf.nasc.value;
    var endereco = formcadastropf.endereco.value;
    var cidade = formcadastropf.cidade.value;
    var estado = formcadastropf.estado.value;
    var pais = formcadastropf.pais.value;
    var cep = formcadastropf.cep.value;
    var telefone = formcadastropf.telefone.value;
    var email = formcadastropf.email.value;

    if (name == "") {
        alert("Campo nome é obrigatório!");
        formfaleconosco.name.focus();
        return false;
    }

    if (sobrenome == "") {
        alert("Campo sobrenome é obrigatório!");
        formfaleconosco.sobrenome.focus();
        return false;
    }

    if (cpf == "") {
        alert("Campo cpf é obrigatório!");
        formfaleconosco.cpf.focus();
        return false;
    }

    if (nasc == "") {
        alert("Campo nasc é obrigatório!");
        formfaleconosco.nasc.focus();
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

}