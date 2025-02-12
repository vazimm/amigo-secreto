//Lista amigos
let array_amigos = [];

function adicionar() {
    //Atribuição de valor da Entrada a uma variavel
    let amigos = document.getElementById('nome-amigo').value;
    
    //Verifica se o campo está vazio
    if (amigos === "") {
        alert("O campo está vazio!")
        return
    }

    if(array_amigos.includes(amigos)){
        alert("Não pode haver nomes iguais,\npor favor informe nome e sobrenome")
        document.getElementById('nome-amigo').value = "";
        return
    } else {
        amigos = document.getElementById('nome-amigo').value;
    }
    
    //Atualiza a lista através da entrada no HTML
    array_amigos.push(amigos);
    //Valida se o nome não possui caracteres especiais ou numeros
    validarCaracteres();
    //Imprime o nome dos participantes na página do sorteio
    document.getElementById("lista-amigos").textContent = array_amigos.join(", ");
    //Limpa a entrada
    document.getElementById('nome-amigo').value = "";
}

function sortear(){
    //Caso queiram tirar um novo resultado com os mesmos integrantes 
    document.getElementById("lista-sorteio").textContent = '';
    //Caso venha de acontecer de haver participantes insuficientes
    if (array_amigos.length < 4) {
        console.log(array_amigos)
        return alert(`Número de participantes não pode ser menor que 4! \n números de participantes atuais = ${array_amigos.length}`);
    }
    
    //Função que vai embaralhar o array
    embaralha(array_amigos);
    //Variável que busca o elemento Sorteio para impressão do resultado
    let sorteio = document.getElementById("lista-sorteio");
    //Loop que irá percorrer o Array
    for(i = 0; i < array_amigos.length; i++){
        if(i == array_amigos.length - 1){
            //Atualiza a lista com o resutado quando o loop atinge o último item na lista   
            sorteio.innerHTML += `${array_amigos[i]} --> ${array_amigos[0]} <br>`;
        }  else {
            //Atualiza a lista com o resutado do sorteio
            sorteio.innerHTML += `${array_amigos[i]} --> ${array_amigos[i + 1]} <br>`;
        }
         
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    if(confirm("Tem certeza que deseja reiniciar o sorteio do amigo oculto?")){
        //Limpa todos os campos
        document.getElementById("lista-amigos").textContent = '';
        document.getElementById("lista-sorteio").textContent = '';
        document.getElementById('nome-amigo').value = '';
        //Limpar o Array
        array_amigos = [];
    }
}

// Função para validar caracteres
function validarCaracteres() {
    // Expressão regular para aceitar apenas letras (maiúsculas e minúsculas)
    const regex = /^[a-zA-Z ]+$/;
    if (regex.test(document.getElementById('nome-amigo').value)) {
    	
	} else {
        array_amigos.pop();
        console.log(array_amigos);
        alert("Nome não pode conter número ou caracteres especiais")
    }
}