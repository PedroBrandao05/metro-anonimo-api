/* eslint-disable @typescript-eslint/no-namespace */

import { Media } from "../../entities/Report"

export namespace ReportServiceDTO {
    export type SaveReportInput = {
        title: string,
        description: string,
        station: string,
        district: string,
        referencePoint: string,
        userId: string
    }

    export type SaveReportMedia = {
        urls: Media[]
    }

    export type UpdateReportInput = {
        userId: string,
        reportId: string,
        title: string,
        description: string,
        station: string,
        district: string,
        referencePoint: string,
    }

    export type UpvoteReportInput = {
        userId: string,
        reportId: string
    }

    export type GetReportsOutput = {
        title: string,
        description: string,
        station: string,
        district: string,
        referencePoint: string,
        userVoted: boolean,
        upvotes: number,
        postDate: string,
        media: Media[]
    }[]

    export type GetReportsByStationInput = {
        station: string
    }

    export type GetReportsByUserInput = {
        userId: string
    }

    export type DeleteReportInput = {
        reportId: string
    }
}