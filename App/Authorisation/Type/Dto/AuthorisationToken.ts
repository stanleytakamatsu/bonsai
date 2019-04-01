import * as moment from 'moment';

class AuthorisationToken {
  private value: string;

  private expirationDate: moment.Moment;

  public get Value(): string {
    return this.value;
  }

  public get ExpirationDate(): moment.Moment {
    return this.expirationDate;
  }

  public static create(value: string, expirationTimestamp: number): AuthorisationToken {
    const token = new AuthorisationToken();

    token.value = value;
    token.expirationDate = moment(expirationTimestamp);

    return token;
  }
}

export { AuthorisationToken };
