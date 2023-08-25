import IDeleteReportService from "../../../src/domain/useCases/Report/DeleteReportService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: IDeleteReportService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<IDeleteReportService>('IDeleteReportService')
})

it('should delete a report', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'delete')
    const input : ReportServiceDTO.DeleteReportInput = {
       reportId: "e8022e23-2497-4862-b930-05bb9390772b",
       userId: "ba04c88b-4212-44a9-b019-b5440dca70bd"
    } 
    await sutReport.execute(input)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})