import { LocationServiceDTO } from "./Location";

export interface IDeleteLocationService {
    execute (input: LocationServiceDTO.DeleteLocationInput): Promise<void>
}