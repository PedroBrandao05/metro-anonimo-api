import Location from "../entities/Location"

export default interface ILocationRepository {
    save (location: Location): Promise<void>
    getByStation (station: string): Promise<Location[]>
    getByReport (reportId: string): Promise<Location | undefined>
    delete (id: string): Promise<void>
}