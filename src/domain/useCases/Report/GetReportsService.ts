import { ReportServiceDTO } from "./Report";

export default interface IGetReportsService {
    execute (): Promise<ReportServiceDTO.GetReportsOutput>
}