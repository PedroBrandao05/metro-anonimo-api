import { ReportServiceDTO } from "./Report";

export default interface IUpdateReportService {
    execute (input: ReportServiceDTO.UpdateReportInput): Promise<void>
}