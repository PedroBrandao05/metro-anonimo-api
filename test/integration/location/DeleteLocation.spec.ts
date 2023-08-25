import Sinon from "sinon";
import {IDeleteLocationService} from "../../../src/domain/useCases/Location/DeleteLocationService";
import { connect, disconnect } from "../../../src/infra/database/MongooseConfig";
import IocContainer from "../../../src/presentation/ioc";
import LocationRepository from "../../../src/infra/repositories/Location";

let sutLocation : IDeleteLocationService

beforeAll(async () => {
    await connect()
    sutLocation = IocContainer.get<IDeleteLocationService>('IDeleteLocationService')
})

it('should Delete a location', async () => {
    const spy = Sinon.spy(LocationRepository.prototype, 'delete')
    await sutLocation.execute({locationId: "bc76d474-3cde-4a44-84a0-dff8358d70a4"})
    expect(spy.calledOnce).toBeTruthy()
})

afterAll(async () => {
    await disconnect()
})