// Mostrar imagens ao clicar no botão de surpresa
document.getElementById('showImagesBtn').addEventListener('click', function() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('images').style.display = 'grid';
    document.getElementById('loveText').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
});

// Voltar à mensagem inicial
document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('images').style.display = 'none';
    document.getElementById('loveText').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
});

// Funcionalidade do modal para fullscreen
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');

document.querySelectorAll('.card img').forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
    });
});

// Fechar modal
var span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    modal.style.display = 'none';
};
