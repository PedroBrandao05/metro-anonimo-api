import { ReportServiceDTO } from "./Report";

export default interface UpdateReportsService {
    execute (input: ReportServiceDTO.UpdateReportInput): Promise<void>
}