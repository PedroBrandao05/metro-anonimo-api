import Report from "../../src/domain/entities/Report"
import UUIDGenerator from "../../src/infra/utils/UUIDGenerator"

describe("Report usage related tests", () => {
    it ("should create a Report", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const userId = uuidGenerator.generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            userId,
            location,
            [{url: "Link para uma imagem"}]
        )
        expect(report).toBeInstanceOf(Report)
    })

    it("should add an upvote", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const userId = uuidGenerator.generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            userId,
            location,
            [{url: "Link para uma imagem"}]
        )
        report.addUpvote({userId: uuidGenerator.generate()})
        expect(report.getUpvotes().length).toBe(1)
    })

    it("should remove an upvote", () => {
        const uuidGenerator = new UUIDGenerator()
        const id = uuidGenerator.generate()
        const userId = uuidGenerator.generate()
        const location = {station: "Linha Vermelha - Penha", district: "Penha", referencePoint: "Perto da catraca"}
        const report = Report.create(
            id,
            "Título da Denúncia",
            "Uma descrição bem detalhada",
            userId,
            location,
            [{url: "Link para uma imagem"}]
        )
        const exampleId = uuidGenerator.generate()

        report.addUpvote({userId: exampleId})
        report.removeUpvote(exampleId)
        expect(report.getUpvotes().length).toBe(0)
    })
})