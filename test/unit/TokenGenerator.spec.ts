import ITokenGenerator from "../../src/application/contracts/TokenGenerator"
import IocContainer from "../../src/presentation/ioc"

describe("Token generator usage related tests", () => {
    it("should create a token", () => {
        const tokenGenerator = IocContainer.get<ITokenGenerator>('ITokenGenerator')
        const token = tokenGenerator.generate({userId: 'someid'})
        expect(token).toBeDefined()
    })

    it("should verify a token", () => {
        const tokenGenerator = IocContainer.get<ITokenGenerator>('ITokenGenerator')
        const token = tokenGenerator.generate({userId: 'someid'})
        const payload = tokenGenerator.verify(token)
        expect(payload.userId).toBe('someid')
    })
})