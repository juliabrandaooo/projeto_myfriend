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
        formcadastropf.name.focus();
        return false;
    }

    if (sobrenome == "") {
        alert("Campo sobrenome é obrigatório!");
        formcadastropf.sobrenome.focus();
        return false;
    }

    if (cpf == "") {
        alert("Campo cpf é obrigatório!");
        formcadastropf.cpf.focus();
        return false;
    }

    if (nasc == "") {
        alert("Campo data de nascimento é obrigatório!");
        formcadastropf.nasc.focus();
        return false;
    }

    if (endereco == "") {
        alert("Campo endereço é obrigatório!");
        formcadastropf.endereco.focus();
        return false;
    }

    if (cidade == "") {
        alert("Campo cidade é obrigatório!");
        formcadastropf.cidade.focus();
        return false;
    }

    if (estado == "") {
        alert("Campo estado é obrigatório!");
        formcadastropf.estado.focus();
        return false;
    }

    if (pais == "") {
        alert("Campo país é obrigatório!");
        formcadastropf.pais.focus();
        return false;
    }

    if (cep == "") {
        alert("Campo cep é obrigatório!");
        formcadastropf.cep.focus();
        return false;
    }

    if (telefone == "") {
        alert("Campo telefone é obrigatório!");
        formcadastropf.telefone.focus();
        return false;
    }

    if (email == "") {
        alert("Campo email é obrigatório!");
        formcadastropf.email.focus();
        return false;
    }

    function validaEmail(email) {

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(String(email).toLowerCase());

    }

}