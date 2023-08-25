import IGetReportsByUserService from "../../../src/domain/useCases/Report/GetReportsByUserService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: IGetReportsByUserService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<IGetReportsByUserService>('IGetReportsByUserService')
})

it('should get reports from a specific user', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'getByUser')
    const input : ReportServiceDTO.GetReportsByUserInput = {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYTA0Yzg4Yi00MjEyLTQ0YTktYjAxOS1iNTQ0MGRjYTcwYmQiLCJpYXQiOjE2OTMwMDQ5NjN9.11OIfmlzFmAjeOMtHqE2QzKy_D2DHF7BDr3MKXU4D-o"
    } 
    await sutReport.execute(input)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})