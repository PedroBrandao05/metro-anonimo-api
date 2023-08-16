import { inject, injectable } from "inversify";
import 'reflect-metadata'
import IGetLocationsService from "../../../domain/useCases/Location/GetLocationsService";
import Usecase from "../../contracts/Usecase";
import ILocationRepository from "../../../domain/repositories/Location";
import { LocationServiceDTO } from "../../../domain/useCases/Location/Location";

@injectable()
export default class GetLocationsService implements IGetLocationsService, Usecase {
    constructor (
        @inject('ILocationRepository') private readonly locationRepository: ILocationRepository
    ){}

    async execute(): Promise<LocationServiceDTO.GetLocationsOutput> {
        const locations = await this.locationRepository.getAll()
        return locations
    }
}