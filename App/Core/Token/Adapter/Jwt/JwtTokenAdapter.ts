import * as jwt from 'jsonwebtoken';

import { TokenVerificationError } from '../../Error/TokenVerificationError';
import { ITokenAdapter } from '../../ITokenAdapter';

class JwtTokenAdapter implements ITokenAdapter {
  public constructor(
    private readonly jwtSecretKey: string
  ) {}

  public async verify(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.jwtSecretKey, (err) => {
        if (err !== null && err !== undefined) {
          const verificationError = new TokenVerificationError(err.message, err);

          reject(verificationError);

          return;
        }

        resolve();
      });
    });
  }
} 

export { JwtTokenAdapter };
