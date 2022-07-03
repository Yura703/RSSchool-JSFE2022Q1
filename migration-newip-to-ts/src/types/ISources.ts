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
