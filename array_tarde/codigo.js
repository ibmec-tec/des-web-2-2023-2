const ingrid = atletas[0];



const espaco_nome = document.getElementById('nome');
const espaco_imagem = document.querySelector('div#container > img');
const espaco_descricao = document.querySelector('div#container > p');

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    espaco_imagem.src = atleta.imagem;
    espaco_descricao.innerHTML = atleta.descricao;
}

preenche(atletas[1]);
