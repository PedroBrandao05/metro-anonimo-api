import ApplicationError from "../../src/domain/errors/ApplicationError"
import UUIDGenerator from "../../src/infra/utils/UUIDGenerator"

describe('UUIDGenerator class related tests', () => {
    it ("should generate an uuid", () => {
        const uuid = new UUIDGenerator()
        expect(uuid.generate()).toBeDefined()
    })
    it ("should throw an error for an unvalid uuid", () => {
        const uuid = new UUIDGenerator()
        const id = "a50-really321-messed32-up312-uuid21"
        expect(() => uuid.verify(id)).toThrow(new ApplicationError("Invalid UUID", 400))
    })
})