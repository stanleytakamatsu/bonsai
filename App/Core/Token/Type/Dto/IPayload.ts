interface IPayload {
  iss: string;
  jti: string;
  iat: number;
  exp: number;
  sub: string;
}

const IPayload = Symbol.for('IPayload');

export { IPayload };
