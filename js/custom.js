document.querySelector('#menu-btn').addEventListener('click', function(){
    document.querySelector('#menu-site').classList.toggle("active");
});
function altera(){
    var msg = document.getElementById('msg')
   
        msg.innerHTML = 'A ortodoxia significa conformidade com os princípios de qualquer doutrina geralmente aceita, em contraste com as doutrinas divergentes, que são consideradas falsas e rejeitadas como heterodoxia'
}
function volta(){
    var msg = document.getElementById('msg')
    msg.innerHTML = ''
}

function altera2(){
    var msg = document.getElementById('msg2')
   
        msg.innerHTML = 'Disposição piscicologica ou moral; índole, feitio, temperamento'
}
function volta2(){
    var msg = document.getElementById('msg2')
    msg.innerHTML = ''
}
