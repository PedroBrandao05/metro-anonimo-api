/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {inject, injectable} from 'inversify'
import 'reflect-metadata'
import IHTTPServer from '../../application/contracts/HTTPServer'
import IMediaHandler from '../../application/contracts/MediaHandler'
import UsecaseFactory from '../factory/UsecaseFactory'
import findFilesInDirectory from '../../application/utils/findFilesInDirectory'

export default class HTTPController {
    constructor (
        private readonly httpServer: IHTTPServer,
        private readonly mediaHandler: IMediaHandler,
        private readonly usecaseFactory: UsecaseFactory
    ){
        httpServer.on("post", "/signup", async (params: any, body: any, headers: any) => {
            const SaveUser = usecaseFactory.createSaveUser()
            const output = await SaveUser.execute()
            return {code: 201, response: output}
        })

        httpServer.on("post", "/save-location", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const SaveLocation = usecaseFactory.createSaveLocation()
            const output = await SaveLocation.execute(body)
            return {code: 201, response: output}
        })

        httpServer.on("get", "/get-locations", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            const GetLocations = usecaseFactory.createGetLocations()
            const output = await GetLocations.execute({token})
            return {code: 200, response: output}
        })

        httpServer.on("delete", "/delete-location", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const DeleteLocation = usecaseFactory.createDeleteLocation()
            const output = await DeleteLocation.execute(body)
            return {code: 200, response: output}
        })

        httpServer.on("post", "/save-report", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const SaveReport = usecaseFactory.createSaveReport()
            const output = await SaveReport.execute(body)
            return {code: 201, response: output}
        })

        httpServer.middleware("patch", "/save-report-media/:id", mediaHandler.save('array', 'files'), async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            const files = await findFilesInDirectory('temp')
            const media = files.map((file) => {return {url: file}})
            const input = {...params, token, media}
            const SaveReportMedia = usecaseFactory.createSaveReportMedia()
            const output = await SaveReportMedia.execute(input)
            return {code: 204, response: output}
        })

        httpServer.on("patch", "/remove-report-media",  async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const RemoveReportMedia = usecaseFactory.createRemoveReportMedia()
            const output = await RemoveReportMedia.execute(body)
            return {code: 204, response: output}
        })

        httpServer.on("get", "/get-reports", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            const GetReports = usecaseFactory.createGetReports()
            const output = await GetReports.execute({token})
            return {code: 200, response: output}
        })

        httpServer.on("post", "/get-reports-by-station", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const GetReportsByStation = usecaseFactory.createGetReportsByStation()
            const output = await GetReportsByStation.execute(body)
            return {code: 200, response: output}
        })

        httpServer.on("get", "/get-reports-by-user", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            const GetReportsByStation = usecaseFactory.createGetReportsByStation()
            const output = await GetReportsByStation.execute({token})
            return {code: 200, response: output}
        })

        httpServer.on("patch", "/update-report", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const UpdateReport = usecaseFactory.createUpdateReport()
            const output = await UpdateReport.execute(body)
            return {code: 204, response: output}
        })

        httpServer.on("delete", "/delete-report", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const DeleteReport = usecaseFactory.createDeleteReport()
            const output = await DeleteReport.execute(body)
            return {code: 201, response: output}
        })

        httpServer.on("patch", "/upvote-report", async (params: any, body: any, headers: any) => {
            const token = headers.authorization
            body.token = token
            const UpvoteReport = usecaseFactory.createUpvoteReport()
            const output = await UpvoteReport.execute(body)
            return {code: 201, response: output}
        })
    }
}