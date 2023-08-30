/* eslint-disable @typescript-eslint/no-unused-vars */
import IHTTPServer from "../application/contracts/HTTPServer";
import IMediaHandler from "../application/contracts/MediaHandler";
import { connect } from "../infra/database/MongooseConfig";
import UsecaseFactory from "../infra/factory/UsecaseFactory";
import HTTPController from "../infra/http/HTTPController";
import IocContainer from "./ioc";

const initApp = async () => {
    await connect()
    const httpServer = IocContainer.get<IHTTPServer>('IHTTPServer')
    const mediaHandler = IocContainer.get<IMediaHandler>('IMediaHandler')
    const usecaseFactory = IocContainer.get<UsecaseFactory>('UsecaseFactory')
    const controller = new HTTPController(httpServer, mediaHandler, usecaseFactory)
    httpServer.listen(3000, () => console.log("Server listening at port 3000"))
}

initApp()