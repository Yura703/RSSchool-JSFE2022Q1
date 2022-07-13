import { IProduct } from '../types/IProduct';
import './style.scss';
//import '../assets/images/1.jpg';

export function drawProducts(products: IProduct, idHTMLElement: string) {
    const base = document.getElementById(idHTMLElement) as HTMLElement;
    const divCar = document.createElement('div');
    divCar.classList.add('cart');
    const carFoto = document.createElement('div');
    carFoto.style.background = 'red';
    const carTitle = document.createElement('h3');
    carTitle.innerText = products.title;
    const carPrice = document.createElement('p');
    carPrice.innerText = products.price.toString();
    const carYear = document.createElement('p');
    carYear.innerText = products.year;
    const carCount = document.createElement('p');
    carCount.innerText = products.count.toString();

    divCar.append(carFoto);
    divCar.append(carTitle);
    divCar.append(carPrice);
    divCar.append(carYear);
    divCar.append(carCount);
    base.append(divCar);
}
