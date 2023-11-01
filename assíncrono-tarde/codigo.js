const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 54;

const preenche = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    container.style.width = '15em';
    container.style.backgroundColor = 'gray';
    container.style.textAlign = 'center';
    container.style.margin = 'auto';

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    document.body.appendChild(container);

}

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pegar_coisas(`${url}/${numero_jogador}`).then(
    (entrada) => preenche(entrada)
);

console.log('assíncrono');