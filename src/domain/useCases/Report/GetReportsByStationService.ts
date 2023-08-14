import { ReportServiceDTO } from "./Report";

export default interface IGetReportsByStationService {
    execute (input: ReportServiceDTO.GetReportsByStationInput): Promise<ReportServiceDTO.GetReportsOutput>
}