import Report from "../../src/domain/entities/Report"
import ApplicationError from "../../src/domain/errors/ApplicationError"
import Hasher from "../../src/infra/utils/Hasher"
import UUIDGenerator from "../../src/infra/utils/UUIDGenerator"

describe("Report usage related tests", () => {
    it ("should create a Report", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        expect(report).toBeInstanceOf(Report)
    })

    it("should add one to upvotes", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        report.addUpvote()
        expect(report.getUpvotes()).toBe(1)
    })

    it("should subtract one from upvotes", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        report.addUpvote()
        report.removeUpvote()
        expect(report.getUpvotes()).toBe(0)
    })

    it("should set a new upvote number", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        report.setUpvote(30)
        expect(report.getUpvotes()).toBe(30)
    })

    it("should throw an error when removing an upvote from a report that doesn't have any upvotes", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        expect(() => report.removeUpvote()).toThrow(new ApplicationError("Upvotes must be greater or equal to zero", 400))
    })

    it("should throw error when setting a negative number to upvotes", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const signature = new Hasher().generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            signature,
            location,
            [{url: "Link para uma imagem"}]
        )
        expect(() => report.setUpvote(-3)).toThrow(new ApplicationError("Upvotes must be greater or equal to zero", 400))
    })
})