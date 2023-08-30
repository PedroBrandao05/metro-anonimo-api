import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import Usecase from '../../contracts/Usecase'
import IRemoveReportMediaService from '../../../domain/useCases/Report/RemoveReportMediaService'
import IStorage from '../../contracts/Storage'
import IReportRepository from '../../../domain/repositories/Reports'
import { ReportServiceDTO } from '../../../domain/useCases/Report/Report'
import ApplicationError from '../../../domain/errors/ApplicationError'

@injectable()
export default class RemoveReportMediaService implements IRemoveReportMediaService, Usecase {
    constructor(
        @inject('IStorage') private readonly storage: IStorage,
        @inject('IReportRepository') private readonly reportRepository: IReportRepository
    ){}

    async execute(input: ReportServiceDTO.RemoveReportMediaInput): Promise<void> {
        const report = await this.reportRepository.getById(input.id)
        if (!report) throw new ApplicationError("This report doesn't exist", 400)
        for (const media of input.media) {
            await this.storage.remove(media.url)
            const index = report.media.findIndex(mediaInreport => mediaInreport.url === media.url)
            report.media.splice(index, 1)
        }
        await this.reportRepository.update(report)
    }
}