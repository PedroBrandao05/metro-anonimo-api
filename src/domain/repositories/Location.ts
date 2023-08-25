import Location from "../entities/Location"

export default interface ILocationRepository {
    save (location: Location): Promise<void>
    getById (id: string): Promise<Location | undefined>
    getAll (): Promise<Location[]>
    getByStation (station: string): Promise<Location | undefined>
    delete (id: string): Promise<void>
}