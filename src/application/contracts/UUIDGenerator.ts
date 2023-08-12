export default interface IUUIDGenerator {
    generate (): string
    verify (id: string): void
}