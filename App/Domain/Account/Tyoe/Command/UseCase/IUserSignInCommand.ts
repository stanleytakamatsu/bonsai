interface IUserSignInCommand {
  Email: string;
  Password: string;
}

const IUserSignInCommand = Symbol.for('IUserSignInCommand');

export { IUserSignInCommand };
