import { ButtonGroup } from '../../components/buttonGroup';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { InputText } from '../../components/input-text';
import { NoUiSlider } from '../../components/noUiSlider/myNoUiSlider';
import { selectText } from '../../constants/constants';
import { ButtonGroupWithTitle } from './ButtonGroupWithTitle';

export class FilterPanel {
    form: HTMLFormElement;

    constructor(target: string | HTMLElement) {
        this.form = document.createElement('form');

        new InputText(this.form);

        this.#createText(this.form, 'Make');
        new CustomSelect(selectText.MAKES, this.form);

        this.#createText(this.form, 'Vehicle Type');
        new CustomSelect(selectText.VEHICLE, this.form);

        this.#createText(this.form, ' Fuel Type');
        new ButtonGroupWithTitle(this.form, 5, selectText.FUEL, 'button-fuel');

        this.#createText(this.form, ' Colors');
        new ButtonGroup(this.form, 7, 'button-color');

        this.#createText(this.form, 'Price (x 1000 $)');
        new NoUiSlider(this.form, 0, 200, 'price');

        this.#createText(this.form, 'Production year');
        new NoUiSlider(this.form, 2000, 2022, 'year');

        this.#createText(this.form, 'Kilometre (x 1000 km)');
        new NoUiSlider(this.form, 0, 1000, 'km');

        new ButtonGroupWithTitle(this.form, 3, ['Favorites', 'Clear Filters', 'Clear Settings'], 'button-color');

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
