// On récupère les éléments dont on a besoin
const $bouton = $('<input type="button" id="btnNouvelleDiv" value="Clique ici"></input>');
const $body = $('body');
const $salut = $('<div id="salut"></div>');

// Sur le clique du bouton, on crée une nouvelle div, on l'ajoute au body et on cache le salut
$('#btnNouvelleDiv').on('click', function(event) {
    event.preventDefault();
    let div = $('<div class="souhaite">'+ 'Je te souhaite' +'</div>');
    $body.append(div);
    $('#salut').css('display', 'none')
})

// Sur le clique de la div "souhaite", on crée une nouvelle div et on l'ajoute au body 
$('body').on('click', '.souhaite',function(event){
    event.preventDefault();
    let div = $('<div class="joyeux">'+ 'un joyeux' +'</div>');
    $body.append(div);
})

// Sur le clique de la div "joyeux", on crée une nouvelle div et on l'ajoute au body 
$('body').on('click', '.joyeux',function(event){
    event.preventDefault();
    let div = $('<div class="anniversaire">'+ 'anniversaire!!!' +'</div>');
    $body.append(div);
})

// Sur le clique de la div "anniversaire", on affiche une image dans le body
$('body').on('click', '.anniversaire',function(event){
    event.preventDefault();
    $body.css('background-image', 'url("./img/gateau.png")')
})