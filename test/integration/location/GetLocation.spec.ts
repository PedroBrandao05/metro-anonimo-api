import Sinon from "sinon";
import IGetLocationsService from "../../../src/domain/useCases/Location/GetLocationsService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import LocationRepository from "../../../src/infra/repositories/Location";

let sutLocation : IGetLocationsService

beforeAll(async () => {
    await connect()
    sutLocation = IocContainer.get<IGetLocationsService>('IGetLocationsService')
})

it('should get a location', async () => {
    const spy = Sinon.spy(LocationRepository.prototype, 'getAll')
    await sutLocation.execute()
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})