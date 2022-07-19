import { IProduct } from '../../types/IProduct';
import './style.scss';

export function drawProducts(products: IProduct, idHTMLElement: string) {
    const base = document.getElementById(idHTMLElement) as HTMLElement;

    const divCar = document.createElement('div');
    divCar.classList.add('cart');

    const carFoto = document.createElement('div');
    carFoto.style.backgroundImage = `url(${products.image})`;

    const carTitle = document.createElement('h3');
    carTitle.innerText = products.title + ' - ' + products.make;

    const carPrice = document.createElement('p');
    carPrice.innerText = 'Price: ' + products.price.toString() + '.000 $';

    const carVehicle = document.createElement('p');
    carVehicle.innerText = 'Vehicle Type: ' + products.vehicle + '; ' + 'Color: ' + products.color;

    const carYear = document.createElement('p');
    carYear.innerText = `Year: ${products.year}, Type fuel: ${products.fuel}`;

    const carCount = document.createElement('span');
    carCount.innerText = 'Count: ' + products.count.toString();

    const btn = document.createElement('button');
    btn.classList.add('cart-button');
    btn.innerText = 'Add to backet';
    btn.name = products.id;

    divCar.append(carFoto);
    divCar.append(carTitle);
    divCar.append(carPrice);
    divCar.append(carYear);
    divCar.append(carVehicle);
    divCar.append(carCount);
    divCar.append(btn);

    if (products.favorites) {
        const CarFavorit = document.createElement('div');
        CarFavorit.innerText = 'Favorite';
        CarFavorit.classList.add('cart-favorite');
        divCar.append(CarFavorit);
    }

    base.append(divCar);
}
