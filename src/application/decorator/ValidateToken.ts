/* eslint-disable @typescript-eslint/no-explicit-any */
import ApplicationError from "../../domain/errors/ApplicationError";
import TokenGenerator from "../../infra/utils/TokenGenerator";
import Usecase from "../contracts/Usecase";

const tokenGenerator = new TokenGenerator()

export default class ValidateToken implements Usecase {
    constructor(
        private readonly usecase: Usecase
    ){}

    async execute(input: any): Promise<any> {
        if (!input.token) throw new ApplicationError("You must provide a token", 400)
        const [, token] = input.token.split(' ')
        const session = tokenGenerator.verify(token)
        if (!session) throw new ApplicationError("Invalid token", 400)
        return await this.usecase.execute(input)
    }
}