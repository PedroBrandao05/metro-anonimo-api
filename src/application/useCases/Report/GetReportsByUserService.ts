import { injectable, inject } from "inversify";
import 'reflect-metadata'
import IGetReportsByUserService from "../../../domain/useCases/Report/GetReportsByUserService";
import Usecase from "../../contracts/Usecase";
import IReportRepository from "../../../domain/repositories/Reports";
import { ReportServiceDTO } from "../../../domain/useCases/Report/Report";
import ITokenGenerator from "../../contracts/TokenGenerator";
import Report from "../../../domain/entities/Report";
import convertDateToString from "../../utils/convertDateToString";

@injectable()
export default class GetReportsByUserService implements IGetReportsByUserService, Usecase {
    constructor (
        @inject('IReportRepository') private readonly reportRepository: IReportRepository,
        @inject('ITokenGenerator') private readonly tokenGenerator: ITokenGenerator
    ){}

    private toModel(report: Report, userId: string){
        const userVoted = report.getUpvotes().some(upvote => upvote.userId === userId)
        return {
            ...report,
            postDate: convertDateToString(report.postDate),
            userVoted,
            upvotes: report.getUpvotes().length
        }
    }

    async execute(input: ReportServiceDTO.GetReportsByUserInput): Promise<ReportServiceDTO.GetReportsOutput> {
        const [,token] = input.token.split(" ")
        const session = this.tokenGenerator.verify(token)

        const reports = await this.reportRepository.getByUser(session.userId)
        
        return reports.map(report => this.toModel(report, session.userId))
    }
}