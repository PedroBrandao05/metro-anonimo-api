/* eslint-disable @typescript-eslint/no-namespace */

import { Media } from "../../entities/Report"

export namespace ReportServiceDTO {
    export type SaveReportInput = {
        title: string,
        description: string,
        station: string,
        district: string,
        referencePoint: string,
    }

    export type SaveReportOutput = {
        token: string,
        signature: string
    }

    export type GetReportsInput = {
        token: string
    }

    export type GetReportsOutput = {
        title: string,
        description: string,
        station: string,
        district: string,
        referencePoint: string,
        signature: string,
        postDate: string,
        media: Media[]
    }[]

    export type AddUpvoteInput = {
        token: string
    }

    export type RemoveUpvoteInput = {
        token: string
    }

    export type UpdateReportInput = {
        title: string,
        description: string,
    }
}