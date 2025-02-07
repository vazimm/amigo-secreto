//Lista amigos
let array_amigos = [];

function adicionar() {
    //Atualiza a lista através da entrada no HTML
    array_amigos.push(document.getElementById('nome-amigo').value);
    //Imprime o nome dos participantes na página do sorteio
    document.getElementById("lista-amigos").textContent = array_amigos.join(", ")
    //Limpa a entrada
    document.getElementById('nome-amigo').value = ''; 
}

function sortear(){
    //Função que vai embaralhar o array
    embaralha(array_amigos);
    //Variável que busca o elemento Sorteio para impressão do resultado
    let sorteio = document.getElementById("lista-sorteio");
    //Loop que irá percorrer o Array
    for(i = 0; i < array_amigos.length; i++){
        if(i == array_amigos.length - 1){
            //Atualiza a lista com o resutado quando o loop atinge o último item na lista   
            sorteio.innerHTML += `${array_amigos[i]} --> ${array_amigos[0]} <br>`
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
    //Limpa todos os campos
    document.getElementById("lista-amigos").textContent = ''
    document.getElementById("lista-sorteio").textContent = ''
    document.getElementById('nome-amigo').value = '';
    //Limpar o Array
    array_amigos = []
}