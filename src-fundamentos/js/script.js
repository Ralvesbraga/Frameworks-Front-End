// Altera o tema o arquivo CSS de acordo com o tema selecionado
const mudarTema = (temaSelecionado) => {
    let url = "/css/estilo-tema-" + temaSelecionado + ".css";
    let linkTema = document.querySelector("#link-tema");
    linkTema.href = url;
}

// Altera o tema quando mudar a opção selecionada
let selectTema = document.querySelector("select#tema");
selectTema.addEventListener("change", evento => {
    let temaSelecionado = evento.target.value;
    if (temaSelecionado) {
        mudarTema(temaSelecionado);
        // Salva a opção de tema escolhida pelo usuário no localStorage
        localStorage.setItem("tema", temaSelecionado);
    }
});

// Recupera a opção de tema escolhida pelo usuário e
// altera o tema se houver uma opção salva no localStorage
let tema = localStorage.getItem("tema");
if (tema) {
    mudarTema(tema);
    // Seleciona a opção de tema escolhida pelo usuário
    selectTema.value = tema;
}

let form = document.querySelector('form');
let botaoAdd = document.querySelector('a#add');
let botaoCancelar = document.querySelector('input[value="Cancelar"]');
let btnSalvar = document.querySelector('input[type="submit"]');
let tabela = document.querySelector('table');

// Adiciona o evento de click ao botão de adicionar
botaoAdd.addEventListener('click', () => {
    form.classList.remove('inativo');
});

// Adiciona o evento de click ao botão de cancelar
botaoCancelar.addEventListener('click', () => {
    form.classList.add('inativo');
    // Limpa os campos do formulário
    form.reset();
});
