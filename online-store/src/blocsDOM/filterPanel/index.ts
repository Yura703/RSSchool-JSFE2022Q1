import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { InputText } from '../../components/input-text';
import { NoUiSlider } from '../../components/noUiSlider/myNoUiSlider';
import { selectText } from '../../constants/constants';

export class FilterPanel {
    form: HTMLFormElement;

    constructor(target: string | HTMLElement) {
        this.form = document.createElement('form');

        new InputText(this.form);

        this.#createText(this.form, 'Make');
        new CustomSelect(selectText.MAKES, this.form);

        this.#createText(this.form, 'Price (x 1000 $)');
        new NoUiSlider(this.form, 0, 200, 'price');

        this.#createText(this.form, 'Production year');
        new NoUiSlider(this.form, 2000, 2022, 'year');

        this.#createText(this.form, 'Kilometre (x 1000 km)');
        new NoUiSlider(this.form, 0, 1000, 'km');

        if (target instanceof HTMLElement) {
            target.append(this.form);
        } else {
            document.getElementById(target)?.append(this.form);
        }
    }

    #createText(target: HTMLElement, text: string) {
        const title = document.createElement('p');
        title.innerText = text;
        target.append(title);
    }
}
