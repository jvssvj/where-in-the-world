export interface CountryInterface {
    flags: {
        svg: string
    }
    name: {
        common: string
        official: string
    }
    population: number
    region: string
    subregion: string
    capital: string
    continents: string[]
    borders?: string[]
    tld: string
    cca3: string
    currencies?: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    languages: string
    fifa: string
}