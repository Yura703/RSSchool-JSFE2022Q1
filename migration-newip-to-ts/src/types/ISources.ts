import { CategoryType } from "./categoryType";
import { CountryType } from "./countryType";
import { LanguageType } from "./languageType";

export interface ISources {
    status: 'ok';
    sources: [
        {
            id: string;
            name: string;
            description: string;
            url: string;
            category: CategoryType;
            language: LanguageType;
            country: CountryType;
        }
    ];
}

export type SourcesType = Pick<ISources, 'sources'>["sources"];
