import { ReportServiceDTO } from "./Report";

export default interface ISaveReportService {
    execute (input: ReportServiceDTO.SaveReportInput): Promise<ReportServiceDTO.SaveReportOutput>
}