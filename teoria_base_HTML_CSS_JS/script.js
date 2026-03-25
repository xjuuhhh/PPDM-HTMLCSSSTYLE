//comentar
//javascript = linguagem de programação que serve para interagir com HTML e CSS

//variáveis = contêiners para armazenar dados, podem ser declarados como: var, let e const (as declarações let e const são as mais utilizadas atualmente)

//exemplos:
//let nome = "Mundo"; (declara a variável nome e atribui a string mundo a ela)
//const PI = 3,14159; (declara uma variável imutável)
//var idade = 47; (tem um escopo mais amplo causando comportamentos inesperados em códigos mais elaborados)

function envio() {
    const name = document.getElementById('userName').value;
    const localmensagem = document.getElementById('mensagemAgradecimento');
    
    if(name.trim()=== ""){
        alert("Por favor, digite o nome antes de enviar!");
        return;
    }

    const mensagem = `Obrigado pelo envio, ${name}! recebemos seus dados com sucesso.`;
    // alert(mensagem);

    localmensagem.innerText = mensagem; //entende que dentro de 'mensagem' tem um texto
    localmensagem.style.color= "blue";
    localmensagem.style.fontWeight = "bold";
}

//modo tela escura
const btn = document.getElementById('theme-toggle'); //seleciona o botão pelo id
btn.addEventListener('click', () =>{ //adiciona escutador de eventos para o clique
    // function nomeDaFunção(){}
    document.body.classList.toggle('darkMode'); //o método toggle adiciona a classe se ela não existir e remove se ela já estiver lá
    document.documentElement.classList.toggle('darkMode')
    if(document.documentElement.classList.contains('darkMode')){//muda o texto do botão conforme o tema
        btn.textContent = "Ativa modo claro";
    } else {
        btn.textContent = "Ativa modo escuro";
    }
});

