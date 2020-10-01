let imagens = document.querySelectorAll('.pequena_img');
let modo = document.querySelector('.modo');
let modoImg = document.querySelector('#modo_img');
let btClose = document.querySelector('#bt_fechar');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() {
        srcVal = imagens[i].getAttribute('src');
        modoImg.setAttribute('src', srcVal);
        modo.classList.add('modo_ativo');
    })
}

btClose.addEventListener('click', function() {
    modo.classList.remove('modo_ativo');
})