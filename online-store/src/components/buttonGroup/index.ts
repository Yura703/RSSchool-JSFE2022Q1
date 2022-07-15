export class ButtonGroup {
    buttonGroup: HTMLDivElement;

    constructor(target: string | HTMLElement, count: number, classCSS: string) {
        this.buttonGroup = document.createElement('div');
        this.buttonGroup.classList.add(classCSS);
        this.#createButton(count);
        this.#init(target);
    }

    #init(target: string | HTMLElement) {
        if (target instanceof HTMLElement) {
            target.append(this.buttonGroup);
        } else {
            const targetElement = document.getElementById(target) as HTMLElement;
            targetElement.append(this.buttonGroup);
        }
    }

    #createButton(count: number) {
        for (let i = 0; i < count; i++) {
            const btn = document.createElement('button');
            this.buttonGroup.append(btn);
        }
    }
}
