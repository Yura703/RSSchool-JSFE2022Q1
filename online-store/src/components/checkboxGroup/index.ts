import './style.scss';

export class CheckboxGroup {
    checkboxGroup: HTMLDivElement;

    constructor(target: string | HTMLElement, count: number, title: string[], classCSS: string, writeTitle: boolean) {
        this.checkboxGroup = document.createElement('div');
        this.checkboxGroup.classList.add(classCSS);

        this.#createCheckbox(count, title, writeTitle);
        this.#addListener(this.checkboxGroup);
        this.#init(target);
    }

    #init(target: string | HTMLElement) {
        if (target instanceof HTMLElement) {
            target.append(this.checkboxGroup);
        } else {
            const targetElement = document.getElementById(target) as HTMLElement;
            targetElement.append(this.checkboxGroup);
        }
    }

    #createCheckbox(count: number, title: string[], writeTitle: boolean) {
        for (let i = 0; i < count; i++) {
            const chb = document.createElement('input');
            chb.type = 'checkbox';
            chb.name = title[i];
            chb.id = title[i];
            const lbl = document.createElement('label');
            lbl.htmlFor = title[i];
            if (writeTitle) lbl.innerText = title[i];
            this.checkboxGroup.append(chb);
            this.checkboxGroup.append(lbl);
        }
    }

    #addListener(target: HTMLDivElement) {
        target.addEventListener('click', () => {
            const chbAll = target.querySelectorAll('input');
            const chbChecked: string[] = [];
            for (let i = 0; i < chbAll.length; i++) {
                if (chbAll[i].checked) {
                    chbChecked.push(chbAll[i].name);
                }
            }

            target.dispatchEvent(
                new CustomEvent('checkBox', {
                    detail: { chbChecked },
                    bubbles: true,
                })
            );
        });
    }
}
