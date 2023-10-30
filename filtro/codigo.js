const container_filtro = document.createElement('div');
const texto_pesquisa = document.createElement('input');
const btn_pesquisa = document.createElement('button');

container_filtro.style.textAlign = 'center';

btn_pesquisa.innerHTML = 'Pesquisar';
btn_pesquisa.onclick = () => {
    atletas_container.innerHTML = '';
    criar_atletas(filtrar_atletas(texto_pesquisa.value));
};

texto_pesquisa.onchange = () => {
    atletas_container.innerHTML = '';
    criar_atletas(filtrar_atletas(texto_pesquisa.value));
}

container_filtro.appendChild(texto_pesquisa);
container_filtro.appendChild(btn_pesquisa);

document.body.appendChild(container_filtro);

const atletas_container = document.createElement('div');
document.body.appendChild(atletas_container);


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

    atletas_container.appendChild(container);

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

const criar_atletas = (entrada) => {
    for ( let indice = 0; indice < entrada.length; indice++){
        preenche(entrada[indice]); 
    }
}

const filtrar_atletas = (texto) => {
    const lista_filtrada = atletas.filter(
        (e) => {
            const nome = e.nome;
            const nome_minusculas = nome.toLocaleLowerCase();
            const texto_minusculas = texto.toLocaleLowerCase();
            const resultado = nome_minusculas.includes(texto_minusculas);
            return resultado
        }
    )

    return lista_filtrada;
} 

criar_atletas(atletas);