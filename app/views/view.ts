export abstract class View<T> { //Tipo genérico T. //Uma classe abstrata não pode criar uma instância dela

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}