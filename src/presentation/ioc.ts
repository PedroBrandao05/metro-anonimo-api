import { Container } from 'inversify'
import 'reflect-metadata'
import IUUIDGenerator from '../application/contracts/UUIDGenerator'
import UUIDGenerator from '../infra/utils/UUIDGenerator'
import IReportRepository from '../domain/repositories/Reports'
import ReportRepository from '../infra/repositories/Report'
import ILocationRepository from '../domain/repositories/Location'
import LocationRepository from '../infra/repositories/Location'
import ITokenGenerator from '../application/contracts/TokenGenerator'
import TokenGenerator from '../infra/utils/TokenGenerator'
import IUserRepository from '../domain/repositories/User'
import UserRepository from '../infra/repositories/User'
import ISaveLocationService from '../domain/useCases/Location/SaveLocationService'
import SaveLocationService from '../application/useCases/Location/SaveLocationService'
import ISaveUserService from '../domain/useCases/Auth/SaveUserService'
import SaveUserService from '../application/useCases/Auth/SaveUserService'
import IGetLocationsService from '../domain/useCases/Location/GetLocationsService'
import GetLocationsService from '../application/useCases/Location/GetLocationsService'
import { IDeleteLocationService } from '../domain/useCases/Location/DeleteLocationService'
import DeleteLocationsService from '../application/useCases/Location/DeleteLocationService'
import ISaveReportService from '../domain/useCases/Report/SaveReportService'
import SaveReportService from '../application/useCases/Report/SaveReportService'
import IUpdateReportService from '../domain/useCases/Report/UpdateReportService'
import UpdateReportService from '../application/useCases/Report/UpdateReportService'
import IGetReportsService from '../domain/useCases/Report/GetReportsService'
import GetReportsService from '../application/useCases/Report/GetReportsService'
import IGetReportsByStationService from '../domain/useCases/Report/GetReportsByStationService'
import GetReportsByStationService from '../application/useCases/Report/GetReportsByStationService'
import IGetReportsByUserService from '../domain/useCases/Report/GetReportsByUserService'
import GetReportsByUserService from '../application/useCases/Report/GetReportsByUserService'
import IDeleteReportService from '../domain/useCases/Report/DeleteReportService'
import DeleteReportService from '../application/useCases/Report/DeleteReportService'
import IUpvoteReportService from '../domain/useCases/Report/UpvoteReportService'
import UpvoteReportService from '../application/useCases/Report/UpvoteReportService'
import IMediaHandler from '../application/contracts/MediaHandler'
import Multer from '../infra/mediaHandler/Multer'
import IStorage from '../application/contracts/Storage'
import S3Storage from '../infra/storage/S3'
import ISaveReportMediaService from '../domain/useCases/Report/SaveReportMediaService'
import SaveReportMediaService from '../application/useCases/Report/SaveReportMediaService'
import IRemoveReportMediaService from '../domain/useCases/Report/RemoveReportMediaService'
import RemoveReportMediaService from '../application/useCases/Report/RemoveReportMediaService'
import UsecaseFactory from '../infra/factory/UsecaseFactory'

const IocContainer = new Container()
IocContainer.bind<IUUIDGenerator>('IUUIDGenerator').to(UUIDGenerator)
IocContainer.bind<ITokenGenerator>('ITokenGenerator').to(TokenGenerator)
IocContainer.bind<IMediaHandler>('IMediaHandler').to(Multer)
IocContainer.bind<IStorage>('IStorage').to(S3Storage)
IocContainer.bind<IReportRepository>('IReportRepository').to(ReportRepository)
IocContainer.bind<ILocationRepository>('ILocationRepository').to(LocationRepository)
IocContainer.bind<IUserRepository>('IUserRepository').to(UserRepository)
IocContainer.bind<ISaveUserService>('ISaveUserService').to(SaveUserService)
IocContainer.bind<ISaveLocationService>('ISaveLocationService').to(SaveLocationService)
IocContainer.bind<IGetLocationsService>('IGetLocationsService').to(GetLocationsService)
IocContainer.bind<IDeleteLocationService>('IDeleteLocationService').to(DeleteLocationsService)
IocContainer.bind<ISaveReportService>('ISaveReportService').to(SaveReportService)
IocContainer.bind<IUpdateReportService>('IUpdateReportService').to(UpdateReportService)
IocContainer.bind<IGetReportsService>('IGetReportsService').to(GetReportsService)
IocContainer.bind<IGetReportsByStationService>('IGetReportsByStationService').to(GetReportsByStationService)
IocContainer.bind<IGetReportsByUserService>('IGetReportsByUserService').to(GetReportsByUserService)
IocContainer.bind<IDeleteReportService>('IDeleteReportService').to(DeleteReportService)
IocContainer.bind<IUpvoteReportService>('IUpvoteReportService').to(UpvoteReportService)
IocContainer.bind<ISaveReportMediaService>('ISaveReportMediaService').to(SaveReportMediaService)
IocContainer.bind<IRemoveReportMediaService>('IRemoveReportMediaService').to(RemoveReportMediaService)
IocContainer.bind<UsecaseFactory>('UsecaseFactory').to(UsecaseFactory)

export default IocContainer