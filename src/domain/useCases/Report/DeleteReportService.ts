import { ReportServiceDTO } from "./Report";

export default interface DeleteReportService {
    execute (input: ReportServiceDTO.DeleteReportInput): Promise<void>
}