import { sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import ITokenGenerator, { TokenPayload } from '../../application/contracts/TokenGenerator';
import { injectable } from 'inversify';
import 'reflect-metadata'

dotenv.config();

@injectable()
export default class TokenGenerator implements ITokenGenerator {
  private readonly key: string;

  constructor() {
    this.key = process.env.JWT_KEY!;
  }

  generate(payload: TokenPayload) {
    return sign(payload, this.key);
  }

  verify(token: string) {
    return verify(token, this.key) as TokenPayload;
  }
}