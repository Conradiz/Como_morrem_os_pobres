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

function altera3(){
    var msg = document.getElementById('msg3')
   
        msg.innerHTML = 'Usualmente refere-se a uma categoria ou grupo de pessoas envolvidas em trabalho intelectual complexo e criativo direcionado ao desenvolvimento e disseminação da cultura, abrangendo trabalhadores intelectuais'
}
function volta3(){
    var msg = document.getElementById('msg3')
    msg.innerHTML = ''
}

function altera5(){
    var msg = document.getElementById('msg5')

    msg.innerHTML = ' Uma ordem socioeconômica estruturada sob as ideias de igualitarismo, propriedade comum dos meios de produção e na ausência de classes sociais, do dinheiro e do Estado. Como tal, o comunismo é uma forma específica de socialismo.'
}

function volta5(){
    var msg = document.getElementById('msg5')
    msg.innerHTML = ''
}
