import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = []; //Aqui não definimos o método readonly porque ao colocar o método push na linha 7, não conseguíriamos realizar o readonly.

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { //método que não deixa adicionar ou remover itens do array.
        return this.negociacoes;
    }
}
