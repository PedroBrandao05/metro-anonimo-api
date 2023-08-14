import User from "../../domain/entities/User";
import IUserRepository from "../../domain/repositories/User";
import { UserMongoDBModel } from "../database/models/User";

export default class UserRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        await UserMongoDBModel.create(user)
    }

    async getById(id: string): Promise<User | undefined> {
        const user = await UserMongoDBModel.findById(id)
        if (!user) return
        return new User(user.id)
    }

    async delete(id: string): Promise<void> {
        await UserMongoDBModel.findByIdAndDelete(id)
    }
}