import { JwtTokenAdapter } from './Adapter/Jwt/JwtTokenAdapter';
import { NoneTokenAdapter } from './Adapter/None/NoneTokenAdapter';
import { ITokenAdapter } from './ITokenAdapter';
import { TokenAdapters } from './TokenAdapters';

class TokenAdapterFactory {
  public static build(configuration: any): ITokenAdapter {
    const driver = configuration.authorisationTokenDriver as TokenAdapters;

    switch (driver) {
      case TokenAdapters.JWT:
        const secretKey = configuration.jwtSecretKey;

        return new JwtTokenAdapter(secretKey);
      case TokenAdapters.NONE:
      default:
        return new NoneTokenAdapter();
    }
  }
}

export { TokenAdapterFactory };
