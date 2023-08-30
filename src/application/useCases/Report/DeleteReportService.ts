import { inject, injectable } from "inversify";
import 'reflect-metadata'
import IDeleteReportService from "../../../domain/useCases/Report/DeleteReportService";
import Usecase from "../../contracts/Usecase";
import IReportRepository from "../../../domain/repositories/Reports";
import { ReportServiceDTO } from "../../../domain/useCases/Report/Report";
import ApplicationError from "../../../domain/errors/ApplicationError";
import IStorage from "../../contracts/Storage";

@injectable()
export default class DeleteReportService implements IDeleteReportService, Usecase {
    constructor (
        @inject('IReportRepository') private readonly reportRepository: IReportRepository,
        @inject('IStorage') private readonly storage: IStorage
    ){}

    async execute(input: ReportServiceDTO.DeleteReportInput): Promise<void> {
        const report = await this.reportRepository.getById(input.reportId)
        if (!report) throw new ApplicationError("This report doesn't exist", 400)
        if (report.userId !== input.userId) throw new ApplicationError("This user is not the author of this report", 400)
        for (const media of report.media) {
            await this.storage.remove(media.url)
        }
        await this.reportRepository.delete(report.id)
    }
}