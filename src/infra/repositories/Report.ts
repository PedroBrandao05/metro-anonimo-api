/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import 'reflect-metadata'
import IReportRepository from "../../domain/repositories/Reports";
import Report from "../../domain/entities/Report";
import { ReportMongoDBModel } from "../database/models/Report";

@injectable()
export default class ReportRepository implements IReportRepository {

    private toModel(data: any): Report {
        return Report.create(
            data.id,
            data.title,
            data.description,
            data.signature,
            data.location,
            data.media
        )
    }

    async save(report: Report): Promise<void> {
        await ReportMongoDBModel.create(report)
    }

    async getAll(): Promise<Report[]> {
        const reports = await ReportMongoDBModel.find()
        return reports.map((report) => this.toModel(report))
    }

    async getById(id: string): Promise<Report | undefined> {
        const report = await ReportMongoDBModel.findById(id)
        if (!report) return
        return this.toModel(report)
    }

    async getByStation(station: string): Promise<Report[]> {
        const reports = await ReportMongoDBModel.find({location: {station: station}})
        return reports.map((report) => this.toModel(report))
    }

    async delete(id: string): Promise<void> {
        await ReportMongoDBModel.findByIdAndDelete(id)
    }

    async update(report: Report): Promise<void> {
        await ReportMongoDBModel.findByIdAndUpdate(report)
    }
}