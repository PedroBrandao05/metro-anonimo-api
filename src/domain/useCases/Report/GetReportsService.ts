import { ReportServiceDTO } from "./Report";

export default interface IGetReportsService {
    execute (input: ReportServiceDTO.GetReportsInput): Promise<ReportServiceDTO.GetReportsOutput>
}