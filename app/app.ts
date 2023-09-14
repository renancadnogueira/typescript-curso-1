import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form'); //.form é para pegar a classe # é para pegar o id
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault(); //cancelar o recarregamento da página para salvar os dados.
        controller.adiciona();
    });   
} else {
    throw Error ('Não foi possível inicializar a aplicação. Verifique se o form existe!')
}

