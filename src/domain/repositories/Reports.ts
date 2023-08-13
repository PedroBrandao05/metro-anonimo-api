import Report from "../entities/Report"

export default interface IReportRepository {
    save (report: Report): Promise<void>
    getAll (): Promise<Report[]>
    getById (id: string): Promise<Report | undefined>
    getByStation (station: string): Promise<Report[]>
    update (report: Report): Promise<void>
    delete (id: string): Promise<void>
}