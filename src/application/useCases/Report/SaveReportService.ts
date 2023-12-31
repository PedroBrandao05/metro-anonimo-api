import { inject, injectable } from "inversify";
import 'reflect-metadata'
import ISaveReportService from "../../../domain/useCases/Report/SaveReportService";
import Usecase from "../../contracts/Usecase";
import IReportRepository from "../../../domain/repositories/Reports";
import { ReportServiceDTO } from "../../../domain/useCases/Report/Report";
import IUUIDGenerator from "../../contracts/UUIDGenerator";
import Report from "../../../domain/entities/Report";

@injectable()
export default class SaveReportService implements ISaveReportService, Usecase {
    constructor (
        @inject('IReportRepository') private readonly reportRepository: IReportRepository,
        @inject('IUUIDGenerator') private readonly uuidGenerator: IUUIDGenerator
    ){}

    async execute(input: ReportServiceDTO.SaveReportInput): Promise<ReportServiceDTO.SaveReportOutput> {
        const reportId = this.uuidGenerator.generate()
        const report = Report.create(reportId, input.title, input.description, input.userId, {station: input.station.toLowerCase(), district: input.description.toLowerCase(), referencePoint: input.referencePoint}, [])
        await this.reportRepository.save(report)
        return {reportId}
    }
}