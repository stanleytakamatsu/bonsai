interface IUserSignUpCommand {
  Email: string;
  Password: string;
}

const IUserSignUpCommand = Symbol.for('IUserSignUpCommand');

export { IUserSignUpCommand };
