import { inject, injectable } from "inversify";
import 'reflect-metadata'
import { IDeleteLocationService } from "../../../domain/useCases/Location/DeleteLocationService";
import ILocationRepository from "../../../domain/repositories/Location";
import { LocationServiceDTO } from "../../../domain/useCases/Location/Location";

@injectable()
export default class DeleteLocationsService implements IDeleteLocationService {
    constructor (
        @inject('ILocationRepository') private readonly locationRepository: ILocationRepository
    ){}

    async execute(input: LocationServiceDTO.DeleteLocationInput): Promise<void> {
        await this.locationRepository.delete(input.locationId)
    }
}