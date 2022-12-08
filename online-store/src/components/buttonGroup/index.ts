export class ButtonGroup {
    buttonGroup: HTMLDivElement;

    constructor(target: string | HTMLElement, count: number, classCSS: string, name: string[]) {
        this.buttonGroup = document.createElement('div');
        this.buttonGroup.classList.add(classCSS);
        this.#createButton(count, name);
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

    #createButton(count: number, name: string[]) {
        for (let i = 0; i < count; i++) {
            const btn = document.createElement('button');
            btn.innerText = name[i];
            this.#addListener(btn, name[i]);
            this.buttonGroup.append(btn);
        }
    }

    #addListener(btn: HTMLButtonElement, name: string) {
        btn.addEventListener('click', () => {
            btn.dispatchEvent(
                new CustomEvent('button-filter', {
                    detail: { name: name },
                    bubbles: true,
                })
            );
        });
    }
}
