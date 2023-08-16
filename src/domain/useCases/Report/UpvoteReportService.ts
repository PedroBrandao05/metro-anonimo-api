import { ReportServiceDTO } from "./Report";

export default interface IUpvoteReportService {
    execute (input: ReportServiceDTO.UpvoteReportInput): Promise<void>
} 