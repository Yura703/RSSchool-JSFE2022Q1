import { CategoryType } from "./categoryType";
import { CountryType } from "./countryType";
import { LanguageType } from "./languageType";
import { Status } from "./statusEnum";

export interface ISources {
    status: Status.ok;
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
