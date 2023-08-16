/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Usecase {
    execute (input: any): Promise<any>
}