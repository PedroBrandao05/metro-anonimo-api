import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import ISaveUserService from '../../domain/useCases/Auth/SaveUserService'
import ISaveLocationService from '../../domain/useCases/Location/SaveLocationService'
import IGetLocationsService from '../../domain/useCases/Location/GetLocationsService'
import { IDeleteLocationService } from '../../domain/useCases/Location/DeleteLocationService'
import ISaveReportService from '../../domain/useCases/Report/SaveReportService'
import IUpdateReportService from '../../domain/useCases/Report/UpdateReportService'
import IGetReportsService from '../../domain/useCases/Report/GetReportsService'
import IGetReportsByStationService from '../../domain/useCases/Report/GetReportsByStationService'
import IGetReportByUserService from '../../domain/useCases/Report/GetReportsByUserService'
import IDeleteReportService from '../../domain/useCases/Report/DeleteReportService'
import IUpvoteReportService from '../../domain/useCases/Report/UpvoteReportService'
import ISaveReportMediaService from '../../domain/useCases/Report/SaveReportMediaService'
import IRemoveReportMediaService from '../../domain/useCases/Report/RemoveReportMediaService'
import ValidateToken from '../../application/decorator/ValidateToken'

@injectable()
export default class UsecaseFactory {
    constructor (
        @inject('ISaveUserService') private readonly SaveUserService : ISaveUserService,
        @inject('ISaveLocationService') private readonly SaveLocationService : ISaveLocationService,
        @inject('IGetLocationsService') private readonly GetLocationsService : IGetLocationsService,
        @inject('IDeleteLocationService') private readonly DeleteLocationService : IDeleteLocationService,
        @inject('ISaveReportService') private readonly SaveReportService : ISaveReportService,
        @inject('IUpdateReportService') private readonly UpdateReportService : IUpdateReportService,
        @inject('IGetReportsService') private readonly GetReportsService : IGetReportsService,
        @inject('IGetReportsByStationService') private readonly GetReportsByStationService : IGetReportsByStationService,
        @inject('IGetReportsByUserService') private readonly GetReportsByUserService : IGetReportByUserService,
        @inject('IDeleteReportService') private readonly DeleteReportService : IDeleteReportService,
        @inject('IUpvoteReportService') private readonly UpvoteReportService : IUpvoteReportService,
        @inject('ISaveReportMediaService') private readonly SaveReportMediaService : ISaveReportMediaService,
        @inject('IRemoveReportMediaService') private readonly RemoveReportMediaService : IRemoveReportMediaService
    ){}

    createSaveUser (){
        const usecase = this.SaveUserService
        return usecase
    }

    createSaveLocation (){
        const usecase = new ValidateToken(this.SaveLocationService)
        return usecase
    }

    createGetLocations (){
        const usecase = new ValidateToken(this.GetLocationsService)
        return usecase
    }

    createDeleteLocation (){
        const usecase = new ValidateToken(this.DeleteLocationService)
        return usecase
    }

    createSaveReport (){
        const usecase = new ValidateToken(this.SaveReportService)
        return usecase
    }

    createUpdateReport (){
        const usecase = new ValidateToken(this.UpdateReportService)
        return usecase
    }

    createGetReports (){
        const usecase = new ValidateToken(this.GetReportsService)
        return usecase
    }

    createGetReportsByStation (){
        const usecase = new ValidateToken(this.GetReportsByStationService)
        return usecase
    }

    createGetReportsByUser (){
        const usecase = new ValidateToken(this.GetReportsByUserService)
        return usecase
    }

    createDeleteReport (){
        const usecase = new ValidateToken(this.DeleteReportService)
        return usecase
    }

    createUpvoteReport (){
        const usecase = new ValidateToken(this.UpvoteReportService)
        return usecase
    }

    createSaveReportMedia (){
        const usecase = new ValidateToken(this.SaveReportMediaService)
        return usecase
    }

    createRemoveReportMedia (){
        const usecase = new ValidateToken(this.RemoveReportMediaService)
        return usecase
    }
}