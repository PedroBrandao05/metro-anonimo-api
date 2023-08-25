import Sinon from "sinon";
import ISaveLocationService from "../../../src/domain/useCases/Location/SaveLocationService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import LocationRepository from "../../../src/infra/repositories/Location";

let sutLocation : ISaveLocationService

beforeAll(async () => {
    await connect()
    sutLocation = IocContainer.get<ISaveLocationService>('ISaveLocationService')
})

it('should save a location', async () => {
    const spy = Sinon.spy(LocationRepository.prototype, 'save')
    await sutLocation.execute({station: "Penha - Linha Vermelha", district: "Penha"})
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})