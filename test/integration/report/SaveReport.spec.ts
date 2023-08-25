import ISaveReportService from "../../../src/domain/useCases/Report/SaveReportService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: ISaveReportService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<ISaveReportService>('ISaveReportService')
})

it.skip('should save a report', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'save')
    const input : ReportServiceDTO.SaveReportInput = {
        title: "Cuidado na estação",
        description: "Homem misterioso está assediando as mulheres cuidado",
        station: "Itaquera - Linha Vermelha",
        district: "Itaquera",
        referencePoint: "Próximo ao elevador da estação",
        userId: "ba04c88b-4212-44a9-b019-b5440dca70bd"
    } 
    await sutReport.execute(input)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})