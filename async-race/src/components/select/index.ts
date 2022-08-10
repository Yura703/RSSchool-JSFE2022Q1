export class CustomSelect {
  #CLASS_NAME_SELECT = 'select';

  _elRoot: HTMLElement;

  _customSelect: HTMLSelectElement;

  constructor(params: string[], target: string | HTMLElement, name: string) {
    if (target instanceof HTMLElement) {
      this._elRoot = target;
    } else {
      this._elRoot = document.getElementById(target) as HTMLElement;
    }

    this._customSelect = document.createElement('select');

    this.#initSelect(params, this._customSelect);
    this._customSelect.classList.add(this.#CLASS_NAME_SELECT);
    this.#addListener(this._customSelect, name);

    this._elRoot.append(this._customSelect);
  }

  public get value(): string {
    return this._customSelect.value;
  }

  disabled(disabledOrUndisabled: boolean) {
    this._customSelect.disabled = disabledOrUndisabled;
  }

  addClasses(classes: string) {
    this._customSelect.classList.add(classes);
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

  #addListener(_customSelect: HTMLSelectElement, name: string) {
    _customSelect.addEventListener('change', () => {
      _customSelect.dispatchEvent(
        new CustomEvent('select', {
          detail: { [name]: _customSelect.value },
          bubbles: true,
        }),
      );
    });
  }
}
