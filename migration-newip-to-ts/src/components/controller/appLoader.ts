import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '22a4dc610b144c49860b8bc3dad51bb8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
