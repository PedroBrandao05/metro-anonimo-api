import { inject, injectable } from "inversify";
import 'reflect-metadata'
import { IDeleteLocationService } from "../../../domain/useCases/Location/DeleteLocationService";
import ILocationRepository from "../../../domain/repositories/Location";
import { LocationServiceDTO } from "../../../domain/useCases/Location/Location";
import ApplicationError from "../../../domain/errors/ApplicationError";

@injectable()
export default class DeleteLocationsService implements IDeleteLocationService {
    constructor (
        @inject('ILocationRepository') private readonly locationRepository: ILocationRepository
    ){}

    async execute(input: LocationServiceDTO.DeleteLocationInput): Promise<void> {
        const exists = await this.locationRepository.getById(input.locationId)
        if (!exists) throw new ApplicationError("This location doesn't exists", 400)
        await this.locationRepository.delete(input.locationId)
    }
}