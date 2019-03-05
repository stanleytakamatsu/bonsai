interface IGenerateCredential {
  Email: string;
  Password: string;
  Salt: string;
}

const IGenerateCredential = Symbol.for('IGenerateCredential');

export { IGenerateCredential };
