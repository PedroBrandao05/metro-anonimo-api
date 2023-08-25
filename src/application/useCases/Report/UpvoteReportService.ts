import { inject, injectable } from "inversify";
import 'reflect-metadata'
import IUpvoteReportService from "../../../domain/useCases/Report/UpvoteReportService";
import Usecase from "../../contracts/Usecase";
import IReportRepository from "../../../domain/repositories/Reports";
import { ReportServiceDTO } from "../../../domain/useCases/Report/Report";
import ApplicationError from "../../../domain/errors/ApplicationError";

@injectable()
export default class UpvoteReportService implements IUpvoteReportService, Usecase {
    constructor (
        @inject('IReportRepository') private readonly reportRepository: IReportRepository
    ){}

    async execute(input: ReportServiceDTO.UpvoteReportInput): Promise<void> {
        const report = await this.reportRepository.getById(input.reportId)
        if (!report) throw new ApplicationError("This report doesn't exist", 400)
        if (report.getUpvotes().some(upvote => upvote.userId === input.userId)) throw new ApplicationError("This user already upvoted this report", 400)
        report.addUpvote({userId: input.userId})
        await this.reportRepository.update(report)
    }
}