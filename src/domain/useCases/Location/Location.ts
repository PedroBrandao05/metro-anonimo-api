/* eslint-disable @typescript-eslint/no-namespace */
export namespace LocationServiceDTO {
    export type SaveLocationInput = {
        station: string,
        district: string
    }

    export type GetLocationsOutput = {
        id: string,
        station: string,
        district: string
    }[]

    export type DeleteLocationInput = {
        locationId: string
    }
}