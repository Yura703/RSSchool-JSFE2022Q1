export class Bucket {
    numberDiv: HTMLElement;

    countInBucket: number;

    constructor(countInBucket: number) {
        this.countInBucket = countInBucket;
        this.numberDiv = document.getElementById('bucket-count')!;
        this.#addListener();
    }

    #addListener() {
        const btnBucket = document.querySelectorAll('button.cart-button');

        btnBucket.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('cart-button-basket');

                if (this.countInBucket === 20 && btn.classList.contains('cart-button-basket')) {
                    btn.classList.toggle('cart-button-basket');
                    alert('Извините, все слоты заполнены');
                    return;
                }

                if (btn.classList.contains('cart-button-basket')) {
                    (btn as HTMLButtonElement).innerText = 'Delete from basket';
                    this.numberDiv.innerText = this.#upOrDownCount(true);
                } else {
                    (btn as HTMLButtonElement).innerText = 'Add to basket';
                    this.numberDiv.innerText = (--this.countInBucket).toString();
                }
            });
        });
    }

    #upOrDownCount(upOrDown: boolean): string {
        if (upOrDown) {
            ++this.countInBucket;
        } else {
            --this.countInBucket;
        }

        return this.countInBucket.toString();
    }
}
