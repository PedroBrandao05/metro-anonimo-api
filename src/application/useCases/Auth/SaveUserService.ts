import { inject, injectable } from "inversify";
import 'reflect-metadata'
import ISaveUserService from "../../../domain/useCases/Auth/SaveUserService";
import IUserRepository from "../../../domain/repositories/User";
import Usecase from "../../contracts/Usecase";
import { AuthServiceDTO } from "../../../domain/useCases/Auth/Auth";
import ITokenGenerator from "../../contracts/TokenGenerator";
import IUUIDGenerator from "../../contracts/UUIDGenerator";
import User from "../../../domain/entities/User";

@injectable()
export default class SaveUserService implements ISaveUserService, Usecase {
    constructor (
        @inject('IUserRepository') private readonly userRepository: IUserRepository,
        @inject('ITokenGenerator') private readonly tokenGenerator: ITokenGenerator,
        @inject('IUUIDGenerator') private readonly uuidGenerator: IUUIDGenerator
    ){}

    async execute(): Promise<AuthServiceDTO.SaveUserOutput> {
        const id = this.uuidGenerator.generate()
        const token = this.tokenGenerator.generate({userId: id})
        const user = new User(id)
        await this.userRepository.save(user)
        return {
            token,
            userId: id
        }
    }
}