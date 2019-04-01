import * as jwt from 'jsonwebtoken';

import { TokenGenerationError } from '../../Error/TokenGenerationError';
import { TokenVerificationError } from '../../Error/TokenVerificationError';
import { ITokenAdapter } from '../../ITokenAdapter';
import { IGenerateTokenCommand } from '../../Type/Command/IGenerateTokenCommand';
import { Token } from '../Entity/Token';

class JwtTokenAdapter implements ITokenAdapter {
  public constructor(private readonly jwtSecretKey: string) {}

  public async verify(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.jwtSecretKey, error => {
        if (error !== null && error !== undefined) {
          const verificationError = new TokenVerificationError(error.message, error);

          reject(verificationError);

          return;
        }

        resolve();
      });
    });
  }

  public async generate(command: IGenerateTokenCommand): Promise<Token> {
    return new Promise((resolve, reject) => {
      jwt.sign(command.Payload, this.jwtSecretKey, (error, token) => {
        if (error !== null && error !== undefined) {
          const generationError = new TokenGenerationError(error.message, error);

          reject(generationError);

          return;
        }

        resolve(Token.create(token));
      });
    });
  }
}

export { JwtTokenAdapter };
