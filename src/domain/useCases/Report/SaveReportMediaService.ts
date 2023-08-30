import { ReportServiceDTO } from "./Report";

export default interface ISaveReportMediaService {
    execute (input: ReportServiceDTO.SaveReportMediaInput): Promise<void>
}