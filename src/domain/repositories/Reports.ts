export default interface IReportRepository {
    save (report: Report): Promise<void>
    getAll (): Promise<Report[]>
    getById (id: string): Promise<Report | undefined>
    delete (id: string): Promise<void>
}