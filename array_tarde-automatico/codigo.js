const preenche = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    document.body.appendChild(container);

}

/*
atletas.forEach( (atleta) => {
     preenche(atleta); 
    });
*/

/*let indice = 0;

while (indice < atletas.length){
    preenche(atletas[indice]); 
    console.log(indice, atletas[indice].nome)
    indice++;
}*/

for ( let indice = 0; indice < atletas.length; indice++){
    preenche(atletas[indice]); 
    console.log(indice, 'loop for');
}