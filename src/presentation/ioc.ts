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

const IocContainer = new Container()
IocContainer.bind<IUUIDGenerator>('IUUIDGenerator').to(UUIDGenerator)
IocContainer.bind<ITokenGenerator>('ITokenGenerator').to(TokenGenerator)
IocContainer.bind<IReportRepository>('IReportRepository').to(ReportRepository)
IocContainer.bind<ILocationRepository>('ILocationRepository').to(LocationRepository)
IocContainer.bind<IUserRepository>('IUserRepository').to(UserRepository)

export default IocContainer