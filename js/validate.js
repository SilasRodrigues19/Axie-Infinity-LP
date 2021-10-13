$("#mc-embedded-subscribe-form").validate({
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

    if (email.match(pattern)) {
        $(button).css({ 'display': 'block', 'opacity': '1' });
    } else {
        $(button).css({ 'display': 'none', 'opacity': '0' });
    }

}


button.addEventListener('click', (e) => {
    // e.preventDefault();
    button.classList.add('is-done', 'is-active');

    setTimeout(() => {
        button.innerHTML = "Boa! agora você receberá as novidades."
    }, 500);
});