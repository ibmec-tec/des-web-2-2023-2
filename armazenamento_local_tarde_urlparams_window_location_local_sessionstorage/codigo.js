const url = "https://botafogo-atletas.mange.li";

//const numero_jogador = 54;

const body = document.body;
body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

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

    container.onclick = handleClick;

    document.body.appendChild(container);

}

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    //cookie
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;
    document.cookie = `altura=${artigo.dataset.altura}`;

    //localStorage
    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('dados-original', artigo.dataset);
    localStorage.setItem('dados', JSON.stringify(artigo.dataset));


    console.log(acha_cookie('nome_completo'));
    console.log(localStorage.getItem('id'));
    console.log(JSON.parse(localStorage.getItem('dados')).altura)
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}


const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pegar_coisas(`${url}/all`).then(
    (entrada) => {
        for (atleta of entrada)
        {preenche(atleta)}
    }
);

console.log('assíncrono');