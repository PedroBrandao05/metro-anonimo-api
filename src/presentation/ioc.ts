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

const IocContainer = new Container()
IocContainer.bind<IUUIDGenerator>('IUUIDGenerator').to(UUIDGenerator)
IocContainer.bind<ITokenGenerator>('ITokenGenerator').to(TokenGenerator)
IocContainer.bind<IReportRepository>('IReportRepository').to(ReportRepository)
IocContainer.bind<ILocationRepository>('ILocationRepository').to(LocationRepository)
IocContainer.bind<IUserRepository>('IUserRepository').to(UserRepository)
IocContainer.bind<ISaveUserService>('ISaveUserService').to(SaveUserService)
IocContainer.bind<ISaveLocationService>('ISaveLocationService').to(SaveLocationService)
IocContainer.bind<IGetLocationsService>('IGetLocationsService').to(GetLocationsService)

export default IocContainer