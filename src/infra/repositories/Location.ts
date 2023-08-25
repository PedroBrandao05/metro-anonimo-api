/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import 'reflect-metadata'
import { LocationMongoDBModel } from "../database/models/Location";
import ILocationRepository from "../../domain/repositories/Location";
import Location from "../../domain/entities/Location";

@injectable()
export default class LocationRepository implements ILocationRepository {

    private toModel(data: any): Location {
        return new Location(
            data.id,
            data.district,
            data.station
        )
    }

    async getAll(): Promise<Location[]> {
        const locations = await LocationMongoDBModel.find()
        return locations.map((location) => this.toModel(location))
    }

    async getById(id: string): Promise<Location | undefined> {
        const location = await LocationMongoDBModel.findOne({id})
        if (!location) return
        return this.toModel(location)
    }

    async getByStation(station: string): Promise<Location | undefined> {
        const location = await LocationMongoDBModel.findOne({station})
        if (!location) return
        return this.toModel(location)
    }

    async save(location: Location): Promise<void> {
        await LocationMongoDBModel.create(location)
    }

    async delete(id: string): Promise<void> {
        const location = await LocationMongoDBModel.findOne({id})
        await LocationMongoDBModel.findByIdAndDelete(location?._id)
    }
}