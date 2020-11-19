function validarFormFaleConosco() {
    var nome = formfaleconosco.nome.value;
    var email = formfaleconosco.email.value;
    var assunto = formfaleconosco.assunto.value;
    var msg = formfaleconosco.msg.value;


    if (nome == "") {
        alert("Campo nome é obrigatório!");
        formfaleconosco.nome.focus();
        return false;
    }
    if (email == "") {
        alert("Campo email é obrigatório!");
        formfaleconosco.email.focus();
        return false;
    }
    if (assunto == "") {
        alert("Campo assunto é obrigatório!");
        formfaleconosco.assunto.focus();
        return false;
    }
    if (msg == "") {
        alert("Campo mensagem é obrigatório!");
        formfaleconosco.msg.focus();
        return false;
    }

    function validaEmail(email) {

        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(String(email).toLowerCase());

    }

}