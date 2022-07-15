/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export class NoUiSlider {
    name: string;

    constructor(target: string | HTMLElement, minValue: number, maxValue: number, name: string) {
        this.name = name;
        const inputDiv0 = document.createElement('div') as HTMLInputElement;
        const inputDiv1 = document.createElement('div') as HTMLInputElement;
        const slider: noUiSlider.target = document.createElement('div');
        const inputs = [inputDiv0, inputDiv1];

        this.#create(slider, minValue, maxValue);
        this.#addListener(slider, inputs, this.name);

        if (target instanceof HTMLElement) {
            target.append(inputDiv0, inputDiv1, slider);
        } else {
            document.querySelector(target)?.append(inputDiv0, inputDiv1, slider);
        }
    }

    #create(slider: noUiSlider.target, minValue: number, maxValue: number) {
        noUiSlider.create(slider, {
            start: [minValue, maxValue],
            connect: true,
            tooltips: true,
            range: {
                min: [minValue],
                max: maxValue,
            },
            format: {
                to: function (value) {
                    return Math.floor(value);
                },
                from: function (value) {
                    return Math.floor(+value);
                },
            },
        });
    }

    #addListener(slider: noUiSlider.target, inputs: HTMLInputElement[], name: string) {
        slider.noUiSlider?.on('change.one', function ([value1, value2]) {
            slider.dispatchEvent(
                new CustomEvent('slider', {
                    detail: { value1, value2, name },
                    bubbles: true,
                })
            );
        });

        if (!slider) return;
        slider.noUiSlider!.on('update', function (values, handle) {
            inputs[handle].value = values[handle] as string;
        });

        inputs.forEach(function (input: HTMLInputElement, handle) {
            input.addEventListener('change', function () {
                slider.noUiSlider!.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function (e) {
                const values = slider.noUiSlider!.get() as string;
                const value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                const steps = slider.noUiSlider!.steps();

                // [down, up]
                const step = steps[handle];

                let position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {
                    case 13:
                        slider.noUiSlider!.setHandle(handle, this.value);
                        break;

                    case 38:
                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            slider.noUiSlider!.setHandle(handle, value + position);
                        }

                        break;

                    case 40:
                        position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            slider.noUiSlider!.setHandle(handle, value - position);
                        }

                        break;
                }
            });
        });
    }
}
