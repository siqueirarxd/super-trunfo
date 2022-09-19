/* Criando objetos dentro de uma lista:*/
var cartas = [carta1 = {
    nome: "Ravena",
    imagem: "http://pm1.narvii.com/6491/251ee00e7b90e9e0f206594166a9d393df848fa7_00.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 10
    }
}, carta2 = {
    nome: "Capitão América",
    imagem: "https://epipoca.com.br/wp-content/uploads/2021/04/bosslogic-captain-america-steve-rogers-liefeld-parody.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 4
    }
}, carta3 = {
    nome: "Minato Namikaze",
    imagem: "https://i.pinimg.com/736x/be/4b/cc/be4bcc142fef4ce0e5d505e8c6477e00.jpg",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 8
    }
}, carta4 = {
    nome: "Dora",
    imagem: "https://miro.medium.com/max/1200/1*Nqsvhywdtwo460OqSvi_1w.jpeg",
    atributos: {
        ataque: 6,
        defesa: 7,
        magia: 8
    }
}, carta5 = {
    nome: "Ash",
    imagem: "https://i.pinimg.com/736x/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd--ash-ketchum-pokemon.jpg",
    atributos: {
        ataque: 5,
        defesa: 2,
        magia: 6
    }
}, carta6 = {
    nome: "Professor Xavier",
    imagem: "http://pm1.narvii.com/7360/e8e8dbea3834ee2cf139c704356369a874ad044ar1-466-657v2_uhq.jpg",
    atributos: {
        ataque: 5,
        defesa: 6,
        magia: 10
    }
}]

//Como pedir a saída de um dado específico de um objeto: console.log(cartas[0].atributos.ataque)

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
   
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    exibirCartaJogador()


    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
}


function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
           return radioAtributos[i].value 
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var resultado = document.getElementById("resultado")
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        resultado.innerHTML = `${cartaJogador.nome} venceu!`
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        resultado.innerHTML = `${cartaMaquina.nome} venceu!`
    } else {
        resultado.innerHTML = "Empate!"
    }

    exibirCartaMaquina()
} 

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " +  cartaJogador.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo + " " +  cartaMaquina.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}