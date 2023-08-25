import Sinon from "sinon";
import ISaveUserService from "../../../src/domain/useCases/Auth/SaveUserService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import UserRepository from "../../../src/infra/repositories/User";

let sutAuth : ISaveUserService

beforeAll(async () => {
    await connect()
    sutAuth = IocContainer.get<ISaveUserService>('ISaveUserService')
})

it('should save an user', async () => {
    const spy = Sinon.spy(UserRepository.prototype, 'save')
    const {token} = await sutAuth.execute()
    console.log(token)
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})