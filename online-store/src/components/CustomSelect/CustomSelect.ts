import './style.scss';

export class CustomSelect {
    #CLASS_NAME_SELECT = 'select';

    _elRoot: HTMLElement;

    _customSelect: HTMLSelectElement;

    constructor(params: string[], target: string | HTMLElement) {
        if (target instanceof HTMLElement) {
            this._elRoot = target;
        } else {
            this._elRoot = document.getElementById(target) as HTMLElement;
        }

        this._customSelect = document.createElement('select');

        this.#initSelect(params, this._customSelect);
        this._customSelect.classList.add(this.#CLASS_NAME_SELECT);

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

    // addEventListener(subscriber: EventListenerOrEventListenerObject) {
    //     this._customSelect.addEventListener('change', subscriber);
    // }
}
