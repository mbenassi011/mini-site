const carros = [];


function cadastrarCarro(){

    const nomeCarro = prompt("Qual é o nome do carro?");
    const marcaCarro = prompt("Qual é a marca do carro?");

    const novoCarro = {
        id: carros.length + 1,
        nome: nomeCarro,
        marca: marcaCarro
    };

    carros.push(novoCarro);

    alert("Carro cadastrado com sucesso!");
}


function listarCarros(){

    let lista = "";

    for(let i = 0; i < carros.length; i++){

        lista += `ID: ${carros[i].id}
Nome: ${carros[i].nome}
Marca: ${carros[i].marca}

`;

    }

    if(lista == ""){
        alert("Nenhum carro cadastrado.");
    }else{
        alert("Lista de carros:\n\n" + lista);
    }
}



function removerCarro(){

    const idCarro = prompt("Digite o ID do carro que deseja remover:");

    const index = carros.findIndex(carro => carro.id == idCarro);


    if(index == -1){

        alert("Carro não encontrado!");

    }else{

        carros.splice(index,1);

        alert("Carro removido com sucesso!");

    }

}



function buscarCarro(){

    const nomeCarro = prompt("Digite o nome do carro que deseja buscar:");

    const carroEncontrado = carros.find(
        carro => carro.nome.toLowerCase() == nomeCarro.toLowerCase()
    );


    if(carroEncontrado){

        alert(
            "Carro encontrado!\n\n" +
            "ID: " + carroEncontrado.id +
            "\nNome: " + carroEncontrado.nome +
            "\nMarca: " + carroEncontrado.marca
        );

    }else{

        alert("Nenhum carro encontrado.");

    }

}



function removerUltimoCarro(){

    if(carros.length == 0){

        alert("Não existem carros cadastrados.");

    }else{

        carros.pop();

        alert("Último carro removido!");

    }

}



function limparTudo(){

    carros.length = 0;

    alert("Todos os carros foram removidos.");

}



function exibirQuantidadeCarros(){

    alert("Quantidade de carros cadastrados: " + carros.length);

}
