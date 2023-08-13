import { injectable } from "inversify";
import 'reflect-metadata'
import multer, { Multer } from 'multer'
import MulterConfig from "./MulterConfig";
import { IMediaHandler } from "../../application/contracts/MediaHandler";
import { Request, Response } from "express";
import ApplicationError from "../../domain/errors/ApplicationError";

@injectable()
export default class MediaHandler implements IMediaHandler {
    private multer: Multer

    constructor ()
    { this.multer = multer(MulterConfig) }

    async upload(request: Request, res: Response): Promise<void> {
      this.multer.array('media')(request, res, err => {
        if (err) throw new ApplicationError("Failed to upload file", 400)
      })
    }
}