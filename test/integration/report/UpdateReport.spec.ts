import IUpdateReportService from "../../../src/domain/useCases/Report/UpdateReportService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: IUpdateReportService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<IUpdateReportService>('IUpdateReportService')
})

it.skip('should update a report', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'update')
    const input : ReportServiceDTO.UpdateReportInput = {
        reportId: "f1b0989a-361e-4df4-8764-30e9c8accd58",
        title: "Cuidado na estação Itaquera",
        description: "Tomem cuidado ao usar o elevador do metrô itaquera",
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