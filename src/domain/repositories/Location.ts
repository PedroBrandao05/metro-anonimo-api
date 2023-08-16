import Location from "../entities/Location"

export default interface ILocationRepository {
    save (location: Location): Promise<void>
    getAll (): Promise<Location[]>
    getByStation (station: string): Promise<Location | undefined>
    delete (id: string): Promise<void>
}