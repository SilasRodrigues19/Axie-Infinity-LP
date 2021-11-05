let isValid = $("#mc-embedded-subscribe-form").validate({
    messages: {
        EMAIL: {
            required: "&bull; Esse campo é obrigatório",
            email: "&bull; Insira um endereço de e-mail válido"
        }
    }
});
let email = document.getElementById('email'),
    button = document.getElementById('button'),
    teste = document.getElementById('#email-error');

validate = () => {
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern) && isValid) {
        button.style.cssText = "display:block; opacity: 1; transition: opacity ease 2.5s";
    } else {
        button.style.cssText = "display:none; opacity: 0; transition: opacity ease 2.5s";
    }

}

email.addEventListener("keydown", (e) => {

    if (e.keyCode === 13) {

        e.preventDefault();

        Swal.fire({
            title: 'Atenção!',
            icon: 'info',
            text: 'Preencha com um e-mail válido e clique no botão Inscrever',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
        })

    }

});

button.addEventListener('click', (e) => {
    // e.preventDefault();
    button.classList.add('is-done', 'is-active');

    setTimeout(() => {
        button.innerHTML = "Boa! agora você receberá as novidades."
        button.disabled = true;
    }, 500);
});