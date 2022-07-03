export interface IResponse {
    status: 'ok';
    totalResults: number;
    articles: [
        {
            source: {
                id: string | null;
                name: string;
            };
            author: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
            content: string;
        }
    ];
}

export interface ISources {
    status: 'ok';
    sources: [
        {
            id: string;
            name: string;
            description: string;
            url: string;
            category: string; //!сделать тип
            language: string; //!сделать тип
            country: string; //!сделать тип
        }
    ];
}
