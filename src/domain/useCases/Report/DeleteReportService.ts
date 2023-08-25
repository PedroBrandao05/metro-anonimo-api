import { ReportServiceDTO } from "./Report";

export default interface IDeleteReportService {
    execute (input: ReportServiceDTO.DeleteReportInput): Promise<void>
}