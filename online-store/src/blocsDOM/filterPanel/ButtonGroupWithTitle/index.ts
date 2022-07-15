import { ButtonGroup } from '../../../components/buttonGroup';
import './style.scss';

export class ButtonGroupWithTitle extends ButtonGroup {
    constructor(target: string | HTMLElement, count: number, title: string[], classCSS: string) {
        super(target, count, classCSS);
        this.#writeTitleOnButton(count, title);
    }

    #writeTitleOnButton(count: number, title: string[]) {
        const buttons = this.buttonGroup.querySelectorAll('button');
        for (let i = 0; i < count; i++) {
            buttons[i].name = title[i];
            buttons[i].innerText = title[i];
        }
    }
}
