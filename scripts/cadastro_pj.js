function validarFormCadastroPJ() {
    var name = formcadastropj.name.value;
    var sobrenome = formcadastropj.sobrenome.value;
    var cpf = formcadastropj.cpf.value;
    var nasc = formcadastropj.nasc.value;
    var endereco = formcadastropj.endereco.value;
    var cidade = formcadastropj.cidade.value;
    var estado = formcadastropj.estado.value;
    var pais = formcadastropj.pais.value;
    var cep = formcadastropj.cep.value;
    var telefone = formcadastropj.telefone.value;
    var email = formcadastropj.email.value;

    if (name == "") {
        alert("Campo nome é obrigatório!");
        formcadastropj.name.focus();
        return falsej
    }

    if (cnpj == "") {
        alert("Campo cnpj é obrigatório!");
        formcadastropj.cnpj.focus();
        return false;
    }

    if (endereco == "") {
        alert("Campo endereço é obrigatório!");
        formcadastropj.endereco.focus();
        return false;
    }

    if (cidade == "") {
        alert("Campo cidade é obrigatório!");
        formcadastropj.cidade.focus();
        return false;
    }

    if (estado == "") {
        alert("Campo estado é obrigatório!");
        formcadastropj.estado.focus();
        return false;
    }

    if (pais == "") {
        alert("Campo país é obrigatório!");
        formcadastropj.pais.focus();
        return false;
    }

    if (cep == "") {
        alert("Campo cep é obrigatório!");
        formcadastropj.cep.focus();
        return false;
    }

    if (telefone == "") {
        alert("Campo telefone é obrigatório!");
        formcadastropj.telefone.focus();
        return false;
    }

    if (email == "") {
        alert("Campo email é obrigatório!");
        formcadastropj.email.focus();
        return false;
    }

    function validaEmail(email) {

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(String(email).toLowerCase());

    }

}