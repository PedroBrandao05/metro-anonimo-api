export type TokenPayload = {
    userId: string
}

export default interface ITokenGenerator {
    generate (payload: TokenPayload): string
    verify (token: string): TokenPayload
}