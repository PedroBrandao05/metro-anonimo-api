import IUUIDGenerator from "../../application/contracts/UUIDGenerator";
import {v4 as uuid} from 'uuid'
import ApplicationError from "../../domain/errors/ApplicationError";

export default class UUIDGenerator implements IUUIDGenerator {
    
    generate(): string {
        return uuid()
    }

    verify(uuid: string): void {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
        if (!regexExp.test(uuid)) throw new ApplicationError("Invalid UUID", 400)
    }
}