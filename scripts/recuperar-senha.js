function validarFormRecuperarSenha() {
    var email = formrecuperarsenha.email.value;

    if (email == "") {
        alert("Campo email é obrigatório!");
        formfaleconosco.email.focus();
        return false;
    }


    if (document.forms[0].email.value.indexOf('@') == -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }

    if (document.forms[0].email.value.indexOf('.') == -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }


   /* function validaEmail(email) {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());

    }*/






}






