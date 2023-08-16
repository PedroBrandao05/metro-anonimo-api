import { LocationServiceDTO } from "./Location";

export default interface IGetLocationsService {
    execute (): Promise<LocationServiceDTO.GetLocationsOutput>
}