/*
    OBJETIVO: Passar a imagem quando clicar no botão.

*/



// - passo 1: dar um jeito de pegar o elemento HTML dos botões;
// "const" = indica uma variável que será constante, que não sofrerá mudanças, sempre terá os mesmos elementos dentro dela (no caso, uma lista com 6 botões);

    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');

// - passo 2: dar um jeito de identificar o click do botão
// "addEventListener" = É como colocar uma "escuta" (de um espião) num elemento do HTML, e quando o usuário clicar no elemento indicado, uma ação será disparada;
// "forEach" = É o "para cada". Para cada item, será feito um laço. Cada vez que passar pelo laço, cada elemento será reproduzido pelo laço.

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // - passo 3: desmarcar o botão selecionado anterior
        // note: foi criada uma variável para capturar a classe que deixa o botão colorido quando clica nele. Com o ".remove" foi removida essa classe quando clica no botão seguinte.
        const botaoSelecionado = document.querySelector('.selected');
        botaoSelecionado.classList.remove('selected');

        // - passo 4: adicionar a classe "selected" ao botão que está sendo clicado por meio da variável criada no "forEach" acima
        botao.classList.add('selected');

        // - passo 5: esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // - passo 6: fazer aparecer a imagem de fundo correspondente ao botão clicado;
        // "imagens" é a variável que foi criada no início do código para "pegar" a classe que todas as imagens têm no HTML;
        // "[indice]" é a variável criada no "forEach", funciona da mesma forma que os botões;
        // foi adicionada a classe "ativa" da mesma forma que o "selected" nos botões.
        imagens[indice].classList.add('ativa');

    })
});