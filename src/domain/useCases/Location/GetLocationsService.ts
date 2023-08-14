import { LocationServiceDTO } from "./Location";

export interface IGetLocationService {
    execute (): Promise<LocationServiceDTO.GetLocationsOutput>
}