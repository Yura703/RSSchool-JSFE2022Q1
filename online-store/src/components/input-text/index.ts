export class InputText {
    inputText: HTMLInputElement;

    constructor(target: string | HTMLElement) {
        this.inputText = document.createElement('input');
        this.inputText.type = 'search';
        this.inputText.placeholder = 'Search';
        this.inputText.autofocus = true;
        this.#addListener(this.inputText);
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

    #addListener(inputText: HTMLInputElement) {
        inputText.addEventListener('input', () => {
            inputText.dispatchEvent(
                new CustomEvent('inputEvent', {
                    detail: { text: inputText.value },
                    bubbles: true,
                })
            );
        });
    }
}
