import { ButtonGroup } from '../../components/ButtonGroup';
import { CheckboxGroup } from '../../components/CheckboxGroup';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { InputText } from '../../components/Input-text';
import { NoUiSlider } from '../../components/NoUiSlider/myNoUiSlider';
import { selectText } from '../../constants/constants';

export class FilterPanel {
    form: HTMLFormElement;

    constructor(target: string | HTMLElement) {
        this.form = document.createElement('form');

        new InputText(this.form);

        this.#createText(this.form, 'Make');
        new CustomSelect(selectText.MAKES, this.form, 'make');

        this.#createText(this.form, 'Vehicle Type');
        new CustomSelect(selectText.VEHICLE, this.form, 'vehicle');

        this.#createText(this.form, ' Fuel Type');
        new CheckboxGroup(this.form, 4, selectText.FUEL, 'button-fuel', true, 'fuel');

        this.#createText(this.form, ' Colors');
        new CheckboxGroup(this.form, 7, selectText.COLORS, 'checkbox-color', false, 'color');

        this.#createText(this.form, 'Price (x 1000 $)');
        new NoUiSlider(this.form, 0, 200, 'price');

        this.#createText(this.form, 'Production year');
        new NoUiSlider(this.form, 2000, 2022, 'year');

        this.#createText(this.form, 'Quantity in stock');
        new NoUiSlider(this.form, 0, 100, 'count');

        new ButtonGroup(this.form, 1, 'button-favorites', ['Favorites']);

        new ButtonGroup(this.form, 2, 'button-clear', ['Clear Filters', 'Clear Settings']);

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
