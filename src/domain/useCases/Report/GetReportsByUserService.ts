import { ReportServiceDTO } from "./Report";

export default interface IGetReportByUserService {
    execute (input: ReportServiceDTO.GetReportsByUserInput): Promise<ReportServiceDTO.GetReportsOutput>
}