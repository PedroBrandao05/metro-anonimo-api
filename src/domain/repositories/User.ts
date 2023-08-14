import User from "../entities/User";

export default interface IUserRepository {
    save (user: User): Promise<void>
    delete (id: string): Promise<void>
}