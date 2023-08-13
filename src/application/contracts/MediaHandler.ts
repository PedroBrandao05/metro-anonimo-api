import { Request, Response } from 'express'

export interface IMediaHandler {
  upload (request: Request, res: Response): Promise<void>
}