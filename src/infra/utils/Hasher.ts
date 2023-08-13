import IHasher from "../../application/contracts/Hasher";
import crypto from 'crypto'
import { injectable } from "inversify";
import 'reflect-metadata'

@injectable()
export default class Hasher implements IHasher {
    generate(): string {
        return crypto.randomBytes(10).toString('hex')
    }
}