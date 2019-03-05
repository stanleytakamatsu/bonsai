interface ITokenAdapter {
  verify(token: string): Promise<void>;
}

export { ITokenAdapter };
