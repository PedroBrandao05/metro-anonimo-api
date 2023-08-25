import IUpvoteReportService from "../../../src/domain/useCases/Report/UpvoteReportService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import Sinon from "sinon";
import ReportRepository from "../../../src/infra/repositories/Report";
import { ReportServiceDTO } from "../../../src/domain/useCases/Report/Report";

let sutReport: IUpvoteReportService

beforeAll(async () => {
    await connect()
    sutReport = IocContainer.get<IUpvoteReportService>('IUpvoteReportService')
})

it.skip('should upvote a report', async () => {
    const spy = Sinon.spy(ReportRepository.prototype, 'update')
    const input : ReportServiceDTO.UpvoteReportInput = {
       reportId: "f1b0989a-361e-4df4-8764-30e9c8accd58",
       userId: "37ffbce9-1063-4d2a-9617-6683a630db81"
    } 
    await sutReport.execute(input)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})