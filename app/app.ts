import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form'); //.form é para pegar a classe # é para pegar o id
form.addEventListener('submit', event => {
    event.preventDefault(); //cancelar o recarregamento da página para salvar os dados.
    controller.adiciona();
});