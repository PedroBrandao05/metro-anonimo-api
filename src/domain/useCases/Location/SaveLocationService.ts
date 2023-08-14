import { LocationServiceDTO } from "./Location";

export default interface ISaveLocationService {
    execute (input: LocationServiceDTO.SaveLocationInput): Promise<void>
}