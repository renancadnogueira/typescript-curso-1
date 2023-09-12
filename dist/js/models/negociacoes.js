export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Aqui não definimos o método readonly porque ao colocar o método push na linha 7, não conseguíriamos realizar o readonly.
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
