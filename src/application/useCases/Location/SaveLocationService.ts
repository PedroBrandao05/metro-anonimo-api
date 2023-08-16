import ISaveLocationService from "../../../domain/useCases/Location/SaveLocationService";
import { injectable, inject } from "inversify";
import 'reflect-metadata'
import IUUIDGenerator from "../../contracts/UUIDGenerator";
import ILocationRepository from "../../../domain/repositories/Location";
import { LocationServiceDTO } from "../../../domain/useCases/Location/Location";
import Usecase from "../../contracts/Usecase";
import ApplicationError from "../../../domain/errors/ApplicationError";
import Location from "../../../domain/entities/Location";

@injectable()
export default class SaveLocationService implements ISaveLocationService, Usecase {
    constructor (
        @inject('IUUIDGenerator') private readonly uuidGenerator: IUUIDGenerator,
        @inject('ILocationRepository') private readonly locationRepository: ILocationRepository
    ){}

    async execute(input: LocationServiceDTO.SaveLocationInput): Promise<void> {
        const exists = await this.locationRepository.getByStation(input.station)
        if (exists) throw new ApplicationError("This location already exists", 400)
        const location = new Location(this.uuidGenerator.generate(), input.district, input.station)
        await this.locationRepository.save(location)
    }
}