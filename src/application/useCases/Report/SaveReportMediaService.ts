import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import Usecase from '../../contracts/Usecase'
import ISaveReportMediaService from '../../../domain/useCases/Report/SaveReportMediaService'
import IStorage from '../../contracts/Storage'
import IReportRepository from '../../../domain/repositories/Reports'
import { ReportServiceDTO } from '../../../domain/useCases/Report/Report'
import ApplicationError from '../../../domain/errors/ApplicationError'

@injectable()
export default class SaveReportMediaService implements ISaveReportMediaService, Usecase {
    constructor(
        @inject('IStorage') private readonly storage: IStorage,
        @inject('IReportRepository') private readonly reportRepository: IReportRepository
    ){}

    async execute(input: ReportServiceDTO.SaveReportMediaInput): Promise<void> {
        const report = await this.reportRepository.getById(input.id)
        if (!report) throw new ApplicationError("This report doesn't exist", 400)
        for (const media of input.media) {
            await this.storage.send(media.url)
            await this.storage.dispatch(media.url)
            report.media.push(media)
        }
        await this.reportRepository.update(report)
    }
}