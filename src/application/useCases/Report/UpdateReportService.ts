import { inject, injectable } from "inversify";
import 'reflect-metadata'
import IUpdateReportService from "../../../domain/useCases/Report/UpdateReportService";
import Usecase from "../../contracts/Usecase";
import IReportRepository from "../../../domain/repositories/Reports";
import { ReportServiceDTO } from "../../../domain/useCases/Report/Report";
import ApplicationError from "../../../domain/errors/ApplicationError";
import Report from "../../../domain/entities/Report";


@injectable()
export default class SaveReportService implements IUpdateReportService, Usecase {
    constructor (
        @inject('IReportRepository') private readonly reportRepository: IReportRepository,
    ){}

    async execute(input: ReportServiceDTO.UpdateReportInput): Promise<void> {
        const exists = await this.reportRepository.getById(input.reportId)
        if (!exists) throw new ApplicationError("This report does not exists", 400)
        if (input.userId !== exists.userId) throw new ApplicationError("This user can't edit this report", 400)
        const report = Report.create(exists.id, input.title, input.description, input.userId, {station: input.station, district: input.description, referencePoint: input.referencePoint}, exists.media)
        report.setUpvotes(exists.getUpvotes())
        await this.reportRepository.update(report)
    }
}