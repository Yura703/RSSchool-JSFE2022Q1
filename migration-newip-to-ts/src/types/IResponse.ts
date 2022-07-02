export interface IResponse {
    status: string | number;
    totalResults: number;
    articles: [
        {
            source: {
                id: null;
                name: 'SiliconANGLE News';
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
