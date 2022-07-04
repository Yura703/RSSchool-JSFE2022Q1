import { IResponse } from '../../types/IResponse';
import { ISources } from '../../types/ISources';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: IResponse['articles'] } | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: ISources['sources'] } | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
