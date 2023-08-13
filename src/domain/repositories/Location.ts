import Location from "../entities/Location"

export default interface ILocationRepository {
    save (location: Location): Promise<void>
    getAll (): Promise<Location[]>
    delete (id: string): Promise<void>
}