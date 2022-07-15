export class InputText {
    inputText: HTMLInputElement;

    constructor(target: string | HTMLElement) {
        this.inputText = document.createElement('input');
        this.inputText.type = 'text';
        this.inputText.placeholder = 'Search';
        this.#initInput(target);
    }

    #initInput(target: string | HTMLElement) {
        if (target instanceof HTMLElement) {
            target.append(this.inputText);
        } else {
            const targetElement = document.getElementById(target) as HTMLElement;
            targetElement.append(this.inputText);
        }
    }
}
