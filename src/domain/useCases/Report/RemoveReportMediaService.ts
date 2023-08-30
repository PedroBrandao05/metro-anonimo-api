import { ReportServiceDTO } from "./Report";

export default interface IRemoveReportMediaService {
    execute (input: ReportServiceDTO.RemoveReportMediaInput): Promise<void>
}