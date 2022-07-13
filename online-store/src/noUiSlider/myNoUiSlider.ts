/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const priceSlider = document.getElementById('price__slider') as noUiSlider.target;
const input0 = document.getElementById('input-with-keypress-0') as HTMLInputElement;
const input1 = document.getElementById('input-with-keypress-1') as HTMLInputElement;
const inputs = [input0, input1];

export function pricesSlider() {
    noUiSlider.create(priceSlider, {
        start: [0, 200],
        connect: true,
        tooltips: true,
        range: {
            min: [0],
            max: 200,
        },
    });
    if (!priceSlider) return;
    priceSlider.noUiSlider!.on('update', function (values, handle) {
        inputs[handle].value = values[handle] as string;
    });

    inputs.forEach(function (input: HTMLInputElement, handle) {
        input.addEventListener('change', function () {
            priceSlider.noUiSlider!.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {
            const values = priceSlider.noUiSlider!.get() as string;
            const value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            const steps = priceSlider.noUiSlider!.steps();

            // [down, up]
            const step = steps[handle];

            let position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {
                case 13:
                    priceSlider.noUiSlider!.setHandle(handle, this.value);
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
                        priceSlider.noUiSlider!.setHandle(handle, value + position);
                    }

                    break;

                case 40:
                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        priceSlider.noUiSlider!.setHandle(handle, value - position);
                    }

                    break;
            }
        });
    });
}
