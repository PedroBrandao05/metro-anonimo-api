import IGetReportsByStationService from "../../../src/domain/useCases/Report/GetReportsByStationService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: IGetReportsByStationService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<IGetReportsByStationService>('IGetReportsByStationService')
})

it.skip('should get reports from a specific station', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'getByStation')
    const input : ReportServiceDTO.GetReportsByStationInput = {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYTA0Yzg4Yi00MjEyLTQ0YTktYjAxOS1iNTQ0MGRjYTcwYmQiLCJpYXQiOjE2OTMwMDQ5NjN9.11OIfmlzFmAjeOMtHqE2QzKy_D2DHF7BDr3MKXU4D-o",
        station: "Itaquera - Linha Vermelha"
    } 
    await sutReport.execute(input)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})