interface IGenerateNewCredential {
  Email: string;
  Password: string;
}

const IGenerateNewCredential = Symbol.for('IGenerateNewCredential');

export { IGenerateNewCredential };
