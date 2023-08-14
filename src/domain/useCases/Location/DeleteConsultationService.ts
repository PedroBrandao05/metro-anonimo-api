import { LocationServiceDTO } from "./Location";

export interface IDeleteConsultationService {
    execute (input: LocationServiceDTO.DeleteLocationsInput): Promise<void>
}