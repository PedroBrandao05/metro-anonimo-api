import { AuthServiceDTO } from "./Auth";

export default interface ISaveUserService {
    execute (): Promise<AuthServiceDTO.SaveUserOutput>
}