interface IVerifyAuthorisationTokenCommand {
  Token: string;
}

const IVerifyAuthorisationTokenCommand = Symbol.for('IVerifyAuthorisationTokenCommand');

export { IVerifyAuthorisationTokenCommand };
