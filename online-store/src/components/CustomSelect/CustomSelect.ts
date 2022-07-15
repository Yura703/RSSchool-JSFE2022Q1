import './style.scss';

export class CustomSelect {
    static CLASS_NAME_SELECT = 'select';

    static CLASS_NAME_ACTIVE = 'select_show';

    static CLASS_NAME_SELECTED = 'select__option_selected';

    static SELECTOR_ACTIVE = '.select_show';

    static SELECTOR_DATA = '[data-select]';

    static SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';

    static SELECTOR_OPTION_SELECTED = '.select__option_selected';

    _elRoot: HTMLElement;

    _customSelect: HTMLSelectElement;

    constructor(params: string[], target: string) {
        this._elRoot = document.getElementById(target) as HTMLElement;
        this._customSelect = document.createElement('select');
        this.#initSelect(params, this._customSelect);
        this._customSelect.classList.add(CustomSelect.CLASS_NAME_SELECT);
        this._elRoot.append(this._customSelect);
    }

    #initSelect(options: string[], selectElement: HTMLSelectElement) {
        for (let i = 0; i < options.length; i++) {
            const opt = options[i];
            const el = document.createElement('option');
            el.textContent = opt;
            el.value = opt;
            selectElement.appendChild(el);
        }
    }
}
