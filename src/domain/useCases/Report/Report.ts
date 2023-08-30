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

    export type SaveReportOutput = {
        reportId: string
    }

    export type SaveReportMediaInput = {
        id: string
        media: Media[]
    }

    export type RemoveReportMediaInput = {
        id: string
        media: Media[]
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

    export type GetReportsInput = {
        token: string
    }

    export type GetReportsOutput = {
        title: string,
        description: string,
        location: {
            station: string,
            district: string,
            referencePoint?: string,
        }
        userVoted: boolean,
        upvotes: number,
        postDate: string,
        media: Media[]
    }[]

    export type GetReportsByStationInput = {
        station: string
        token: string
    }

    export type GetReportsByUserInput = {
        token: string
    }

    export type DeleteReportInput = {
        reportId: string
        userId: string
    }
}